"""pharmaB2B URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.conf.urls.static import static
from django.contrib import admin
from django.urls import path, include
from rest_framework_simplejwt import views

from pharmaB2B import settings

urlpatterns = [
    path("api/customers/", include("pharmaB2B.customers.urls")),
    path("api/inventory/", include("pharmaB2B.inventory.urls")),
    path("api/orders-management/", include("pharmaB2B.orders_management.urls")),
    path('api/token/', views.TokenObtainPairView.as_view(), name='token-obtain-pair'),
    path('api/token/refresh/', views.TokenRefreshView.as_view(), name='token-refresh'),
    path('admin/', admin.site.urls),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)