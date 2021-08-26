from rest_framework import serializers

# importing model
from menu.models import (
    MenuItem,
)


class MenuItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = MenuItem
        fields = '__all__'

# class MenuItemDetail(serializers.ModelSerializer):
#     class Meta:
#         model = MenuItem
#         fields = '__all__'
