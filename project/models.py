
from django.db import models
from django.contrib.auth.models import User
import uuid
from members.models import Profile


class Score(models.Model):
  id = models.UUIDField(default=uuid.uuid4, unique=True, primary_key=True, editable=False)
  owner = models.OneToOneField(Profile, on_delete=models.CASCADE, null=True, blank=True)
  score = models.IntegerField(default=0, null=True, blank=True)
  highscore = models.IntegerField(default=0, null=True, blank=True) 
