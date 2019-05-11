from django.db import models

# Create your models here.

class Post(models.Model):
    title = models.CharField(max_length=100)
    author = models.CharField(max_length=100)
    date = models.DateTimeField(auto_now_add=True)
    body = models.TextField(max_length=20000)

    def __str__(self):
        return "%s %s" % (self.title, self.author)

class Image(models.Model):
    image = models.ImageField(upload_to="images/")
    post = models.ForeignKey(Post, on_delete=models.CASCADE)

class Comment(models.Model):
    name = models.CharField(max_length=100, blank=True)
    email = models.CharField(max_length=100, blank=True)
    text = models.TextField(max_length=2000)
    date = models.DateTimeField(auto_now_add=True)
    post = models.ForeignKey(Post, on_delete=models.CASCADE)

    def __str__(self):
        return ("%s" % (self.text))[:20]


