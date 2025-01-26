import numbers

def kwargs1(**kwargs):
    for key, value in kwargs.items():
        print(f"{key}:{value}")

# kwargs1(name="alice", number="1", baba="baba")d

def kwargs_test(**bbb):
    for a, b in bbb.items():
        print(f"key:{a}")
        print(f"value:{b}")

# kwargs_test(amy="3000", bronze="bomber")

def kwargs2(**kwargs):
    for key, value in kwargs.items():
        if(key == "name"):
            return value
    return "Unknown"

# print(kwargs2(properties="marak"))

def kwargs3(**kwargs):
    sum = 0
    for key, value in kwargs.items():
        if(isinstance(value, numbers.Real)):
            sum += value
    return sum

# result = kwargs3(name="bbb", num1=1, num2=0.5, num3=-0.1)
# print(result)
