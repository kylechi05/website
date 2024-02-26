import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import About from './pages/About.jsx'
import Projects from './pages/Projects.jsx'
import Home from './pages/Home.jsx'
import Navbar from './components/Navbar.jsx'

import './index.css'

function App() {

  return (
    <BrowserRouter>
      <Navbar />
      <div>
        <Home />
        <About />
        <Projects />
      </div>
    </BrowserRouter>
  )
}

export default App