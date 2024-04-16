import React, { useRef, useEffect } from 'react'
import usePageTitle from '../../hooks/usePageTitle'
import Header from '../../components/Header'
import Navbar from '../../components/navbar/Navbar.jsx'
import './home.scss'

function Home() {

    const pageRef = useRef(null)

    useEffect(() => {
        pageRef.current.scrollIntoView()
        usePageTitle('Home')
    }, [])

    return (
        <div ref={pageRef} className='h-screen'>
            <Navbar primary={true} />
            <Header content="Hi. I'm Kyle" />
           
        </div>
    )
}

export default Home