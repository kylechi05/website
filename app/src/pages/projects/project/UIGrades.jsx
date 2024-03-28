import React from 'react'

function UIGrades() {
    return (
        <div className='ui-grades'>
            <div className='description'>
                <h1>UIGrades</h1>
                <p>UIGrades is a website that displays course grade distributions for the University of Iowa.</p>
                <p>I joined the project as an open source developer and initially worked on fixing bugs.</p>
                <p>Later, I contributed by working on improving the user interface and eventually created components that went live in the modern UI release.</p>
                <p>Check out the project here: <a href='https://uigrades.vercel.app/' target='_blank'>UIGrades</a></p>
            </div>
            <div className='tech-stack'>
                <ul>
                    <li>TypeScript</li>
                    <li>SQL</li>
                    <li>ReactJS</li>
                    <li>Node.js</li>
                    <li>Tailwind CSS</li>
                </ul>
            </div>
        </div>
    )
}

export default UIGrades