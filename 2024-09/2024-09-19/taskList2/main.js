//I need to hold item data for storage and state management and I need to reflect that in my html.
//Perhaps incorporate the editing of inner html to use string with html syntax to clarify the list items creation.

let items= JSON.parse(localStorage.getItem()) || [exampleItem, exampleItem2];
let counter = parseInt(localStorage.getItem('counter')) || 0;
const _list = document.getElementById('list');

const exampleItem = {
    'id':-1,
    'text':'item1',
    'isDone':false,
    'isDeleted':false
}
const exampleItem2 = {
    'id':-2,
    'text':'item2',
    'isDone':true,
    'isDeleted':false
}

function createItem(id, text, isDone, isDeleted){

}
function addItem(item){

}
function deleteItem(){

}
function editItem(){

}

function addLi(id, text, isDone, isDeleted){

}

function cleanList(){
    const newItems = items.filter( item => {
        item.isDeleted === false;
    });
    items = newItems;
}

function renderItems(){

    items.forEach(item => {
        addLi(item.id, item.text, item.isDone, item.isDeleted)
    })
}