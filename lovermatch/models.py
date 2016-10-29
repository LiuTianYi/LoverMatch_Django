from __future__ import unicode_literals

from mongoengine import *
from LoverMatch_Django.settings import DATABASES

# Create your models here.

connect(DATABASES)


def insert(usr, pw):
    result = DATABASES.insert_one(
        {
            "user": usr,
            "password": pw,
        }
    )
    return result


def find(usr, pw):
    result = DATABASES.find(
        {
            "user": usr,
            "password": pw,
        }
    )
    if result.count() == 0:
        return "-1"
    else:
        return "0"

# print DATABASES


class User(Document):
    userId = IntField(max_length=11,required=True)  # 手机号
    password = StringField(max_length=50,required=True)  # 用户密码
    name = StringField(max_length=50,required=True)  # 昵称
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
    loverMatch = MapField(required=True)  # 匹配对象
    loverMatched = MapField(required=False)  # 被匹配对象
    verified = StringField(required=True)  # 是否被确认
