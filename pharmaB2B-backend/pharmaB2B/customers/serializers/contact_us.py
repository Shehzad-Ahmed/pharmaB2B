from rest_framework import serializers

from pharmaB2B.customers.models import ContactUs


class ContactUsSerializer(serializers.ModelSerializer):

    class Meta:

        model = ContactUs

        fields = "__all__"

        read_only_fields = (
            "id",
            "created_on",
            "updated_on",
            "responded"
        )
