from django.urls import path

from .views import (
    PostListView,
    PostDetailView,
    CommentListView,
    CommentCreateView,
    ImageListView,
    AboutInfoView
)

urlpatterns = [
    path('', PostListView.as_view()),
    path('about/', AboutInfoView.as_view()),
    path('<pk>/', PostDetailView.as_view()),
    path('<pk>/comments/', CommentListView.as_view()),
    path('<pk>/add_comment/', CommentCreateView.as_view()),
    path('<pk>/images/', ImageListView.as_view()),
]