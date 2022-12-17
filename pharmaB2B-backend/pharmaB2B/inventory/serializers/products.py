"""

"""
from rest_framework import serializers

from pharmaB2B.inventory.serializers import ManufacturersSerializer


class ProductsListSerializer(serializers.Serializer):

    name = serializers.CharField()

    manufacturer = ManufacturersSerializer(read_only=True)

    type = serializers.CharField()

    packaging_type = serializers.CharField()

    units_per_package = serializers.IntegerField()

    available_packages = serializers.ReadOnlyField(source="get_available_packages")

    def update(self, instance, validated_data):
        pass

    def create(self, validated_data):
        pass
