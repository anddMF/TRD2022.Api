import os
from dotenv import load_dotenv
load_dotenv()
from six.moves.urllib.request import urlopen
from service.auth_service import requires_auth
from jose import jwt
from flask_cors import cross_origin
from flask import Flask, jsonify, request, _request_ctx_stack
import json
from functools import wraps
import mysql.connector
from mysql.connector import Error

app = Flask(__name__)

conn = mysql.connector.connect(
    host=os.getenv('SQL_HOST'),
    port=os.getenv('SQL_PORT'),
    user=os.getenv('SQL_USER'),
    password=os.getenv('SQL_PASSWORD'),
    database=os.getenv('SQL_DATABASE')
)
cursor = conn.cursor(dictionary=True)


@app.route('/ping')
@cross_origin(headers=["Content-Type", "Authorization"])
def ping():
    return jsonify(message='Ok')


@app.route('/events')
@cross_origin(headers=["Content-Type", "Authorization"])
# @requires_auth
def get_events():
    try:
        proc_result = []
        proc_description = []
        cursor.callproc('STP_TRD2022_GET_EVENTS')
        proc_data = cursor.stored_results()
        for result in proc_data:
            proc_result = result.fetchall()
            proc_description = result.description
            
        # column_names = [column[0] for column in proc_description]
        response = jsonify(proc_result)
        return response
    except Exception as e:
        print(e)
        return jsonify(e), 500
    finally:
        conn.close()