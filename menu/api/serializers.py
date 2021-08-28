from rest_framework import serializers

# importing model
from menu.models import (
    MenuItem,
    ItemVariant,
    ItemVariantOption,
)


class ItemOptionsSerializer(serializers.ModelSerializer):
    class Meta:
        model = ItemVariantOption
        fields = (
            'id',
            'value',
            'price',
        )

class ItemVariantSerializer(serializers.ModelSerializer):
    
    options = serializers.SerializerMethodField()

    class Meta:
        model = ItemVariant
        fields = (
            'id',
            'v_name',
            'options',
        )

    def get_options(self, obj):
        qs = obj._options
        serializered_children = ItemOptionsSerializer(qs, many=True)
        return serializered_children.data

class MenuItemSerializer(serializers.ModelSerializer):

    addons = serializers.SerializerMethodField()

    class Meta:
        model = MenuItem
        fields = (
            'id',
            'name',
            'price',
            'image',
            'addons',
        )

    def get_addons(self, obj):
        print(obj._v)
        qs = obj._v
        serializered_children = ItemVariantSerializer(qs, many=True)
        return serializered_children.data