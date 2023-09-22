from django.views import View
from django.shortcuts import render, redirect
from .models import Word, HighScore
from .forms import WordGuessForm
import random


def home_view(request):
    print("Inside home_view")
    return render(request, 'countdown/home.html')


class CountdownGameView(View):
    def get(self, request):
        word = Word.objects.filter(word_length__gte=6).order_by('?').first()
        shuffled = ''.join(random.sample(word.word_text, len(word.word_text)))

        form = WordGuessForm()

        return render(request, 'countdown/game.html', {
            'shuffled_word': shuffled,
            'form': form
        })

    def post(self, request):
        user = request.user

        form = WordGuessForm(request.POST)
        if form.is_valid():
            guess = form.cleaned_data['guess']

            score = 0

            HighScore.objects.create(player=user, score=score)

            return redirect('countdown_game')

        return render(request, 'countdown/game.html', {'form': form})
