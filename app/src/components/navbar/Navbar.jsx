import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import './navbar.scss'

function Navbar() {


    const [menuClicked, setMenuClicked] = useState(false)
    const [expandMobileMenu, setExpandMobileMenu] = useState('translateX(100%)')
    const [strokeDashOffset, setStrokeDashOffset] = useState(0)

    const [currentTab, setCurrentTab] = useState(null)

    const [navBackground, setNavBackground] = useState({
        color: 'rgba(255, 255, 255, 0)',
        blur: 'blur(0px)',
        focus: 'rgba(86, 193, 114, 0)'
    })

    let location = useLocation()

    useEffect(() => {
        switch(location.pathname) {
            case '/about':
                setCurrentTab('about')
                break
            case '/projects':
                setCurrentTab('projects')
                break
            default:
                setCurrentTab('home')
        }

        window.addEventListener('scroll', handleScroll)

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    const handleClick = (currentTab) => {
        setCurrentTab(currentTab)
    }

    const handleScroll = () => {
        if (window.scrollY > 50) {
            setNavBackground({
                color: 'rgba(192, 207, 175, 0.75)',
                blur: 'blur(8px)',
                focus: 'rgba(86, 193, 114, 0.35)'
            })
        } else {
            setNavBackground({
                color: 'rgba(188, 235, 197, 0)',
                blur: 'blur(0px)',
                focus: 'rgba(86, 193, 114, 0)'
            })
        }
    }

    const handleMenuClick = () => {
        setMenuClicked((menuClicked) => !menuClicked)
        setExpandMobileMenu((expandMobileMenu) => expandMobileMenu === 'translateX(100%)' ? 'translateX(0%)' : 'translateX(100%)')
        setStrokeDashOffset((strokeDashOffset) => strokeDashOffset === -138 ? 0 : -138)
    }

    return (
        <div className='fixed w-full z-20'>
            <nav
                className='navigation-background relative w-full h-20 flex justify-between items-center'
                style={{
                    backgroundColor: navBackground.color,
                    backdropFilter: navBackground.blur,
                    transitionDuration: '0.25s',
                    transitionTimingFunction: 'ease-in'
                }}
            >
                <div className='text-font w-full h-full flex justify-start items-center pl-8'>Kyle Chi</div>
                <div className='flex w-full h-full'>
                    {/* web navigation for wide screens */}
                    <ul className='hidden sm:flex relative w-full justify-end text-font'>
                        <li
                            key={'home  '}
                            onClick={() => handleClick('home')}
                            style={
                                currentTab == 'home'
                                    ? {
                                        fontWeight: '800',
                                        backgroundColor: navBackground.focus
                                    }
                                    : {
                                        fontWeight: '600',
                                    }
                            }
                        >
                            <Link 
                                to="/"
                            >
                                Home
                            </Link>
                        </li>
                        <li
                            onClick={() => handleClick('about')}
                            style={
                                currentTab == 'about'
                                    ? {
                                        fontWeight: '800',
                                        backgroundColor: navBackground.focus
                                    }
                                    : {
                                        fontWeight: '600',
                                    }
                            }
                        >
                            <Link
                                to="/about"
                            >
                                    About
                            </Link>
                        </li>
                        <li
                            onClick={() => handleClick('projects')}
                            style={
                                currentTab == 'projects'
                                    ? {
                                        fontWeight: '800',
                                        backgroundColor: navBackground.focus
                                    }
                                    : {
                                        fontWeight: '600',
                                    }
                            }
                        >
                            <Link
                                to="/projects"
                            >
                                Projects
                            </Link>
                        </li>
                    </ul>

                    {/* mobile navigation menu for small screens */}
                    <div className='flex sm:hidden w-full h-full p-4 justify-end'>
                        <svg
                            className='nav-menu'
                            style={{strokeDashoffset: strokeDashOffset}}
                            onClick={handleMenuClick}
                            viewBox='0 0 100 100'>
                            <path
                                className='menu-ends'
                                d='m0,27 h70 c15,0,15,46,0,46 h-12 l-46,-46'
                            />
                            <path
                                className='menu-middle'      
                                d='m20,50 h15 m35,0 h-35'
                            />
                            <path
                                className='menu-ends'
                                d='m0,73 h70 c15,0,15,-46,0,-46 h-12 l-46,46'
                            /> 
                        </svg>
                    </div>
                </div>
            </nav>
            <div
                className='fixed right-0 top-20 flex flex-col h-[calc(100%-80px)] justify-start bg-white/50 backdrop-blur-sm'
                style={{
                    width: 'clamp(15rem, 80vw, 25rem)',
                    transform: expandMobileMenu,
                    transitionDuration:'0.35s',
                }}
            >
                <Link to='/' className='menu-link'>
                    Home
                </Link>
                <div className='menu-separator'>
                    <svg viewBox='0 0 1000 2'>
                        <path stroke='gray' strokeWidth='3' d='m120,0 h760' />
                    </svg>
                </div>
                <Link to='/about' className='menu-link'>
                    About
                </Link>
                <div className='menu-separator'>
                    <svg viewBox='0 0 1000 2'>
                        <path stroke='gray' strokeWidth='3' d='m120,0 h760' />
                    </svg>
                </div>
                <Link to='/projects' className='menu-link'>
                    Projects
                </Link>
            </div>
            {menuClicked && 
                <div
                    className='fixed top-0 left-0 w-full h-full -z-10'
                    onClick={handleMenuClick}
                />
            }
        </div>
    )
}

export default Navbar