import React, { useState } from 'react'
import { animateScroll as scroll } from 'react-scroll'
import { FaBars, FaLinkedin, FaGithub } from 'react-icons/fa'
import { Link} from 'react-router-dom'
import { Link as LinkS } from 'react-scroll'
import './Navbar.css'
function Navbar() {
    const [showLinks, setShowLinks] = useState(false)
    // const [scrollNav, setScrollNav] = useState(false)

    // const changeNav = () => {
    //     if (window.scrollY >= 80) {
    //         setScrollNav(true)
    //     } else {
    //         setScrollNav(false)
    //     }
    // }

    const toggleHome = () => {
        scroll.scrollToTop()
    }
    // useEffect(() => {
    //     window.addEventListener('scroll', changeNav)

    // }, [])

    return (
        <nav className="navBar">
            <Link className='navBarLogo' to='/' onClick={toggleHome}>Uzi</Link>
            <div className='faBars' onClick={() => setShowLinks(!showLinks)}>
                <FaBars />
            </div>
            <div className='navLinks' id={showLinks ? "hidden" : ''}>
                <ul>
                    <li>
                        <LinkS to='projects'
                            smooth={true}
                            duration={500}
                            spy={true}
                            exact='true'
                            offset={-80}>

                            Projects </LinkS>
                    </li>
                    <li>
                        <LinkS to='about'
                            smooth={true}
                            duration={500}
                            spy={true}
                            exact='true'
                            offset={-80}>About</LinkS>
                    </li>
                    <li>
                        <LinkS to='tech'
                            smooth={true}
                            duration={500}
                            spy={true}
                            exact='true'
                            offset={-80}>Technologies</LinkS>
                    </li>
                </ul>
            </div>
            <div className='socialMedia' id={showLinks ? "hidden" : ''}>
                <ul>
                    <li>
                        <FaLinkedin to={'https://www.linkedin.com/in/or-sasson-308345229/'} />
                    </li>
                    <li>
                        <FaGithub to={'https://github.com/orsasson12'} />
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar
