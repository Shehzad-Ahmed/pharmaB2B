from django.db import models

from pharmaB2B.core.models import Base


class Manufacturers(Base):

    name = models.TextField()

    description = models.TextField()

    class Meta:

        verbose_name = "Manufacturer"

        verbose_name_plural = "Manufacturers"

    def __str__(self):
        return f"{self.name} - {self.id}"
