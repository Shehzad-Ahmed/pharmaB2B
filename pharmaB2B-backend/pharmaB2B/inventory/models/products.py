from django.db import models

from pharmaB2B.core.models import Base


class Products(Base):

    name = models.TextField()

    manufacturer = models.ForeignKey("inventory.Manufacturers", null=False, on_delete=models.RESTRICT)

    type = models.TextField()

    generic = models.TextField(null=False, blank=True, default="")

    packaging_type = models.TextField()

    units_per_package = models.IntegerField(null=False)

    profit_margin = models.FloatField()

    gst_applicable = models.BooleanField(default=True)

    gst = models.FloatField(default=20)

    primary_image = models.ImageField()

    category = models.ForeignKey("inventory.Category", on_delete=models.DO_NOTHING, null=False, default=None)

    class Meta:

        verbose_name = "Product"

        verbose_name_plural = "Products"

    def __str__(self):
        return f"{self.name} - {self.id}"

    def get_available_packages(self):
        return sum(map(lambda stock: stock.available_quantity, self.stocks_set.all()))

    def calculate_price(self):
        latest_stock_price = self.stocks_set.order_by("-received_on").values_list(
            "purchase_unit_price", flat=True
        ).first()
        return float(latest_stock_price) + (float(latest_stock_price) * self.profit_margin/100) if latest_stock_price else 0
