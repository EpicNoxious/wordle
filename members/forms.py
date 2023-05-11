from django.contrib.auth.forms import UserCreationForm, AuthenticationForm
from django.contrib.auth.models import User
from django.forms import ModelForm
from django import forms
from .models import Profile

class CustomUserCreationForm(UserCreationForm):
    class Meta:
        model = User
        fields = ['username', 'email', 'password1', 'password2']

    def __init__(self, *args, **kwargs):
        super(CustomUserCreationForm, self).__init__(*args, **kwargs)

        self.fields['username'].widget.attrs['placeholder'] = 'username'
        self.fields['email'].widget.attrs['placeholder'] = 'email'
        self.fields['password1'].widget.attrs['placeholder'] = 'Password'
        self.fields['password2'].widget.attrs['placeholder'] = 'Confirm password'

class CustomUserLoginForm(AuthenticationForm):
    class Meta:
        model = User
        fields = ('email', 'password')

    def __init__(self, *args, **kwargs):
        super(CustomUserLoginForm, self).__init__(*args, **kwargs)
        self.fields['username'].widget.attrs['placeholder'] = 'username'
        self.fields['password'].widget.attrs['placeholder'] = 'Password'


class ProfileForm(ModelForm):
  class Meta:
    model = Profile
    fields = ('name', 'email', 'username', 'bio')

  def __init__(self, *args, **kwargs):
    super(ProfileForm, self).__init__(*args, **kwargs)
    self.fields['name'].widget.attrs['class'] = 'input input--text'
    self.fields['name'].widget.attrs['placeholder'] = 'name'
    self.fields['email'].widget.attrs['class'] = 'input input--text'
    self.fields['email'].widget.attrs['placeholder'] = 'email'
    self.fields['username'].widget.attrs['class'] = 'input input--text'
    self.fields['username'].widget.attrs['placeholder'] = 'username'
    self.fields['bio'].widget.attrs['class'] = 'input input--text'
    self.fields['bio'].widget.attrs['placeholder'] = 'bio'

    for name, field in self.fields.items():
      field.widget.attrs.update({'class': 'input'})