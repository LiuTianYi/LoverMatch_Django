#!/usr/bin/python
# -*- coding: utf-8 -*-
import simplejson
from django.http import HttpResponse, HttpResponseRedirect
from django.shortcuts import render, render_to_response
from django.urls import reverse
from lovermatch.models import UserInfo, serializeUser
from django.http import JsonResponse
from django.views.decorators.csrf import ensure_csrf_cookie
from operator import itemgetter
import demjson
from .Tools import Token
from django.conf import settings as django_settings
from django.core.mail import send_mail
import mongoengine
from django.contrib.auth import authenticate
import json
from django.http import HttpResponse
from mongoengine import *
from django.contrib.auth import authenticate
from django.http import HttpResponseRedirect
from django.shortcuts import render
from .forms import ImageUploadForm
from django.db import models
from django.contrib.auth import authenticate, login as auth_login, logout
from django.contrib.auth.models import User

# Create your views here.
token = Token(django_settings.SECRET_KEY)  # token is used to verify user in email link


def index(request):
    return HttpResponse("Hello, world. You are at the lovermatch app's index.")


def helloworld(request, some_string):
    context = {'some_string': some_string}
    return render(request, 'lovermatch/helloworld.html', context)


def show_signup_form(request):
    return render(request, 'lovermatch/signup.html')


def signup(request):
    if request.method == 'POST':
        # assume the data is valid
        _username = request.POST['username']  # _username is an email address in fact
        _pwd = request.POST['password']
        _nickname = request.POST['name']

        insert_user = UserInfo.objects.create(user=_username, password=_pwd, name=_nickname)
        insert_user.is_active = False  # set false here to wait further verification in email
        insert_user.save()

        _token = token.generate_validate_token(_nickname)
        message = "\n".join(['{0},恭喜你完成注册！'.format(_nickname), '请访问该链接，完成用户验证:',
                             '/'.join([django_settings.DOMAIN, 'activate', _token])])
        send_mail('注册用户验证信息', message, '2601112836@qq.com', [_username])

        context = {'message': '请尽快登录你的注册邮箱，点击链接进行激活，注意有效期为1个小时', 'nickname': _nickname}
        return render(request, 'lovermatch/signup_results.html', context)
        # return HttpResponseRedirect(reverse('lovermatch:results', args=(usr,)))


def active_user(request, _token):
    try:
        nickname = token.confirm_validate_token(_token)
    except:
        nickname = token.remove_validate_token(_token)
        users = UserInfo.objects.filter(name=nickname)
        for user in users:
            user.delete()
        message = '对不起，验证链接已经过期，请重新<a href=\"' + django_settings.DOMAIN + '/signup_form\">注册</a>'
        context = {'message': message, 'nickname': nickname}
        return render(request, 'lovermatch/signup_results.html', context)
    try:
        user = UserInfo.objects.get(name=nickname)
    except UserInfo.DoesNotExist:
        message = '对不起，用户不存在，请重新<a href=\"' + django_settings.DOMAIN + '/signup_form\">注册</a>'
        context = {'message': message, 'nickname': nickname}
        return render(request, 'lovermatch/signup_results.html', context)

    user.is_active = True
    user.save()
    message = '验证成功，请进行<a href=\"' + django_settings.DOMAIN + '/login\">登录</a>操作'
    context = {'message': message, 'nickname': nickname}
    return render(request, 'lovermatch/signup_results.html', context)


def showInfo(request):
    usr = request.session.get('user')
    if usr:

        cursor = UserInfo.objects(user=usr)

        return JsonResponse({'result': 0, 'data': serializeUser(cursor[0])})

    else:
        return JsonResponse({'result': -1})


def update_user(request):
    userUpdate = request.POST

    # usr = userUpdate["user"]
    # nm = userUpdate["name"]
    # UserInfo.objects(user=usr).update(name=nm)

    usr = userUpdate["user"]
    pw = userUpdate["password"]
    nm = userUpdate["name"]
    ag = userUpdate["age"]
    ge = userUpdate["gender"]
    hei = userUpdate["height"]
    wei = userUpdate["weight"]
    ho = userUpdate["hometownId"]
    univ = userUpdate["universityId"]
    scho = userUpdate["schoolId"]
    grad = userUpdate["gradeId"]
    cons = userUpdate["constellationId"]
    hob = userUpdate["hobbiesId"]
    fea = userUpdate["features"]
    per = userUpdate["percentage"]
    #
    UserInfo.objects(user=usr).update(name=nm, password=pw, age=ag, gender=ge,height=hei, weight=wei, hometownId=ho, universityId=univ,
                                      schoolId=scho, gradeId=grad, constellationId=cons, hobbiesId=hob, features=fea,
                                      percentage=per)

    return HttpResponse("user update success")


class ExampleModel(models.Model):
    model_pic = models.ImageField(upload_to='pic_folder/', default='pic_folder/None/no-img.jpg')


def upload_pic(request):
    if request.method == 'POST':
        form = ImageUploadForm(request.POST, request.FILES)
        if form.is_valid():
            m = ExampleModel.objects.get(pk=form.cleaned_data['title'])
            m.model_pic = form.cleaned_data['image']
            m.save()
            return HttpResponse('image upload success')
    return HttpResponse('image upload failed')


def login(req):
    if req.method == 'POST':

        # 获取表单用户密码
        usr = req.POST['username']
        pw = req.POST['password']

        # 获取的表单数据与数据库进行比较
        userinfo = UserInfo.objects(user=usr, password=pw)
        # print len(userinfo)
        if len(userinfo) > 0:

            req.session['user'] = usr
            req.session.set_expiry(3600000)  # 1 hour timeout
            print req.session['user']
            return JsonResponse({'code': 0})

            # return HttpResponseRedirect('/show')
        else:
            return JsonResponse({'code': -1})
            # return JsonResponse({'code': 0})

    else:  # 比较失败，还在login
        return JsonResponse({'code': -2})

        # return HttpResponseRedirect('lovermatch/login.html')


def logout(request):
    logout(request)
    return JsonResponse({'code': 0})


# def results(request, username):
#     context = {'username': username}
#     return render(request, 'lovermatch/signup_results.html', context)


def match(request, usr):
    """match algorithm for usr to find all users who are similar to him/her based on features and weights"""
    user = UserInfo.objects(user=usr)
    features_to_match = request.POST['features_to_match']
    weights = request.POST['weights']
    n = request.POST['amount']
    matchlist = {}
    for current_user in UserInfo.objects:
        sim = get_similarity(user, current_user, features_to_match, weights)
        matchlist[current_user] = sim
    sorted_matchlist = sorted(matchlist.items(), key=itemgetter(1), reverse=True)[0:n]
    context = {'sortedMatchList': sorted_matchlist}
    # return response


def height_similarity(h1, h2):
    """h1 is male's height, h2 is female's height"""
    gap = h1 - h2
    if gap < 0:
        return 0.5
    elif 0 <= gap and gap < 10:
        return 0.8
    elif 10 <= gap and gap < 20:
        return 0.9
    else:
        return 1.0


def hometown_similarity(hid1, hid2):
    if hid1 == hid2:
        return 1.0


def get_similarity(u1, u2, features_to_match, weights):
    value = 0.0
    for i in range(len(features_to_match)):
        feature = features_to_match[i]
        weight = weights[i]
        if feature == 'height':
            if u1.gender == 0 and u2.gender == 1:
                value += weight * height_similarity(u1.height, u2.height)
            else:
                value += weight * height_similarity(u2.height, u1.height)
        elif feature == 'hometownId':
            value += weight * hometown_similarity(u1.hometownId, u2.hometownId)
            # elif feature == blabla

    value = value / sum(weights)
    return value
