from django.contrib import admin

from pharmaB2B.orders_management.admin.orders import OrdersAdmin
from pharmaB2B.orders_management.models import Orders

admin.site.register(Orders, OrdersAdmin)
