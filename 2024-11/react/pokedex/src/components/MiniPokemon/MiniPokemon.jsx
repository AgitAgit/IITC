import styles from './MiniPokemon.module.css';
import { useState, useEffect } from 'react';
import axios from 'axios';

import loadingGif from './../../assets/loading_gif.gif';
import pokeballImg from './../../assets/pokeball_background.png';
import utils from '../../utils/utils';

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
            // setPokemon(data.data);
            // console.log(name, data.data);
        } catch (error){
            console.log(error);
        }
    }
    
    function getPokemonTypes(pokemon){
        return pokemon?.types.map((type, index) => {
            return <span key={index} className={styles.typeDiv}>{utils.capitalizeWord(type.type.name)}</span>
        });
    }

    useEffect( () => {
        fetchData();
    },[])
    
    useEffect(() => {
        if(pokemon) setCardClass(previousCardClass => `${previousCardClass} ${styles[`${pokemon.types[0].type.name}`]}`)
    }, [pokemon])

    return ( 
        <div className={cardClass}>
            <img src={pokeballImg} className={styles.pokeballImg} />
            { ( pokemon ?
                // <div className={styles[`${pokemon.types[0].type.name}`]}>
                <div>

                    <div>
                        <span className={styles.heading}>{utils.capitalizeWord(pokemon?.name)}</span>
                        <div>{() => { if (pokemon) getPokemonTypes(pokemon)}}</div>
                    </div>
                    
                    <img src={pokemon?.sprites.other.dream_world.front_default} className={styles.sprite}/>

                </div>
                :
                <img src={loadingGif} className={styles['loading-gif']} />
            )}
        </div>
    )
}