"""
Viewset for registration serializer.
"""
from rest_framework import viewsets

from pharmaB2B.customers.models import Retailers
from pharmaB2B.customers.serializers import RegistrationSerializer


class RegistrationViewSet(
    viewsets.mixins.CreateModelMixin,
    viewsets.GenericViewSet
):

    serializer_class = RegistrationSerializer

    queryset = Retailers.objects.all()

