from django.urls import path
from . import views

urlpatterns = [
  path('login/', views.loginUser, name="login"),
  path('logout/', views.logoutUser, name="logout"),
  path('register/', views.registerUser, name="register"),
  path('profile/', views.userProfile, name="profile"),
  path('edit-profile/', views.editProfile, name="edit-profile"),
  
  ]
