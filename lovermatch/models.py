#!/usr/bin/env python
# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from mongoengine import *
from mongoengine.fields import *


# from LoverMatch_Django.settings import data
# Create your models here.
class Features(Document):
    age = ListField()  # "age": [18, 24], // 年龄在18~24岁
    height = ListField()  # "height": [160, 170], // 身高在160~170之间
    weight = ListField()  # "weight": [50, 60], // 体重在50~60kg之间
    hometownId = ListField(ListField)  # "hometownId": [[01, 03, 12], [01, 04, 10], [01, 02, 03]], // 家乡地址id列表
    universityId = ListField()  # "universityId": [01, 03, 04], // 大学id列表
    schoolId = ListField()  # "schoolId": [01, 02, 12], // 专业id列表
    constellationId = ListField()  # "constellationId": [12, 13], // 星座id列表
    hobbiedId = ListField()  # "hobbiesId": [12, 13, 15] // 爱好id列表


class Percentage(Document):
    age = FloatField()  # "age": 0.1, // 年龄所占比例为0
    height = FloatField()  # "height": 0.1,
    weight = FloatField()  # "weight": 0.1,
    hometownId = FloatField()  # "hometownId": 0.3,
    universityId = FloatField()  # "universityId": 0.2,
    schoolId = FloatField()  # "schoolId": 0,
    constellationId = FloatField()  # "constellationId": 0,
    hobbiesId = FloatField()  # "hobbiesId": 0


class UserInfo(Document):
    user = StringField(required=True)  # 用户邮箱（作为用户名）
    password = StringField(required=True)
    name = StringField(required=True)

    photoAddress = StringField(max_length=100, required=False)  # 照片存储位置
    age = IntField(required=False)  # 年龄
    gender = IntField(required=False)  # 性别
    height = IntField(required=False)  # 身高
    weight = IntField(required=False)  # 体重
    hometownId = ListField()  # 家乡
    universityId = IntField(required=False)  # 大学
    schoolId = ListField()  # 学院
    gradeId = IntField(required=False)  # 年级
    constellationId = IntField(required=False)  # 星座
    hobbiesId = ListField()  # 爱好
    loverMatch = DictField(required=False)  # 匹配对象 json
    loverMatched = DictField(required=False)  # 被匹配对象 json
    verified = BooleanField(required=False)  # 是否被确认
    # features = DictField(required=False)  # json
    features = ReferenceField(Features)  # json
    # percentage = DictField(required=False)  # json
    percentage = ReferenceField(Percentage)  # json

    is_active = BooleanField(required=False, default=False)  # 是否激活


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
