import styles from './Pokemon.module.css';
import axios from 'axios';
import { useState, useEffect } from 'react';

import Utils from '../../utils/Utils';

//Add a function that "rotates" the sprite.
//loading="lazy" to the img element

//Should receive the pokemon object from MiniPokemon as it fetches it anyway...
export default function Pokemon({ pokemon, pokeballImg }){
    //abilities[{ability:{ name, url},...},...],
    //sprites{front_default, back_default},
    //stats[{ base_stat, effort, stat:{name, url}},...]
    //types[{ slot, type:{name, url}},...]
    //height, weight, id, name, base_experience
    
    return(
        <div className={ `${styles.card} ${styles[`${pokemon.types[0].type.name}`]}` }>
                <img src={ pokeballImg } className={ styles['pokeball-image']} />
                <div className={styles['top-div']}>
                    <header>
                        <div className={ styles['name'] }> { Utils.capitalizeWord(pokemon.name) }</div>
                        { Utils.getPokemonTypes(pokemon) }
                    </header>
                </div>

                <div className={styles['data-div']}>
                    <img src={pokemon.sprites.other.dream_world.front_default} className={styles['poke-image']} />
                    
                    <div className={ styles['inner-data-div'] }>
                        <div>
                            stats section: hp, attack, defense, speed
                        </div>
                        <div>
                            abilities section
                        </div>
                        <footer>
                            weight, height, base experience
                        </footer>
                    </div>
                </div>
        </div>
    )
}