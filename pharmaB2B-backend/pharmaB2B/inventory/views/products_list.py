from rest_framework import viewsets

from pharmaB2B.inventory.models import Products
from pharmaB2B.inventory.serializers import ProductsListSerializer


class ProductsListViewSet(viewsets.ReadOnlyModelViewSet):

    serializer_class = ProductsListSerializer

    queryset = Products.objects.all()

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
test products list API. -
implement add to cart API.  
implement checkout API.
implement login API. -
implement FAQ's API.    

Create template of application with React.  
Create register page.   
Create login page.  
Create dashboard page.  
create list products page.  
"""
