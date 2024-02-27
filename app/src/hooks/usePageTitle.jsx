import React, { useEffect } from 'react'

function usePageTitle(title) {
    useEffect(() => {
        if (!title) {
            window.document.title = "Kyle Chi"
        } else {
            window.document.title = `Kyle Chi · ${title}`
        }
    }, [title])
}

export default usePageTitle