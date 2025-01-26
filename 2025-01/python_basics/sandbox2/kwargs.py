def kwargs1(**kwargs):
    for key, value in kwargs.items():
        print(f"{key}:{value}")

# kwargs1(name="alice", number="1", baba="baba")d

def kwargs_test(**bbb):
    for a, b in bbb.items():
        print(f"key:{a}")
        print(f"value:{b}")

kwargs_test(amy="3000", bronze="bomber")