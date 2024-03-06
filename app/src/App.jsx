import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/navbar/Navbar.jsx'
import Home from './pages/home/Home.jsx'
import About from './pages/about/About.jsx'
import Projects from './pages/projects/Projects.jsx'
import PageNotFound from './pages/PageNotFound.jsx'
import './index.scss'

function App() {
  
  return (
    <BrowserRouter>
    <div className='gradient'>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route path="/" index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
    </BrowserRouter>
  )
}

export default App