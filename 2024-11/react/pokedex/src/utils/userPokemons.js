//const fullObject = 
export default {
    addUserPokemon: (pokemon) => {
        const userPokemons = localStorage.getItem('userPokemons');
        if(userPokemons){
            const newUserPokemons = [...JSON.parse(userPokemons), pokemon];
            localStorage.setItem('userPokemons', JSON.stringify(newUserPokemons));
        }
        else{
            localStorage.setItem('userPokemons', JSON.stringify([pokemon]));
        }
    },
    validatePokemon: (pokemon) => {
        if(pokemon.name === "" || pokemon.imageUrl === "" || !pokemon.types[0] || !pokemon.stats[5] 
            || !pokemon.abilities[0] || !pokemon.baseExperience || !pokemon.weight || !pokemon.height) {
                return false;
            }
            return true;
        },
        getLatestPokemonSerialNum: ()=>{
            let userPokemons = localStorage.getItem('userPokemons');
            if(userPokemons){
                userPokemons = JSON.parse(userPokemons);
                return userPokemons[userPokemons.length - 1].serialNum;
            }
            return null;
        },
        createUserPokemon: function (name, imageUrl, types, stats, abilities, baseExperience, weight, height, moves){
            //1. generate pokemon object
            const pokemon = { name, imageUrl, types, stats, abilities, baseExperience, weight, height }
            console.log("createUserPokemon says: pokemon:", pokemon);
            console.log("createUserPokemon says: validate pokemon:", this.validatePokemon(pokemon));
            //2. validate fields
            if(!this.validatePokemon(pokemon)) return;
            //3. assign unique id
            const lastSerialNum = this.getLatestPokemonSerialNum();
            if(lastSerialNum){
                pokemon.serialNum = lastSerialNum + 1;
                pokemon.id = `userPokemon-${lastSerialNum + 1}`;
            }
            else{
                pokemon.serialNum = 1;
                pokemon.id = 'userPokemon-1';
            }
            //4. add to user pokemons
            this.addUserPokemon(pokemon);
        },
        getUserPokemons: () => {
        let userPokemons = localStorage.getItem('userPokemons');
        // console.log("getUserPokemon says", userPokemons);
        if(userPokemons) return JSON.parse(userPokemons);
        else return null;
    }
}

// export default {
//     createPokemon: fullObject.createUserPokemon,
//     getPokemons: fullObject.getUserPokemons
// }