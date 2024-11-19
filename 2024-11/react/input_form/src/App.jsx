import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [text, setText] = useState("")

  const handleInput = (e) => {
    console.log(e.target.value);
    setText(e.target.value);
  }

  return (
    <>
      <div>
        <h1>Inputs in React</h1>
        <label htmlFor="input">Type something:</label>
        <input type='text' name='input' id='input' onChange={handleInput}></input>
      </div>
    </>
  )
}

export default App
