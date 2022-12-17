from django.db import models
from pharmaB2B.core.models import Base


class FAQs(Base):

    deleted = None

    id = None

    order = models.AutoField(primary_key=True)

    question = models.TextField()

    answer = models.TextField()
