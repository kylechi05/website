import React, { useRef, useEffect, useState } from 'react'
import { useOutletContext } from 'react-router-dom'
import usePageTitle from '../../hooks/usePageTitle'
import Header from '../../components/Header'
import Navbar from '../../components/navbar/Navbar.jsx'
import './projects.scss'

function Projects() {

    const pageRef = useRef(null)

    const handleProjectClick = useOutletContext()

    useEffect(() => {
        pageRef.current.scrollIntoView()
        usePageTitle('Projects')
    }, [])

    const DelayedLink = ({ to, children }) => {
        const [projectStyle, setProjectStyle] = useState({
            translateY: 'translateY(0px)',
            scale: 'scale(1)'
        })
        let timeout

        function handleClick() {
            handleProjectClick()
            setProjectStyle({
                ...projectStyle,
                scale: 'scale(1.05)'
            })
            timeout = setTimeout(() => {
                window.location.href = to
            }, 2000)
        }
        
        function handleMouseEnter() {
            setProjectStyle({
                ...projectStyle,
                translateY: 'translateY(-15px)'
            })
        }

        function handleMouseLeave() {
            setProjectStyle({
                ...projectStyle,
                translateY: 'translateY(0px)'
            })
        }

        return (
            <a
                onClick={handleClick}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                className='project'
                style={{
                    transform: projectStyle.translateY + projectStyle.scale
                }}
            >
                {children}
            </a>
        )
    }

    return (
        <div ref={pageRef} className='flex flex-col'>
            <Navbar />
            <Header content="Projects" />
            <ul className='project-container'>
                <li>
                    <DelayedLink to='/projects/uigrades'>
                        <div className='header-font name'>
                            UIGrades
                        </div>
                        <img src='UIGradesWeb.png' alt='UIGrades.png' className='project-img' />
                    </DelayedLink>
                </li>
                <li>
                    <DelayedLink to='/projects/beatmaker'>
                        <div className='header-font name'>
                            BeatMaker
                        </div>
                        <img src='BeatMakerWeb.png' alt='BeatMakerWeb.png' className='project-img' />
                    </DelayedLink>
                </li>
                <li>
                    <DelayedLink to='/projects/emotion'>
                        <div className='flex flex-col name'>
                            <p className='header-font'>Emotion</p>
                            <p className='header-font'>Detector</p>
                        </div>
                        <img src='image_placeholderWeb.png' className='project-img' />
                    </DelayedLink>
                </li>
            </ul>
        </div>
    )
}

export default Projects