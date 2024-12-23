import React from 'react'

export type PostProps = {
    id:string,
    title:string,
    content:string
}

export default function Post( {id, title, content}:PostProps) {
  return (
    <div className='border border-1 m-1'>
        <h2>{title}</h2>
        <p>{content}</p>
        <button>view</button>
        <button>edit</button>
        <button>delete</button>
    </div>
  )
}
