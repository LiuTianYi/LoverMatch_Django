#!/usr/bin/env python
# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from mongoengine import *
from mongoengine.fields import *
from django.db import models

# from LoverMatch_Django.settings import data
# Create your models here.

class Features(Document):
    age = ListField(required=False)  # "age": [18, 24], // 年龄在18~24岁
    height = ListField(required=False)  # "height": [160, 170], // 身高在160~170之间
    weight = ListField(required=False)  # "weight": [50, 60], // 体重在50~60kg之间
    hometownId = ListField(StringField(required=False))  # "hometownId": [010312, 010410, 010203], // 家乡地址id列表
    universityId = ListField(required=False)  # "universityId": [01, 03, 04], // 大学id列表
    schoolId = ListField(required=False)  # "schoolId": [01, 02, 12], // 专业id列表
    gradeId = ListField(required=False)  # "gradeId": [1 ,4]
    constellationId = ListField(required=False)  # "constellationId": [12, 13], // 星座id列表
    hobbiesId = ListField(required=False)  # "hobbiesId": [12, 13, 15] // 爱好id列表


class Percentage(Document):
    age = FloatField(required=False)  # "age": 0.1, // 年龄所占比例为0
    height = FloatField(required=False)  # "height": 0.1,
    weight = FloatField(required=False)  # "weight": 0.1,
    hometownId = FloatField(required=False)  # "hometownId": 0.3,
    universityId = FloatField(required=False)  # "universityId": 0.2,
    schoolId = FloatField(required=False)  # "schoolId": 0,
    gradeId = FloatField(required=False)  # "gradeId" 0
    constellationId = FloatField(required=False)  # "constellationId": 0,
    hobbiesId = FloatField(required=False)  # "hobbiesId": 0


#
# class photoModel(models.Model):
#     # owner = models.ForeignKey(UserInfo.user, user='上传者')
#     image = models.ImageField(upload_to='photos/', default='photos/None/no-img.jpg', blank=True, null=True)
#     # name = models.CharField(max_length=255)


class UserInfo(Document):
    user = StringField(required=True, primary_key=True)  # 用户邮箱（作为用户名）
    password = StringField(required=True)
    name = StringField(required=True)

    photoAddress = StringField(required=False)  # 照片地址
    age = IntField(required=False)  # 年龄
    gender = IntField(required=False)  # 性别
    height = IntField(required=False)  # 身高
    weight = IntField(required=False)  # 体重
    hometownId = StringField(required=False)  # 家乡
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


class Log(Document):
    time = DateTimeField(required=False)  # 时间
    user = StringField(required=False)  # 用户
    action = StringField(required=False)  # 行为
    status = IntField(required=False)  # 标志是否成功，1代表成功，0代表失败


def unicode__(self):
    return '%s %s' % (self.owner, self.image)


def serializeUser(UserInfo):
    return (
        {'user': UserInfo.user, 'name': UserInfo.name, 'photoAddress': UserInfo.photoAddress,
         'age': UserInfo.age, 'gender': UserInfo.gender, 'height': UserInfo.height, 'weight': UserInfo.weight,
         'hometownId': UserInfo.hometownId, 'universityId': UserInfo.universityId, 'schoolId': UserInfo.schoolId,
         'gradeId': UserInfo.gradeId, 'constellationId': UserInfo.constellationId, 'hobbiesId': UserInfo.hobbiesId,
         'loverMatch': UserInfo.loverMatch, 'loverMatched': UserInfo.loverMatched, 'verified': UserInfo.verified})


def serializeFeatures(Features):
    if Features is None:

        return (
            {
                'age': [], 'height': [], 'weight': [],
                'hometownId': [], 'universityId': [],
                'schoolId': [], 'gradeId': [], 'constellationId': [],
                'hobbiesId': []
            })
    else:
        return (
            {
                'age': Features.age, 'height': Features.height, 'weight': Features.weight,
                'hometownId': Features.hometownId, 'universityId': Features.universityId,
                'schoolId': Features.schoolId, 'gradeId': Features.gradeId, 'constellationId': Features.constellationId,
                'hobbiesId': Features.hobbiesId
            }
        )


def serializePercentage(Percentage):
    if Percentage is None:

        return (
            {
                'age': None, 'height': None, 'weight': None,
                'hometownId': None, 'universityId': None,
                'schoolId': None, 'gradeId': None, 'constellationId': None,
                'hobbiesId': None
            })
    else:
        return (
            {
                'age': Percentage.age, 'height': Percentage.height, 'weight': Percentage.weight,
                'hometownId': Percentage.hometownId, 'universityId': Percentage.universityId,
                'schoolId': Percentage.schoolId, 'gradeId': Percentage.gradeId,
                'constellationId': Percentage.constellationId,
                'hobbiesId': Percentage.hobbiesId
            }
        )

# for post in UserInfo.objects:
#     print post.user
