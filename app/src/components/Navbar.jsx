import React from 'react'
import { HashLink } from 'react-router-hash-link'

function Navbar() {
    return (
        <div className='fixed w-screen h-16 bg-white'>
            <HashLink smooth to="/#home">Home</HashLink>
            <HashLink smooth to="/#about">About</HashLink>
            <HashLink smooth to="/#projects">Projects</HashLink>
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
    )
}

export default Navbar