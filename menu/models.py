from django.db import models

# django imagekit imports
# https://pypi.org/project/django-imagekit/2.0.4/

from imagekit.models import ProcessedImageField
from imagekit.processors import ResizeToFill


class MenuItem(models.Model):

    pizza_type = (
        ('V', 'Veg'),
        ('NV', 'Non-Veg'),
    )

    name = models.CharField(max_length=255)
    image = ProcessedImageField(upload_to="pizza", format="JPEG", options={'quality': 80}, processors=[ResizeToFill(640,360)])
    pizza_type = models.CharField(max_length=2, choices=pizza_type)
    price = models.IntegerField()

    def __str__(self):
        return self.name
