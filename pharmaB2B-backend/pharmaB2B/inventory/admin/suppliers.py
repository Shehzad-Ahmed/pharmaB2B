from django.contrib import admin


class SuppliersAdmin(admin.ModelAdmin):

    search_fields = ("name", "contact_no")

    list_display = ("name", "contact_no", "deleted")

    list_editable = ("deleted",)

    readonly_fields = (
        "id",
        "created_on",
        "updated_on"
    )