from django.urls import path

from .views import BlogDetailView, ContactView, AddBlog, BlogList,\
    BlogTwoList, SubscribeView,\
    GetSubscribe

urlpatterns = [
    path('add-contact/', ContactView.as_view(), name="add-contact"),
    path('add-blog/', AddBlog.as_view(), name="add-blog"),
    path('bloglist/', BlogList.as_view(), name="bloglist"),
    path('blog-two-list/', BlogTwoList.as_view(), name="blog-two-list"),
    path('subscribe/', SubscribeView.as_view(), name="subscribe"),
    path('get-subscribe/', GetSubscribe.as_view(), name="get-subscribe"),
    path('get-blog/<str:slug>', BlogDetailView.as_view(), name="get-blog")
]
