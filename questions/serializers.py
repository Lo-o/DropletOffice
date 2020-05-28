from django.contrib.auth.models import User
from rest_framework import serializers

from .models import TriviaQuestion


class TriviaQuesstionSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = TriviaQuestionSerializer
        fields = ('created', 'question', 'options')


