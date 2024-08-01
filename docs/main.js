//Maybe change the background color to dark grey in the deep forest?
//Add a functionality so the first time the player goes to a place he gets 10 points.
//Instead adding render state to each function, I should have a state object that fires an event
//whenever its changed and that would trigger render state.

const stats = document.getElementById("stats");
const mainText = document.getElementById("mainText");
const btnA = document.getElementById("a");
const btnB = document.getElementById("b");
const leftText = document.getElementById("leftText");
const rightText = document.getElementById("rightText");

btnA.addEventListener('click', handleClickA);
btnB.addEventListener('click', handleClickB);

let player = "default";
let moves = 0;
let score = 0;
let health = 100;
let beenTo = [""];
let inventory = [];
let gunSound = "default gun sound";
let choiceA = null;
let choiceB = null;

const MAX_MOVES = 15;

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
        mainText.textContent = `You died... Your score is:${score}.`;
        leftText.textContent = "restart";
        rightText.textContent = "restart";
    }
    else if(score >= 100){
        choiceA = start;
        choiceB = start;
        mainText.textContent = `You won! Your score is: ${score}.`;
        leftText.textContent = "restart";
        rightText.textContent = "restart";
    }
    else if(moves >= MAX_MOVES){
        choiceA = start;
        choiceB = start;
        mainText.textContent = `You ran out of moves... Your score is: ${score}.`;
        leftText.textContent = "restart";
        rightText.textContent = "restart";
    }
}

function renderStats(){
    checkState();
    stats.textContent = `| player:${player} | score:${score} | health:${health} | move count:${moves} | inventory:[${inventory}] |`;
}

function village(){
    moves+=1;
    choiceA = forest;
    choiceB = swamp;
    mainText.textContent = `Hello ${player}! You are at the village.`;
    leftText.textContent = "forest";
    rightText.textContent = "swamp";
    renderStats();
}

function forest(){
    moves+=1;
    if(! beenTo.includes("forest")){
        beenTo.push("forest");
        score += 10;
        alert("You have found wide sandals! \nThe forests floor is dry, but they might be helpful elsewhere...");
        inventory.push("wide sandals");
    }
    choiceA = deepForest;
    choiceB = village;
    mainText.textContent = "You are at the forests edge. It seems peaceful...";
    leftText.textContent = "deep forest";
    rightText.textContent = "village";
    renderStats();
}

function deepForest(){
    moves+=1;
    if(! beenTo.includes("deepForest")){
        beenTo.push("deepForest");
        score += 10;
    }
    choiceA = () =>{
        if(! beenTo.includes("bearEncounter")){
            alert("You have encountered a large bear!");
            if(inventory.includes("shotgun")){
                alert(`Luckily, you have a gun that sounds like "${gunSound}"! The bear was scared and ran away.`);
                score += 100;
                renderStats();
            }
            else{
                alert("You are defenseless against the bear... \nHe eats you.");
                health = 0;
                renderStats();
            }
        }
    }
    choiceB = forest;
    mainText.textContent = "You have ventured into the deep forest. It's dark here, and there are some weird scratching sounds...";
    leftText.textContent = "investigate...";
    rightText.textContent = "forest";
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
    mainText.textContent = "You are at the swamps edge. Try not to get stuck!";
    choiceA = village;
    choiceB = deepSwamp;
    leftText.textContent = "village";
    rightText.textContent = "deep swamp";
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
    mainText.textContent = "You are at the deep swamp. A treacherous stretch of land...";
    choiceA = swamp;
    choiceB = abandonedBarn;
    leftText.textContent = "swamp";
    rightText.textContent = "keep going";
    renderStats();
}

function abandonedBarn(){
    moves+=1;
    if(!beenTo.includes("abandonedBarn")){
        beenTo.push("abandonedBarn");
        score += 10;
    }
    mainText.textContent = "You have found an abandoned barn.";
    leftText.textContent = "deep swamp";
    rightText.textContent = "investigate barn";
    choiceA = deepSwamp;
    choiceB = () => {
        if(!beenTo.includes("inAbandonedBarn")){
            beenTo.push("inAbandonedBarn");
            score += 10;
            alert("You have found a double barreled shotgun");
            inventory.push("shotgun");
        }
        mainText.textContent = "There are holes in the roof and the wooden floor is mostly rotten...";
        choiceA = abandonedBarn;
        choiceB = abandonedBarn;
        leftText.textContent = "exit barn";
        rightText.textContent = "exit barn";
        renderStats();    
    };
    renderStats();
}

function start(){
    if(beenTo[0] === "")
    {
        player = prompt("Enter your name");
        gunSound = prompt("Enter the sound a gun should make");
    }
    health = 100;
    moves = -1;
    score = 0;
    beenTo = [];
    inventory = ["apple"];

    village();
}

start();