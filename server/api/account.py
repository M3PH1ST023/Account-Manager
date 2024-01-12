from flask import jsonify, request
from config import connectAccounts
from flask_cors import cross_origin

@cross_origin(origin="http://127.0.0.1:5173")
def post():
    try:
        data = request.json
        connectAccounts().insert_one(data)
        return "success"
    except Exception as e:
        Error(e)

@cross_origin(origin="http://127.0.0.1:5173")
def get():
    try:
        data = []
        for doc in connectAccounts().find():
            data.append({
                'date':doc['date'],
                'amount':doc['amount'],
                'type':doc['type'],
                'person':doc['person']
            })
        return jsonify(data)
    except Exception as e:
        Error(e)

@cross_origin(origin="http://127.0.0.1:5173")
def balance():
    total_balance = 0
    try:
        for doc in connectAccounts().find():
            if(doc['type']==0):
                total_balance = total_balance + doc['amount']
            elif(doc['type']==1):
                total_balance = total_balance - doc['amount']
        return jsonify({'balance':total_balance})
    except Exception as e:
        Error(e)

def Error(e):
    return jsonify({
        'Error':e
    })