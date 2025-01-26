import json

def hello():
    print("hello from user_ops!")

def returnDBContent():
    try:
        with open("db.json","r") as file:
            db = json.load(file)
            return db
    except:
        print("could not retrieve db content...")
        return None
def validateUser(user):
    if not bool(user.get("name") and user.get("email")): 
        return False
    if not user.get("name").strip():
        return False
    return True

def addUser(*args,**kwargs):
    newUser = {}
    for key, value in kwargs.items():
        newUser[key] = value
    if(args):
        newUser["extra_details"] = args
    if not validateUser(newUser):
        print("new user failed the validation.")
        return
    try:
        db = returnDBContent()
        db["users"].append(newUser)
        print("new user added...")
    except:
        print("no db file exists, a new one will be created...")
        db = {"users":[newUser]}
    with open("db.json", "w") as file:
        json.dump(db, file)
        print("new user added...")
