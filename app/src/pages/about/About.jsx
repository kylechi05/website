import React from 'react'
import usePageTitle from '../../hooks/usePageTitle'
import Header from '../../components/Header'
import './about.scss'

function About() {

    usePageTitle("About")

    return (
        <div className='about-me'>
            <Header content="About Me" />
            <div className='content'>
                <div className='biography text-font text-xl'>
                    <img className='profile-picture' src='../empty_pfp.png' />
                    <div className='description'>
                        <h1 className='header-font'>I'm Kyle Chi, a computer science student at the University of Iowa.</h1>
                        <br />
                        <p>
                            Currently, I'm a student researcher at UIowa learning and working on Deep Learning with Pytorch.
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