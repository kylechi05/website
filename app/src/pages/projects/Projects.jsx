import React, { useRef, useEffect, useState } from 'react'
import { Link, useOutletContext, useNavigate } from 'react-router-dom'
import usePageTitle from '../../hooks/usePageTitle'
import Header from '../../components/Header'
import Navbar from '../../components/navbar/Navbar.jsx'
import './projects.scss'

function Projects() {

    const [notClicked, setNotClicked] = useState(true)
    const pageRef = useRef(null)
    const handleProjectClick = useOutletContext()
    const navigate = useNavigate()

    useEffect(() => {
        pageRef.current.scrollIntoView()
        usePageTitle('Projects')
    }, [])

    const [scale, setScale] = useState(false)
    const DelayedLink = ({ to, children }) => {

        const handleClick = (e) => {

            e.preventDefault()
            if (notClicked) {
                setNotClicked(false)
                setScale(true)
                handleProjectClick()
                setTimeout(() => {
                    setNotClicked(true)
                    setScale(false)
                    navigate(to)
                }, 750)
            }
        }

        return (
            <Link
                onClick={handleClick}
                className='project'
                style={{transform: scale ? 'scale(1.08)' : 'scale(1)', transitionDuration: '0.25s'}}
            >
                {children}
            </Link>
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