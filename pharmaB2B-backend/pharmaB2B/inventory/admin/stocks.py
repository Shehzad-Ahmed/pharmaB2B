from django.contrib import admin


class StocksAdmin(admin.ModelAdmin):

    search_fields = ("product", "supplier")

    list_filter = ("received_quantity",)

    list_display = (
        "product",
        "supplier",
        "received_quantity",
        "received_on",
        "expiry_date",
        "batch_number",
        "purchase_unit_price",
        "deleted"
    )

    list_editable = ("deleted", )

    readonly_fields = ("id", "created_on", "updated_on")

    ordering = ("-received_on", )
