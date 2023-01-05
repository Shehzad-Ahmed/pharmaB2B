from rest_framework import viewsets
from rest_framework.decorators import action
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response

from pharmaB2B.orders_management.serializers import OrdersSerializer


class OrdersViewSet(viewsets.GenericViewSet):

    permission_classes = (IsAuthenticated, )

    @action(detail=False, methods=["post"], url_path="request")
    def order_request(self, request, *args, **kwargs):
        ser = OrdersSerializer(data=request.data, context=self.get_serializer_context())
        ser.is_valid(raise_exception=True)
        order = ser.save()
        return Response(data={"id": order.id, "details": order.raw_details}, status=200)
