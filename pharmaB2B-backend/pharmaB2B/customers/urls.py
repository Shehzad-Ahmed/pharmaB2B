from django.urls import path, include
from rest_framework import routers
from pharmaB2B.customers import views

router = routers.DefaultRouter()

router.register("register", viewset=views.RegistrationViewSet)

urlpatterns = [
    path("", include(router.urls))
]
