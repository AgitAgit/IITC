def args1(*args):
    sum = 0
    for arg in args:
        sum += arg
    print(sum)

# args1(1,1,1)

# args1(1,3000,7)

def args2(*args):
    for arg in args:
        print(arg)

# args2("a", 1, "baba")

def args3(*args):
    max = 0
    if args:
        max = args[0]
    for arg in args:
        if(arg > max):
            max = arg
    print(max)

# args3(1, 2, 1, 4, 1, -100)

def args4(*args):
    result = ""
    for arg in args:
        if(type(arg) == str):
            result += arg
    print(result)
# args4("baba", 3, " dr")
