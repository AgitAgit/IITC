import axios from 'axios';
import { useState, useEffect } from 'react';

function Pokeball(){
    const [ pokemons, setPokemons ] = useState([])

    const fetchData = async() => {
        try {
            const { data: { results } } = await axios.get('https://pokeapi.co/api/v2/pokemon');
            setPokemons(results);
            console.log(results);
        } catch(error){
            console.log(error);
        }
    }

    useEffect(() => {
        fetchData();
    }, [])
    
    return <div>
        This is my Pokeball
        <ul>
            { pokemons.map((pokemon, index) => {
                return <li key={`pokemon-${index}`}>
                    <p>{pokemon.name}</p>
                </li>
            })
            }
        </ul>
    </div>
}

export default Pokeball;