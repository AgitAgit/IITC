const input = document.getElementById('input');
let a;
let operator;
let b;
let result;

function addition(a,b){
    return a + b;
}
function subtraction(a,b){
    return a - b;
}
function multiplication(a,b){
    return a * b;
}
function division(a,b){
    if(b === 0) return null;
    return parseFloat(a) / parseFloat(b);
}
function power(a,b){
    return Math.pow(a,b);
}
function sqrt(a){
    if(a < 0) return null;
    return Math.sqrt(a);
}
function abs(a){
    return Math.abs(a);
}
function factorial(a){

}

function getInput(){
    a = parseFloat(prompt('Enter the first operand'));
    while(isNaN(a)){
        a = parseFloat(prompt('The operand should be a number...'));
    }
    operator = prompt('Enter the operator');
    while(
        !(operator === '+' || operator === '-' || operator === '*' || operator === '/' || operator === 'pow' 
          || operator === 'sqrt' || operator === 'abs' || operator === '!'
        )){
            operator = prompt('Enter a valid operator...\nThe valid operators are:"+","-","*","/",\n"pow","sqrt","abs","!"');    
        }
    if(operator !== 'sqrt' && operator !== 'abs' && operator !== '!'){
         b = parseFloat(prompt('Enter the second operand'));
         while(isNaN(b)){
            b = parseFloat(prompt('The operand should be a number...'));
        }
    }
}

function displayResult(isBinary){
    if(isBinary) alert(`${a}${operator}${b} = ${result}`);
    else if(operator === '!') alert(`${a}! = ${result}`);
    else alert(`${operator}(${a}) = ${result}`);
}