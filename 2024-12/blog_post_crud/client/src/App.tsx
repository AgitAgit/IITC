import './App.css'
import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import axios from 'axios';
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from '@tanstack/react-query';

import HomePage from './pages/HomePage.tsx';
import CreateBlogPostPage from './pages/CreateBlogPostPage.tsx';
import EditBlogPostPage from './pages/EditBlogPostPage.tsx';
import ViewBlogPostPage from './pages/ViewBlogPostPage.tsx';

const queryClient = new QueryClient()

function App() {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    // console.log(`the component mounted with counter value of ${counter}`)

    // return () => {
    //   console.log(`the component unmounted with counter value of ${counter}`)
    // }
    // getData();
  }, [])

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/create' element={<CreateBlogPostPage />} />
            <Route path='/view' element={<ViewBlogPostPage />} />
            <Route path='/edit' element={<EditBlogPostPage />} />
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>
    </>
  )
}

export default App
