import React, { useState, useRef, useEffect } from 'react'
import { Link, Outlet, useLocation } from 'react-router-dom'
import './navbar.scss'

var linkValues = {}

function Navbar() {

    const homeRef = useRef()
    const aboutRef = useRef()
    const projectsRef = useRef()

    const [sliderStatus, setSliderStatus] = useState({
        width: null,
        left: null
    })
    const [sliderAttributes, setSliderAttributes] = useState({
        opacity: 0,
        opacityTransitionDelay: '0.2s',
        transitionDuration: '0.2s'
    })

    const [navBackground, setNavBackground] = useState({
        color: 'rgba(255, 255, 255, 0)',
        blur: 'blur(0px)'
    })

    const activeTab = sessionStorage.getItem('activeTab')

    let location = useLocation()
    let timeout
    
    const handleResize = () => {
        setSliderAttributes({
            opacity: 0,
            opacityTransitionDelay: '0s',
            transitionDuration: '0s'
        })
        
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
            handleClick(sessionStorage.getItem('activeTab')) // calls handleClick because handleClick moves the slider
            setSliderAttributes({
                opacity: 0.5,
                opacityTransitionDelay: '0.2s',
                transitionDuration: '0.2s'
            })
        }, 500)
    }

    const handleClick = (currentTab) => {
        switch(currentTab) {
            case 'about':
                setSliderStatus({
                    width: linkValues.about.width,
                    left: linkValues.about.left
                })
                break
            case 'projects':
                setSliderStatus({
                    width: linkValues.projects.width,
                    left: linkValues.projects.left
                })
                break
            default:
                setSliderStatus({
                    width: linkValues.home.width,
                    left: linkValues.home.left
                })
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
        const currentTab = (activeTab != null)
            ? activeTab
            : location.pathname.substring(1)

        switch(currentTab) {
            case 'about':
                setSliderStatus({
                    width: aboutRef.current.offsetWidth,
                    left: aboutRef.current.getBoundingClientRect().left
                })
                break
            case 'projects':
                setSliderStatus({
                    width: projectsRef.current.offsetWidth,
                    left: projectsRef.current.getBoundingClientRect().left
                })
                break
            default:
                setSliderStatus({
                    width: homeRef.current.offsetWidth,
                    left: homeRef.current.getBoundingClientRect().left
                })
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
        setSliderAttributes({
            ...sliderAttributes,
            opacity: 0.5
        })
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
                            width: sliderStatus.width,
                            left: sliderStatus.left,
                            opacity: sliderAttributes.opacity,
                            transitionDuration: sliderAttributes.transitionDuration,
                            transitionDelay: `${sliderAttributes.opacityTransitionDelay}, 0s, 0s`
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