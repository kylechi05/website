import React, { useRef, useEffect } from 'react'
import usePageTitle from '../../hooks/usePageTitle'
import Header from '../../components/Header'
import Navbar from '../../components/navbar/Navbar.jsx'
import Spotify from '../../components/Spotify.jsx'
import './home.scss'

function Home() {

    const pageRef = useRef(null)

    useEffect(() => {
        pageRef.current.scrollIntoView()
        usePageTitle('Home')
    }, [])

    return (
        <div ref={pageRef} className='text-font'>
            <Navbar primary={true} />
            <Header content="Home" />
            <div className='flex flex-col md:flex-row p-24'>
                <div className='md:w-3/4'>
                    <img src='empty_pfp.png' alt='Image of me' />
                </div>
                <div className='md:pl-16'>
                    <h1 className='text-6xl'>About Me</h1>
                    <br />
                    <p>Hi. I'm Kyle, a computer science student at The University of Iowa.</p>
                    <p>
                        Currently, I'm a student researcher at{' '}
                        <a className='underline' href="https://uiowa.edu/" target='_blank'>UIowa</a>
                        {' '}working on Deep Learning.
                    </p>
                </div>
            </div>
            <Spotify />

        </div>
    )
}

export default Home