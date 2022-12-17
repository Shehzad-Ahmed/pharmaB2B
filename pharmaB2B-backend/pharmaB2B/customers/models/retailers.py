from django.db import models
from pharmaB2B.core.models import Base


class Retailers(Base):

    name = models.TextField(null=False)

    address = models.TextField(null=False, default="")

    postal_code = models.TextField(null=False)

    city = models.TextField(null=False)

    license_number = models.TextField(null=False)

    # System field
    verified = models.BooleanField(default=False)

    # System field
    verified_on = models.DateTimeField(null=False)
