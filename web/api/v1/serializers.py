from django.contrib.auth.models import User
from rest_framework import serializers
from web.models import *

class UserSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = User
        fields = ('username', 'email',)
