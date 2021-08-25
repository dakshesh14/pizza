# django imports

# rest_framework imports
from rest_framework import generics
from rest_framework.views import APIView

from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework.status import (
    HTTP_201_CREATED,
    HTTP_404_NOT_FOUND,
    HTTP_202_ACCEPTED,
)

from rest_framework.filters import (
    SearchFilter,
    OrderingFilter,
)

# importing serializers
from .serializers import (
    ListMenuItemSerializer,
)

# importing model
from menu.models import (
    MenuItem,
)


class AllPizzaAPI(generics.ListAPIView):
    queryset = MenuItem.objects.all()
    serializer_class = ListMenuItemSerializer
    filter_backends = [SearchFilter, OrderingFilter]
    search_fields = [
        'name',
    ]
    ordering_fields = [
        'price',
    ]

    def get_queryset(self):
        q = self.request.GET.get("query")
        if q and q == 'veg':
            return MenuItem.objects.filter(pizza_type='V')
        elif q == 'non-veg':
            return MenuItem.objects.filter(pizza_type='NV')

        return MenuItem.objects.all()