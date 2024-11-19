import styles from './Pokedex.module.css';
import axios from 'axios';
import { useState, useEffect } from 'react';

import Pokemon from '../Pokemon/Pokemon.jsx';

const Pokedex = () => {
    const [ pokemons, setPokemons ] = useState(null);

    async function fetchData(){
        try{//could add pagination later, using limit and offset if it's available in the api.
            const { data : { results }} = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=40');
            // console.log(results);
            setPokemons(results);
        } catch (error){
            console.log(error);
        }
    }

    useEffect( () => {
        fetchData();
    }, [])

    return (
        <div>
            Pokedex
            <ul>
                { pokemons && (
                    pokemons.map(pokemon => {
                        return <li key={pokemon.url}><Pokemon name={pokemon.name} url={pokemon.url}/></li>
                    })
                )}
            </ul>
        </div>
    )
}

export default Pokedex