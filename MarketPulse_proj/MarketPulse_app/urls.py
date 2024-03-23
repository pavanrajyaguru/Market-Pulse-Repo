from django.contrib import admin
from django.urls import path, include
from . import views
urlpatterns = [
    path("dashboard",views.home),
    
    path("login",views.login),
    path("register",views.register),
    path("auth_user",views.auth_user),
    path("register_action",views.register_action),
    path("is_login",views.is_login),
    path("logout",views.logout),
    
    path("getindices",views.get_indices),
    path("get_running_status",views.get_running_status),
    path("overview",views.overview),
    path("get_overview/<index>/",views.get_overview),
    path("get_daily_bhav_copy",views.get_daily_bhav_copy),
    path("get_chart_data",views.get_chart_data),
    
]
