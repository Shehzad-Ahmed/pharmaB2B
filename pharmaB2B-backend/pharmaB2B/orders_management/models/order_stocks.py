from django.db import models


class OrderStocks(models.Model):

    order = models.ForeignKey("orders_management.Orders", null=False, on_delete=models.CASCADE)

    product_stock = models.ForeignKey("inventory.ProductStocks", null=False, on_delete=models.CASCADE)

    class Meta:

        unique_together = ("order", "product_stock")
        # constraints = [
        #     CheckConstraint(
        #         check=Q(stock__quantity__gte=F('quantity')),
        #         name='check_ordered_quantity',
        #     ),
        # ]

    # Create a trigger to update the status of product stock.
    