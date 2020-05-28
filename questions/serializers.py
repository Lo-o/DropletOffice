from django.contrib.auth.models import User
from rest_framework import serializers

from .models import TriviaQuestion


class TriviaQuesstionSerializer(serializers.Serializer):
    question = serializers.ChaField(max_length=500)
    options = serializers.ListField(child=serializers.CharField())

    class Meta:
        model = TriviaQuestion
        fields = ("question", "options")
