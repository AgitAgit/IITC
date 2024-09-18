const input1 = document.getElementById('input1');
const add1 = document.getElementById('add1');
const list1 = document.getElementById('list1');
//let counter = parseInt(localStorage.getItem('counter')) + 1 || 0;
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
    }
}

input1.value = 'item1';
addItem();
input1.value = 'item2';
addItem();
input1.value = 'item3';
addItem();

function onStart(){

}