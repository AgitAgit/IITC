#allow users to Add update and delete books
#store details like title, author and year in dictionaries
#use loops to display the available books in a structured format

books = [{'id':'1','title':'East of Eden', 'author':'John steinbeck'},{'id':'2','title':'the hitchhikers guide to the galaxy', 'author':'douglas adams'}]

trigger = 'display'

while(trigger != 'break'):
    if(trigger == 'display'):
        print("current books:")
        for book in books:
            print(f"| id:{book["id"]} | title:{book["title"]} | author:{book["author"]} |")
    elif(trigger == 'add'):
        id = input("enter the new books id:")
        title = input("enter the new books title:")
        author = input("enter the new books author:")
        books.append({'id':id, 'title':title, 'author':author})
    elif(trigger == 'update'):
        id = input("enter the id of the book to update:")
        title = input("enter the new books title:")
        author = input("enter the new books author:")
        for book in books:
            if(book['id'] == id):
                book['title'] = title
                book['author'] = author
    elif(trigger == 'delete'):
        id = input("enter the id of the book to delete:")
        for book in books:
            if(book['id'] == id):
                books.remove(book)
    trigger = input("To add a book, enter 'add'.\nTo delete or update a book, enter 'update' or 'delete'.\nTo display the list of books, enter 'display'.\nTo stop the program, enter 'break'.\n")
