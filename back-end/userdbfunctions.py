import random
#this module defined interactions with the mongodb database 
#its better to make all functions execute synchronously
from pymongo.mongo_client import MongoClient
from pymongo.server_api import ServerApi
uri = ""
client = MongoClient(uri, tlsAllowInvalidCertificates=True, server_api=ServerApi('1'))
databaseclient = client["account"]
database = databaseclient['account']
collection = databaseclient["Username+Password"]
def add_user(username, password):
    if collection.find_one({"username": username}):
        return False  
    #User already exists
    collection.insert_one({"username": username, "password": password})
    return True

def check_user(username, password):
    """Checks if the username and password combination exists in the database."""
    user = collection.find_one({"username": username, "password": password})
    return bool(user)
#true means exist account false means wrong user or pass or no account

def delete_user(username, password):
    """Deletes the user with the specified username and password from the database."""
    result = collection.delete_one({"username": username, "password": password})
    return result.deleted_count > 0