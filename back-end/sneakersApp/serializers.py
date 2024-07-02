from rest_framework import serializers
from .models import *

class PictureSerializer(serializers.ModelSerializer):
    class Meta:
        model = Picture
        fields = ['id', 'path']