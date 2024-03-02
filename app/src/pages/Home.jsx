import React from 'react'
import usePageTitle from '../hooks/usePageTitle'

function Home() {

    usePageTitle('Home')
    


    return (
        <>
            { /* for all pages, set height to h-screen if the content doesn't take up more than the screen */ }
            <div 
                className='text-8xl h-screen'
            >
                
                Hi. I'm Kyle 
            </div>
        </>
    )
}

export default Home