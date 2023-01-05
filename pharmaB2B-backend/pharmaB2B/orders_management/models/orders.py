from django.db import models, transaction

from pharmaB2B import constants
from pharmaB2B.constants import ORDER_STATUS_PENDING
from pharmaB2B.core.models import Base


class Orders(Base):

    # auto increment id field, so it can be communicated easily by customers in case.
    id = models.AutoField(primary_key=True)

    placed_by = models.ForeignKey("core.Users", on_delete=models.RESTRICT)

    status = models.TextField(choices=constants.ORDER_STATUSES, default=ORDER_STATUS_PENDING)

    # Installment options can be added later down the road.
    payment_mode = models.TextField(choices=(
        ("full", "full"),),
        default="full"
    )

    # Price and gst can be derived, since these will be fixed therefore it is
    # redundant to calculate everytime.
    total_price = models.IntegerField()

    total_gst = models.IntegerField()

    # Adding the raw details here, in case the order gets cancelled,
    # then customer can see it order history.
    raw_details = models.JSONField(default=dict)

    class Meta:

        verbose_name = "Order"

        verbose_name_plural = "Orders"

    def cancel(self):
        with transaction.atomic():
            for order_stock in self.orderstocks_set.all():
                order_stock.product_stock.status = constants.PACKAGE_STATUS_IN_STOCK
                order_stock.product_stock.save()
                order_stock.delete()
            self.status = constants.ORDER_STATUS_CANCELLED
            self.save(update_fields=("status", ))
