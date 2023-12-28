import React, { useEffect } from 'react'
import gsap from 'gsap'

import '../styles/_breakpoints.scss' // Path to your SCSS file

const Header: React.FC = () => {
    useEffect(() => {
        const tl = gsap.timeline()

        // Wait for 2 seconds with the logo large
        tl.to('.headerLogo', { duration: 2 })

        // Then shrink the logo and move it
        tl.to('.headerLogo', {
            scale: window.innerWidth > 768 ? 0.1 : 0.35,
            x: window.innerWidth > 768 ? '-45%' : '0',
            y: window.innerWidth > 768 ? '-45%' : '-45%',
            duration: 2,
            ease: 'power3.out',
        })
    }, [])

    return (
        <div className="headerContainer">
            <img className="headerLogo" src="/src/assets/logo-white-cropped.png" alt="logo-white" />
        </div>
    )
}

export default Header
