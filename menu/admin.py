from django.contrib import admin

# importing model
from .models import MenuItem, ItemVariant, ItemVariantOption


class ItemVariantInline(admin.TabularInline):
    model = ItemVariant


class ItemVariantOptionInline(ItemVariantInline):
    model = ItemVariantOption

@admin.register(MenuItem)
class Admin(admin.ModelAdmin):
    list_display = (
        'name',
        'price',
    )
    inlines = (
        ItemVariantInline,
        # ItemVariantOptionInline,``
    )
    list_display_links = ('name', )


@admin.register(ItemVariant)
class ItemVariantAdmin(admin.ModelAdmin):
    list_display = (
        'v_name',
        'item',
    )
    inlines = (
        ItemVariantOptionInline,
    )