from rest_framework.generics import (
    ListAPIView,
    RetrieveAPIView,
    CreateAPIView
)

from blog.models import Post, Comment, Image
from .serializers import PostSerializer, CommentSerializer, ImageSerializer

class PostListView(ListAPIView):
    queryset = Post.objects.all()
    serializer_class = PostSerializer

class PostDetailView(RetrieveAPIView):
    queryset = Post.objects.all()
    serializer_class = PostSerializer

class CommentListView(ListAPIView):
    serializer_class = CommentSerializer
    
    def get_queryset(self):
        p = self.kwargs['pk']
        return Comment.objects.filter(post=p)


class CommentCreateView(CreateAPIView):
    serializer_class = CommentSerializer

    def perform_create(self, serializer):
        serializer.save(post_id=self.kwargs['pk'])

class ImageListView(ListAPIView):
    serializer_class = ImageSerializer

    def get_queryset(self):
        p = self.kwargs['pk']
        return Image.objects.filter(post=p)

