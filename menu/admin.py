from django.contrib import admin

# importing model
from .models import MenuItem


@admin.register(MenuItem)
class Admin(admin.ModelAdmin):
    list_display = (
        'name',
        'price',
    )
    list_display_links = ('name', )
