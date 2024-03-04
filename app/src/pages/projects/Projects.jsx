import React from 'react'
import usePageTitle from '../../hooks/usePageTitle'

function Projects() {

    usePageTitle('Projects')

    return (
        <div className='h-screen pt-24 '>
            <header className='text-center header-font'>
                Projects
            </header>
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