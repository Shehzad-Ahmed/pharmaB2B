

from django.db import models


class Base(models.Model):

    created_on = models.DateTimeField(auto_now_add=True, null=False)

    updated_on = models.DateTimeField(auto_now=True, null=False)

    deleted = models.BooleanField(default=False)

    def delete(self, using=None, keep_parents=False, hard=False):
        if hard:
            return super().delete(using, keep_parents)

        self.deleted = True
        self.save(update_fields=("deleted", ))
