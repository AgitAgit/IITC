import {place} from './assets';
import {situation} from './assets';

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

let currentSituation = new situation(village, null, null);

//start from simple example. Generalizing is for later...
//for the next version, make this more object oriented. For now, keep it functional oriented and small;


let player = {
    name: "default",
    hp: 100,
    atk: 1,
    score: 0,
    inventory: ["apple","dagger"]
}


function initializeGame(){
    player.name = prompt("Enter your name");
    topText.textContent = `Name:${player.name} HP:${player.hp} ATK:${player.atk} Inventory:`
    mainText.textContent = `Hello ${player.name}! Welcome to TextAdventure!`;
    aText.textContent = `a. START`;
    bText.textContent = `b. help`;
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
function handleChoice(situation, choice){

}
let swamp = new place("swamp","A treacherous, muddy stretch of land. Try to avoid getting bogged down!",null,null,null,null);
let village = new place("village", "A calm, safe place...", swamp, swamp, swamp, swamp);


initializeGame();
situation(village, null, null);