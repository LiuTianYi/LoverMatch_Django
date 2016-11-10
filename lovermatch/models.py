#!/usr/bin/env python
# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from mongoengine import *
from mongoengine.fields import *


# from LoverMatch_Django.settings import data
# Create your models here.


class UserInfo(Document):
    user = StringField(required=True)  # 用户邮箱（作为用户名）
    password = StringField(required=True)
    name = StringField(required=True)

    photoAddress = StringField(max_length=100, required=False)  # 照片存储位置
    age = IntField(required=True)  # 年龄
    gender = IntField(required=True)  # 性别
    height = IntField(required=True)  # 身高
    weight = IntField(required=True)  # 体重
    hometownId = IntField(required=True)  # 家乡
    universityId = IntField(required=True)  # 大学
    schoolId = IntField(required=True)  # 学院
    gradeId = IntField(required=True)  # 年级
    constellationId = IntField(required=True)  # 星座
    hobbiesId = ListField(required=True)  # 爱好
    loverMatch = DictField(required=False)  # 匹配对象 json
    loverMatched = DictField(required=False)  # 被匹配对象 json
    verified = BooleanField(required=False)  # 是否被确认
    features = DictField(required=False) #json
    percentage = DictField(required=False) #json


#
# ross = UserInfo(user='y', password='y', name='y').save()
# ross = User(user='z', password='z',name='z').save()
# ross = User(user='y', password='y').save()
# ross = User(user='y', password='y').save()
# ross = User(user='y', password='y').save()
# ross = User(user='y', password='y').save()
# ross = User(user='y', password='y').save()
# ross = User(user='y', password='y').save()
# ross = User(user='y', password='y').save()


def serializeUser(userInfo):
    return (
        {'user': userInfo.user, 'name': userInfo.name, 'photoAddress': userInfo.photoAddress,
         'age': userInfo.age, 'gender': userInfo.gender, 'height': userInfo.height, 'weight': userInfo.weight,
         'hometownId': userInfo.hometownId, 'universityId': userInfo.universityId, 'schoolId': userInfo.schoolId,
         'gradeId': userInfo.gradeId, 'constellationId': userInfo.constellationId, 'hobbiesId': userInfo.hobbiesId,
         'loverMatch': userInfo.loverMatch, 'loverMatched': userInfo.loverMatched, 'verified': userInfo.verified,
         'features': userInfo.features, 'percentage': userInfo.percentage})


for post in UserInfo.objects:
    print post.user
