from django.db import models

from pharmaB2B import constants
from pharmaB2B.core.models import Base


class PackageDetails(Base):

    stock = models.ForeignKey("inventory.Stocks", on_delete=models.CASCADE)

    barcode_number = models.TextField(null=False, unique=True)

    expiry_date = models.DateTimeField(null=False)

    batch_number = models.TextField(null=False)

    status = models.TextField(choices=constants.PACKAGE_STATUS, default=constants.PACKAGE_STATUS_IN_STOCK)

    class Meta:

        verbose_name = "Package Detail"

        verbose_name_plural = "Packages Detail"
