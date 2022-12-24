"""
Serializers for registration process.
"""
from rest_framework import serializers

from pharmaB2B.core.serializers import UsersSerializer
from pharmaB2B.customers.models import Retailers
from drf_writable_nested.serializers import WritableNestedModelSerializer


class RegistrationSerializer(WritableNestedModelSerializer):

    shop_name = serializers.CharField(source="name")

    class Meta:

        model = Retailers

        exclude = ("verified", "verified_on", "name")

        read_only_fields = ("id", "created_on", "updated_on", "deleted")

    def create(self, validated_data):
        users = self.initial_data.pop("users")
        retailer = super().create(validated_data)
        ser = UsersSerializer(data=users)
        ser.is_valid(raise_exception=True)
        ser.validated_data["retailer"] = retailer
        ser.save()
        return retailer
