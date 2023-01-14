from uuid import uuid4

from django.core.exceptions import BadRequest
from django.db import transaction
from rest_framework import serializers

from pharmaB2B import constants
from pharmaB2B.inventory.models import Products
from pharmaB2B.orders_management.models.order_stocks import OrderStocks
from pharmaB2B.orders_management.models.orders import Orders


class OrdersSerializer(serializers.Serializer):

    payment_mode = serializers.ChoiceField(("full", "full"))

    def create(self, validated_data):
        details = self.initial_data["details"]
        with transaction.atomic():
            total_price = 0
            total_gst = 0
            order = Orders.objects.create(
                placed_by=self.context["request"].user,
                payment_mode=validated_data["payment_mode"],
                total_price=total_price,
                total_gst=total_gst,
                raw_details=details
            )
            for detail in details:
                product = detail["product"]
                quantity = detail["quantity"]
                product = Products.objects.get(id=product["id"], deleted=False)
                product_price = product.calculate_price()
                if product.gst_applicable:
                    total_gst += product_price * (product.gst/100)
                total_price += product_price
                product_stocks = product.productstocks_set.filter(status=constants.PACKAGE_STATUS_IN_STOCK)
                if product_stocks.count() < quantity:
                    raise BadRequest(f"Please revise quantity for product: {product.name} {product.type}")
                product_stocks = product_stocks[:quantity]
                for product_stock in product_stocks:
                    OrderStocks.objects.create(
                        order_id=order.id,
                        product_stock=product_stock
                    )
                    product_stock.status = constants.PACKAGE_STATUS_BOOKED
                    product_stock.save()
            order.total_price = total_price
            order.total_gst = total_gst
            order.save()
            return order

    def update(self, instance, validated_data):
        pass
