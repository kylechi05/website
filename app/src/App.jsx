import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/home/Home.jsx'
import ProjectTransition from './pages/projects/ProjectTransition.jsx'
import Projects from './pages/projects/Projects.jsx'
import UIGrades from './pages/projects/project/UIGrades.jsx'
import BeatMaker from './pages/projects/project/BeatMaker.jsx'
import Emotion from './pages/projects/project/Emotion.jsx'
import InsiderSleuths from './pages/projects/project/InsiderSleuths.jsx'
import PageNotFound from './pages/PageNotFound.jsx'
import './index.scss'

function App() {
  
  return (
    <BrowserRouter>
    <div className='gradient'>
      <Routes>
        <Route path="/" index element={<Home />} />
        <Route path="/projects" element={<ProjectTransition />}>
          <Route index element={<Projects />} />
          <Route path='uigrades' element={<UIGrades />} />
          <Route path='beatmaker' element={<BeatMaker />} />
          <Route path='emotion' element={<Emotion />} />
          <Route path='insider-sleuths' element={<InsiderSleuths />} />
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
    </BrowserRouter>
  )
}

export default App