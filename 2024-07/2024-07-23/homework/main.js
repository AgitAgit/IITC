let firstName = "Amit";
let lastName = "Kubani";
let age = 25
let isStudent = true;

let isAdult = age > 18;
console.log("Is adult?: " + isAdult);

let isJohn = firstName === "John";

function greet(firstName, lastName){
    let fullName = `${firstName} ${lastName}`

    fullName = fullName.toUpperCase();

    return `Hello, ${fullName}! Welcome to the IITC Bootcamp.`;
}

console.log(greet("Dorothy","Dorothy"));

function checkAge(age){
    let result = "";
    
    if(age < 13) result = "You are a child.";
    else if(13 <= age && age <= 17) result = "You are a teenager.";
    else if(18 <= age && age <= 64) result = "You are an adult.";
    else result = "You are a senior.";

    return result;
}
console.log(checkAge(3000));

function getDayMessage(dayOfWeek){
    let message = "";

    switch(dayOfWeek){
        case "Monday":
            message = "Start of the work week!";
            break;
        case "Tuesday":
            message = "It's Tuesday!";
            break;
        case "Wednesday":
            message = "It's Wednesday!";
            break;
        case "Thursday":
            message = "It's Thursday!";
            break;
        case "Friday":
            message = "It's not Tuesday!";
            break;
        case "Saturday":
            message = "It's not Tuesday!";
            break;
        case "Sunday":
            message = "It's not Tuesday!";
            break;
        default:
            message = "Invalid day!";
    }

    return message;
}

function checkEligibility(age, isStudent){
    if(age<18){
        if(isStudent) return "You are a minor student.";
        else return "You are a minor non-student.";
    }
    else if(18<= age && age<=24){
        if(isStudent) return "You are a young adult student.";
        else return "You are a young adult non-student.";
    }
    else{
        if(isStudent) return "You are an adult student.";
        else return "You are an adult non-student.";
    }
}

function formatName(name){
    name = name.trim();
    name = name.toLowerCase();

    if(name === "admin") return "Welcome, Admin!";
    else return `Hello, ${name}`;
}
console.log(formatName("Pikachu"));

function checkDiscount(age, isMember){
    if(age<18){
        if(isMember) return "You get a 20% discount.";
        else return "You get a 10% discount.";
    }
    else if(age >= 65){
        if(isMember) return "You get a 30% discount.";
        else return "You get a 20% discount.";
    }
    else{
        if(isMember) return "You get a 10% discount.";
        else return "No discount available.";
    }
}

function validateLogin(username,password){
    let storedUsername = "User1";
    let storedPassword = "Password1";

    if(username === storedUsername && password === storedPassword){
        return "Login successful.";
    }
    else return "Invalid username or password.";
}
console.log(validateLogin("marak","afuna"));

function extractInitials(firstName, lastName){
    let first = firstName.charAt(0).toUpperCase();
    let last = lastName.charAt(0).toUpperCase();
    return `${first}.${last}.`;
}
console.log(extractInitials("john","doe"));

function maskEmail(email){
    let cutEmail = email.split("@");
    cutEmail[0] = "*****";
    return `${cutEmail[0]}@${cutEmail[1]}`;
}
console.log(maskEmail("ab@gmail"));

function  gradeCalculator(score){
    if(score >= 90) return "A";
    else if(score >= 80) return "B";
    else if(score >= 70) return "C";
    else if(score >= 60) return "D";
    else return "F";
}
console.log(gradeCalculator(3000));

function canVote(age, isCitizen){
    if(age >= 18 && isCitizen) return "You are eligible to vote.";
    else return "You are not eligible to vote.";
}

function convertToUpperCaseAndAddAge(name, age){
    name = name.toUpperCase();
    return `${name}${age}`;
}
console.log(convertToUpperCaseAndAddAge("Dorothy","3000"));

function capitalize(word){
    let firstChar = word.charAt(0).toUpperCase();
    word = word.substring(1);
    return `${firstChar}${word}`;
}
console.log(capitalize("bagel"));

function containsSubstring(mainString, subString){
    return mainString.includes(subString);
}
console.log(containsSubstring("Bagel","age"));
