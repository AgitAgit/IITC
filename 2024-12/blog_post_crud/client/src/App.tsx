import './App.css'
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [ posts, setPosts ] = useState(null);

  useEffect(() => {
    async function getData(){
      const data = await axios.get('http://localhost:3000/api/posts');
      console.log(data.data);
    }
    getData();
  }, [])

  return (
    <>

    </>
  )
}

export default App
