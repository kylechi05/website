import React from 'react'
import usePageTitle from '../hooks/usePageTitle'

function Projects() {

    usePageTitle('Projects')

    return (
        <div className='h-screen pt-24 '>
            <header className='text-center header-font'>
                Projects
            </header>
        </div>
    )
}

export default Projects