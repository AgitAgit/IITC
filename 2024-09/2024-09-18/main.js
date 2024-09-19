const input1 = document.getElementById('input1');
const add1 = document.getElementById('add1');
const list1 = document.getElementById('list1');
const items = JSON.parse(localStorage.getItem('items')) || [];
let counter = parseInt(localStorage.getItem('counter')) || 0;
add1.addEventListener('click', addItem);

function addItem(){
    const li = document.createElement('li');
    li.addEventListener('click',()=>{
        li.classList.toggle('done');
    });
    li.textContent = input1.value;
    input1.value = '';
    
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = '🗑️';
    deleteBtn.addEventListener('click', function(event){
        event.target.parentElement.remove();
    });
    li.appendChild(deleteBtn);

    if(li.textContent !== ''){
        list1.appendChild(li);
        counter++;
        localStorage.setItem('counter',counter);
        items.push({'id':counter, 'item':li.textContent, 'done':false});
        localStorage.setItem(`items`, JSON.stringify(items));
        console.log(items);
    }
}

input1.value = 'item1';
addItem();
input1.value = 'item2';
addItem();
input1.value = 'item3';
addItem();

function onStart(){
    items.forEach((item)=>{
        //list1.appendChild(item.item);
    })
}
onStart();

function createItem(text, done){
    const li = document.createElement('li');
    li.addEventListener('click',()=>{
        li.classList.toggle('done');
    });
    li.textContent = text;
    (done === true ? li.classList.add('done'):li.classList.remove('done'));
    
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = '🗑️';
    deleteBtn.addEventListener('click', function(event){
        event.target.parentElement.remove();
    });
    li.appendChild(deleteBtn);

    return li;
}

function addItem(li){
    list1.appendChild(li);
}