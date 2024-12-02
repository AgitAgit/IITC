import styles from './Pokemon.module.css';
import axios from 'axios';
import { useState, useEffect, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import pokeballImg from '../../assets/pokeball_background.png';
import backArrow from '../../assets/Images/backArrow.svg';
import Utils from '../../utils/Utils';

export default function Pokemon(){
    const [ pokemon, setPokemon ] = useState(null);
    const [currentTab, setCurrentTab] = useState(null);
    const aboutButton = useRef();
    const { id } = useParams();
    const navigate = useNavigate();

    //abilities[{ability:{ name, url},...},...],
    //sprites{front_default, back_default},
    //stats[{ base_stat, effort, stat:{name, url}},...]
    //types[{ slot, type:{name, url}},...]
    //height, weight, id, name, base_experience
    //moves

    async function fetchData() {
        try{
            const data = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
            console.log("data",data);
            if(Utils.isPokemon(data)) setPokemon(data.data);
            else{
                setTimeout(() => setErrorFetching(true), 2000);
            } 
        } catch (error){
            console.log(error);
        }
    }

    function handleBackClick(){
        //useNavigate to navigate programmatically to the home page?
        navigate('/');
    }

    useEffect(() => {
        // console.log(pokemon);
        fetchData();
        // handleTabClick(aboutButton.current);
    },[])

    function handleTabClick(element){
        currentTab?.classList.remove(styles['selected-tab']);
        element.classList.add(styles['selected-tab']);
        setCurrentTab(element);
    }
    
    return(
        <div>{(pokemon &&
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
                            {( currentTab?.textContent === 'About' &&
                                <pre className={styles['stats-div']}>
                                    {`Abilities:\n`}
                                    <span>{pokemon.abilities[0]?.ability.name}</span>
                                    <br></br>
                                    <span>{pokemon.abilities[1]?.ability.name}</span>
                                    <br></br>
                                    <br></br>
                                    Attributes:
                                    <br></br>
                                    Weight:{`${pokemon.weight}\n`}
                                    Height:{`${pokemon.height}`}
                                </pre>
                            )}
                            {( currentTab?.textContent === 'Base stats' &&
                                <div className={styles['stats-div']}>
                                    { pokemon.stats.map(stat => (
                                        <div key={`${pokemon.name}${stat.stat.name}`} className={styles['stat-div']}>
                                            {/* <label htmlFor={stat.stat.name}>{`${stat.stat.name}:${stat.base_stat}`}</label> */}
                                            <div className={styles['stat-text']}>
                                                <span>{stat.stat.name}</span>
                                                <span>{stat.base_stat}</span>
                                            </div>
                                            <progress id={stat.stat.name} value={stat.base_stat} max={100}></progress>
                                            <br></br>
                                        </div>
                                    )) }
                                </div>
                            )}
                            {( currentTab?.textContent === 'Moves' &&
                                <div className={styles['stats-div']}>
                                    { pokemon.moves.slice(0,10).map(move => <div key={move.move.name}>{move.move.name}</div>) }
                                </div>
                            )}
            
                            {/* <div>
                                stats section: hp, attack, defense, speed
                            </div>
                            <div>
                                abilities section
                            </div>
                            <footer>
                                weight, height, base experience
                            </footer> */}
                        </div>
                    </div>
            </div>
        )}</div>
    )
}