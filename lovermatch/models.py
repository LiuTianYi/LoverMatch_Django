#!/usr/bin/env python
# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from mongoengine import *
# from LoverMatch_Django.settings import data
# Create your models here.


class User(Document):
    user = StringField(required=True)
    password = StringField(required=True)

    # userId = IntField(max_length=11,required=True)  # 手机号
    # password = StringField(max_length=50,required=True)  # 用户密码
    # name = StringField(max_length=50,required=True)  # 昵称
    # photoAddress = StringField(max_length=100, required=False)  # 照片存储位置
    # age = IntField(required=True)  # 年龄
    # gender = IntField(required=True)  # 性别
    # height = IntField(required=True)  # 身高
    # weight = IntField(required=True)  # 体重
    # hometownId = IntField(required=True)  # 家乡
    # universityId = IntField(required=True)  # 大学
    # schoolId = IntField(required=True)  # 学院
    # gradeId = IntField(required=True)  # 年级
    # constellationId = IntField(required=True)  # 星座
    # hobbiesId = ListField(required=True)  # 爱好
    # loverMatch = MapField(required=True)  # 匹配对象
    # loverMatched = MapField(required=False)  # 被匹配对象
    # verified = StringField(required=True)  # 是否被确认

# ross = User(user='y', password='y').save()
for post in User.objects:
    print post.user
