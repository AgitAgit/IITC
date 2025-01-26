import user_ops

def hello():
    user_ops.hello()

def printContent():
    file = user_ops.returnDBContent()
    if(file):
        for key, value in file.items():
            print(f"\nkey:{key}\nvalue:{value}")

def promptAddUser():
    name = input("enter name:")
    email = input("enter email:")
    extraDetails = input("enter extra details, separated by commas:")
    extraDetails = extraDetails.split(",")
    extraDetails = [value.strip() for value in extraDetails]
    user_ops.addUser(*extraDetails, name=name, email=email)

promptAddUser()
printContent()    

