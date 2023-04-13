from django.shortcuts import render, get_object_or_404, redirect
from .models import Score
from django.contrib.auth.models import User
from.forms import ScoreForm

# Create your views here.
def index(request): # this is a function based view, good for beginners but not expandable
    context = {}
    return render(request, 'home.html', context)


def wordleView(request):
    score = Score.objects.get(user=request.user)
    if request.method == 'POST':
        form = ScoreForm(request.POST, instance=score)
        
        if form.is_valid():
            form.save()
            
            # Increment the score value by 1
            score.score += 1
            score.save()
            
            return redirect('home')
    else:
        form = ScoreForm(instance=score)
    
    context = {
        'form': form,
        'score': score,

    }
    
    return render(request, 'index.html', context)

