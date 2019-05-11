from rest_framework import serializers

from blog.models import Post, Image, Comment

class PostSerializer(serializers.ModelSerializer):
    class Meta:
        model = Post
        fields = ('id', 'title', 'author', 'date', 'body')

class ImageSerializer(serializers.ModelSerializer):
    image_url = serializers.SerializerMethodField()
    post_id = serializers.RelatedField(source='post', read_only=True)

    class Meta:
        model = Image
        fields = ('id', 'image_url', 'post_id')

    def get_image_url(self, image):
        request = self.context.get('request')
        photo_url = image.image.url
        return request.build_absolute_uri(photo_url)

class CommentSerializer(serializers.ModelSerializer):
    post_id = serializers.RelatedField(source='post', read_only=True)

    class Meta:
        model = Comment
        fields = ('id', 'name', 'email', 'text', 'date', 'post_id')
