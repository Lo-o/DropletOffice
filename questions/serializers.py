from django.contrib.auth.models import User
from rest_framework import serializers

from .models import TriviaQuestion


class TriviaQuestionSerializer(serializers.Serializer):
    question = serializers.CharField(max_length=500)
    options = serializers.ListField(child=serializers.CharField())

    class Meta:
        model = TriviaQuestion
        fields = ("question", "options")
