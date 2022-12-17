from django.contrib import admin


class ProductsAdmin(admin.ModelAdmin):

    search_fields = ("name", "manufacturer")

    list_filter = (
        "type",
        "packaging_type",
        "units_per_package",
        "deleted",
    )

    list_display = (
        "name",
        "manufacturer",
        "type",
        "units_per_package",
        "deleted",
    )

    save_on_top = True

    list_editable = ("deleted",)

    readonly_fields = ("id", "created_on", "updated_on")

    ordering = ("-created_on",)
