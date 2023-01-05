from django.db import models

from pharmaB2B import constants
from pharmaB2B.core.models import Base


class ProductStocks(Base):

    # The purpose of product foreign key is here to quickly query the details if needed, rather
    # than querying stocks first and find out product stock details.
    # Put a check constraint that product in stock, is same as product here.
    product = models.ForeignKey("inventory.Products", null=False, on_delete=models.RESTRICT)

    stock = models.ForeignKey("inventory.Stocks", on_delete=models.CASCADE)

    barcode_number = models.TextField(null=False, unique=True)

    status = models.TextField(choices=constants.PACKAGE_STATUS, default=constants.PACKAGE_STATUS_IN_STOCK)

    class Meta:

        verbose_name = "Product Stock"

        verbose_name_plural = "Product Stocks"
