//task1
const _task1 = document.getElementById('task1');
const _Content = document.getElementById('content');
const _Button = document.getElementsByTagName('button')[0];
const items = document.getElementById('list').querySelectorAll('li');
_Content.classList.add('blue');
_Button.addEventListener('click', handleButtonClick)

//task2
const _task2 = document.getElementById('task2');
const _list2 = document.getElementById('list2');
const _button2 = document.getElementById('button2');
const _btnRemoveFirst = document.getElementById('removeFirst');
const _btnRemoveLast = document.getElementById('removeLast');
const _btnRemoveSelected = document.getElementById('removeSelected');
let counter = 0;
_button2.addEventListener('click', addItem);
_btnRemoveFirst.addEventListener('click', removeFirstItem);
_btnRemoveLast.addEventListener('click',removeLastItem);
_btnRemoveSelected.addEventListener('click', removeSelectedItem);

//task3
const _greeting = document.getElementById('greeting');
const _input = document.getElementById('nameInput');
const _clear = document.getElementById('clear');
_input.addEventListener('input', handleInputChange);
_clear.addEventListener('click', handleClearClick);

//task4
const _box = document.getElementById('box');
const _btnStyle = document.getElementById('changeStyle');
_btnStyle.addEventListener('click', changeBox);

//task5
const _task5 = document.getElementById('task5');


document.querySelectorAll('.text').forEach(element => {
    element.style = "color:red;";
});


for(let i = 0; i < items.length; i++){
    console.log(items[i].textContent);
}

function handleButtonClick(){
    for(let i = 0; i < items.length; i++){
        items[i].style = 'background-color:yellow;';
    }
}

function toggleSelect(event){

    if(event.target.classList.contains('selectedItem')){
        event.target.classList.remove('selectedItem')
    } 
    else {
        event.target.classList.add('selectedItem');
        for(let i = 0; i < _list2.children.length; i++){
            const child = _list2.children[i];
            if(child !== event.target){
                child.classList.remove('selectedItem');
            }
        }
    }
}

function addItem(){
    const li = document.createElement('li');
    counter++;    
    li.textContent = `list item #${counter}`;
    li.addEventListener('click', toggleSelect);
    _list2.appendChild(li);
}

function removeFirstItem(){
    _list2.firstChild.remove();
}
function removeLastItem(){
    _list2.lastChild.remove();
}
function removeSelectedItem(){
    for(let i = 0; i < _list2.children.length; i++){
        const child = _list2.children[i];
        if(child.classList.contains('selectedItem')){
            child.remove();
        }
    }
}
addItem();
addItem();
addItem();


function handleInputChange(){
    _greeting.textContent = `Hello, ${_input.value}!`;
}

function handleClearClick(){
    _input.value = '';
    handleInputChange();
}

_box.style.height = '100px';
_box.style.width = '100px';
function changeBox(){
    const red = Math.random() * 255;
    const green = Math.random() * 255;
    const blue = Math.random() * 255;
    _box.style.borderColor = `rgb(${red},${green},${blue})`;
    _box.style.height = `${parseInt(_box.style.height) * 2}px`;
    _box.style.width = `${parseInt(_box.style.width) * 2}px`;
}

for(let i = 1; i < 6; i ++){
    const btn = document.createElement('button');
    btn.textContent = 'click me';
    btn.addEventListener('click', function(){
        alert(i);
    });
    _task5.appendChild(btn);
}