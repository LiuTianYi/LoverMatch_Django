#!/usr/bin/python
# -*- coding: utf-8 -*-
import simplejson
from django.http import HttpResponse, HttpResponseRedirect
from django.shortcuts import render, render_to_response
from django.urls import reverse
from lovermatch.models import UserInfo, Log, serializeUser, Features, serializeFeatures, Percentage, serializePercentage
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
# from .models import photoModel
# from .forms import photoForm
from django.db import models
from django.contrib.auth import authenticate, login as auth_login, logout
from django.contrib.auth.models import User
from django.core.files.storage import default_storage
from PIL import Image, ImageFile
import httplib, urllib, base64
import datetime

# Create your views here.
token = Token(django_settings.SECRET_KEY)  # token is used to verify user in email link


def index(request):
    return HttpResponse("Hello, world. You are at the lovermatch app's index.")


def helloworld(request, some_string):
    context = {'some_string': some_string}
    return render(request, 'lovermatch/helloworld.html', context)


def show_signup_form(request):
    return render(request, 'lovermatch/signup.html')


def show_login_form(request):
    return render(request, 'lovermatch/login.html')


def show_upload_photo_form(request):
    return render(request, 'lovermatch/upload_photo.html')


def decorator(func):
    def write_log(request):
        now = datetime.datetime.now().strftime("%Y-%m-%d %H:%M:%S")
        try:
            _user = request.session.get('user')
        except:
            _user = "anonymous user"
        _action = func.__doc__
        _status = 1
        try:
            log = Log.objects.create(time=now, user=_user, action=_action, status=_status)
            log.save()
            result = func(request)
            return result
        except:
            print 'exception occured in write_log'
    return write_log


# def write_log(_user, _action, _status):
#     """write log into db"""
#     now = datetime.datetime.now().strftime("%Y-%m-%d %H:%M:%S")
#     log = Log.objects.create(time=now, user=_user, action=_action, status=_status)
#     log.save()

@decorator
def signup(request):
    """sign up"""
    if request.method == 'POST':
        # assume the data is valid
        _username = request.POST['username']  # _username is an email address in fact
        _pwd = request.POST['password']
        _nickname = request.POST['name']

        userinfos = UserInfo.objects(user=_username)
        if len(userinfos) > 0:
            # write_log(_username, "sign up", 0)
            return JsonResponse({'code': -1})
        userinfos = UserInfo.objects(name=_nickname)
        if len(userinfos) > 0:
            # write_log(_username, "sign up", 0)
            return JsonResponse({'code': -2})
        insert_user = UserInfo.objects.create(user=_username, password=_pwd, name=_nickname,
                                              photoAddress="http://23.99.118.170/static/photos/default.jpg")
        insert_user.is_active = False  # set false here to wait further verification in email
        insert_user.save()

        _token = token.generate_validate_token(_nickname)
        message = "\n".join(['{0},恭喜你完成注册！'.format(_nickname), '请访问该链接，完成用户验证:',
                             '/'.join([django_settings.DOMAIN, 'static', 'front', 'activate.html?token=' + _token])])
        send_mail('注册用户验证信息', message, '2601112836@qq.com', [_username])

        # write_log(_username, "sign up", 1)
        return JsonResponse({'code': 0})
        # context = {'message': '请尽快登录你的注册邮箱，点击链接进行激活，注意有效期为1个小时', 'nickname': _nickname}
        # return render(request, 'lovermatch/signup_results.html', context)
        # return HttpResponseRedirect(reverse('lovermatch:results', args=(usr,)))

@decorator
def active_user(request):
    """active user"""
    if request.method == 'POST':
        _token = request.POST['token']
        try:
            nickname = token.confirm_validate_token(_token)
        except:
            nickname = token.remove_validate_token(_token)
            users = UserInfo.objects(name=nickname)
            for user in users:
                user.delete()
            # write_log(nickname, "active user", 0)
            return JsonResponse({'code': -1})
            # message = '对不起，验证链接已经过期，请重新<a href=\"' + django_settings.DOMAIN + '/signup_form\">注册</a>'
            # context = {'message': message, 'nickname': nickname}
            # return render(request, 'lovermatch/signup_results.html', context)
        try:
            user = UserInfo.objects.get(name=nickname)
        except (UserInfo.DoesNotExist, UserInfo.MultipleObjectsReturned):
            # write_log(nickname, "active user", 0)
            return JsonResponse({'code': -1})
            # message = '对不起，用户不存在，请重新<a href=\"' + django_settings.DOMAIN + '/signup_form\">注册</a>'
            # context = {'message': message, 'nickname': nickname}
            # return render(request, 'lovermatch/signup_results.html', context)

        user.is_active = True
        user.save()
        # write_log(user.user, "active user", 1)
        return JsonResponse({'code': 0})
        # message = '验证成功，请进行<a href=\"' + django_settings.DOMAIN + '/login\">登录</a>操作'
        # context = {'message': message, 'nickname': nickname}
        # return render(request, 'lovermatch/signup_results.html', context)


def showInfo(request):
    usr = request.session.get('user')
    if usr:
        cursor = UserInfo.objects(user=usr)

        return JsonResponse({'code': 0, 'data': serializeUser(cursor[0]), "features": serializeFeatures(
            cursor[0].features), "percentage": serializePercentage(cursor[0].percentage)})

    else:
        return JsonResponse({'code': -1})


def update_self(request):
    """update self info"""
    userUpdate = request.POST

    # usr = userUpdate["user"]
    # nm = userUpdate["name"]
    # UserInfo.objects(user=usr).update(name=nm)
    try:
        usr = request.session.get('user')
    except:
        # write_log(usr, "update self info", 0)
        return JsonResponse({"code": -1})

    nm = userUpdate.get("name")
    user_self = UserInfo.objects(user=usr, name=nm)
    if len(user_self) == 0:
        user_all = UserInfo.objects(name=nm)
        if len(user_all) >= 1:
            # write_log(usr, "update self info", 0)
            return JsonResponse({'code': -2})
    elif len(user_self) == 1:
        user_all = UserInfo.objects(name=nm)
        if len(user_all) > 1:
            # write_log(usr, "update self info", 0)
            return JsonResponse({'code': -2})

    ag = userUpdate.get("age")
    ge = userUpdate.get("gender")
    hei = userUpdate.get("height")
    wei = userUpdate.get("weight")
    ho = userUpdate.get("hometownId")
    univ = userUpdate.get("universityId")
    scho = map(int, userUpdate.getlist("schoolId[]"))
    grad = userUpdate.get("gradeId")
    cons = userUpdate.get("constellationId")
    hob = map(int, userUpdate.getlist("hobbiesId[]"))



    if UserInfo.objects(user=usr).update(name=nm, age=ag, gender=ge, height=hei, weight=wei, hometownId=ho,
                                         universityId=univ, schoolId=scho, gradeId=grad, constellationId=cons,
                                         hobbiesId=hob):
        return JsonResponse({"code": 0})

    else:
        return JsonResponse({"code": -3})

@decorator
def update_feature(request):
    """update feature"""
    usr = request.session.get('user')
    ageL = map(float, request.POST.getlist("age[]"))
    heightL = map(float, request.POST.getlist("height[]"))
    weightL = map(float, request.POST.getlist("weight[]"))
    hometownIdL = map(str, request.POST.getlist("hometownId[]"))
    universityIdL = map(float, request.POST.getlist("universityId[]"))
    constellationIdL = map(float, request.POST.getlist("constellationId[]"))
    schoolIdL = map(float, request.POST.getlist("schoolId[]"))
    gradeIdL = map(float, request.POST.getlist("gradeId[]"))
    hobbiesIdL = map(float, request.POST.getlist("hobbiesId[]"))
    #
    fea = Features.objects.create(age=ageL, height=heightL, weight=weightL, hometownId=hometownIdL,
                                  universityId=universityIdL, constellationId=constellationIdL, schoolId=schoolIdL,
                                  gradeId=gradeIdL, hobbiesId=hobbiesIdL)

    if UserInfo.objects(user=usr).update(features=fea):
        # write_log(usr, "update feature", 1)
        return JsonResponse({"code": 0})
    else:
        # write_log(usr, "update feature", 0)
        return JsonResponse({"code": -1})

@decorator
def update_percentage(request):
    """update percentage"""
    usr = request.session.get('user')

    ageF = float(request.POST.get("age"))
    heightF = float(request.POST.get("height"))
    weightF = float(request.POST.get("weight"))
    hometownIdF = float(request.POST.get("hometownId"))
    universityIdF = float(request.POST.get("universityId"))
    constellationIdF = float(request.POST.get("constellationId"))
    schoolIdF = float(request.POST.get("schoolId"))
    gradeIdF = float(request.POST.get("gradeId"))
    hobbiesIdF = float(request.POST.get("hobbiesId"))

    per = Percentage.objects.create(age=ageF, height=heightF, weight=weightF, hometownId=hometownIdF,
                                    universityId=universityIdF, constellationId=constellationIdF, schoolId=schoolIdF,
                                    gradeId=gradeIdF, hobbiesId=hobbiesIdF)
    #
    if UserInfo.objects(user=usr).update(percentage=per):
        # write_log(usr, "update percentage", 1)
        return JsonResponse({"code": 0})
    else:
        # write_log(usr, "update percentage", 0)
        return JsonResponse({"code": -1})


def get_condition_template(request):
    """provide condition templates for user"""

    try:
        age = int(request.POST.get("age"))
        gender = int(request.POST.get("gender"))
        hometownId = str(request.POST.get("hometownId"))
        universityId = int(request.POST.get("universityId"))
        schoolId = map(float, request.POST.getlist("schoolId[]"))
        hobbiesId = map(float, request.POST.getlist("hobbiesId[]"))
        templates = recommend_template(age, gender, hometownId, universityId, schoolId, hobbiesId)
    except:
        return JsonResponse({"data": []})
    else:
        return JsonResponse({"data": templates})


def recommend_template(age, gender, hometownId, universityId, schoolId, hobbiesId):
    """template candidate"""

    features = {"age": [age - 2, age + 2], "height": [160, 170], "weight": [40, 60], "hometownId": [hometownId],
                "universityId": [universityId], "schoolId": [schoolId], "hobbiesId": hobbiesId}
    percentage = {"age": 0.1, "height": 0.1, "weight": 0.1, "hometownId": 0.1, "universityId": 0.1, "schoolId": 0.1,
                  "hobbiesId": 0.1}
    templates = []
    if gender == 0:  # male
        if age < 18:
            features['weight'] = [40, 55]
            percentage['age'] = 0.2
            percentage['hobbiesId'] = 0.2
            templates.append({"features": features, "percentage": percentage})

            features['age'] = [age - 3, age + 1]
            percentage['weight'] = [45, 60]
            templates.append({"features": features, "percentage": percentage})

        elif age >= 18 and age < 23:
            features['age'] = [age - 3, age + 2]
            percentage['age'] = 0.2
            percentage['hometownId'] = 0.2
            percentage['universityId'] = 0.2
            percentage['schoolId'] = 0.2
            percentage['hobbiesId'] = 0.2
            templates.append({"features": features, "percentage": percentage})

            percentage['universityId'] = 0.3
            percentage['schoolId'] = 0.3
            templates.append({"features": features, "percentage": percentage})

        elif age >= 23 and age < 26:
            features['age'] = [age - 3, age + 1]
            percentage['age'] = 0.2
            percentage['schoolId'] = 0.2
            percentage['hobbiesId'] = 0.2
            templates.append({"features": features, "percentage": percentage})

            percentage['age'] = 0.3
            percentage['schoolId'] = 0.3
            percentage['hobbiesId'] = 0.3
            templates.append({"features": features, "percentage": percentage})

        else:
            features['age'] = [age - 4, age + 2]
            percentage['age'] = 0.3
            percentage['schoolId'] = 0.2
            percentage['hobbiesId'] = 0.3
            templates.append({"features": features, "percentage": percentage})

            percentage['age'] = 0.2
            percentage['hometownId'] = 0.2
            percentage['hobbiesId'] = 0.2
            templates.append({"features": features, "percentage": percentage})
    else:  # female
        if age < 18:
            features['height'] = [170, 190]
            features['weight'] = [50, 90]
            percentage['age'] = 0.2
            percentage['height'] = 0.2
            percentage['hobbiesId'] = 0.2
            templates.append({"features": features, "percentage": percentage})

            features['age'] = [age - 2, age + 4]
            percentage['height'] = 0.3
            templates.append({"features": features, "percentage": percentage})

        elif age >= 18 and age < 23:
            features['age'] = [age - 2, age + 3]
            features['height'] = [170, 190]
            features['weight'] = [50, 90]
            percentage['age'] = 0.2
            percentage['height'] = 0.2
            percentage['hometownId'] = 0.2
            percentage['universityId'] = 0.2
            percentage['schoolId'] = 0.2
            percentage['hobbiesId'] = 0.2
            templates.append({"features": features, "percentage": percentage})

            percentage['universityId'] = 0.3
            percentage['schoolId'] = 0.3
            templates.append({"features": features, "percentage": percentage})

        elif age >= 23 and age < 26:
            features['age'] = [age - 2, age + 3]
            features['height'] = [170, 190]
            features['weight'] = [50, 90]
            percentage['age'] = 0.2
            percentage['schoolId'] = 0.2
            percentage['hobbiesId'] = 0.2
            templates.append({"features": features, "percentage": percentage})

            percentage['age'] = 0.3
            percentage['hometownId'] = 0.2
            percentage['schoolId'] = 0.3
            percentage['hobbiesId'] = 0.3
            templates.append({"features": features, "percentage": percentage})

        else:
            features['age'] = [age - 2, age + 5]
            features['height'] = [170, 190]
            features['weight'] = [50, 90]
            percentage['age'] = 0.3
            percentage['hometownId'] = 0.2
            percentage['schoolId'] = 0.2
            percentage['hobbiesId'] = 0.3
            templates.append({"features": features, "percentage": percentage})

            percentage['hometownId'] = 0.3
            percentage['schoolId'] = 0.3
            percentage['hobbiesId'] = 0.4
            templates.append({"features": features, "percentage": percentage})

    return templates


# class ExampleModel(models.Model):
#     model_pic = models.ImageField(upload_to='pic_folder/', default='pic_folder/None/no-img.jpg')
#
#
# def upload_pic(request):
#     if request.method == 'POST':
#         form = ImageUploadForm(request.POST, request.FILES)
#         if form.is_valid():
#             m = ExampleModel.objects.get(pk=form.cleaned_data['title'])
#             m.model_pic = form.cleaned_data['image']
#             m.save()
#             return HttpResponse('image upload success')
#     return HttpResponse('image upload failed')


def upload_photo(request):
    """upload photo"""
    if request.method == 'POST':
        usr = request.session.get('user')
        try:
            image = request.FILES['photo']
        except:
            # write_log(usr, "upload photo", 0)
            return JsonResponse({"code": -2})
        img = Image.open(image)
        img.thumbnail((500, 500), Image.ANTIALIAS)  # 对图片进行等比缩放
        image_path = "/home/yyj/LoverMatch_Django/templates/photos/" + str(
            usr) + ".jpg"

        store_path = "http://23.99.118.170/static/photos/" + str(usr) + ".jpg"

        # image_path = "/Users/yangyuji/Documents/Coding/PycharmProjects/LoverMatch_Django/LoverMatch/" + str(
        #     usr) + ".jpg"
        img.save(image_path)  # 保存图片

        # parser = ImageFile.Parser()
        # for chunk in image.chunks():
        #     parser.feed(chunk)
        # img = parser.close()
        # 在img被保存之前，可以进行图片的各种操作，在各种操作完成后，在进行一次写操作
        # img.save(image_path)


        if UserInfo.objects(user=usr).update(photoAddress=str(store_path), upsert=True):
            # write_log(usr, "upload photo", 1)
            return JsonResponse({"code": 0})
        else:
            # write_log(usr, "upload photo", 0)
            return JsonResponse({"code": -1})

    else:
        # write_log(usr, "upload photo", 0)
        return JsonResponse({"code": -3})


def detect_photo(req):
    usr = req.session.get('user')

    headers = {
        # Request headers
        'Content-Type': 'application/json',
        'Ocp-Apim-Subscription-Key': '43b5b4cabde346fa92d0d8756f77ef09',
    }

    params = urllib.urlencode({
        # Request parameters
        'returnFaceId': 'true',
        'returnFaceLandmarks': 'true',
        'returnFaceRectangle': 'true',
        'returnFaceAttributes': 'age,gender,smile',
    })

    body = {
        # "url": str(usr + ".jpg")
        "url": "http://23.99.118.170/static/photos/" + usr + ".jpg"
    }

    try:
        conn = httplib.HTTPSConnection('api.projectoxford.ai')
        conn.request("POST", "/face/v1.0/detect?%s" % params, str(body), headers)
        response = conn.getresponse()
        data = response.read()
        if len(data) == 2:
            return JsonResponse({"code": -1})
            # print("11")
        else:
            return JsonResponse({"code": 0, "content":data})

        print(len(data))
        print(data)

        conn.close()
    except Exception as e:
        print("[Errno {0}] {1}".format(e.errno, e.strerror))

@decorator
def login(req):
    """log in"""
    if req.method == 'POST':

        # 获取表单用户密码
        usr = req.POST['username']
        pw = req.POST['password']

        # 获取的表单数据与数据库进行比较
        try:
            userinfo = UserInfo.objects.get(user=usr, password=pw)
        except:
            # write_log(usr, "log in", 0)
            return JsonResponse({'code': -1})

        if len(userinfo) > 0:
            if userinfo.is_active == False:
                # write_log(usr, "log in", 0)
                return JsonResponse({'code': -3})
            req.session['user'] = usr
            req.session.set_expiry(3600000)  # 1 hour timeout
            print req.session['user']
            # write_log(usr, "log in", 1)
            return JsonResponse({'code': 0})
            # return HttpResponseRedirect('/show')
        else:
            # write_log(usr, "log in", 0)
            return JsonResponse({'code': -1})
            # return JsonResponse({'code': 0})

    else:  # 比较失败，还在login
        # write_log("unknown", "log in", 0)
        return JsonResponse({'code': -2})


def logout(request):
    logout(request)
    return JsonResponse({'code': 0})


def match(request):
    """match"""
    # match algorithm for usr to find all users who are similar to him/her based on features and weights
    calculate_match_at_backend()

    usr = request.session['user']
    try:
        user = UserInfo.objects.get(user=usr)
    except UserInfo.DoesNotExist:
        # write_log(usr, "match", 0)
        return JsonResponse({'code': -1})
    except UserInfo.MultipleObjectsReturned:
        # write_log(usr, "match", 0)
        return JsonResponse({'code': -2})
    n = int(request.POST['n'])
    lovermatch = user.loverMatch
    lovermatched = user.loverMatched
    sorted_lovermatch = sorted(lovermatch.items(), key=itemgetter(1), reverse=True)[0:n]
    sorted_lovermatched = sorted(lovermatched.items(), key=itemgetter(1), reverse=True)[0:n]
    return_lovermatch = []
    return_lovermatched = []

    for nickname, sim in sorted_lovermatch:
        u = UserInfo.objects.get(name=nickname)
        info = {'name': u.name, 'age': u.age, 'gender': u.gender, 'height': u.height, 'weight': u.weight,
                'hometownId': u.hometownId, 'universityId': u.universityId, 'schoolId': u.schoolId,
                'gradeId': u.gradeId, 'constellationId': u.constellationId, 'hobbiesId': u.hobbiesId,
                'photoAddress': u.photoAddress}
        if u.gender != user.gender:
            return_lovermatch.append((info, sim))

    for nickname, sim in sorted_lovermatched:
        u = UserInfo.objects.get(name=nickname)
        info = {'name': u.name, 'age': u.age, 'gender': u.gender, 'height': u.height, 'weight': u.weight,
                'hometownId': u.hometownId, 'universityId': u.universityId, 'schoolId': u.schoolId,
                'gradeId': u.gradeId, 'constellationId': u.constellationId, 'hobbiesId': u.hobbiesId,
                'photoAddress': u.photoAddress}
        if u.gender != user.gender:
            return_lovermatched.append((info, sim))

    context = {'code': 0, 'lovermatch': return_lovermatch, 'lovermatched': return_lovermatched}
    # write_log(usr, "match", 1)
    return JsonResponse(context)


def height_similarity(h1, h2, condition):
    """h1 is male's height, h2 is female's height"""
    if h1 and h2 and len(condition) > 0:
        if h2 < condition[0] or h2 > condition[1]:
            return 0.5
        gap = abs(h1 - h2)
        if 0 <= gap and gap < 10:
            return 0.8
        elif 10 <= gap and gap < 20:
            return 0.9
        else:
            return 1.0
    else:
        return 0.0


def age_similarity(a1, a2, condition):
    if a1 and a2 and len(condition) > 0:
        if a2 < condition[0] or a2 > condition[1]:
            return 0.3
        gap = abs(a1 - a2)
        if 0 <= gap and gap < 3:
            return 1.0
        elif 3 <= gap and gap < 6:
            return 0.8
        else:
            return 0.5
    else:
        return 0.0


def hometown_similarity(hid1, hid2, condition):
    if hid1 and hid2 and len(condition) > 0:
        if hid2 not in condition:
            return 0.5
        if hid1 == hid2:
            return 0.9
        else:
            return 1.0
    else:
        return 0.0


def gender_similarity(g1, g2, condition):
    if g1 and g2 and condition:
        if g2 != condition:
            return 0.5
        return 1.0
    else:
        return 0.0


def weight_similarity(w1, w2, condition):
    if w1 and w2 and len(condition) > 0:
        if w2 < condition[0] or w2 > condition[1]:
            return 0.5
        gap = abs(w1 - w2)
        if 0 <= gap and gap < 10:
            return 1.0
        elif 10 <= gap and gap < 20:
            return 0.9
        else:
            return 0.8
    else:
        return 0.0


def university_similarity(u1, u2, condition):
    if u1 and u2 and len(condition) > 0:
        if u2 not in condition:
            return 0.5
        if u1 == u2:
            return 0.9
        else:
            return 1.0
    else:
        return 0.0


def school_similarity(s1, s2, condition):
    if s1 and s2 and len(condition) > 0:
        if s2 not in condition:
            return 0.5
        if s1 == s2:
            return 0.9
        else:
            return 1.0
    else:
        return 0.0


def constellation_similarity(c1, c2, condition):
    if c1 and c2 and len(condition) > 0:
        if c2 not in condition:
            return 0.5
        # need constellation knowledge
        return 1.0
    else:
        return 0.0


def hobbies_similarity(h1, h2, condition):
    if h1 and h2 and len(condition) > 0:
        flag = False
        counter = 0
        for h in h2:
            if h in condition:
                flag = True
                break
        if flag:
            for h in h2:
                if h in h1:
                    counter += 1.0
            return counter / (max(len(h1), len(h2)))
        else:
            return 0.1
    else:
        return 0.0


def get_similarity(u1, u2, features_to_match, weights):
    value = 0.0
    print 'initial value = %f' % value
    for feature in dir(features_to_match):
        try:
            print 'feature = %s, type = %s' % (feature, type(feature))
            if hasattr(features_to_match, feature):
                condition = getattr(features_to_match, feature)
                print 'condition = %s, type = %s' % (condition, type(condition))
            if hasattr(weights, feature):
                weight = float(getattr(weights, feature))
        except:
            continue
        else:
            pass
        if feature == 'height':
            value += weight * height_similarity(u1.height, u2.height, condition)
        elif feature == 'hometownId':
            value += weight * hometown_similarity(u1.hometownId, u2.hometownId, condition)
        elif feature == 'age':
            value += weight * age_similarity(u1.age, u2.age, condition)
        elif feature == 'gender':
            value += weight * gender_similarity(u1.gender, u2.gender, condition)
        elif feature == 'weight':
            value += weight * weight_similarity(u1.weight, u2.weight, condition)
        elif feature == 'universityId':
            value += weight * university_similarity(u1.universityId, u2.universityId, condition)
        elif feature == 'schoolId':
            value += weight * school_similarity(u1.schoolId, u2.schoolId, condition)
        elif feature == 'constellationId':
            value += weight * constellation_similarity(u1.constellationId, u2.constellationId, condition)
        elif feature == 'hobbiesId':
            value += weight * hobbies_similarity(u1.hobbiesId, u2.hobbiesId, condition)
        else:
            pass
        print 'now value = %f' % value

    print 'final value = %f' % value
    sum_of_weights = 0.0
    print 'initial sum_of_weights = %f' % sum_of_weights
    for v in dir(weights):
        try:
            if hasattr(weights, v):
                v = getattr(weights, v)
                v = float(v)
                sum_of_weights += v
        except:
            continue
        else:
            pass
        print 'now sum_of_weights = %f' % sum_of_weights
    if sum_of_weights == 0.0:
        sum_of_weights = 9.0
    print 'final sum_of_weights = %f' % sum_of_weights
    value = value / sum_of_weights
    print 'after computation, value = %f' % value
    return value


def calculate_match_at_backend():
    """Calculate lovermatch list and lovermatched list for every user in database at backend by a thread"""

    # Calculate lovermatch list for each user
    user_set = UserInfo.objects
    for u1 in user_set:
        matchlist = {}
        for u2 in user_set:
            if u1 != u2:
                features_to_match = u1.features
                weights = u1.percentage
                sim = get_similarity(u1, u2, features_to_match, weights)
                matchlist[u2.name] = sim
        u1.loverMatch = matchlist
        u1.save()

    # Calculate lovermatched list for each user
    user_set = UserInfo.objects
    for u1 in user_set:
        matchedlist = {}
        for u2 in user_set:
            if u1 != u2:
                if u1.name in u2.loverMatch.keys():
                    matchedlist[u2.name] = u2.loverMatch[u1.name]
        u1.loverMatched = matchedlist
        u1.save()


# detect_photo()
