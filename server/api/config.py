from pymongo import MongoClient

# connect uri
mongo_client = MongoClient('mongodb+srv://athidya23032003:Athidya%402019@cluster0.akvwv2y.mongodb.net/')
db = mongo_client['Accounts']

# connection to colletion
account = db['Account']

def connectAccounts():
    return account