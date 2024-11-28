import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import Pokedex from './components/Pokedex/Pokedex.jsx';
import AddPokemonForm from './components/AddPokemonForm/AddPokemonForm.jsx';
//delete this comment
function App() {
  
  return (
    <>
      {/* <AddPokemonForm /> */}
      <Pokedex />
    </>
    )
}

export default App
