from rest_framework import serializers
from .models import *

class PictureSerializer(serializers.ModelSerializer):
    class Meta:
        model = Picture
        fields = ['id', 'path']


class ProductSerializer(serializers.ModelSerializer):
    pictures_product = PictureSerializer(many=True, read_only=True)
    class Meta:
        model = Product
        fields = ["id", "name", "price", "pictures_product"]


class ProductDetailsSerializer(serializers.ModelSerializer):
    pictures_product = PictureSerializer(many=True, read_only=True)
    class Meta:
        model = Product
        fields = ["id", "name", "price", "description", "pictures_product"]