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
    createUserPokemon: (name, imageUrl, types, stats, abilities, baseExperience, weight, height) => {
        //1. validate fields
        //2. assign unique id
        //3. generate pokemon object
        //4. add to user pokemons
    }
}