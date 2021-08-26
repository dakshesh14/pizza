from rest_framework import serializers

# importing model
from menu.models import (
    MenuItem,
)


class MenuItemSerializer(serializers.ModelSerializer):

    quantity = serializers.IntegerField(default=1)

    class Meta:
        model = MenuItem
        fields = (
            'id',
            'name',
            'price',
            'image',
            'quantity',
        )