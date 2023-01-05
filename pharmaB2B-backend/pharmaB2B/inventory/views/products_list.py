from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticated

from pharmaB2B.inventory.models import Products
from pharmaB2B.inventory.serializers import ProductsListSerializer


class ProductsListViewSet(viewsets.ReadOnlyModelViewSet):

    serializer_class = ProductsListSerializer

    queryset = Products.objects.all()

    permission_classes = (IsAuthenticated,)

    def get_queryset(self):
        return super().get_queryset().filter(deleted=False)

"""
Goal: 
1st Achieve the overall required features.
Go through the Course again.
Match studied concepts and map in the solution.
prepare the report.
Improve the application if time allows.

Steps:
implement add to cart API.  
implement checkout API.

Create template of application with React.  
Create dashboard page.

Create set password page.
"""
