from pymongo import MongoClient

# connect uri
mongo_client = MongoClient('mongodb://localhost:27017/')
db = mongo_client['Accounts']

# connection to colletion
account = db['Account']

def connectAccounts():
    return account