import styles from './Pokemon.module.css';
import axios from 'axios';
import { useState, useEffect } from 'react';

//Add a function that "rotates" the sprite.
//loading="lazy" to the img element
//add an extra class that makes the back card color fit the type


export default function Pokemon({name, url}){
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

    return(
        <div className={styles.card}>

        { pokemon && (
                <div className={styles[`${pokemon.types[0].type.name}`]}>
                    <header>name, types
                    
                    </header>
                    <div>
                    image section
                    <img src={pokemon.sprites.front_default}></img>
                    </div>
                    <div>stats section: hp, attack, defense, speed</div>
                    <div>abilities section</div>
                    <footer>weight, height, base experience</footer>
                </div>
                )
            }
        </div>
    )
}