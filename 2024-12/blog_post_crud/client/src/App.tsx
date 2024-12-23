import './App.css'
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [ posts, setPosts ] = useState(null);
  const [ counter, setCounter ] = useState(0);

  useEffect(() => {
    async function getData(){
      const data = await axios.get('http://localhost:3000/api/posts');
      console.log(data.data);
    }
    getData();

    // console.log(`the component mounted with counter value of ${counter}`)
    
    // return () => {
    //   console.log(`the component unmounted with counter value of ${counter}`)
    // }
  }, [])

  return (
    <>
    </>
  )
}

export default App
