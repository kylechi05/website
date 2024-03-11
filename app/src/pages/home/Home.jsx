import React from 'react'
import usePageTitle from '../../hooks/usePageTitle'
import Header from '../../components/Header'
import './home.scss'

function Home() {

    usePageTitle('Home')

    return (
        <div className='h-screen'>
            <Header content="Hi. I'm Kyle" />
           
        </div>
    )
}

export default Home