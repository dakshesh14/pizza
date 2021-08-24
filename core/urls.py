from django.contrib import admin
from django.urls import path, include

from django.views.generic import TemplateView

from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('admin/', admin.site.urls),

    # for user authentication
    path('accounts/', include("accounts.urls"), name='accounts'),

    # for pizza api
    path('', include("menu.urls"), name='menu'),

    path('', TemplateView.as_view(template_name="pages/index.html"), name='index'),

] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)