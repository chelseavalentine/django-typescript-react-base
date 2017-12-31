from django.conf.urls import url, include
from django.urls import path
from rest_framework import routers
from web.api.v1.views import UserViewSet
from web import views

router = routers.DefaultRouter()
router.register(r'users', UserViewSet, base_name='users')

urlpatterns = [
    path(r'', views.index),
    path(r'login/', views.index),

    url(r'^api/v1/', include('rest_framework.urls', namespace='rest_framework')),
    url(r'^api/v1/', include(router.urls))
]
