import React from 'react'
import usePageTitle from '../hooks/usePageTitle'

function About() {

    usePageTitle("About")

    return (
        <div className=''>
            <header className='pt-24 text-center header-font'>
                About Me
            </header>
            <img src='../empty_pfp.png' />
            <img src='../empty_pfp.png' />
            <div>
                About
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
    )
}

export default About