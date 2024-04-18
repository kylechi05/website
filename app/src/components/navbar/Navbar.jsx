import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './navbar.scss'

function Navbar({ primary }) {

    const navigate = useNavigate()

    const [menuClicked, setMenuClicked] = useState(false)
    const [menuDashOffset, setMenuDashOffset] = useState(0)
    const [navBackground, setNavBackground] = useState({
        color: 'rgba(255, 255, 255, 0)',
        blur: 'blur(0px)',
    })

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    const handleScroll = () => {
        if (window.scrollY > 50) {
            setNavBackground({
                color: 'rgba(250, 240, 230, 0.75)',
                blur: 'blur(10px)',
            })
        } else {
            setNavBackground({
                color: 'rgba(255, 245, 235, 0)',
                blur: 'blur(0px)',
            })
        }
    }

    const handleMenuClick = () => {
        setMenuClicked((menuClicked) => !menuClicked)
        setMenuDashOffset((menuDashOffset) => menuDashOffset === -138 ? 0 : -138)
    }

    const handleBackClick = () => {
        navigate(-1)
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

                { /* shows back arrow if page is not a main page*/
                    primary ? (
                        <div className='pl-2 md:pl-8 flex w-full h-full justify-start items-center text-font text-xl'>
                            Kyle Chi
                        </div>
                    ) : (
                        <>
                            <div className='pl-2 flex w-full h-full justify-start'>
                                <svg
                                    className='back-button'
                                    onClick={handleBackClick}
                                    viewBox='0 0 100 100'>
                                    <path
                                        className='arrowhead'
                                        d='m20,50 l20,-18'
                                    />
                                    <path
                                        className='arrow-shaft'
                                        d='m20,50 h60 m0,0 h-60'
                                    />
                                    <path
                                        className='arrowhead'
                                        d='m20,50 l20,18'
                                    />
                                </svg>
                            </div>
                            <div className='flex w-full h-full justify-center items-center text-font text-xl'>
                                Kyle Chi
                            </div>
                        </>
                        
                    )
                }
                <div className='flex w-full h-full'>
                    {/* web navigation for wide screens */}
                    <ul className={`${
                        primary
                            ? 'sm:flex'
                            : 'lg:flex'
                        } hidden relative w-full justify-end items-center text-font`}
                    >
                        <li>
                            <Link to="/">
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link to="/projects">
                                Projects
                            </Link>
                        </li>
                    </ul>

                    {/* mobile navigation menu for small screens */}
                    <div className={`${
                        primary
                            ? 'sm:hidden'
                            : 'lg:hidden'
                        } flex w-full h-full justify-end`}
                    >
                        <svg
                            className='nav-menu'
                            style={{strokeDashoffset: menuDashOffset}}
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
                className={`${
                    primary
                        ? 'sm:hidden'
                        : 'lg:hidden'
                    } fixed right-0 top-20 flex flex-col h-[calc(100%-80px)] justify-start backdrop-blur-[10px] text-font`}
                style={{
                    width: 'clamp(15rem, 80vw, 25rem)',
                    backgroundColor: 'rgba(250, 245, 245, 0.5)',
                    transform: menuClicked ? 'translateX(0%)' : 'translateX(100%)',
                    transitionDuration:'0.35s',
                }}
            >
                <Link to='/' className='menu-link'>
                    Home
                </Link>
                <div className='menu-separator'>
                    <svg viewBox='0 0 1000 2'>
                        <path stroke='rgb(19, 78, 74)' strokeWidth='3' d='m120,0 h760' />
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