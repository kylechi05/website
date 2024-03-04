import React from 'react'
import usePageTitle from '../../hooks/usePageTitle'
import './about.scss'

function About() {

    usePageTitle("About")

    return (
        <div className='about-me'>
            <header className='pt-24 text-center header-font'>
                About Me
            </header>
            <div className='content'>
                <div className='biography text-font text-lg'>
                    <img className='profile-picture' src='../empty_pfp.png' />
                    <div className='description'>Description of Myself</div>             
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