const _Content = document.getElementById('content');
const _Button = document.getElementsByTagName('button')[0];
_Content.classList.add('blue');

document.querySelectorAll('.text').forEach(element => {
    element.style = "color:red;";
});

const items = document.getElementById('list').querySelectorAll('li');

for(let i = 0; i < items.length; i++){
    console.log(items[i].textContent);
}

function handleButtonClick(){
    for(let i = 0; i < items.length; i++){
        items[i].style = 'background-color:yellow;';
    }
}

_Button.addEventListener('click', handleButtonClick)