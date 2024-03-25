import React, { useState, useEffect } from 'react'
import { Outlet } from 'react-router-dom'

function ProjectTransition() {

    const [transitionStyle, setTransitionStyle] = useState('translateX(100%)')

    function handleProjectClick() {
        let timeout
        setTransitionStyle('translateX(0%)')
        console.log('useOutletContext complete')
        timeout = setTimeout(() => {
            setTransitionStyle('translateX(100%)')
        }, 1000)
    }

    return (
            <div>
                <div className='z-0'>
                    <Outlet context={handleProjectClick} />
                </div>
                <div
                    className='fixed top-0 left-0 z-[100] h-screen w-full bg-green-200/50'
                    style={{
                        transform: transitionStyle
                    }}
                >

                </div>
            </div>

    )
}

export default ProjectTransition