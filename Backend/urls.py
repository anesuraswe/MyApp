"""MyApp URL Configuration

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
from django.contrib import admin
from django.urls import path, include
from . import views
from .views import get_users, get_laptops

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/signup/', views.signup_view, name='signup'),
    path('api/adduser/', views.add_user, name='adduser'),
    path('api/addlaptop/', views.add_laptop, name='addlaptop'),
    path('api/users/', views.get_users, name='getusers'), 
    path('api/laptops/', views.get_laptops, name='getlaptops'),
]