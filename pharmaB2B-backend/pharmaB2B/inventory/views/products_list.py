from django.db.models import Count
from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticated

from pharmaB2B.inventory.models import Products
from pharmaB2B.inventory.serializers import ProductsListSerializer


class ProductsListViewSet(viewsets.ReadOnlyModelViewSet):

    serializer_class = ProductsListSerializer

    queryset = Products.objects.all()

    permission_classes = (IsAuthenticated,)

    def get_queryset(self):
        return super().get_queryset().filter(deleted=False).annotate(
            count=Count("productstocks")
        ).order_by("-count")
