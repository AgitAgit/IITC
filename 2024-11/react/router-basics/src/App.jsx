import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'

//page imports
import Home from './pages/Home';
import About from './pages/About/About.jsx';
import Dashboard from './pages/Dashboard/Dashboard.jsx';
import Articles from './pages/Articles/Articles.jsx';
//component imports
import Navbar from './components/Navbar.jsx';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={ <Home /> } />
          <Route path='/about' element={ <About /> } />
          <Route path='/dashboard' element={ <Dashboard /> } />
          <Route path='/articles' element={ <Articles /> }>
            <Route path='news' element={ <h2>This is the News page</h2> }/>
            <Route path='politics' element={ <h2>This is the politics page</h2> }/>
            <Route path='tech' element={ <h2>This is the tech page</h2> }/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
