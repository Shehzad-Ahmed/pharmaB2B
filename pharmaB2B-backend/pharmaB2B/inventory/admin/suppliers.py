from django.contrib import admin


class SuppliersAdmin(admin.ModelAdmin):

    search_fields = ("name", "contact_no", "email")

    list_display = ("name", "contact_no", "email", "deleted")

    list_editable = ("deleted",)

    readonly_fields = (
        "id",
        "created_on",
        "updated_on"
    )