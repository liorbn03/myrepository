from django.urls import path
from . import views


urlpatterns = [

    path('', views.homepage, name='homepage'),
    path('create/', views.create_trip, name='create_trip'),
    path('<int:trip_id>/delete/', views.delete_trip, name='delete_trip'),
]
