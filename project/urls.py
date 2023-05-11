from django.urls import path
from . import views
urlpatterns = [
  path('', views.homeView, name="home"),
  path('wordle/', views.wordleView , name="wordle"),
  path('about/', views.aboutView , name="about"),
  path('rules/', views.ruleView , name="rules"),
  path('test/', views.test, name='test'),
  ]
