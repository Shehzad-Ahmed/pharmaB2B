from django.db.models import Q
from rest_framework import viewsets

from pharmaB2B.customers.models import FAQs
from pharmaB2B.customers.serializers import FAQsSerializer


class FAQsViewSet(viewsets.ReadOnlyModelViewSet):

    serializer_class = FAQsSerializer

    queryset = FAQs.objects.all().order_by("order")

    def get_queryset(self):
        query = self.request.query_params.get("q")
        if query:
            return super().get_queryset().filter(
                Q(question__icontains=query)|Q(answer__icontains=query)
            )
        return super().get_queryset()

