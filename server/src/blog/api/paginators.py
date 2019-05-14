from rest_framework.pagination import (
    LimitOffsetPagination
)

class PostPagination(LimitOffsetPagination):
    max_limit = 10
    default_limit = 5

class CommentPagination(LimitOffsetPagination):
    max_limit = 10
    default_limit = 2