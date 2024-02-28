import React, { useState, useRef, useEffect } from 'react'
import { Link, Outlet } from 'react-router-dom'
import './navbar.scss'

function Navbar() {

    const [sliderLeft, setSliderLeft] = useState(null)
    const [sliderWidth, setSliderWidth] = useState(null)
    const [sliderReady, setSliderReady] = useState(false)
    const homeRef = useRef(null)

    useEffect(() => {
        if (homeRef.current) {
            setSliderLeft(homeRef.current.getBoundingClientRect().left)
            setSliderWidth(homeRef.current.offsetWidth)
            setSliderReady(true)
        }   
    }, [])

    const handleClick = (e) => {
        e.preventDefault()
        setSliderLeft(e.target.getBoundingClientRect().left)
        setSliderWidth(e.target.offsetWidth)
    }

    return (
        <>
            <div className='fixed w-full'>
                <nav className='flex relative justify-center items-center mt-5'>
                    <ul className='flex p-2.5 rounded-full bg-white'>
                        <li onClick={handleClick} ref={homeRef}><Link to="/">Home</Link></li>
                        <li onClick={handleClick}><Link to="/about">About</Link></li>
                        <li onClick={handleClick}><Link to="/projects">Projects</Link></li>
                    </ul>
                    {sliderReady && (
                        <div className='slider rounded-full z-0' style={{left: sliderLeft, width: sliderWidth}}></div>
                    )}
                </nav>
            </div>
            <Outlet />
        </>
    )
}

export default Navbar