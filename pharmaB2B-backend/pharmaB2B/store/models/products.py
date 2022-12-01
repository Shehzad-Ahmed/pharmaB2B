from django.db import models

from pharmaB2B.core.models import Base


class Products(Base):

    name = models.TextField()

    manufacturer = models.ForeignKey("store.Manufacturers", null=False, on_delete=models.RESTRICT)

    type = models.TextField()

    packaging_type = models.TextField()

    units_per_package = models.IntegerField(null=False)
