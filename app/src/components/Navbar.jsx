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
    const [navBackground, setNavBackground] = useState('bg-white/0')

    const homeRef = useRef()
    const aboutRef = useRef()
    const projectsRef = useRef()

    const activeTab = sessionStorage.getItem('activeTab')

    let location = useLocation()
    let timeout
    
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
            setSliderOpacity(0.5)
        }, 500)
    }

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

    const handleScroll = () => {
        if (window.scrollY > 30) {
            setNavBackground('bg-white/50 backdrop-blur-md') // need to add transition time for this
            // need to set blur
            // need to set slider div color
            // changes for below are also needed
        } else {
            setNavBackground('bg-white/0')
        }
    }

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
        setSliderOpacity(0.5)
    }, [])

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
        window.addEventListener('resize', handleResize)

        return () => {
            window.removeEventListener('scroll', handleScroll)
            window.removeEventListener('resize', handleResize)
        }
    }, [])    

    return (
        <div>
            <div className='fixed w-full'>
                <nav className='flex relative justify-center items-center pt-5'>
                    <ul className='flex relative p-2.5'>
                        <li onClick={() => handleClick('home')}><Link to="/" ref={homeRef}>Home</Link></li>
                        <li onClick={() => handleClick('about')}><Link to="/about" ref={aboutRef}>About</Link></li>
                        <li onClick={() => handleClick('projects')}><Link to="/projects" ref={projectsRef}>Projects</Link></li>
                        <div className={`absolute top-0 left-0 w-full h-full rounded-full ${navBackground}`}></div>
                    </ul>
                    <div
                        className='slider rounded-full bg-blue-300'
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
        </div>
    )
}

export default Navbar