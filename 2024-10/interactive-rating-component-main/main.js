const _form = document.querySelector('form');
const _rating = document.querySelector('.ratingDiv');
const _submit = document.getElementById('submitBtn');

const _thankYou = document.querySelector('.thankYou');
const _ratingSpan = document.getElementById('ratingSpan');

_submit.addEventListener('click', handleSubmit);

let rating = 3;

function initRating(){
    for(let i = 1; i < 6; i++){
        const button = document.createElement('button');
        button.classList.add('roundButton');
        button.innerText = i;
        button.addEventListener('click', (event) => {
            event.preventDefault();
            const buttons = document.querySelectorAll('.roundButton');
            buttons.forEach(btn => btn.classList.remove('clicked'));
            event.target.classList.add('clicked');
            rating = i;
        });
        _rating.appendChild(button);
    }
}

function handleSubmit(event){
    event.preventDefault();
    _form.classList.toggle('hidden');
    _thankYou.classList.toggle('hidden');
    _ratingSpan.textContent = rating;
}

function toggle(){
    _form.classList.toggle('hidden');
    _thankYou.classList.toggle('hidden');
}

initRating();