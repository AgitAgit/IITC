import React from 'react'
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import Post from '../components/Post';
// import { PostProps } from '../components/Post'

async function fetchData(){
  const response = await axios.get('http://localhost:3000/api/posts');
  return response.data;
}

export default function HomePage() {
  const { isLoading, error, data } = useQuery({
    queryKey: ['postsData'],
    queryFn: fetchData
  });
  if(isLoading) return 'Loading...';
  if(error) return 'An error has occured: ' + error.message;

  return (
      <div>
        HomePage
        <br></br>
        {data && data.map(post => <Post id={post._id} title={post.title} content={post.content}></Post>)}
      </div>
  )
}
