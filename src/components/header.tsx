import React, { useEffect, useState } from 'react'
import gsap from 'gsap'

import '../styles/_breakpoints.scss' // Path to your SCSS file

const Header: React.FC = () => {
    const [menuClick, setMenuClick] = useState(false)

    useEffect(() => {
        const tl = gsap.timeline()

        // Wait for 2 seconds with the logo large
        tl.to('.headerLogo', { duration: 2 })

            // Then shrink the logo and move it
            .to('.headerLogo', {
                scale: window.innerWidth > 768 ? 0.1 : 0.35,
                x: window.innerWidth > 768 ? '-45%' : '0',
                y: window.innerWidth > 768 ? '-46%' : '-45%',
                duration: 2,
                ease: 'power3.out',
            })
            .fromTo('.topLine', { x: '1000%' }, { x: '0%', duration: 0.1 })
            .fromTo('.midLine', { x: '1000%' }, { x: '0%', duration: 0.1, delay: 0.1 })
            .fromTo('.botLine', { x: '1000%' }, { x: '0%', duration: 0.1, delay: 0.2 })
    }, [])

    const toggleMenu = () => {
        setMenuClick(!menuClick)

        if (!menuClick) {
            // Animate lines to merge into middle line
            gsap.to('.topLine', { y: 18, duration: 0.3, ease: 'power2.inOut' })
            gsap.to('.botLine', { y: -18, duration: 0.3, ease: 'power2.inOut' })
        } else {
            // Animate lines back to original position
            gsap.to('.topLine', { y: 0, duration: 0.3, ease: 'power2.inOut' })
            gsap.to('.botLine', { y: 0, duration: 0.3, ease: 'power2.inOut' })
        }
    }

    return (
        <div className="headerContainer">
            <img className="headerLogo" src="/src/assets/logo-white-cropped.png" alt="logo-white" />

            <>
                <nav className="navMenu">
                    <ul>
                        <li>
                            <a href="#about">About</a>
                        </li>
                        <li>
                            <a href="#works">Works</a>
                        </li>
                        <li>
                            <a href="#reachout">Reach Out</a>
                        </li>
                    </ul>
                </nav>
                <div className="hamburger" onClick={toggleMenu}>
                    <span className="topLine"></span>
                    <span className="midLine"></span>
                    <span className="botLine"></span>
                </div>
            </>
        </div>
    )
}

export default Header
