
from django.db import models
from django.contrib.auth.models import User 
from django.urls import reverse
from datetime import datetime, date
# Create your models here.
class Score(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    created = models.DateTimeField(auto_now_add=True)
    score = models.IntegerField(default=0, null=True, blank=True)
   
    def __str__(self):
        return self.user.first_name

