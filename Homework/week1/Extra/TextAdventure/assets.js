function place(name, description, state, closeBy){
    this.name = name;
    this.description = description;
    this.fullDescription = `You have arrived at The ${name}. ${description}.`;
    this.state = state; 
    this.closeBy = closeBy;
}

function place_state(enemy, loot){
    
    this.place = place;
    this.enemy = enemy;
    this.loot = loot;

    this.optionA = optionA;
    this.optionB = optionB;
    this.optionC = optionC;
    this.optionD = optionD;
}
