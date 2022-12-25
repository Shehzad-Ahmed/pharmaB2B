from django.db import models
from phonenumber_field.modelfields import PhoneNumberField

from pharmaB2B.core.models import Base


class ContactUs(Base):

    name = models.TextField()

    contact_no = PhoneNumberField(null=True, region="GB", blank=True)

    question = models.TextField()

    email = models.EmailField()

    responded = models.BooleanField(default=False)

    class Meta:

        verbose_name = "Contact Us"

        verbose_name_plural = "Contacted Us"
