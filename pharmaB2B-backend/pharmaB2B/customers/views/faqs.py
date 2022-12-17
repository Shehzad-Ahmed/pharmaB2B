from rest_framework import viewsets

from pharmaB2B.customers.models import FAQs
from pharmaB2B.customers.serializers import FAQsSerializer


class FAQsViewSet(viewsets.ReadOnlyModelViewSet):

    serializer_class = FAQsSerializer

    queryset = FAQs.objects.all().order_by("order")
