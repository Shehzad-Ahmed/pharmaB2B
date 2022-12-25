"""Serializers for users model.
"""
from django.contrib.auth import get_user_model
from rest_framework import serializers

from rest_framework_simplejwt.serializers import TokenObtainPairSerializer

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


class UserTokenObtainPairSerializer(TokenObtainPairSerializer):

    @classmethod
    def get_token(cls, user):
        token = super().get_token(user)
        token['first_name'] = user.first_name
        token['last_name'] = user.last_name
        token['email'] = user.email
        token['trader_name'] = user.retailer.name
        return token
