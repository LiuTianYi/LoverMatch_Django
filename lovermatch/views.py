#!/usr/bin/python
# -*- coding: utf-8 -*-
from django.shortcuts import render
from django.http import HttpResponse, HttpResponseRedirect
from django.shortcuts import render, render_to_response
from django.urls import reverse
from django.template import RequestContext
from pymongo import MongoClient
from django import forms

# Create your views here.


def index(request):
    employee = Employee.objects.create(
        email="pedro.kong@company.com",
        first_name="Pedro",
        last_name="Kong"
    )
    employee.save()
    return HttpResponse("Hello, world. You are at the lovermatch app's index.")


def helloworld(request, some_string):
    context = {'some_string': some_string}
    return render(request, 'lovermatch/helloworld.html', context)


def show_signup_form(request):
    return render(request, 'lovermatch/signup.html')


def signup(request):
    username = request.POST['username']
    password = request.POST['password']
    insertResult = User.insert(username,password)
    # do some database actions
    return HttpResponseRedirect(reverse('lovermatch:results', args=(username,)))


def login(req):
    if req.method == 'POST':
        # 获取表单用户密码
        username = request.POST['username']
        password = request.POST['password']

        # 获取的表单数据与数据库进行比较
        registerResult = User.find(username, password)
        if registerResult == "0":
            # 比较成功，跳转index
            response = HttpResponseRedirect('/lovermatch/index')
            # 将username写入浏览器cookie,失效时间为3600
            response.set_cookie('username', username, 3600)
            return response
        else:
            # 比较失败，还在login
            return HttpResponseRedirect('/lovermatch/login/')
    else:
        return render_to_response('login.html', context_instance=RequestContext(req))


def results(request, username):
    context = {'username': username}
    return render(request, 'lovermatch/signup_results.html', context)
