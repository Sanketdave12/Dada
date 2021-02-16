from django.urls import path

from .views import index

urlpatterns = [
    path('', index, name='home'),
    path('contact/', index, name='contact'),
    path('about/', index, name='about'),
    path('services/', index, name='services'),
    path('portfolio/', index, name='portfolio'),
    # path('portfoliodetail/', index, name='portfoliodetail'),
    path('blog/', index, name='blog'),

]
