#!/usr/bin/env python
# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from mongoengine import *
# from LoverMatch_Django.settings import data
# Create your models here.


class UserInfo(Document):
    user = StringField(required=True) # 用户邮箱（作为用户名）
    password = StringField(required=True)
    name = StringField(required=True)

    # userId = StringField(max_length=50,required=True)  # 用户ID
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
    # loverMatch = MapField(required=False)  # 匹配对象
    # loverMatched = MapField(required=False)  # 被匹配对象
    # verified = StringField(required=False)  # 是否被确认
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
for post in UserInfo.objects:
    print post.user
