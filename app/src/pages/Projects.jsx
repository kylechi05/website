import React from 'react'
import usePageTitle from '../hooks/usePageTitle'

function Projects() {

    usePageTitle('Projects')

    return (
        <>
            <div
                className='bg-red-100 h-screen'
            >
                Projects
            </div>
        </>
    )
}

export default Projects