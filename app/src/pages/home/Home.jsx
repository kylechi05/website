import React from 'react'
import usePageTitle from '../../hooks/usePageTitle'

function Home() {

    usePageTitle('Home')

    return (
        <div className='h-screen'>
            <header className='pt-24 text-center header-font'>
                Hi. I'm Kyle
            </header>
            <div>

            </div>
        </div>
    )
}

export default Home