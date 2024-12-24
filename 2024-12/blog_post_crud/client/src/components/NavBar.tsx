import React from 'react'
import { Link, useNavigate } from 'react-router-dom';


export default function NavBar() {
  const navigate = useNavigate();

  return (
    <div>
        <button onClick={() => navigate('/')}>Home</button>
        <button onClick={() => navigate('/create')}>Add Post</button>
    </div>
  )
}
