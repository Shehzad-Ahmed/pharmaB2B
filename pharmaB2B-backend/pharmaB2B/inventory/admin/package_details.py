from django.contrib import admin


class PackageDetailsAdmin(admin.ModelAdmin):

    search_fields = (
        "barcode_number",
        "stock__product__name",
        "batch_number",
        "manufacturer__name",
    )

    list_filter = ("status", )

    list_display = (
        "product_name",
        "expiry_date",
        "status",
        "batch_number",
        "barcode_number",
    )

    readonly_fields = (
        "id",
        "created_on",
        "updated_on",
    )

    ordering = ("status", )

    def product_name(self, instance):
        return instance.stock.product.name
