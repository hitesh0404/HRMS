from rest_framework.routers import DefaultRouter
from django.urls import path, include
from .views import CombinedListViewSet,RoleViewSet

router = DefaultRouter()
router.register(r'combined-data', CombinedListViewSet, basename='combined-data')
router.register(r'role',RoleViewSet,basename='role')
router.register(r'permissions',RoleViewSet,basename='permissions')


urlpatterns = [
    path('accounts/', include(router.urls)),
    
]
