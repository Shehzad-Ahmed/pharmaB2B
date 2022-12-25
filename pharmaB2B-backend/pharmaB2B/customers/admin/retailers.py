
from django.contrib import admin
from django.core.mail import send_mail
from django.conf import settings

from pharmaB2B.utils import generate_random_password


class RetailersAdmin(admin.ModelAdmin):
    search_fields = (
        "name",
        "address",
        "postal_code",
        "city",
        "license_number"
    )

    list_filter = ("status", )

    list_display = (
        "name",
        "status",
        "license_number",
        "postal_code",
        "city",
    )

    readonly_fields = (
        "id",
        "created_on",
        "updated_on",
    )

    ordering = ("status", )

    def save_model(self, request, obj, form, change):
        super().save_model(request, obj, form, change)
        if obj.status == "verified":
            password = generate_random_password()
            obj.created_by.set_password(password)
            obj.created_by.save(update_fields=('password',))
            send_mail(
                subject='Pharma B2B account verification.',
                message=f'Your account has been verified you can use this password to log in.\nPassword: {password}',
                from_email=settings.EMAIL_HOST_USER,
                recipient_list=[obj.created_by.email])

