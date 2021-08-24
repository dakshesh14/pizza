from django.urls import path


# importing views
from .views import (
    AllPizzaAPI,
)

urlpatterns = [
    path('pizza', AllPizzaAPI.as_view(), name='list-pizza'),
]