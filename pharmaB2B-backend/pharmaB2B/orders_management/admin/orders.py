from django.contrib import admin

from pharmaB2B import constants


class OrdersAdmin(admin.ModelAdmin):

    search_fields = ("id", "placed_by__retailer__name", "placed_by__email")

    list_filter = ("status", "payment_mode")

    list_display = ("id", "retailer_name", "status", "payment_mode", "total_price", "total_gst")

    readonly_fields = ("created_on", "updated_on", "id", "total_price", "total_gst", "placed_by", "raw_details")

    list_editable = ("status", )

    def retailer_name(self, instance):
        return instance.placed_by.retailer.name

    def placed_by_email(self, instance):
        return  instance.placed_by.email

    def save_model(self, request, obj, form, change):
        if obj.status == constants.ORDER_STATUS_CANCELLED:
            obj.cancel()
        else:
            super().save_model(request, obj, form, change)

