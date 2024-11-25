// import './Pokemon.module.css';
import styles from './Pokemon.module.css';
import axios from 'axios';
import { useState, useEffect, useRef } from 'react';

import backArrow from '../../assets/Images/backArrow.svg';
import Utils from '../../utils/Utils';

export default function Pokemon({ pokemon, pokeballImg, handleBackClick }){
    const [currentTab, setCurrentTab] = useState();
    const aboutButton = useRef();
    //abilities[{ability:{ name, url},...},...],
    //sprites{front_default, back_default},
    //stats[{ base_stat, effort, stat:{name, url}},...]
    //types[{ slot, type:{name, url}},...]
    //height, weight, id, name, base_experience

    useEffect(() => {
        handleTabClick(aboutButton.current);
    },[])

    function handleTabClick(element){
        currentTab?.classList.remove(styles['selected-tab']);
        element.classList.add(styles['selected-tab']);
        setCurrentTab(element);
    }
    
    return(
        <div className={ `${styles.card} ${styles[`${pokemon.types[0].type.name}`]}` }>
                <img src={ pokeballImg } className={ styles['pokeball-image'] } />
                <div className={styles['top-div']}>
                    <header>
                        <div className={ styles['back-and-like-div'] }>
                            <img src={ backArrow } className={ styles['back-arrow'] } onClick={ handleBackClick } />
                            <button className={ styles['like-button'] } >🤍</button>
                        </div>
                        <div className={ styles['name'] }> { Utils.capitalizeWord(pokemon.name) } </div>
                        <div className={ styles['types-div'] }> { Utils.getPokemonTypes(pokemon) } </div>
                    </header>
                </div>

                <div className={styles['data-div']}>
                    <img src={pokemon.sprites.other.dream_world.front_default} className={styles['poke-image']} />
                    
                    <div className={ styles['inner-data-div'] }>
                        <div className={styles['tabs-div']}>
                            {/* About, Base stats, Evolutions, moves */}
                            <button className={`${styles.tab}`} onClick={(event) => handleTabClick(event.target)} ref={aboutButton}>About</button>
                            <button className={styles.tab} onClick={(event) => handleTabClick(event.target)}>Base stats</button>
                            <button className={styles.tab} onClick={(event) => handleTabClick(event.target)}>Moves</button>
                        </div>
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