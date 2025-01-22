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

words = [word.upper() for word in ['hello', 'world', 'python']]
words = [word.upper() for word in ['product', 'preview', 'card']]
print(words)