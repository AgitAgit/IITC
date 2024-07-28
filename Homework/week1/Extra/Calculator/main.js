const input = document.getElementById('input');
let a;
let operator;
let b;
let result;
let M = 0;

let operatorsExplanation = 'The possible operators are:\n\nBasic Arithmetic Operators\n+: Addition \n-: Subtraction \n*: Multiplication \n/: Division \n^: Exponentiation \n\nMathematical Functions \nsqrt: Square root \nabs: Absolute value \n!: Factorial \n\nMemory Functions \nM+: Add current value to memory \nM-: Subtract current value from memory \nMR: Recall value from memory \nMC: Clear memory \n\nUnit Conversion \nKTM: Convert kilometers to meters \nMTK: Convert meters to kilometers';
let explanationText = `Hello! To display this page again, enter "HELP" at any stage.\n ${operatorsExplanation}`;

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
    if(a === 1) return 1;
    return a * factorial(a-1);
}
function ktm(a){
    return a * 0.621;
}
function mtk(a){
    return a * 1.609;
}
function explain(){
    alert(explanationText);
}

function getInput(){
    a = prompt('Enter the first operand.');
    if(a === 'HELP') explain();
    a = parseFloat(a);

    while(isNaN(a)){
        a = prompt('Enter the first operand.');
        if(a === 'HELP') explain();
        a = parseFloat(a);
    }

    operator = prompt('Enter the operator.');
    if(operator === 'HELP') explain();

    while(//while not a valid operator(refactor to isValid func)
        !(operator === '+' || operator === '-' || operator === '*' || operator === '/' || operator === '^' 
          || operator === 'sqrt' || operator === 'abs' || operator === '!' || operator === 'M+'
          || operator === 'M-' || operator === 'MR' || operator === 'MC' || operator === 'KTM' || operator === 'MTK' 
        )){
            operator = prompt('Enter a valid operator...\nThe valid operators are:"+","-","*","/",\n"^","sqrt","abs","!",\n"M+","M-","MR","MC",\n"KTM","MTK"');    
        }
    //if the operator is not unary(refactor later to isUnary)
    if(operator !== 'sqrt' && operator !== 'abs' && operator !== '!' && operator !== 'M+' && operator !== 'M-'
       && operator !== 'MR' && operator !== 'MC' && operator !== 'KTM' && operator !== 'MTK'){
         
        b = prompt('Enter the second operand.');
        if(b === 'HELP') explain();
        b = parseFloat(b);
         
        while(isNaN(b)){
            b = prompt('Enter the second operand.');
            if(b === 'HELP') explain();
            b = parseFloat(b);
        }
    }
}

function processInput(){
    if(operator === '+'){
        result = addition(a,b);
        displayResult(true);
    }
    else if(operator === '-'){
        result = subtraction(a,b);
        displayResult(true);
    }
    else if(operator === '*'){
        result = multiplication(a,b);
        displayResult(true);
    }
    else if(operator === '/'){
        result = division(a,b);
        displayResult(true);
    }
    else if(operator === '^'){
        result = power(a,b);
        displayResult(true);
    }
    else if(operator === 'sqrt'){
        result = sqrt(a);
        displayResult(false);
    }
    else if(operator === 'abs'){
        result = abs(a);
       displayResult(false);
    }
    else if(operator === '!'){
        result = factorial(a);
        displayResult(false);
    }
    else if(operator === 'M+'){
        M += a;
    }
    else if(operator === 'M-'){
        M -= a;
    }
    else if(operator === 'MR'){
        result = M;
        displayResult(false);
    }
    else if(operator === 'MC'){
        M = 0;
    }
    else if(operator === 'KTM'){
        result = ktm(a);
        displayResult(false);
    }
    else if(operator === 'MTK'){
        result = mtk(a);
        displayResult(false);
    }
}

function displayResult(isBinary){
    if(isBinary) alert(`${a}${operator}${b} = ${result}`);
    else if(operator === '!') alert(`${a}! = ${result}`);
    else if(operator === 'MR') alert(`MR = ${result}`);
    else alert(`${operator}(${a}) = ${result}`);
}

explain();
while(true){
    getInput();
    processInput();
}