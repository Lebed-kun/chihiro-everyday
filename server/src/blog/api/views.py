from rest_framework.generics import (
    ListAPIView,
    RetrieveAPIView,
    CreateAPIView
)

from blog.models import Post, Comment, Image
from .serializers import PostSerializer, CommentSerializer, ImageSerializer
from .paginators import PostPagination, CommentPagination

class PostListView(ListAPIView):
    queryset = Post.objects.all().order_by('-date')
    serializer_class = PostSerializer
    pagination_class = PostPagination

class PostDetailView(RetrieveAPIView):
    queryset = Post.objects.all()
    serializer_class = PostSerializer

class CommentListView(ListAPIView):
    serializer_class = CommentSerializer
    pagination_class = CommentPagination
    
    def get_queryset(self):
        p = self.kwargs['pk']
        return Comment.objects.filter(post=p).order_by('-date')


class CommentCreateView(CreateAPIView):
    serializer_class = CommentSerializer

    def perform_create(self, serializer):
        serializer.save(post_id=self.kwargs['pk'])

class ImageListView(ListAPIView):
    serializer_class = ImageSerializer

    def get_queryset(self):
        p = self.kwargs['pk']
        return Image.objects.filter(post=p)

