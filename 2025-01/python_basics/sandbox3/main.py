class Bottle:
    def __init__(self, volume, color):
        self.volume = volume
        self.color = color
    
    def printProperties(self):
        print(f"volume:{self.volume} mil.\ncolor:{self.color}")

# bottle1 = Bottle(300, "red")

# bottle1.printProperties()

class SuperHero:
    def __init__(self, first_name, last_name, wears_glasses, has_drivers_license, age, height, weight, special_ability):
        self.first_name = first_name
        self.last_name = last_name
        self.wears_glasses = wears_glasses
        # self.has_drivers_license = has_drivers_license
        self.age = age
        self.height = height
        self.weight = weight
        self.special_ability = special_ability

    def printProperties(self):
        print(f"name:{self.first_name} {self.last_name}\nspecial ability:{self.special_ability}")

# peter_parkinsons = SuperHero("peter", "parkinson's", True, False, 60, 3000, 3000, special_ability = "Tremble")

# blind_man = SuperHero("blind", "man", True, False, 3000, 3000, 3000, special_ability = "He can't see during the day. (But, he can't see during the night)")

# peter_parkinsons.printProperties()

# blind_man.printProperties()

class BankAccount:
    def __init__(self, owner):
        self.owner = owner
        self.balance = 0
    
    def deposit(self, sum):
        self.balance += sum
    def withdraw(self, sum):
        self.balance -= sum
    def checkBalance(self):
        print(f"\nCurrent balance: {self.balance}")
        return self.balance


user_input = ''
current_account = {}
user_input = input("Enter your name:")
current_account = BankAccount(user_input)
while(user_input != "exit"):
    user_input = input("\nTo stop, enter exit.\nTo display balance, enter 1.\nTo deposit, enter 2.\nTo withdraw, enter 3.\n")
    if(user_input == "1"):
        current_account.checkBalance()
    if(user_input == "2"):
        user_input = input("Enter the amount you wish to deposit:")
        current_account.deposit(float(user_input))
    if(user_input == "3"):
        user_input = input("Enter the amount you wish to withdraw:")
        current_account.withdraw(float(user_input))
