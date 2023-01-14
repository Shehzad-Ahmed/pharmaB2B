from django.contrib import admin


class UsersAdmin(admin.ModelAdmin):

    search_fields = (
        "first_name",
        "last_name",
        "email",
        "retailer__name",
    )

    list_filter = ("is_active", "deleted", "is_staff")

    list_display = (
        "first_name",
        "last_name",
        "retailer",
        "email",
        "is_active",
        "is_staff",
    )

    readonly_fields = (
        "id",
        "created_on",
        "updated_on",
    )

    ordering = ("created_on", )

