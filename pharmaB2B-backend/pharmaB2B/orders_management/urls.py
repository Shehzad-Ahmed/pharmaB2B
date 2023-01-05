from django.urls import include, path
from rest_framework import routers
from pharmaB2B.orders_management import views
router = routers.DefaultRouter()

router.register("orders", viewset=views.OrdersViewSet, basename="products")

urlpatterns = (
    path("", include(router.urls)),
)
