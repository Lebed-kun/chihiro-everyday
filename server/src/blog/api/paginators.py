from rest_framework.pagination import (
    LimitOffsetPagination,
    PageNumberPagination
)

class PostPagination(PageNumberPagination):
    page_size = 1

class CommentPagination(LimitOffsetPagination):
    max_limit = 10
    default_limit = 3