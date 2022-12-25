from django.urls import path, include
from rest_framework import routers
from pharmaB2B.customers import views

router = routers.DefaultRouter()

router.register("register", viewset=views.RegistrationViewSet)
router.register("faqs", viewset=views.FAQsViewSet)
router.register("contact_us", viewset=views.ContactUsViewSet)

urlpatterns = [
    path("", include(router.urls))
]
