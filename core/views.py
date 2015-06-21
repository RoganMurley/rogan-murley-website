from django.shortcuts import render

from djangae.utils import on_production


def home(request):
    context = {
        'on_production': on_production(),
    }
    return render(request, 'index.html', context)
