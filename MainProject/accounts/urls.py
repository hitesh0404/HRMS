from rest_framework.routers import DefaultRouter
from django.urls import path, include
from .views import CombinedListViewSet

router = DefaultRouter()
router.register(r'combined-data', CombinedListViewSet, basename='combined-data')

urlpatterns = [
    path('register-form-data/', include(router.urls)),
]
