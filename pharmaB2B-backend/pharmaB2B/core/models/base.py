from uuid import uuid4

from django.db import models


class Base(models.Model):

    id = models.UUIDField(default=uuid4, primary_key=True)

    created_on = models.DateTimeField(auto_now_add=True, null=False)

    updated_on = models.DateTimeField(auto_now=True, null=False)

    deleted = models.BooleanField(default=False)

    class Meta:

        abstract = True

    def delete(self, using=None, keep_parents=False, hard=False):
        if hard:
            return super().delete(using, keep_parents)

        self.deleted = True
        self.save(update_fields=("deleted", ))
