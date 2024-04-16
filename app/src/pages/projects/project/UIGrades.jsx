import React, { useRef, useEffect } from 'react'
import Navbar from '../../../components/navbar/Navbar'
import usePageTitle from '../../../hooks/usePageTitle'

function UIGrades() {

    const pageRef = useRef(null)

    useEffect(() => {
        pageRef.current.scrollIntoView()
        usePageTitle('UIGrades')
    }, [])

    return (
        <div className='ui-grades' ref={pageRef}>
            <Navbar primary={false} />
            <div className='pt-28 flex flex-col items-center'>
                <h1 className='header-font'>UIGrades</h1>
                <img className='hidden md:block w-3/4 m-16 rounded-3xl' src='../UIGradesSearchWeb.png' alt='UIGrades Search' />
                <div className='flex flex-col lg:flex-row items-center justify-center md:justify-start p-8 md:px-24'>
                    <div className='text-font lg:pr-8 py-8'>
                        <p>UIGrades is a website that displays course grade distributions for the University of Iowa. I joined the project as an open source developer with the goal of learning React and Web Development.</p>
                        <br />
                        <p>See the website here: <a className='underline' href='https://uigrades.vercel.app/' target='_blank'>UIGrades</a></p>
                        <br />
                        <div className='flex flex-col sm:flex-row sm:gap-32'>
                            <div>
                                <p>Contributions</p>
                                <ul className='ml-5'>
                                    <li>- Mobile Navigation Menu</li>
                                    <li>- Home Page Image Carousel</li>
                                    <li>- UI Improvements</li>
                                    <li>- Bug Fixes</li>
                                </ul>
                            </div>
                            <div>
                                <p>Tech Stack</p>
                                <ul className='ml-5'>
                                    <li>- TypeScript</li>
                                    <li>- SQL</li>
                                    <li>- ReactJS</li>
                                    <li>- Node.js</li>
                                    <li>-Tailwind CSS</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className='w-3/4'>
                        <img className='rounded-xl md:rounded-3xl' src='../UIGradesClassMobile.png' alt='UIGrades Class' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UIGrades