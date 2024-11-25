let calculateButton = document.getElementById('calculate');
let displayButton = document.getElementById('display');
let list = document.getElementById('history');
//let bmiHistory = [];

displayButton.addEventListener('click', () => list.style.display = "block");
calculateButton.addEventListener('click', handleCalculateClick);

list.style.display = "none";

function bmiItem (date, bmi, category){
    this.date = date;
    this.bmi = bmi;
    this.category = category;
}

function calculateBMI(weight, height){
    return weight/(height*height);
}

function getBMI(){
    let weight = prompt("enter your weight");
    let height = prompt("enter your height");

    while(isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0){
        if(isNaN(weight) || weight <= 0){
            weight = prompt(`"${weight}" is not a valid weight! enter your weight:`);
        }
        if(isNaN(height) || height <= 0){
            height = prompt(`"${height}" is not a valid height! enter your height:`);
        }
    }
    weight = parseFloat(weight);
    height = parseFloat(height);
    return calculateBMI(weight, height);
}


function getBMICategory(bmi){
    let category = "";
    if(bmi < 18.5) category = "Underweight";
    else if(bmi <= 24.9) category = "Normal weight";
    else if(bmi <= 29.9) category = "Overweight";
    else category = "Obese";
    return category;
}

function handleCalculateClick(){
    list.style.display = "none";
    let bmi = getBMI();
    let category = getBMICategory(bmi);
    let item = new bmiItem(new Date(), bmi, category);
    //bmiHistory.push(item);
    addItem(item);
    window.alert(`Your bmi is: ${bmi}, you are ${category}.`);         
}

function addItem(item){
    let listItem = document.createElement("li");
    listItem.textContent = `date:${item.date}   bmi: ${item.bmi} category:${item.category}`; 
    list.appendChild(listItem);
}



