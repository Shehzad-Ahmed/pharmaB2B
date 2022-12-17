from django.db import models
from phonenumber_field.modelfields import PhoneNumberField

from pharmaB2B.core.models import Base


class Suppliers(Base):

    name = models.TextField()

    contact_no = PhoneNumberField(null=False, region="GB")

    class Meta:

        verbose_name = "Supplier"

        verbose_name_plural = "Suppliers"

    def __str__(self):
        return f"{self.name} - {self.id}"