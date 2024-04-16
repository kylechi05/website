import React, { useRef, useEffect } from 'react'
import Navbar from '../../../components/navbar/Navbar'
import usePageTitle from '../../../hooks/usePageTitle'

function BeatMaker() {

    const pageRef = useRef(null)

    useEffect(() => {
        pageRef.current.scrollIntoView()
        usePageTitle('BeatMaker')
    }, [])

    return (
        <div className='beatmaker' ref={pageRef}>
            <Navbar primary={false} />
            <div className='pt-28 flex flex-col items-center'>
                <h1 className='header-font'>Whole Lotta Beats</h1>
                <img src='../BeatMakerBeatsWeb.png' className='w-3/4 rounded-xl md:rounded-3xl m-16' alt='beat maker image' />
                <div className='flex flex-col items-center text-font px-8 md:px-24'>
                    <p>
                        Whole Lotta Beats is a beatmaker I worked on in a group of three during my first hackathon at HackUIowa '23.
                        The project features both a piano and a beat maker. It was also the first project where I worked with other people.
                        This is where I was introduced to web development and version control.
                    </p>
                    <br />
                    <p>See the project here: <a href='https://devpost.com/software/beatmaker-8cvu37' target='_blank' className='underline'>BeatMaker</a></p>
                    <br />
                    <p>Tech Stack</p>
                    <ul className='ml-5'>
                        <li>- HTML</li>
                        <li>- CSS</li>
                        <li>- JavaScript</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default BeatMaker