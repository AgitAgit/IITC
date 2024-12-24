import React from 'react'
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';
import Post from '../components/Post';
// import { PostProps } from '../components/Post'

async function fetchData(){
  const response = await axios.get('http://localhost:3000/api/posts');
  return response.data;
}

export default function HomePage() {
  const queryClient = useQueryClient();
  
  const { isLoading, error, data } = useQuery({
    queryKey: ['postsData'],
    queryFn: fetchData
  });

  const { mutateAsync: deletePost, isLoadingDelete, errorDelete } = useMutation({
    mutationFn: async function(id:string){
      const result = await axios.delete(`http://localhost:3000/api/posts/${id}`);
      console.log(result);
    },
    onMutate: async (id) => {//will id be received here? what are the variables onMutate receives by default?
      await queryClient.cancelQueries(['postsData']);//cancel outgoing fetches so it doesn't mess up the optimistic update
      const previousData = queryClient.getQueryData(['postsData']);//get the old data
      queryClient.setQueryData(['postsData'], previousData.filter(post => post._id !== id))//set the new data
      return { previousData };//return a context object with a snapshot of the old value
    },
    onError: (err, variables, context) => {
      queryClient.setQueryData(['postsData', context.previousData]);//rollback to the previous value if mutation errs
    },
    onSettled: () => {
      queryClient.invalidateQueries(['postsData']);//causes a refetch?
    }
  })
  
  if(isLoading) return 'Loading...';
  if(error) return 'An error has occured: ' + error.message;
  return (
      <div>
        HomePage
        <br></br>
        {data && data.map(post => <Post key={post._id} id={post._id} title={post.title} content={post.content} deletePost={deletePost}></Post>)}
      </div>
  )
}
