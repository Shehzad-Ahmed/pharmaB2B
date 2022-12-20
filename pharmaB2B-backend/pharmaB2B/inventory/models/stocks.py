
from django.db import models

from pharmaB2B import constants
from pharmaB2B.core.models import Base


class Stocks(Base):

    product = models.ForeignKey("inventory.Products", null=False, on_delete=models.DO_NOTHING)

    supplier = models.ForeignKey("inventory.Suppliers", null=False, on_delete=models.DO_NOTHING)

    # This field is for internal purpose to keep track quantity arrived at the warehouse.
    received_quantity = models.IntegerField(default=0)

    received_on = models.DateTimeField(null=False)

    expiry_date = models.DateTimeField(null=False)

    batch_number = models.TextField(unique=True, null=False)

    purchase_unit_price = models.DecimalField(decimal_places=3, max_digits=20, null=False)

    # Available quantity is a derived field calculated from Packages in stock.
    @property
    def available_quantity(self):
        return self.productstocks_set.filter(status=constants.PACKAGE_STATUS_IN_STOCK).count()

    class Meta:

        verbose_name = "Stock"

        verbose_name_plural = "Stocks"

    def __str__(self):
        return f"{self.batch_number} - {self.product.name} - {self.supplier.name} - {self.received_on}"
