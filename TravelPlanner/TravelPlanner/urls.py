from trip_management.views import homepage
from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('', homepage, name='homepage'),
    path('admin/', admin.site.urls),
    path('trip/', include('trip_management.urls')),
]
