"""
Serializers for registration process.
"""
from django.db import transaction
from rest_framework import serializers

from pharmaB2B.core.serializers import UsersSerializer
from pharmaB2B.customers.models import Retailers
from drf_writable_nested.serializers import WritableNestedModelSerializer


class RegistrationSerializer(WritableNestedModelSerializer):

    shop_name = serializers.CharField(source="name")

    class Meta:

        model = Retailers

        exclude = ("status", "verified_on", "name")

        read_only_fields = ("id", "created_on", "updated_on", "deleted", "created_by")

    def create(self, validated_data):
        users = self.initial_data.pop("users")
        # Since Retailer instance has to be created by a user
        # and user needs to be registered with a retailer
        with transaction.atomic():
            retailer = Retailers(**validated_data)
            ser = UsersSerializer(data=users)
            ser.is_valid(raise_exception=True)
            ser.validated_data["retailer"] = retailer
            user = ser.save()
            retailer.created_by = user
            retailer.save(update_fields=("created_by", ))
        return retailer
