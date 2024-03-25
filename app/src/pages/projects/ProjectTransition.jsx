import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'

function ProjectTransition() {

    const [transitionStyle, setTransitionStyle] = useState('translateX(100%)')

    function handleProjectClick() {
        setTransitionStyle('translateX(0%)')
        console.log('useOutletContext complete')
        setTimeout(() => {
            setTransitionStyle('translateX(100%)')
        }, 1000)
    }

    return (
            <div>
                <div className='z-0'>
                    <Outlet context={handleProjectClick} />
                </div>
                <div
                    className='fixed top-0 left-0 z-[100] h-screen w-full bg-green-200'
                    style={{
                        transform: transitionStyle,
                        transitionDuration: '0.5s'
                    }}
                >
                </div>
            </div>
    )
}

export default ProjectTransition