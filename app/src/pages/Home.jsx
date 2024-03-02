import React from 'react'
import usePageTitle from '../hooks/usePageTitle'

function Home() {

    usePageTitle('Home')
    
    return (
        <>
            <div
                className='h-screen text-8xl'
            >
                Hi. I'm Kyle
                
            </div>
        </>
    )
}

export default Home