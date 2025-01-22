# print("hello world")

# fruits = ["banana","kiwi"]

# print(fruits)

# fruits.append("apple")

# fruits.append("apple")

# print(fruits)

# fruits.remove("apple")

# print(fruits)

# contact = {'name':'Alice', 'age':30}
# contact['email'] = 'alice@example.com'
# del contact['age']
# print(contact)

# obj = {
#     'name':'duck3000',
#     'car':"Ha'agalash",
#     True:"tr",
#     False:"fl"
# }

# del obj[False]

# obj[("insufficient sleep","Arak")] = ["Reading","Offroad driving"]

# print(obj)

# set1 = {1, 3, 5, 7, 9, 11, 13}
# set2 = {1, 5, 9}
# set3  = { 3,4,5,6,7}
# set4 = set1.intersection(set2, set3)
# print(set4)

# colors = ["red", "green", "blue", "yellow", "black"]
# print(colors[0], colors[-1])
# print(colors[0], colors[len(colors) - 1])

# colors.append("purple")
# # del colors[1]
# print(colors)

# import math

# for i in range(math.floor(len(colors)/2)):
#     temp = colors[i]
#     colors[i] = colors[len(colors) - 1 - i]
#     colors[len(colors) - 1 - i] = temp

# print(colors)

# words = [word.upper() for word in ['hello', 'world', 'python']]
# words = [word.upper() for word in ['product', 'preview', 'card']]
# print(words)

# fruits = {'apple':2,'banana':1}
# print(fruits.items())
# print(fruits)

# a = 3000
# print(f"duck {a}")

# a = {'x':10}
# b = {'y':7}
# a.update(b)
# print(a)

# baba = { 'a':1, 'b':2, 'c':3 }

# print(baba.keys())

# if 'b' in baba.keys():
#     print("baba")
# else:
#     print("b")


# baba2 = [('a',1),('b',2),('c',3)]
# for key, value in baba2:
#     print(f"key:{key} value:{value}")

# babaItems = baba.items()

# print(babaItems)
# for item in babaItems:
#     print(item)

# fruits = ["banana", "apple", "samsung"]
# fruits.reverse()
# print(fruits)

fruits = ["banana", "apple", "samsung"]
cars = ["car1","car2","car3"]

list2 = [ a for b in [fruits, cars] for a in b ]
# print(list2)
riddleSet = set()
riddleArr = []

for i in range(len(list2)):
    riddleArr.append("")
    for j in range(len(list2[i]) - 1):
        char = list2[i][j]
        if not (char  in riddleSet):
            riddleArr[i] += char
            # riddleArr.append(char)
        riddleSet.add(char)
# print(list2)
# print(riddleArr)

# print(riddleSet)
        

# arr1 = [ [fruits, cars], [cars, fruits]]

# arr2 = [a for x in arr1 for y in x for z in y for a in z]
# print(arr2)

