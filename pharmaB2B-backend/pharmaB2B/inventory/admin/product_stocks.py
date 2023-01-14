from django.contrib import admin


class ProductStocksAdmin(admin.ModelAdmin):

    search_fields = (
        "barcode_number",
        "stock__product__name",
        "stock__batch_number",
        "product__manufacturer__name",
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

    def expiry_date(self, instance):
        return instance.stock.expiry_date

    def batch_number(self, instance):
        return instance.stock.batch_number
