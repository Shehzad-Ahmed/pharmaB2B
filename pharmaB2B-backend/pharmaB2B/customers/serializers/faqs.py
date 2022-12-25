from rest_framework import serializers

from pharmaB2B.customers.models import FAQs


class FAQsSerializer(serializers.ModelSerializer):

    class Meta:
        model = FAQs

        fields = "__all__"

        read_only_fields = (
            "created_on",
            "updated_on"
        )
