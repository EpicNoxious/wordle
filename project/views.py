from django.shortcuts import render, redirect
from .models import Score
from .forms import ScoreForm
from django.contrib.auth.decorators import login_required 
from django.http import HttpResponse
# Create your views here.
def homeView(request):
  context= {}
  return render(request, 'home.html', context)

def test(request):
   context = {}
   return HttpResponse('hello')

def aboutView(request): # this is a function based view, good for beginners but not expandable
    context = {}
    return render(request, 'about.html', context)
def ruleView(request): # this is a function based view, good for beginners but not expandable
    context = {}
    return render(request, 'rules.html', context)

@login_required(login_url='login')
def wordleView(request):
  profile = request.user.profile
  score = profile.score
  form = ScoreForm()
  if request.method == 'POST':
    form = ScoreForm(data=request.POST)
    if form.is_valid():
      score.score += 1
      score.save()
      # return redirect('wordle')
  context = {'score': score}
  
  return render(request, 'index.html', context)


