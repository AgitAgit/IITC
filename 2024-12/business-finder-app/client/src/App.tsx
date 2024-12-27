import './App.css'
import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import axios from 'axios';
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from '@tanstack/react-query';

function App() {

  return (
    <>
      {/* <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/create' element={<CreateBlogPostPage />} />
            <Route path='/view' element={<ViewBlogPostPage />} />
            <Route path='/edit' element={<EditBlogPostPage />} />
          </Routes>
        </BrowserRouter>
      </QueryClientProvider> */}
    </>
  )
}

export default App
