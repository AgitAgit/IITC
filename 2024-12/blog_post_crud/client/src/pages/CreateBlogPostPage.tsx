import React from 'react'
import { useRef } from 'react'

export default function CreateBlogPostPage() {
  const titleRef = useRef('');
  const contentRef = useRef('');

  async function handleSend() {
    
  }
  
  return (
    <div>
      Create a new post:
      <label>Title:</label>
      <input ref={titleRef}></input>    
      <label>Content:</label>
      <input ref={contentRef}></input>
      <button>Send</button>
    </div>
  )
}
