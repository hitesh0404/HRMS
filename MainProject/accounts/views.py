from django.shortcuts import render
from django.views import View
# Create your views here.
from rest_framework import viewsets
from  .models import User
from .serializers import UserSerializer
class  UserView(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    

class Login(View):
    pass

class Register(View):
    pass