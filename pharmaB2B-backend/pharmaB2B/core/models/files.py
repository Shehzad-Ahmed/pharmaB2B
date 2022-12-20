from django.db import models

from pharmaB2B.core.models import Base


class Files(Base):

    name = models.TextField()

    extension = models.TextField(choices=(("jpg", "jpg"), ("png", "png")))

    file = models.FileField()
