"""Serializers for users model.
"""
from django.contrib.auth import get_user_model
from rest_framework import serializers

Users = get_user_model()


class UsersSerializer(serializers.ModelSerializer):

    class Meta:

        model = Users

        fields = (
            "id",
            "created_on",
            "updated_on",
            "deleted",
            "first_name",
            "last_name",
            "email",
            "retailer",
        )

        read_only_fields = (
            "id",
            "created_on",
            "updated_on",
            "deleted",
            "retailer",
        )
