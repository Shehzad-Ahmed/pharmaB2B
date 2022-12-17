from django.db import models

from pharmaB2B import constants
from pharmaB2B.core.models import Base


class Orders(Base):

    placed_by = models.ForeignKey("auth.User", on_delete=models.RESTRICT)

    status = models.TextField(choices=constants.ORDER_STATUSES)
