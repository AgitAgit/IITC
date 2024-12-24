import React from 'react'
import axios from 'axios';
import { useRef } from 'react'
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useNavigate, useLocation } from 'react-router-dom';

export default function EditBlogPostPage() {
  const location = useLocation();
  const { id, title, content } = location.state;
  const titleRef = useRef(title);
  const contentRef = useRef(content);
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { mutateAsync: editPost, isLoading, error } = useMutation({
    mutationFn: async (id) => {
      const result = await axios.put(`http://localhost:3000/api/posts/${id}`, {
        title: titleRef.current.value,
        content: contentRef.current.value
      });
      console.log(result.data);
      return result.data;
    },
    onSettled: () => {
      navigate('/');
    }
  })

  async function handleEditClick() {
    const result = await editPost(id);
  }

  return (
    <div>
      EditBlogPostPage
      <br></br>
      <label>ID:{id}</label>
      <br></br>
      <label>title</label>
      <input ref={titleRef} defaultValue={title}></input>
      <br></br>
      <label>content</label>
      <input ref={contentRef} defaultValue={content}></input>
      <button onClick={handleEditClick}>Edit</button>
    </div>
  )
}
