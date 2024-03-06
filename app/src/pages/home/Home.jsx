import React from 'react'
import usePageTitle from '../../hooks/usePageTitle'
import Header from '../../components/Header'

function Home() {

    usePageTitle('Home')

    return (
        <div className='h-screen'>
            <Header content="Hi. I'm Kyle" />
            <div>

            </div>
        </div>
    )
}

export default Home