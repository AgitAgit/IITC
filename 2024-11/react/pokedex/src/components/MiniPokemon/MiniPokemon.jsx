import styles from './MiniPokemon.module.css';
import { useState, useEffect } from 'react';
import axios from 'axios';

export default function MiniPokemon({ name, url }){
    const [pokemon, setPokemon] = useState(null);
    //abilities[{ability:{ name, url},...},...],
    //sprites{front_default, back_default},
    //stats[{ base_stat, effort, stat:{name, url}},...]
    //types[{ slot, type:{name, url}},...]
    //height, weight, id, name, base_experience

    async function fetchData() {
        try{
            const data = await axios.get(url);
            setPokemon(data.data);
            console.log(name, data.data);
        } catch (error){
            console.log(error);
        }
    }
    
    useEffect( () => {
        fetchData();
    },[])

    return <div className={styles.card}>
        { ( pokemon &&
            <div className={styles[`${pokemon.types[0].type.name}`]}>

                <div>
                    <h2>{pokemon.name}</h2>
                </div>
                <div>
                    image area
                    <img src={pokemon.sprites.front_default} />
                </div>

            </div>
        )}
    </div>
}