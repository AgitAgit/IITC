import { useRef } from 'react';
import userPokemons from "../../utils/userPokemons";

export default function() {
    const formRef = useRef();

//name, imageUrl, types, stats, abilities, baseExperience, weight, height
    function handleFormSubmission(event, form){
        event.preventDefault();
        //get form data and convert to readable form:
        const formData = new FormData(form);
        const formDataObject = Object.fromEntries(formData.entries());
        const { name, imageUrl, baseExperience, weight, height, type1, type2, hp, attack, defense, specialAttack, specialDefense, speed, ability1, ability2 } = formDataObject;
        //simulate the api object format:
        const pokemon = { name, imageUrl, baseExperience, weight, height, abilities:[ { ability: { name:ability1}}, { ability: { name:ability2}}], stats:[ {base_stat:hp, stat:{ name:'hp' }}, {base_stat:attack, stat:{ name:'attack' }}, {base_stat:defense, stat:{ name:'defense' }}, {base_stat:specialAttack, stat:{ name:'special-attack' }}, {base_stat:specialDefense, stat:{ name:'special-defense' }},{base_stat:speed, stat:{ name:'speed' }}], types:[{type:{name:type1}},{type:{name:type2}}], moves:[]};
        console.log("pokemon", pokemon);
        userPokemons.createUserPokemon(name, imageUrl, pokemon.types, pokemon.stats, pokemon.abilities, baseExperience, weight, height, pokemon.moves);
        console.log("current user pokemons:",userPokemons.getUserPokemons());
    }
    
    function handleAutoFill(){
        const inputs = formRef.current.querySelectorAll('input');
        const name = inputs[0].value;
        inputs.forEach(input => {
            if(name !== "") input.value = name;
            else input.value = "a";
        })
    }

    return <form onSubmit={(event) => handleFormSubmission(event, event.target)} ref={formRef}>
        <div>
            <label htmlFor="">{'name'}</label>
            <input name="name"></input>
        </div>
        <div>
            <label htmlFor="">{'image URL'}</label>
            <input name="imageUrl"></input>
        </div>

        <div>
            <label htmlFor="">{'base experience'}</label>
            <input name="baseExperience"></input>
        </div>
        <div>
            <label htmlFor="">{'weight'}</label>
            <input name="weight"></input>
        </div>
        <div>
            <label htmlFor="">{'height'}</label>
            <input name="height"></input>
        </div>

        <div>
            <label htmlFor="">{'type 1'}</label>
            <input name="type1"></input>
        </div>
        <div>
            <label htmlFor="">{'type 2'}</label>
            <input name="type2"></input>
        </div>

        <div>
            <label htmlFor="">{'hp'}</label>
            <input name="hp"></input>
        </div>
        <div>
            <label htmlFor="">{'attack'}</label>
            <input name="attack"></input>
        </div>
        <div>
            <label htmlFor="">{'defense'}</label>
            <input name="defense"></input>
        </div>
        <div>
            <label htmlFor="">{'special attack'}</label>
            <input name="specialAttack"></input>
        </div>
        <div>
            <label htmlFor="">{'special defense'}</label>
            <input name="specialDefense"></input>
        </div>
        <div>
            <label htmlFor="">{'speed'}</label>
            <input name="speed"></input>
        </div>

        <div>
            <label htmlFor="">{'ability 1'}</label>
            <input name="ability1"></input>
        </div>
        <div>
            <label htmlFor="">{'ability 2'}</label>
            <input name="ability2"></input>
        </div>

        <button type="submit">create pokemon</button>
        <button onClick={(event) => {event.preventDefault(); handleAutoFill();}}>autofill delete later</button>
    </form>
}