import React from 'react'
import usePageTitle from '../../hooks/usePageTitle'
import Header from '../../components/Header'

function Projects() {

    usePageTitle('Projects')

    return (
        <div className='h-screen'>
            <Header content="Projects" />
            <div className='content'>
                <div className='completed'>
                    UI Grades
                    Beatmaker
                </div>
                <div className='in-progress'>
                    Deep Learning
                </div>
            </div>
        </div>
    )
}

export default Projects