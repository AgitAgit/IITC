import json

def hello():
    print("hello from user_ops!")

def printDBContent():
    with open("db.json", "r") as file:
        db = json.load(file)
        print(db)

def returnDBContent():
    with open("db.json","r") as file:
        db = json.load(file)
        return db
    
def addUser(name, email, **kwargs):
    newUser = {"name":name, "email":email}
    for key, value in kwargs.items():
        newUser[key] = value
    db = returnDBContent()
    db["users"].append(newUser)
    with open("db.json", "w") as file:
        json.dump(db, file)

