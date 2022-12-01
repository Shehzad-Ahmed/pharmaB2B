
from django.db import models

from pharmaB2B.core.models import Base


class Stocks(Base):

    product = models.ForeignKey("store.Products", null=False, on_delete=models.RESTRICT)

    supplier = models.ForeignKey("store.Supplier", null=False, on_delete=models.RESTRICT)

    quantity = models.IntegerField(null=False)
