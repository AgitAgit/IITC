const _form = document.querySelector('form');
const _rating = document.querySelector('.ratingDiv');
const _submit = document.getElementById('submitBtn');

const _thankYou = document.querySelector('.thankYou');

_submit.addEventListener('click', handleSubmit);

let rating;

function initRating(){

}

function handleSubmit(event){
    event.preventDefault();
    _form.classList.toggle('hidden');
    _thankYou.classList.toggle('hidden');
}

function toggle(){
    _form.classList.toggle('hidden');
    _thankYou.classList.toggle('hidden');
}