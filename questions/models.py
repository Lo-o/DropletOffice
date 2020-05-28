from django.db import models
from django.contrib.postgres.fields import ArrayField


class TriviaQuestion(models.Model):
    created = models.DateTimeField(auto_now_add=True)
    question = models.CharField(max_length=500, blank=True)
    options = ArrayField(models.CharField(max_length=500, blank=True))
