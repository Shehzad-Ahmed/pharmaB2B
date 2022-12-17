from django.db import models
from django.db.models import CheckConstraint, F, Q


class OrderStocks(models.Model):

    order = models.ForeignKey("orders_management.Orders", null=False, on_delete=models.CASCADE)

    stock = models.ForeignKey("inventory.Stocks", null=False, on_delete=models.CASCADE)

    quantity = models.IntegerField(default=0)

    class Meta:
        constraints = [
            CheckConstraint(
                check=Q(stock__quantity__gte=F('quantity')),
                name='check_ordered_quantity',
            ),
        ]
