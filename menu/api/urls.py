from django.urls import path


# importing views
from .views import (
    AllPizzaAPI,
    PizzaDetailAPI,
)

urlpatterns = [
    path('pizza', AllPizzaAPI.as_view(), name='list-pizza'),
    path('pizza/<pk>', PizzaDetailAPI.as_view(), name='pizza-detail'),
]