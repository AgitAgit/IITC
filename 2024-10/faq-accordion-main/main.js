const items = document.querySelectorAll('.item');

function handleItemClick(event){
    let itemText;

    if(event.target.classList.contains('item')){
        itemText = event.target.querySelector('.itemText');
    }
    else{
        itemText = event.target.parentElement.querySelector('.itemText');
    }
    itemText.classList.toggle('hidden');
}

function init(){
    items.forEach(item => {
        item.addEventListener('click', (event) => handleItemClick(event));
        console.log(item.classList);
    })
}

init();