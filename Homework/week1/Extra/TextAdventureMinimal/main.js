//Maybe change the background color to dark grey in the deep forest?
//Add a functionality so the first time the player goes to a place he gets 10 points.
//Instead adding render state to each function, I should have a state object that fires an event
//whenever its changed and that would trigger render state.

const stats = document.getElementById("stats");
const mainText = document.getElementById("mainText");
const btnA = document.getElementById("a");
const btnB = document.getElementById("b");

btnA.addEventListener('click', handleClickA);
btnB.addEventListener('click', handleClickB);

let player = "default";
let moves = 0;
let score = 0;
let health = 100;
let beenTo = [];
let inventory = [];
let choiceA = null;
let choiceB = null;

const MAX_MOVES = 10;

function handleClickA(){
    choiceA();
}
function handleClickB(){
    choiceB();
}

function checkState(){
    if(health <= 0){
        score = 0;
        choiceA = start;
        choiceB = start;
        mainText.textContent = `You died... Your score is:${score}. To start again, click A or B.`;
    }
    else if(score >= 100){
        choiceA = start;
        choiceB = start;
        mainText.textContent = `You won! Your score is: ${score}. To start again, click A or B.`;
    }
    else if(moves >= MAX_MOVES){
        choiceA = start;
        choiceB = start;
        mainText.textContent = `You ran out of moves... Your score is: ${score}. To start again, click A or B.`;
    }
}

function renderStats(){
    checkState();
    stats.textContent = `| player:${player} | score:${score} | health:${health} | move count:${moves} | inventory:${inventory} |`;
}

function village(){
    choiceA = forest;
    choiceB = swamp;
    mainText.textContent = `Hello ${player}! You are at the village. Click A to go to the forest. Click B to go to the swamp.`;
    renderStats();
}

function forest(){
    moves+=1;
    if(! beenTo.includes("forest")){
        beenTo.push("forest");
        score += 10;
        alert("You have found wide sandals! \nThe forests floor is dry, but they might be helpful elsewere...");
        inventory.push("wide sandals");
    }
    choiceA = village;
    choiceB = deepForest;
    mainText.textContent = "You are at the forests edge. It seems peacefule... Click A to return to the village. Click B to go further in.";
    renderStats();
}

function deepForest(){
    moves+=1;
    if(! beenTo.includes("deepForest")){
        beenTo.push("deepForest");
        score += 10;
    }
    mainText.textContent = "You have ventured into the deep forest. It's dark here, and there are some weird scratching sounds... Click A to return to the forest's edge. Click B to investigate.";
    choiceA = forest;
    renderStats();
}

function swamp(){
    moves+=1;
    if(! beenTo.includes("swamp")){
        beenTo.push("swamp");
        score += 10;
    }
    if(!inventory.includes("wide sandals")){
        alert("You are not well equipped for this soggy ground... \nIt will cost you an extra move.");
        moves++;
    }
    mainText.textContent = "You are at the swamps edge. Try not to get stuck! Click A to return to the village. Click B to go further in.";
    choiceA = village;
    choiceB = deepSwamp;
    renderStats();
}

function deepSwamp(){
    moves+=2;//deep swamp. hard to move.
    if(!beenTo.includes("deepSwamp")){
        beenTo.push("deepSwamp");
        score += 10;
    }
    if(!inventory.includes("wide sandals")){
        alert("You are not well equipped for the deep swamp... \nYou drowned.");
        health = 0;
    }
    mainText.textContent = "You are at the deep swamp. A treacherous stretch of land... Click A to return to the swamps edge. Click B to go further in.";
    choiceA = swamp;
    choiceB = abandonedBarn;
    renderStats();
}

function abandonedBarn(){
    moves+=1;
    if(!beenTo.includes("abandonedBarn")){
        beenTo.push("abandonedBarn");
        score += 10;
        alert("You have found a double barrled shotgun");
        inventory.push("shotgun");
    }
    mainText.textContent = "You are at the deep swamp. A treacherous stretch of land... Click A to return to the swamps edge. Click B to go further in.";
    choiceA = swamp;
    choiceB = templeRuins;
    renderStats();
}

function start(){
    //player = prompt("Enter your name");
    health = 100;
    moves = 0;
    score = 0;
    beenTo = ["village"];
    inventory = ["apple"];

    village();
}

start();