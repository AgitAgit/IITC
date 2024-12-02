import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"

import Pokedex from './components/Pokedex/Pokedex.jsx';
import AddPokemonForm from './components/AddPokemonForm/AddPokemonForm.jsx';

function App() {
  
  return (
    <>
      <BrowserRouter>
         {/* here I should put a navbar */}
        <Routes>
          <Route path="/" element={<Pokedex/>} />
          <Route path="/about" element={<p>This is a place-holder for the about page</p>} />
          <Route path="/addPokemon" element={<AddPokemonForm />} />
        </Routes>
      </BrowserRouter>
      {/* <AddPokemonForm /> */}
      {/* <Pokedex /> */}
    </>
    )
}

export default App
