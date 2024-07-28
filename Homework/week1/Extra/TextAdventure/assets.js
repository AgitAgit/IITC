function place(name, description){
    this.name = name;
    this.description = description;
    this.text = `You have arrived at The ${name}. ${description}.`
}

function situation(place, enemy, loot, optionA, optionB, optionC, optionD){
    
    this.place = place;
    this.enemy = enemy;
    this.loot = loot;

    this.optionA = optionA;
    this.optionB = optionB;
    this.optionC = optionC;
    this.optionD = optionD;
}
