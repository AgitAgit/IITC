const items = document.querySelectorAll('.item');

function handleItemClick(event){
    let itemText;
    if(event.target.classList.contains('item')){
        itemText = event.target.querySelector('.itemText');
    }
    else{
        itemText = event.target.parentElement.querySelector('.itemText');
    }
    const item = itemText.parentElement;
    const buttons = item.querySelectorAll('img');
    buttons.forEach(button => {
        button.classList.toggle('hidden');
    });
    itemText.classList.toggle('hidden');
}

function init(){
    items.forEach(item => {
        item.addEventListener('click', (event) => handleItemClick(event));
        console.log(item.classList);
    })
}

init();