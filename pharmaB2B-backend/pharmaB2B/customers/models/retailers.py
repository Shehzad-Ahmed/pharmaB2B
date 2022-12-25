from django.db import models
from pharmaB2B.core.models import Base


class Retailers(Base):

    created_by = models.ForeignKey("core.Users", on_delete=models.CASCADE)

    name = models.TextField(null=False)

    address = models.TextField(null=False, default="")

    postal_code = models.TextField(null=False)

    city = models.TextField(null=False)

    license_number = models.TextField(null=False)

    # System field
    status = models.TextField(
        choices=(("not-decided", "not-decided"), ("verified", "verified"), ("rejected", "rejected")),
        default="not-decided"
    )

    # System field
    verified_on = models.DateTimeField(null=True)

    # System field
    rejection_reason = models.TextField(default="", blank=True)
