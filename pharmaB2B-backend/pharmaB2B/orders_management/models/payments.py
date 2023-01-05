from django.db import models

from pharmaB2B.core.models import Base


class Payments(Base):

    paid_by = models.ForeignKey("core.Users", on_delete=models.CASCADE)

    order = models.ForeignKey("orders_management.Orders", on_delete=models.SET_NULL, null=True)

    payment_amount = models.IntegerField()
