from django.contrib import admin


class ManufacturersAdmin(admin.ModelAdmin):

    search_fields = ("name", "description")

    list_display = ("name", "description", "deleted")

    list_editable = ("deleted",)

    readonly_fields = (
        "id",
        "created_on",
        "updated_on"
    )
