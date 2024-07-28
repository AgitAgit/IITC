function place(name, description, optionA, optionB, optionC, optionD){
    this.name = name;
    this.description = description;
    this.optionA = optionA;
    this.optionB = optionB;
    this.optionC = optionC;
    this.optionD = optionD;
    this.text = `You have arrived at The ${name}. ${description}.`
}

function situation(place, enemy, loot){
    mainText.textContent = place.text;
    
    if(enemy){

    }
    else enemyText.textContent = "There is no enemy here...";
    
    if(loot){}
    else lootText.textContent = "There is no loot here...";
}