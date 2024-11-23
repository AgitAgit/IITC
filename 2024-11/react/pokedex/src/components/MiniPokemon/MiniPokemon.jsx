import styles from './MiniPokemon.module.css';
import { useState, useEffect } from 'react';
import axios from 'axios';

import loadingGif from './../../assets/loading_gif.gif';
import pokeballImg from './../../assets/pokeball_background.png';
import Utils from '../../utils/Utils.jsx';
import PokeModal from '../PokeModal/PokeModal.jsx';

export default function MiniPokemon({ name, url }){
    const [pokemon, setPokemon] = useState(null);
    const [cardClass, setCardClass] = useState(`${styles.card}`);
    const [ errorFetching, setErrorFetching ] = useState(false);

    //abilities[{ability:{ name, url},...},...],
    //sprites{front_default, back_default},
    //stats[{ base_stat, effort, stat:{name, url}},...]
    //types[{ slot, type:{name, url}},...]
    //height, weight, id, name, base_experience

    //High quality sprites: sprites.other.dream_world.front_default
    async function fetchData() {
        try{
            const data = await axios.get(url);
            // console.log("data",data);
            if(Utils.isPokemon(data)) setPokemon(data.data);
            else{
                setTimeout(() => setErrorFetching(true), 2000);
            } 
        } catch (error){
            console.log(error);
        }
    }

    useEffect( () => {
        fetchData();
    },[])
    
    useEffect(() => {
        if(pokemon) setCardClass(previousCardClass => `${previousCardClass} ${styles[`${pokemon.types[0].type.name}`]}`)
    }, [pokemon])

    function refreshPage(){
        location.reload();
    }

    return ( 
        <div className={cardClass}>
            { ( pokemon && <img src={pokeballImg} className={styles.pokeballImg} /> ) }
            { ( pokemon ?
                // <div className={styles[`${pokemon.types[0].type.name}`]}>
                <>
                    <div>
                        <div>
                            <span className={styles.heading}>{Utils.capitalizeWord(pokemon.name)}</span>
                            <div>{ Utils.getPokemonTypes(pokemon) }</div>
                        </div>
                        
                        <img src={pokemon.sprites.other.dream_world.front_default} className={styles.sprite}/>

                    </div>
                    <PokeModal pokemon={ pokemon } pokeballImg={ pokeballImg }/>
                </>
                : (errorFetching ? 
                    <div className={styles['error-div']}>Something went wrong...<button onClick={refreshPage}>Refresh page</button></div>
                    : <img src={loadingGif} className={styles['loading-gif']} />
                )
            )}
        </div>
    )
}