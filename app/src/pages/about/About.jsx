import React, { useRef, useEffect } from 'react'
import usePageTitle from '../../hooks/usePageTitle'
import Header from '../../components/Header'
import Navbar from '../../components/navbar/Navbar.jsx'
import './about.scss'

function About() {

    const pageRef = useRef(null)

    useEffect(() => {
        pageRef.current.scrollIntoView()
        usePageTitle("About")
    }, [])

    return (
        <div ref={pageRef} className='about-me'>
            <Navbar />
            <Header content="About Me" />
            <div className='content'>
                <div className='biography text-font text-xl'>
                    <img className='profile-picture' src='../empty_pfp.png' />
                    <div className='description'>
                        <h1 className='header-font'>I'm Kyle Chi, a computer science student at the University of Iowa.</h1>
                        <br />
                        <p>
                            Currently, I'm a student researcher at {' '}
                            <a href='https://uiowa.edu/' target='_blank' className='underline'>UIowa</a>
                            {' '} working on Deep Learning.
                        </p>
                    </div>             
                </div>
                <div className='activities'>
                    <div className='experiences'>
                        SWE Intern
                        Lifeguard
                    </div>
                    <div className='extracurriculars'>
                        ACM
                    </div>
                </div>
                <div className='external'>
                    <a
                        href="Resume - Kyle Chi.pdf"
                        target="_blank"
                    >
                        Resume
                    </a>
                    <a
                        href="https://github.com/kylechi05"
                        target="_blank"
                    >
                        GitHub
                    </a>
                    <a
                        href="https://www.linkedin.com/in/kyle-chi/"
                        target="_blank"
                    >
                        LinkedIn
                    </a>
                </div>
            </div>
        </div>
    )
}

export default About