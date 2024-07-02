from django.shortcuts import render
from rest_framework import viewsets
from rest_framework import generics
from .serializers import *
from .models import *

# Create your views here.

class PictureViewSet(viewsets.ModelViewSet):
    queryset = Picture.objects.all()
    serializer_class = PictureSerializer

class ProductsView(generics.ListAPIView):
    """
    API endpoint allows users to list the products.
    """
    queryset = Product.objects.all()
    serializer_class = ProductSerializer


class ProductsDetailsView(generics.RetrieveAPIView):
    """
    API endpoints allows users to enter inside a product.
    """
    queryset = Product.objects.all()
    serializer_class = ProductDetailsSerializer

    def get_object(self):
        product_id = self.kwargs['pk']
        return Product.objects.get(id=product_id)
    

