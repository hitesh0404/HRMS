# from rest_framework import serializers
from django.contrib.auth.models import Permission, Group
from rest_framework.serializers import HyperlinkedModelSerializer
from rest_framework import serializers
from .models import User
class UserSerializer(HyperlinkedModelSerializer):
    user_permissions = serializers.PrimaryKeyRelatedField(many=True, queryset=Permission.objects.all())
    groups = serializers.PrimaryKeyRelatedField(many=True, queryset=Group.objects.all())
    class Meta:
        model = User
        fields = "__all__"