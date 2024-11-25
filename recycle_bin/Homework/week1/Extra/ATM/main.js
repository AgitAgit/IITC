const PIN = "1234"
const MAX_WITHDRAW = 500;
const MAX_DAILY_WITHDRAW = 1500;
let currentDailyWithdraw = 0;
let balance = 1000;
const MAX_ATTEMPTS = 3;
let attempts = 0;

const display = document.getElementById("display");
const withdraw = document.getElementById("withdraw");
const deposit = document.getElementById("deposit");
const transactions = document.getElementById("transactions");

display.addEventListener('click', handleDisplayClick);
withdraw.addEventListener('click', handleWithdrawClick);
deposit.addEventListener('click', handleDepositClick);

while(true){
    attempts++;
    if(attempts > MAX_ATTEMPTS){
        window.alert(`You have failed to enter the correct PIN ${MAX_ATTEMPTS} times.\nThe app will now freeze.`);
        while(true){}
    }

    let pin = window.prompt(`Enter PIN (attempt #${attempts}/${MAX_ATTEMPTS} \n(Hint: the PIN is: ${PIN}))`);
    if(pin === PIN){
        window.alert("You have entered successfully");
        break;
    }
}

function handleDisplayClick(){
    window.alert(`Your current balance is ${balance}`);
}

function handleWithdrawClick(){
    let withdraw = parseFloat(window.prompt(`Enter withdrawal sum:`));
    if(isNaN(withdraw)){
        window.alert(`"${withdraw}" is not a number.`);
    }
    else if(withdraw + currentDailyWithdraw > MAX_DAILY_WITHDRAW){  
        window.alert(`Error: You have already withdrawn: ${currentDailyWithdraw} today. \nYour max daily withdraw is: ${MAX_DAILY_WITHDRAW}`);
    }
    else if(withdraw > MAX_WITHDRAW){
        window.alert(`Error: Your maximum single withdraw amount is: ${MAX_WITHDRAW}`);
    }
    else if(withdraw > balance){
        window.alert(`Error: your current balance is: ${balance},\nyou can't withdraw a sum of: ${withdraw}`);
    }
    else{
        balance -= withdraw;
        currentDailyWithdraw += withdraw;
        addTransaction('withdraw', withdraw);
        window.alert(`You have withdrawn: ${withdraw}. \nYour new balance is: ${balance}`);
    }
}

function handleDepositClick(){
    let deposit = parseFloat(window.prompt("Enter deposit sum:"));
    if(isNaN(deposit)) window.alert(`"${deposit}" is not a number.`);
    else{
        balance += deposit;
        window.alert(`You have deposited: ${deposit}. \nYour new balance is: ${balance}`);
        addTransaction('deposit', deposit);
    }
}

function addTransaction(type, amount){
    const trans = document.createElement('li');
    if(type === 'deposit') {
        trans.textContent = `+${amount}, balance: ${balance}`
        trans.style.color = 'green';
    }
    else {
        trans.textContent = `-${amount}, balance: ${balance}`; 
        trans.style.color = 'red';
    }
    transactions.appendChild(trans);
    
    if(transactions.childElementCount >= 5){
        transactions.removeChild(transactions.firstChild);
    }
}