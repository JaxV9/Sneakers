from django.urls import include, path
from rest_framework import routers
from .views import *

router = routers.DefaultRouter()
router.register(r'pictures', PictureViewSet)

# Wire up our API using automatic URL routing.
# Additionally, we include login URLs for the browsable API.
urlpatterns = [
    path('', include(router.urls)),
    path('api/v1/shoes/', ProductsView.as_view(), name='products-list'),
    path('api/v1/shoes/<int:pk>', ProductsDetailsView.as_view(), name='product-details')
]


urlpatterns += router.urls