import React, { useRef, useEffect } from 'react'
import Navbar from '../../../components/navbar/Navbar'
import usePageTitle from '../../../hooks/usePageTitle'

function InsiderSleuths() {

    const pageRef = useRef(null)

    useEffect(() => {
        pageRef.current.scrollIntoView()
        usePageTitle('Insider Sleuths')
    }, [])

    return (
        <div ref={pageRef}>
            <Navbar primary={false} />
            <div className='pt-28 flex flex-col items-center'>
                <h1 className='header-font'>Insider Sleuths</h1>
            </div>
        </div>
    )
}

export default InsiderSleuths