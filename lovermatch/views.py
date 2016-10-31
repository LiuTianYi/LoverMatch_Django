#!/usr/bin/python
# -*- coding: utf-8 -*-
from django.shortcuts import render
from django.http import HttpResponse, HttpResponseRedirect
from django.shortcuts import render, render_to_response
from django.urls import reverse
from django.template import RequestContext
from pymongo import MongoClient
from django import forms
from lovermatch.models import User
import json
from django.http import JsonResponse
from django.views.decorators.csrf import ensure_csrf_cookie


# Create your views here.


def index(request):
    user = User.objects.create(
        user="pedro.kong@company.com",
        password="Pedro",
    )
    user.save()
    return HttpResponse("Hello, world. You are at the lovermatch app's index.")


def helloworld(request, some_string):
    context = {'some_string': some_string}
    return render(request, 'lovermatch/helloworld.html', context)


def show_signup_form(request):
    return render(request, 'lovermatch/signup.html')


def signup(request):
    usr = request.POST['username']
    pw = request.POST['password']
    insertResult = User.objects.create(user=usr, password=pw).save()

    # do some database actions
    return HttpResponseRedirect(reverse('lovermatch:results', args=(usr,)))


@ensure_csrf_cookie
def login(req):
    print req.method
    if req.method == 'POST':

        # 获取表单用户密码
        usr = req.POST['username']
        pw = req.POST['password']
        print usr
        print pw

        # 获取的表单数据与数据库进行比较
        registerResult = User.objects(user=usr, password=pw)
        print len(registerResult)
        if len(registerResult) > 0:
            return render(req, 'lovermatch/signup_results.html',{'code':0})

            # 比较成功，跳转index
            # response = HttpResponseRedirect(reverse('lovermatch:results', args=(usr,)))
            # # 将username写入浏览器cookie,失效时间为3600
            # response.set_cookie('username', usr, 3600)
            # return response
            # return render(req, 'lovermatch/index.html', {})
            # response = JsonResponse({'code': 0})
            # response["Access-Control-Allow-Origin"] = "*"
            # response["Access-Control-Allow-Methods"] = "POST, GET, OPTIONS"
            # response["Access-Control-Max-Age"] = "1000"
            # response["Access-Control-Allow-Headers"] = "*"
            # return response

        else:  # 比较失败，还在login
            return JsonResponse({'code': -1})

            # return HttpResponseRedirect('lovermatch/login.html')

    else:  # return render_to_response('login.html', context_instance=RequestContext(req))
        return JsonResponse({'code': 2})

        # return render(req, 'lovermatch/login.html')


def results(request, username):
    context = {'username': username}
    return render(request, 'lovermatch/signup_results.html', context)
