import styles from './Pokedex.module.css';
import axios from 'axios';
import { useState, useEffect } from 'react';

import Pokemon from '../Pokemon/Pokemon.jsx';
import MiniPokemon from '../MiniPokemon/MiniPokemon.jsx';

const Pokedex = () => {
    const [ pokemons, setPokemons ] = useState(null);

    async function fetchData(){
        try{//could add pagination later, using limit and offset if it's available in the api.
            const { data : { results }} = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=10');
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
        <div className={styles['mini-pokemon-grid']}>
            { pokemons && (
                pokemons.map(pokemon => {
                    return <div key={pokemon.url}><MiniPokemon name={pokemon.name} url={pokemon.url}/></div>
                })
            )}
        </div>
    )
}

export default Pokedex