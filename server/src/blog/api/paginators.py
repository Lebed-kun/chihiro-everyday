from rest_framework.pagination import (
    LimitOffsetPagination,
    PageNumberPagination
)

class PostPagination(PageNumberPagination):
    page_size = 5

class CommentPagination(LimitOffsetPagination):
    max_limit = 10
    default_limit = 4