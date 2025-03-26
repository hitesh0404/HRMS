from django.shortcuts import render
from django.views import View
# Create your views here.
from rest_framework import viewsets
from  .models import User
from .serializers import UserSerializer
from rest_framework.mixins import ListModelMixin
class  UserView(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    
# class UserRegisterView(ListModelMixin):
#     queryset = User.objects.all()
#     serializer_class = UserRegisterSerializer
from rest_framework import viewsets, mixins
from rest_framework.response import Response
from .models import User, Role, Department
from .serializers import RoleSerializer, DepartmentSerializer, ManagerSerializer

class CombinedListViewSet(mixins.ListModelMixin, viewsets.GenericViewSet):
    """
    A custom viewset that combines roles, departments, and managers into a single list view.
    """

    def list(self, request, *args, **kwargs):
        # Fetch data for roles, departments, and managers
        roles = Role.objects.all()
        departments = Department.objects.all()
        managers = User.objects.filter(manager__isnull=False)  # Get users who have a manager

        # Serialize each of the data sets
        roles_serializer = RoleSerializer(roles, many=True)
        departments_serializer = DepartmentSerializer(departments, many=True)
        managers_serializer = ManagerSerializer(managers, many=True)

        # Return all data in a single response
        return Response({
            "roles": roles_serializer.data,
            "departments": departments_serializer.data,
            "managers": managers_serializer.data
        })

class Login(View):
    pass

class Register(View):
    pass