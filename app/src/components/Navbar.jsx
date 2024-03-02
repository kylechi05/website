import React, { useState, useRef, useEffect } from 'react'
import { Link, Outlet, useLocation } from 'react-router-dom'
import './navbar.scss'

var linkValues = {}
var transitionDuration = '0.2s'
var transitionDelay = ['0.2s', '0s', '0s']

function Navbar() {

    const [sliderWidth, setSliderWidth] = useState(null)
    const [sliderLeft, setSliderLeft] = useState(null)
    const [sliderOpacity, setSliderOpacity] = useState(0)

    const homeRef = useRef()
    const aboutRef = useRef()
    const projectsRef = useRef()

    const activeTab = sessionStorage.getItem('activeTab')

    let location = useLocation()
    let timeout

    useEffect(() => {
        /*
            cannot change this if/else statement despite it looking redundant 
            this is because when reloading, location.pathname will change but the states will be delayed
            causing slider to be stuck one click behind
        */
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

        linkValues = {
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
        }
        setSliderOpacity(0.6)
    }, [])

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

    const handleResize = () => {
        transitionDuration = '0s'
        transitionDelay[0] = '0s'
        setSliderOpacity(0)
        clearTimeout(timeout)
        timeout = setTimeout(() => {
            linkValues = {
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
            }
            handleClick(sessionStorage.getItem('activeTab'))
            transitionDuration = '0.2s'
            transitionDelay[0] = '0.2s'
            setSliderOpacity(0.6)
        }, 500)
    }

    window.addEventListener('resize', handleResize)

    return (
        <>
            <div className='fixed w-full'>
                <nav className='flex relative justify-center items-center mt-5'>
                    <ul className='flex relative p-2.5 rounded-full '>
                        <li onClick={() => handleClick('home')}><Link to="/" ref={homeRef}>Home</Link></li>
                        <li onClick={() => handleClick('about')}><Link to="/about" ref={aboutRef}>About</Link></li>
                        <li onClick={() => handleClick('projects')}><Link to="/projects" ref={projectsRef}>Projects</Link></li>
                    </ul>
                    <div
                        className='slider rounded-full bg-white'
                        style={{
                            opacity: sliderOpacity,
                            left: sliderLeft,
                            width: sliderWidth,
                            transitionDuration: transitionDuration,
                            transitionDelay: `${transitionDelay[0]}, ${transitionDelay[1]}, ${transitionDelay[2]}`
                        }}
                    >
                </div>
                </nav>  
            </div>
            <Outlet />
        </>
    )
}

export default Navbar