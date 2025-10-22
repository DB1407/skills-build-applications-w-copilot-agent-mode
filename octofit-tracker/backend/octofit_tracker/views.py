

from rest_framework import viewsets
from rest_framework.response import Response
from .models import User, Team, Activity, Workout, Leaderboard
from .serializers import UserSerializer, TeamSerializer, ActivitySerializer, WorkoutSerializer, LeaderboardSerializer
import logging

class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer

    def list(self, request, *args, **kwargs):
        qs = self.get_queryset()
        logging.warning(f"UserViewSet queryset: {qs}")
        serializer = self.get_serializer(qs, many=True)
        logging.warning(f"UserViewSet serialized data: {serializer.data}")
        return Response(serializer.data)

class TeamViewSet(viewsets.ModelViewSet):
    queryset = Team.objects.all()
    serializer_class = TeamSerializer

    def list(self, request, *args, **kwargs):
        qs = self.get_queryset()
        logging.warning(f"TeamViewSet queryset: {qs}")
        serializer = self.get_serializer(qs, many=True)
        logging.warning(f"TeamViewSet serialized data: {serializer.data}")
        return Response(serializer.data)

class ActivityViewSet(viewsets.ModelViewSet):
    queryset = Activity.objects.all()
    serializer_class = ActivitySerializer

    def list(self, request, *args, **kwargs):
        qs = self.get_queryset()
        logging.warning(f"ActivityViewSet queryset: {qs}")
        serializer = self.get_serializer(qs, many=True)
        logging.warning(f"ActivityViewSet serialized data: {serializer.data}")
        return Response(serializer.data)

class WorkoutViewSet(viewsets.ModelViewSet):
    queryset = Workout.objects.all()
    serializer_class = WorkoutSerializer

    def list(self, request, *args, **kwargs):
        qs = self.get_queryset()
        logging.warning(f"WorkoutViewSet queryset: {qs}")
        serializer = self.get_serializer(qs, many=True)
        logging.warning(f"WorkoutViewSet serialized data: {serializer.data}")
        return Response(serializer.data)

class LeaderboardViewSet(viewsets.ModelViewSet):
    queryset = Leaderboard.objects.all()
    serializer_class = LeaderboardSerializer

    def list(self, request, *args, **kwargs):
        qs = self.get_queryset()
        logging.warning(f"LeaderboardViewSet queryset: {qs}")
        serializer = self.get_serializer(qs, many=True)
        logging.warning(f"LeaderboardViewSet serialized data: {serializer.data}")
        return Response(serializer.data)

    queryset = User.objects.all()
    serializer_class = UserSerializer

    def list(self, request, *args, **kwargs):
        qs = self.get_queryset()
        logging.warning(f"UserViewSet queryset: {qs}")
        serializer = self.get_serializer(qs, many=True)
        logging.warning(f"UserViewSet serialized data: {serializer.data}")
        return Response(serializer.data)

    queryset = Team.objects.all()
    serializer_class = TeamSerializer

    def list(self, request, *args, **kwargs):
        qs = self.get_queryset()
        logging.warning(f"TeamViewSet queryset: {qs}")
        serializer = self.get_serializer(qs, many=True)
        logging.warning(f"TeamViewSet serialized data: {serializer.data}")
        return Response(serializer.data)

    queryset = Activity.objects.all()
    serializer_class = ActivitySerializer

    def list(self, request, *args, **kwargs):
        qs = self.get_queryset()
        logging.warning(f"ActivityViewSet queryset: {qs}")
        serializer = self.get_serializer(qs, many=True)
        logging.warning(f"ActivityViewSet serialized data: {serializer.data}")
        return Response(serializer.data)

    queryset = Workout.objects.all()
    serializer_class = WorkoutSerializer

    def list(self, request, *args, **kwargs):
        qs = self.get_queryset()
        logging.warning(f"WorkoutViewSet queryset: {qs}")
        serializer = self.get_serializer(qs, many=True)
        logging.warning(f"WorkoutViewSet serialized data: {serializer.data}")
        return Response(serializer.data)

    queryset = Leaderboard.objects.all()
    serializer_class = LeaderboardSerializer

    def list(self, request, *args, **kwargs):
        qs = self.get_queryset()
        logging.warning(f"LeaderboardViewSet queryset: {qs}")
        serializer = self.get_serializer(qs, many=True)
        logging.warning(f"LeaderboardViewSet serialized data: {serializer.data}")
        return Response(serializer.data)
