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

                <div className=''>
                    <p>Whole Lotta Beats is a beatmaker I worked on in a group of three during my first hackathon at HackUIowa '23.</p>
                    <p>Check out the project here: <a href='https://devpost.com/software/beatmaker-8cvu37' target='_blank'>BeatMaker</a></p>
                </div>
                <div className=''>
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