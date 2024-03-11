import React from 'react'
import usePageTitle from '../../hooks/usePageTitle'
import Header from '../../components/Header'
import './projects.scss'

function Projects() {

    usePageTitle('Projects')

    return (
        <div className='h-screen'>
            <Header content="Projects" />
            <ul className='project-container'>
                <li className='project'>
                    <div className='project-name'>UIGrades</div>
                    <div className='extend'> HI </div>
                </li>
                <li className='project'>
                    <div className='project-name'>BeatMaker</div>
                    <div className='extend'> HI </div>
                </li>
                <li className='project'>
                    <div className='project-name'>Emotion Detector</div>
                    <div className='extend'> HI </div>
                </li>
            </ul>
        </div>
    )
}

export default Projects