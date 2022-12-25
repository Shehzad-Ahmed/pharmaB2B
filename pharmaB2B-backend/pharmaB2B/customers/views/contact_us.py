from rest_framework import viewsets

from pharmaB2B.customers.models import ContactUs
from pharmaB2B.customers.serializers import ContactUsSerializer


class ContactUsViewSet(viewsets.GenericViewSet, viewsets.mixins.CreateModelMixin):

    serializer_class = ContactUsSerializer

    queryset = ContactUs.objects.all()
