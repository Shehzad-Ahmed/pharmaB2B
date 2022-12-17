from django.db import models

from pharmaB2B.core.models import Base


class Products(Base):

    name = models.TextField()

    manufacturer = models.ForeignKey("inventory.Manufacturers", null=False, on_delete=models.RESTRICT)

    type = models.TextField()

    packaging_type = models.TextField()

    units_per_package = models.IntegerField(null=False)

    def get_available_packages(self):
        return sum(map(lambda stock: stock.available_quantity, self.stocks_set.all()))

    class Meta:

        verbose_name = "Product"

        verbose_name_plural = "Products"

    def __str__(self):
        return f"{self.name} - {self.id}"
