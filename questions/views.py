from django.shortcuts import render

from rest_framework import viewsets
from rest_framework import permissions

from django.http import HttpResponse, JsonResponse
from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser

from .models import TriviaQuestion
from .serializers import TriviaQuestionSerializer


class TriviaQuestionViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows trivia questions to be viewed or edited.
    """

    queryset = TriviaQuestion.objects.all()
    serializer_class = TriviaQuestionSerializer
    permission_classes = [permissions.IsAuthenticated]
