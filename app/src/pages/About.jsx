import React from 'react'
import usePageTitle from '../hooks/usePageTitle'

function About() {

    usePageTitle("About")

    return (
        <>
            <div
                className='bg-green-100 h-screen'
            >
                About
            </div>
        </>
    )
}

export default About