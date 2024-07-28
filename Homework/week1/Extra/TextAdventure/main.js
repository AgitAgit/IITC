const topText = document.getElementById("topText");
const mainText = document.getElementById("mainText");
const enemyText = document.getElementById("enemyText");
const lootText = document.getElementById("lootText");

const aText = document.getElementById("aText");
const bText = document.getElementById("bText");
const cText = document.getElementById("cText");
const dText = document.getElementById("dText");

const aBtn = document.getElementById("aBtn");
const bBtn = document.getElementById("bBtn");
const cBtn = document.getElementById("cBtn");
const dBtn = document.getElementById("dBtn");

aBtn.addEventListener('click', handleA);
bBtn.addEventListener('click', handleB);
cBtn.addEventListener('click', handleC);
dBtn.addEventListener('click', handleD);

//start from simple example. Generalizing is for later...
//for the next version, make this more object oriented. For now, keep it functional oriented and small;

let player = {
    name: "default",
    hp: 100,
    atk: 1,
    score: 0,
    inventory: ["apple","dagger"]
}
//pre-made places:
let place_swamp = new place("swamp","A treacherous, muddy stretch of land. Try to avoid getting bogged down!");
let place_village = new place("village", "A calm, safe place...");
//pre-made situations:
let situation_startVillage = new situation(place_village, null, null, place_swamp, place_swamp, place_swamp, place_swamp);
let situation_startSwamp = new situation(place_swamp, null, null, place_village, place_village, place_village, place_village);

function refreshState(){
    mainText.textContent = currentSituation.place.text;
    if(currentSituation.optionA.name) aText.textContent = `a. ${currentSituation.optionA.name}`;
    if(currentSituation.optionB.name) bText.textContent = `b. ${currentSituation.optionB.name}`;
    if(currentSituation.optionC.name) cText.textContent = `c. ${currentSituation.optionC.name}`;
    if(currentSituation.optionD.name) dText.textContent = `d. ${currentSituation.optionD.name}`;
}

function initializeGame(){
    //player.name = prompt("Enter your name");
    topText.textContent = `Player:${player.name} HP:${player.hp} ATK:${player.atk} Inventory:`
    let place_startPage = new place("start page",`Hello ${player.name}! Welcome to TextAdventure!`);
    let situation_startSituations = new situation(place_startPage, null, null, place_startPage, place_startPage, place_swamp, place_swamp);
    currentSituation = situation_startSituations;
    refreshState();
}

function handleA(){
    handleChoice("a");
}
function handleB(){
    handleChoice("b");
}
function handleC(){
    handleChoice("c");
}
function handleD(){
    handleChoice("d");
}
function handleChoice(choice){
    if(choice === 'a') travel(currentSituation.optionA);
    if(choice === 'b') travel(currentSituation.optionB);
    if(choice === 'c') travel(currentSituation.optionC);
    if(choice === 'd') travel(currentSituation.optionD);
    refreshState();
}

function travel(place){
    currentSituation.place = place;
}


initializeGame();