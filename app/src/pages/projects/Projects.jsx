import React, { useRef, useEffect } from 'react'
import usePageTitle from '../../hooks/usePageTitle'
import Header from '../../components/Header'
import Navbar from '../../components/navbar/Navbar.jsx'
import './projects.scss'

function Projects() {

    const pageRef = useRef(null)

    useEffect(() => {
        pageRef.current.scrollIntoView()
        usePageTitle('Projects')
    }, [])

    return (
        <div ref={pageRef} className='flex flex-col'>
            <Navbar />
            <Header content="Projects" />
            <ul className='project-container'>
                <li className='project'>
                    <div className='header-font'>
                        UIGrades
                    </div>
                    <img src='image_placeholder.png' className='project-img' />
                </li>
                <li className='project'>
                    <div className='header-font'>
                        BeatMaker
                    </div>
                    <img src='image_placeholder.png' className='project-img' />
                </li>
                <li className='project'>
                    <div className='header-font'>
                        Emotion Detector
                    </div>
                    <img src='image_placeholder.png' className='project-img' />
                </li>
            </ul>
        </div>
    )
}

export default Projects