from django.db import models
from pharmaB2B.core.models import Base


class Category(Base):

    name = models.TextField(unique=True)

    def __str__(self):
        return self.name




