class Bottle:
    def __init__(self, volume, color):
        self.volume = volume
        self.color = color
    
    def printProperties(self):
        print(f"volume:{self.volume} mil.\ncolor:{self.color}")

bottle1 = Bottle(300, "red")

bottle1.printProperties()