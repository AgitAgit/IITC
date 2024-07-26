let weight = prompt("enter your weight:");
let height = prompt("enter your height in meters:");


weight = parseFloat(weight);
height = parseFloat(height);

function calculateBMI(weight, height){
    return weight/(height*height);
}

let bmi = calculate70BMI(weight, height);


function getBMICategory(bmi){
    let category = "";
    if(bmi < 18.5) category = "Underweight";
    else if(bmi <= 24.9) category = "Normal weight";
    else if(bmi <= 29.9) category = "Overweight";
    else category = "Obese";
    return category;
}

let category = getBMICategory(bmi);

console.log(`Your bmi is:${bmi}, you are ${category}`);
