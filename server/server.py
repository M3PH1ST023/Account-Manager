import sys
from flask import Flask
sys.path.append('api')
from api.account import *

app = Flask(__name__)

# api routing
app.route('/api/v1/post', methods=['POST'])(post)
app.route('/api/v1/get', methods=['GET'])(get)
app.route('/api/v1/balance', methods=['GET'])(balance)

if __name__ == '__main__':
    app.run()