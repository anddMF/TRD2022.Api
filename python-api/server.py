from dotenv import load_dotenv
load_dotenv()
import service.events_service as events_svc
from mysql.connector import Error
import mysql.connector
from functools import wraps
import json
from flask import Flask, jsonify, request, _request_ctx_stack
from flask_cors import cross_origin
from jose import jwt
from service.auth_service import requires_auth
from six.moves.urllib.request import urlopen
import os

app = Flask(__name__)


@app.route('/ping')
@cross_origin(headers=["Content-Type", "Authorization"])
def ping():
    return jsonify(message='Ok')


@app.route('/events')
@cross_origin(headers=["Content-Type", "Authorization"])
# @requires_auth
def get_events():
    try:
        proc_result = events_svc.get_last_events()
        return jsonify(proc_result)
    except Exception as e:
        print(e)
        return e.args[0], 500
    # finally:
    #     conn.close()
