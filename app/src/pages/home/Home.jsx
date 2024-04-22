import React, { useRef, useEffect } from 'react'
import usePageTitle from '../../hooks/usePageTitle'
import Header from '../../components/Header'
import Navbar from '../../components/navbar/Navbar.jsx'
import './home.scss'

let access_token

const refreshToken = async () => {
    const result = await fetch('http://localhost:3000/api/get-access-token')
    const newToken = await result.json()
    const newAccessToken = newToken.access_token
    access_token = newAccessToken
}

// can't request song before getting an access token, need to make an initial call with useeffect maybe
const currentSong = async () => {
    const result = await fetch(`http://localhost:3000/api/currently-playing/${access_token}`)
    const currSong = await result.json()
    console.log(currSong)
}

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
            <div onClick={currentSong}>
                currentSong
            </div>
            <div onClick={refreshToken}>
                refreshToken
            </div>
        </div>
    )
}

export default Home