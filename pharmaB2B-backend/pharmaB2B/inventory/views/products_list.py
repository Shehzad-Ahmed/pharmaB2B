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
create dummy data in stocks and products.   -
implement add to cart API.  
implement checkout API.
implement FAQ's API.    

Create template of application with React.  
Create dashboard page.


add customers in django admin panel.
send email to user upon verification.
Create set password page.

Add details to product page.
Implement frequently asked questions page.
Implement Contact us Page.
"""
