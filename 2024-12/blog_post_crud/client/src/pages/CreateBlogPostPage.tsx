import React from 'react'
import axios from 'axios';
import { useRef } from 'react'
import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';

export default function CreateBlogPostPage() {
  const { mutateAsync: createPost, isLoading, error } = useMutation({
    mutationFn: async(newPost) => {
      const result = await axios.post('http://localhost:3000/api/posts', { post: newPost });
      // console.log("mutate result", result.data);
      return result.data;
    }
  })
  const navigate = useNavigate();
  const titleRef = useRef('');
  const contentRef = useRef('');

  async function handleSend() {
    const title = titleRef.current.value;
    const content = contentRef.current.value;
    console.log(title, content);
    if(title !== '' && content !== ''){
      const result = await createPost({title, content});
      // console.log("handle send result",result);
      if(result._id){
        navigate('/')
      }
      titleRef.current.value = '';
      contentRef.current.value = '';
    }
  }
  
  return (
    <div>
      Create a new post:
      <br></br>
      <label>Title:</label>
      <input ref={titleRef}></input>  
      <br></br>  
      <label>Content:</label>
      <input ref={contentRef}></input>
      <br></br>
      <button onClick={handleSend}>Send</button>
      <label>{isLoading && 'creating post...' || error && 'an error occured...' }</label>
    </div>
  )
}
