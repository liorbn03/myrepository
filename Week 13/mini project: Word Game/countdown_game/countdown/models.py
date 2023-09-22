from django.db import models
from django.contrib.auth.models import User


class HighScore(models.Model):
    player = models.ForeignKey(User, on_delete=models.CASCADE)
    score = models.IntegerField()


class Word(models.Model):
    word_text = models.CharField(max_length=100)
    word_length = models.IntegerField()
    category = models.CharField(max_length=50, null=True)
