import React, { useRef, useEffect } from 'react'
import usePageTitle from '../../../hooks/usePageTitle'

function Emotion() {

    const pageRef = useRef(null)

    useEffect(() => {
        pageRef.current.scrollIntoView()
        usePageTitle('Emotion')
    }, [])

    return (
        <div ref={pageRef}>
            This is the project page for Emotion
        </div>
    )
}

export default Emotion