from django.db import models

from pharmaB2B.core.models import Base


class Manufacturers(Base):

    name = models.TextField()

    description = models.TextField()
