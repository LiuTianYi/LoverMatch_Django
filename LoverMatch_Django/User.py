#!/usr/bin/python
# -*- coding: utf-8 -*-
from pymongo import MongoClient


# 插入数据

def insert(usr, pw):
    client = MongoClient()
    db = client.test
    result = db.restaurants.insert_one(
        {
            "user": usr,
            "password": pw,
        }
    )
    return result


def find(usr, pw):
    client = MongoClient()
    db = client.test
    result = db.restaurants.find(
        {
            "user": usr,
            "password": pw,
        }
    )
    if result.count() == 0:
        return "-1"
    else:
        return "0"


# print find("yangyuji", "test")
