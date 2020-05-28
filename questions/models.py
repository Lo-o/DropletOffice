from django.db import models
from django.contrib.postgres.fields import ArrayField


class TriviaQuestion(models.Model):
    # created = models.DateTimeField(auto_now_add=True)
    question = models.CharField(max_length=500, blank=True)
    options = ArrayField(models.CharField(max_length=500, blank=True))


# question = TriviaQuestion(question = 'Who started the Fire?', options = ['Ryan', 'Michael', 'Dwight', 'Angela', 'Pam', 'Creed', 'Jim', 'Kevin'])
# question = TriviaQuestion(question = 'What location Dunder Mifflin stars in The Office US?', options = ['Scranton', 'Stamford', 'Utica', 'Buffalo'])
