from rest_framework import serializers


class FAQsSerializer(serializers.ModelSerializer):

    class Meta:

        fields = "__all__"

        read_only_fields = (
            "created_on",
            "updated_on"
        )
