import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"

import Navbar from './components/Navbar/Navbar.jsx';
import Pokedex from './components/Pokedex/Pokedex.jsx';
import AddPokemonForm from './components/AddPokemonForm/AddPokemonForm.jsx';
import RoutePokemon from './components/Pokemon/RoutePokemon.jsx';
import ErrorPage from './pages/ErrorPage/ErrorPage.jsx';

function App() {
  
  return (
    <>
      <BrowserRouter>
         <Navbar />
        <Routes>
          <Route path="/" element={<Pokedex/>} />
        {/* <Route path="/home" element={<p>this is the home page</p>} /> */}
          <Route path="/About" element={<p>This is a place-holder for the about page</p>} />
          <Route path="/Add-pokemon" element={<AddPokemonForm />} />
          <Route path="/pokemon/:id" element={ <RoutePokemon />} />
          <Route path="*" element={ <ErrorPage />} />
        </Routes>
      </BrowserRouter>
      {/* <AddPokemonForm /> */}
      {/* <Pokedex /> */}
    </>
    )
}

export default App
