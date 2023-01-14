from django.contrib import admin

from pharmaB2B.inventory.admin.category import CategoryAdmin
from pharmaB2B.inventory.admin.manufacturers import ManufacturersAdmin
from pharmaB2B.inventory.admin.product_stocks import ProductStocksAdmin
from pharmaB2B.inventory.admin.products import ProductsAdmin
from pharmaB2B.inventory.admin.stocks import StocksAdmin
from pharmaB2B.inventory.admin.suppliers import SuppliersAdmin
from pharmaB2B.inventory.models import Products, Stocks, ProductStocks, Manufacturers, Suppliers, Category

admin.site.register(Products, ProductsAdmin)
admin.site.register(Stocks, StocksAdmin)
admin.site.register(ProductStocks, ProductStocksAdmin)
admin.site.register(Suppliers, SuppliersAdmin)
admin.site.register(Manufacturers, ManufacturersAdmin)
admin.site.register(Category, CategoryAdmin)
