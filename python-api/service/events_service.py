import mysql.connector
from mysql.connector import Error
from functools import wraps
import os

conn = mysql.connector.connect(
    host=os.getenv('SQL_HOST'),
    port=os.getenv('SQL_PORT'),
    user=os.getenv('SQL_USER'),
    password=os.getenv('SQL_PASSWORD'),
    database=os.getenv('SQL_DATABASE')
)
cursor = conn.cursor(dictionary=True)

def get_last_events():
    proc_result = []
    proc_description = []
    cursor.callproc('STP_TRD2022_GET_EVENTS')
    proc_data = cursor.stored_results()
    for result in proc_data:
        proc_result = result.fetchall()
        proc_description = result.description
    
    for row in proc_result:
        row['initialTotal'] = row['quantity'] * row['initialPrice']
    
    return proc_result
    