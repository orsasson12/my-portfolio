import React from 'react'

import bgVideo from '../../assets/videos/Stars - 93838.mp4'
import './Header.css'
function Header() {
    return (
        <header className='headerContainer'>
            <div className='headerBg'>
                <video src={bgVideo} autoPlay muted loop  alt="starWars" typeof='video/mp4' />
            </div>
            <div className='headerContent'>
                <h1>Welcom To</h1>
                <h2>My Personal Portfolio</h2>
                <p>
                    The Purpose of JavaScript Mastery is to help aspiring 
                    and established developers to take their development
                    skills to the next level and build awesome apps.
                </p>
            </div>
        </header>
    )
}

export default Header
