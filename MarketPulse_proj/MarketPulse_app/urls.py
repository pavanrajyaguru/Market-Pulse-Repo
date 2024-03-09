from django.contrib import admin
from django.urls import path, include
from . import views
urlpatterns = [
    path("",views.home),
    path("getindices",views.get_indices),
    path("get_running_status",views.get_running_status)
]
