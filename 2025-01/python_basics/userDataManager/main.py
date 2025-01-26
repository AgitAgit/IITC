import user_ops

def hello():
    user_ops.hello()

def printContent():
    file = user_ops.returnDBContent()
    for key, value in file.items():
        print(f"\nkey:{key}\nvalue:{value}")

def testAddUser():
    printContent()
    user_ops.addUser("user3000","babamail", extraField="vishnu")
    printContent()

testAddUser()