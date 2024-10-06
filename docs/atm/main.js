//model---------------------------------------------------------------------------------------
async function setDefaultUsers() {
    try {
        const response = await fetch('./atmUsers.json');
        const data = await response.json();
        // console.log("data:",data['atmUsers']);
        localStorage.setItem("atmUsers", JSON.stringify(data['atmUsers']));
    } catch (error) {
        console.error('Error reading JSON file:', error);
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
const _depositDiv = document.getElementById('depositDiv');
const _withdrawDiv = document.getElementById('withdrawDiv');

_loginForm.addEventListener('submit', handleSubmitForm);

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
function goToMenu(){
    goTo(_menuDiv);
}
function goToDisplayBalance(){
    goTo(_displayBalanceDiv);
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

//verify user
function handleEnterPIN(){
    if(verifyPIN()){
        goToMenu();
    }
}
function verifyPIN(pin='1234'){
    return true;
}

//get user data
let currentUser = null;
function handleSubmitForm(event){
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
}
function getUserById(pin){
    return users.find(user => user.PIN === pin);
}

//manipulate user data



