from rest_framework import serializers

# importing model
from menu.models import (
    MenuItem,
)


class ListMenuItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = MenuItem
        fields = '__all__'
