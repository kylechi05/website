import React from 'react'
import { HashLink } from 'react-router-hash-link'

function Navbar() {
    return (
        <>
            <div className='fixed w-screen h-16 bg-white'>
                <HashLink smooth to="/#home">Home</HashLink>
                <HashLink smooth to="/#about">About</HashLink>
                <HashLink smooth to="/#projects">Projects</HashLink>
            </div>
        </>
    )
}

export default Navbar