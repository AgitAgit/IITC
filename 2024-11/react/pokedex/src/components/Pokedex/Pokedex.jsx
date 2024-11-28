import styles from './Pokedex.module.css';
import axios from 'axios';
import { useState, useEffect } from 'react';

import MiniPokemon from '../MiniPokemon/MiniPokemon.jsx';
import PokeModal from '../PokeModal/PokeModal.jsx';
import Pokemon from '../Pokemon/Pokemon.jsx';

const Pokedex = () => {
    const [ pokemons, setPokemons ] = useState(null);
    const [ userPokemons, setUserPokemons ] = useState(null);

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

        if(localStorage.getItem('userPokemons')){
            setUserPokemons(JSON.parse(localStorage.getItem('userPokemons')));
        }
    }, [])

    return (
        <div className={styles['mini-pokemon-grid']}>
            {/* { userPokemons && (
                userPokemons.map(pokemon => {
                    return <div key={pokemon.id}><MiniPokemon readyPokemon={pokemon} /></div>
                })
            )} */}
            { pokemons && (
                pokemons.map(pokemon => {
                    return <div key={pokemon.url}><MiniPokemon name={pokemon.name} url={pokemon.url}/></div>
                })
            )}
        </div>
    )
}

export default Pokedex