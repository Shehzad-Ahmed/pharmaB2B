
from django.db import models

from pharmaB2B import constants
from pharmaB2B.core.models import Base


class Stocks(Base):

    product = models.ForeignKey("inventory.Products", null=False, on_delete=models.RESTRICT)

    supplier = models.ForeignKey("inventory.Suppliers", null=False, on_delete=models.RESTRICT)

    # This field is for internal purpose to keep track quantity arrived at the warehouse.
    received_quantity = models.IntegerField(default=0)

    received_on = models.DateTimeField()

    expiry_date = models.DateTimeField()

    batch_number = models.TextField(unique=True)

    purchase_unit_price = models.FloatField()

    # Available quantity is a derived field calculated from Packages in stock.
    @property
    def available_quantity(self):
        return self.packagedetails_set.filter(status=constants.PACKAGE_STATUS_IN_STOCK).count()

    class Meta:

        verbose_name = "Stock"

        verbose_name_plural = "Stocks"

    def __str__(self):
        return f"{self.batch_number} - {self.product.name} - {self.supplier.name} - {self.received_on}"
