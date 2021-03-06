#!/usr/bin/python
# -*- coding: utf-8 -*-

from itsdangerous import URLSafeTimedSerializer
import base64


class Token:
    def __init__(self, security_key):
        self.security_key = security_key
        self.salt = base64.encodestring(security_key)

    def generate_validate_token(self, username):
        serializer = URLSafeTimedSerializer(self.security_key)
        return serializer.dumps(username, self.salt)

    def confirm_validate_token(self, token, expiration=3600):

        serializer = URLSafeTimedSerializer(self.security_key)
        return serializer.loads(token, salt=self.salt, max_age=expiration)

    def remove_validate_token(self, token):
        serializer = URLSafeTimedSerializer(self.security_key)
        print serializer.loads(token, salt=self.salt)
        return serializer.loads(token, salt=self.salt)
