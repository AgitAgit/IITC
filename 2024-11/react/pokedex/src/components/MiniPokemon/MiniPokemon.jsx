import styles from './MiniPokemon.module.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import pokeballImg from './../../assets/pokeball_background.png';

export default function MiniPokemon({ name, url }){
    const [pokemon, setPokemon] = useState(null);
    const [cardClass, setCardClass] = useState(`${styles.card}`);
    //abilities[{ability:{ name, url},...},...],
    //sprites{front_default, back_default},
    //stats[{ base_stat, effort, stat:{name, url}},...]
    //types[{ slot, type:{name, url}},...]
    //height, weight, id, name, base_experience

    //High quality sprites: sprites.other.dream_world.front_default
    async function fetchData() {
        try{
            const data = await axios.get(url);
            setPokemon(data.data);
            setCardClass(previousCardClass => `${previousCardClass} ${styles[`${pokemon.types[0].type.name}`]}`)
            console.log(name, data.data);
        } catch (error){
            console.log(error);
        }
    }
    
    useEffect( () => {
        fetchData();
    },[])

    return ( 
        <div className={cardClass}>
            <img src={pokeballImg} className={styles.pokeballImg} />
            { ( pokemon &&
                <div className={styles[`${pokemon.types[0].type.name}`]}>

                    <div>
                        <h2>{pokemon.name}</h2>
                    </div>
                    <div>
                        image area
                        <img src={pokemon.sprites.other.dream_world.front_default} className={styles.sprite}/>
                    </div>

                </div>
            )}
        </div>
    )
}