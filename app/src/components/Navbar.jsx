import React, { useEffect } from 'react'
import { Link, Outlet, useLocation } from 'react-router-dom'
import './navbar.scss'

function Navbar() {

    return (
        <>
            <nav className='fixed w-full bg-white'>
                <ul className='flex justify-center items-center'>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/projects">Projects</Link></li>
                </ul>
            </nav>
            <Outlet />
        </>
    )
}

export default Navbar