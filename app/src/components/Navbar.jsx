import React, { useState, useRef, useEffect } from 'react'
import { Link, Outlet, useLocation } from 'react-router-dom'
import './navbar.scss'

function Navbar() {

    const [sliderWidth, setSliderWidth] = useState(null)
    const [sliderLeft, setSliderLeft] = useState(null)
    const [linkValues, setLinkValues] = useState({})
    const [sliderReady, setSliderReady] = useState(false)

    const homeRef = useRef()
    const aboutRef = useRef()
    const projectsRef = useRef()

    let location = useLocation()

    const activeTab = sessionStorage.getItem('activeTab')

    useEffect(() => {
        if (activeTab) {
            switch(activeTab) {
                case 'about':
                    setSliderWidth(aboutRef.current.offsetWidth)
                    setSliderLeft(aboutRef.current.getBoundingClientRect().left)
                    break
                case 'projects':
                    setSliderWidth(projectsRef.current.offsetWidth)
                    setSliderLeft(projectsRef.current.getBoundingClientRect().left)
                    break
                default:
                    setSliderWidth(homeRef.current.offsetWidth)
                    setSliderLeft(homeRef.current.getBoundingClientRect().left)
            }
        } else {
            switch(location.pathname) {
                case '/about':
                    setSliderWidth(aboutRef.current.offsetWidth)
                    setSliderLeft(aboutRef.current.getBoundingClientRect().left)
                    break
                case '/projects':
                    setSliderWidth(projectsRef.current.offsetWidth)
                    setSliderLeft(projectsRef.current.getBoundingClientRect().left)
                    break
                default:
                    setSliderWidth(homeRef.current.offsetWidth)
                    setSliderLeft(homeRef.current.getBoundingClientRect().left)
            }
        }

        setLinkValues({
            'home': {
                'width': homeRef.current.offsetWidth,
                'left': homeRef.current.getBoundingClientRect().left
            },
            'about': {
                'width': aboutRef.current.offsetWidth,
                'left': aboutRef.current.getBoundingClientRect().left
            },
            'projects': {
                'width': projectsRef.current.offsetWidth,
                'left': projectsRef.current.getBoundingClientRect().left
            }
        })
        setSliderReady(true)
        // need to set the slider at the correct position on resize
    }, []) // needs to happen every time that the screen resizes

    const handleClick = (currentTab) => {
        switch(currentTab) {
            case 'about':
                setSliderWidth(linkValues.about.width)
                setSliderLeft(linkValues.about.left)
                break
            case 'projects':
                setSliderWidth(linkValues.projects.width)
                setSliderLeft(linkValues.projects.left)
                break
            default:
                setSliderWidth(linkValues.home.width)
                setSliderLeft(linkValues.home.left)
        }

        sessionStorage.setItem('activeTab', currentTab)
    }

    return (
        <>
            <div className='fixed w-full'>
                <nav className='flex relative justify-center items-center mt-5'>
                    <ul className='flex p-2.5 rounded-full bg-white'>
                        <li onClick={() => handleClick('home')}><Link to="/" ref={homeRef}>Home</Link></li>
                        <li onClick={() => handleClick('about')}><Link to="/about" ref={aboutRef}>About</Link></li>
                        <li onClick={() => handleClick('projects')}><Link to="/projects" ref={projectsRef}>Projects</Link></li>
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