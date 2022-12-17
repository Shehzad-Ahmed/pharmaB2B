from django.urls import include, path
from rest_framework import routers
from pharmaB2B.inventory import views
router = routers.DefaultRouter()

router.register("products", viewset=views.ProductsListViewSet, basename="products")

urlpatterns = (
    path("", include(router.urls)),
)
