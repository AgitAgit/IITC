//model---------------------------------------------------------------------------------------
async function setDefaultUsers() {
    try {
        const response = await fetch('./atmUsers.json');
        const data = await response.json();
        // console.log("data:",data['atmUsers']);
        localStorage.setItem("atmUsers", JSON.stringify(data['atmUsers']));
    } catch (error) {
        console.error('Error reading JSON file:', error);
        const data = [{PIN:"1234",Balance:3000},{PIN:"1111",Balance:1000},{PIN:"2222",Balance:10000}];
        localStorage.setItem("atmUsers",JSON.stringify(data));
    }
}

function commitToLocalStorage(){
    localStorage.setItem('atmUsers',JSON.stringify(users));
}

const users = (localStorage.getItem('atmUsers') ? 
JSON.parse(localStorage.getItem('atmUsers')) : 
setDefaultUsers());
//model end--------------------------------------------------------------------------------


//html reference variables
const _displayDiv = document.getElementById('displayDiv');
const _loginForm = document.getElementById('loginDiv');
const _menuDiv = document.getElementById('menuDiv');
const _displayBalanceDiv = document.getElementById('displayBalanceDiv');
const _displayBalanceSpan = document.getElementById('balanceSpan');
const _depositDiv = document.getElementById('depositDiv');
const _withdrawDiv = document.getElementById('withdrawDiv');
const _returnButtons = document.querySelectorAll('.returnBtn');

_returnButtons.forEach(button => {
    button.addEventListener('click', (event) => goToMenu(event));
});
_loginForm.addEventListener('submit', handleSubmitLogin);
_depositDiv.addEventListener('submit', handleDepositSubmit);
_withdrawDiv.addEventListener('submit', handleWithdrawSubmit);

const _displayElements = [_loginForm, _menuDiv, _displayBalanceDiv, _depositDiv, _withdrawDiv];

//navigate windows
function goTo(to){
    _displayElements.forEach(element => element.classList.add('hidden'));
    to.classList.remove('hidden');
}
function goto(from, to){
    from.classList.add('hidden');
    to.classList.remove('hidden');
}
function goToMenu(e){
    e.preventDefault();
    goTo(_menuDiv);
}
function goToDisplayBalance(){
    goTo(_displayBalanceDiv);
    displayBalance();
}
function goToDeposit(){
    goTo(_depositDiv);
}
function goToWithdraw(){
    goTo(_withdrawDiv);
}
function goToLogin(){
    currentUser = null;
    goTo(_loginForm);
}


//get user data
let currentUser = null;
function handleSubmitLogin(event){
    event.preventDefault();
    const formData = new FormData(_loginForm);
    const data = Object.fromEntries(formData);
    if(!getUserById(data.PIN)){
        users.push({
            PIN:data.PIN,
            Balance:0
        })
    }
    currentUser = getUserById(data.PIN);
    console.log("current user:", currentUser);
    console.log("users:",users);
    commitToLocalStorage();
    goToMenu(event);
}
function getUserById(pin){
    return users.find(user => user.PIN === pin);
}

//manipulate and display user data
function displayBalance(){
    _displayBalanceSpan.textContent = currentUser.Balance;
}

function deposit(sum){
    currentUser.Balance += sum;
}
function handleDepositSubmit(event){
    event.preventDefault();
    const formData = new FormData(_depositDiv);
    const data = Object.fromEntries(formData);
    const sum = parseInt(data.depositSum);
    deposit(sum);
    commitToLocalStorage();
}

function withdraw(sum){
    if(sum <= currentUser.Balance){
        currentUser.Balance -= sum;
        return true;
    }
    return false;
}
function handleWithdrawSubmit(event){
    event.preventDefault();
    const formData = new FormData(_withdrawDiv);
    const data = Object.fromEntries(formData);
    console.log('withdraw data',data);
    const sum = parseInt(data.withdrawSum);
    if(withdraw(sum)){
        console.log('withdraw successful. Your new balance is:', currentUser.Balance);
    }
    else{
        console.log('Can not withdraw this sum. Your current balance is:', currentUser.Balance);
    }
    commitToLocalStorage();
}



