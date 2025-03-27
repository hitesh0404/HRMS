# from rest_framework import serializers
from django.contrib.auth.models import Permission, Group
from rest_framework.serializers import HyperlinkedModelSerializer,ModelSerializer
from rest_framework import serializers
from .models import User,Role,Department
class UserSerializer(HyperlinkedModelSerializer):
    user_permissions = serializers.PrimaryKeyRelatedField(many=True, queryset=Permission.objects.all())
    groups = serializers.PrimaryKeyRelatedField(many=True, queryset=Group.objects.all())
    role = serializers.PrimaryKeyRelatedField(queryset=Role.objects.all())
    department = serializers.PrimaryKeyRelatedField(queryset=Department.objects.all())
    manager = serializers.PrimaryKeyRelatedField(queryset=User.objects.all(), required=False)
    class Meta:
        model = User
        fields = "__all__"

# class UserRegisterSerializer(ModelSerializer):
#     class Meta:
#         model = User
#         fields = ['role','department','manager']


class RoleSerializer(ModelSerializer):
    class Meta:
        model = Role
        fields = "__all__"

class DepartmentSerializer(ModelSerializer):
    class Meta:
        model = Department
        fields = "__all__"
        
class ManagerSerializer(ModelSerializer):
    class Meta:
        model = User
        fields = ['username','email','role','department','manager']