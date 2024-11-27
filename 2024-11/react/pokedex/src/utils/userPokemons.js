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
    getLatestPokemonId: ()=>{
        
    },
    createUserPokemon: (name, imageUrl, types, stats, abilities, baseExperience, weight, height) => {
        //1. generate pokemon object
        const pokemon = { name, imageUrl, types, stats, abilities, baseExperience, weight, height }
        //2. validate fields
        if(!this.validatePokemon(pokemon)) return;
        //3. assign unique id

        //4. add to user pokemons
    }
}