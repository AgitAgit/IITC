import React from 'react'
import { useQuery, useMutation } from '@tanstack/react-query';
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

  const { mutateAsync: deletePost, isLoadingDelete, errorDelete } = useMutation({
    mutationFn: async function(id:string){
      const result = await axios.delete(`http://localhost:3000/api/posts/${id}`);
      console.log(result);
    }
  })
  
  if(isLoading) return 'Loading...';
  if(error) return 'An error has occured: ' + error.message;
  return (
      <div>
        HomePage
        <br></br>
        {data && data.map(post => <Post id={post._id} title={post.title} content={post.content} deletePost={deletePost}></Post>)}
      </div>
  )
}
