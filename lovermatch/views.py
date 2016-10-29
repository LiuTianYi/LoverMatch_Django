from django.shortcuts import render
from django.http import HttpResponse, HttpResponseRedirect
from django.shortcuts import render
from django.urls import reverse

# Create your views here.


def index(request):
    return HttpResponse("Hello, world. You are at the lovermatch app's index.")


def helloworld(request, some_string):
    context = {'some_string': some_string}
    return render(request, 'lovermatch/helloworld.html', context)


def show_signup_form(request):
    return render(request, 'lovermatch/signup.html')


def signup(request):
    username = request.POST['username']
    # do some database actions
    return HttpResponseRedirect(reverse('lovermatch:results', args=(username,)))


def results(request, username):
    context = {'username': username}
    return render(request, 'lovermatch/signup_results.html', context)



