from pymongo import MongoClient

#插入数据

def insert(usr,pw):
    client = MongoClient()
    db = client.test
    result = db.restaurants.insert_one(
        {
            "user": usr,
            "password": pw,
        }
    )
    return result

def find():
    client = MongoClient()
    db = client.test
    result = db.restaurants.find(
        {
            "user": "lovermatch",
            "password": "lovermatch",
        }
    )
    if result.count() == 0:
        return "-1"
    else:
        return "0"

# print result.inserted_id