import React from 'react'
import usePageTitle from '../../hooks/usePageTitle'
import Header from '../../components/Header'
import './projects.scss'

function Projects() {

    usePageTitle('Projects')

    return (
        <div className=''>
            <Header content="Projects" />
            <ul className='project-container py-32'>
                <li className='project'>
                    <div className='project-name header-font'>UIGrades</div>
                    <div className='expand'>
                        <div className='expanded-content'>HIIII</div>
                        <div className='col col-1'></div>
                        <div className='col col-2'></div>
                        <div className='col col-3'></div>
                        <div className='col col-4'></div>
                        <div className='col col-5'></div>
                        <div className='col col-6'></div>
                        <div className='col col-7'></div>
                        <div className='col col-8'></div>
                        <div className='col col-9'></div>
                        <div className='col col-10'></div>
                        <div className='col col-11'></div>
                        <div className='col col-12'></div>
                        <div className='col col-13'></div>
                        <div className='col col-14'></div>
                        <div className='col col-15'></div>
                    </div>
                </li>
                <li className='project'>
                    <div className='project-name header-font'>BeatMaker</div>
                </li>
                <li className='project'>
                    <div className='project-name header-font'>Emotion Detector</div>
                </li>
            </ul>
        </div>
    )
}

export default Projects