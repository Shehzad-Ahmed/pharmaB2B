from django.contrib import admin

from pharmaB2B.inventory.admin.manufacturers import ManufacturersAdmin
from pharmaB2B.inventory.admin.package_details import PackageDetailsAdmin
from pharmaB2B.inventory.admin.products import ProductsAdmin
from pharmaB2B.inventory.admin.stocks import StocksAdmin
from pharmaB2B.inventory.admin.suppliers import SuppliersAdmin
from pharmaB2B.inventory.models import Products, Stocks, PackageDetails, Manufacturers, Suppliers

admin.site.register(Products, ProductsAdmin)
admin.site.register(Stocks, StocksAdmin)
admin.site.register(PackageDetails, PackageDetailsAdmin)
admin.site.register(Suppliers, SuppliersAdmin)
admin.site.register(Manufacturers, ManufacturersAdmin)
