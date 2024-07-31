import './App.css';
import {useState} from 'react';


function Stats({name, health, inventory}){
  return(
    <div>
      <p>{`name:${name} health:${health} inventory:[${inventory}]`}</p>
    </div>
  );
}

function Place({name, description}){
  return(
    <div>
      <h2>{name}</h2>
      <p>{description}</p>
    </div>
  );
}

function MainDisplay({}){
  let [stats, setStats] = useState({name:"abc", health:100, inventory: ["a","b","c"] })  

  
  function handleClick(){
    setStats((stats) => ({...stats, health: stats.health - 1}));
  }
  return(
    <div>
      <Stats {...stats}></Stats>
      <button onClick={handleClick}>health</button>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <MainDisplay></MainDisplay>
    </div>
  );
}

export default App;
