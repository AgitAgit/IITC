import React from 'react'
import { useNavigate } from 'react-router-dom'

export type PostProps = {
    id:string,
    title:string,
    content:string,
    deletePost: (id:string) => void
}

export default function Post( {id, title, content, deletePost}:PostProps) {
  const navigate = useNavigate();

  return (
    <div className='border border-1 m-1'>
        <h2>{title}</h2>
        <p>{content}</p>
        <button>view</button>
        <button onClick={() => navigate('/edit', { state: { id, title, content }})}>edit</button>
        <button onClick={() => deletePost(id)}>delete</button>
    </div>
  )
}
