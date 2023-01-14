from django.core.exceptions import BadRequest
from rest_framework import viewsets
from rest_framework.decorators import action
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response

from pharmaB2B.orders_management.serializers import OrdersSerializer


class OrdersViewSet(viewsets.GenericViewSet):

    permission_classes = (IsAuthenticated, )

    @action(detail=False, methods=["post"], url_path="request")
    def order_request(self, request, *args, **kwargs):
        if request.user.is_staff:
            return Response(status=400, data={"message": "Staff member can not place order."})
        ser = OrdersSerializer(data=request.data, context=self.get_serializer_context())
        ser.is_valid(raise_exception=True)
        try:
            order = ser.save()
        except BadRequest as e:
            return Response(status=400, data={"message": str(e)})
        return Response(data={"id": order.id, "details": order.raw_details}, status=200)
