from rest_framework.generics import (
    ListAPIView,
    RetrieveAPIView,
    CreateAPIView
)

from django.db.models import Q
from django.db.models.functions import Substr

from blog.models import Post, Comment, Image
from .serializers import PostSerializer, CommentSerializer, ImageSerializer
from .paginators import PostPagination, CommentPagination

class PostListView(ListAPIView):
    serializer_class = PostSerializer
    pagination_class = PostPagination

    def get_queryset(self):
        queryset = Post.objects.all().order_by('-date')

        # Search for words in title and body
        query = self.request.query_params.get('q', None)
        if query is not None:
            query = query.split()
            word = query[0].lower()
            condition = (Q(title__icontains=word) | Q(body__icontains=word))
            for keyword in query[1:]:
                word = keyword.lower()
                condition |= Q(title__icontains=word) | Q(body__icontains=word)
            queryset = queryset.filter(condition)
        
        return queryset

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

