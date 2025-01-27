from tkinter import Tk, Label, Button

root = Tk()
Label(root, text="Welcome duck!").pack()
Button(root, text="Click Here", command=lambda:print("hello!")).pack()
root.mainloop()