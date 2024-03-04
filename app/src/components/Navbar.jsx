import React, { useState, useRef, useEffect } from 'react'
import { Link, Outlet, useLocation } from 'react-router-dom'
import './navbar.scss'

var linkValues = {}

function Navbar() {

    const [sliderWidth, setSliderWidth] = useState(null) // refactor so most become one object "sliderAttributes"
    const [sliderLeft, setSliderLeft] = useState(null)
    const [transitionDuration, setTransitionDuration] = useState('0.2s')
    const [sliderOpacity, setSliderOpacity] = useState(0) 
    const [sliderOpacityTransitionDelay] = useState('0.2s')

    const [navBackground, setNavBackground] = useState({
        color: 'rgba(255, 255, 255, 0)',
        blur: 'blur(0px)'
    })

    const homeRef = useRef()
    const aboutRef = useRef()
    const projectsRef = useRef()

    const activeTab = sessionStorage.getItem('activeTab')

    let location = useLocation()
    let timeout
    
    const handleResize = () => {
        setTransitionDuration('0s')
        setSliderOpacityTransitionDelay('0s')
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
            setTransitionDuration('0.2s')
            setSliderOpacityTransitionDelay('0.2s')
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
            setNavBackground({
                color: 'rgba(255, 255, 255, 0.7)',
                blur: 'blur(10px)'
            })
        } else {
            setNavBackground({
                color: 'rgba(255, 255, 255, 0)',
                blur: 'blur(0px)'
            })
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
                        <div
                            className='navigation-background rounded-full'
                            style={{
                                backgroundColor: navBackground.color,
                                backdropFilter: navBackground.blur
                            }}
                        />
                        
                    </ul>
                    <div
                        className='slider rounded-full bg-blue-300'
                        style={{
                            opacity: sliderOpacity,
                            left: sliderLeft,
                            width: sliderWidth,
                            transitionDuration: transitionDuration,
                            transitionDelay: `${sliderOpacityTransitionDelay}, 0s, 0s`
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