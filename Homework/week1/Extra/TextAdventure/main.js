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
let places = [];
let start_menu = new place("start", "Hello!", null, ["village","swamp","village","swamp"]);

places.push(start_menu);

let player = {
    name: "default",
    hp: 100,
    atk: 1,
    score: 0,
    inventory: ["apple","dagger"],
    place: start_menu,
    state: neutral
}

function refreshState(){
    mainText.textContent = player.place.fullDescription;
}

function initializeGame(){
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
    if(choice === 'a') travel(player.place.closeBy[0]);
    if(choice === 'b') travel(player.place.closeBy[1]);
    if(choice === 'c') travel(player.place.closeBy[2]);
    if(choice === 'd') travel(player.place.closeBy[3]);
    refreshState();
}

function travel(place){
    player.place = places.find(place => place.name = place);
}


initializeGame();