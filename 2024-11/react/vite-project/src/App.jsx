import './App.css'
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import Card from './components/Card/Card.jsx';
import Modal from './components/Modal/Modal.jsx';
import Layout from './components/Layout/Layout.jsx';
import Pokeball from './components/Pokeball/Pokeball.jsx';

function App() {
  
  return (
    <>
      {/* <Card />
      <Modal isOpen={false} />
      <Layout>
        <h1>Page Title</h1>
        <p>This is the main content of the page.</p>
      </Layout> */}
      <Pokeball />
    </>
  )
}

export default App
