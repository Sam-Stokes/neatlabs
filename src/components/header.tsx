import React, { useEffect } from 'react'
import gsap from 'gsap'

import '../styles/_breakpoints.scss' // Path to your SCSS file

const Header: React.FC = () => {
    useEffect(() => {
        const tl = gsap.timeline()

        let xStart, yStart, xMove, yMove, scaleSize

        // Adjustments based on screen width
        if (window.innerWidth > 768) {
            // For larger screens
            xStart = '0' // Starting X position
            yStart = '-15%' // Starting Y position
            xMove = '-42%'
            yMove = '-44%'
            scaleSize = 0.1
        } else {
            // For smaller screens
            xStart = '0' // Starting X position
            yStart = '30%' // Starting Y position
            xMove = '0' // Less movement
            yMove = '-35%'
            scaleSize = 0.25 // Larger scale
        }

        // Set initial position and scale
        gsap.set('.headerLogo', {
            scale: 1, // Starting scale
            x: xStart,
            y: yStart,
        })

        // Wait for 2 seconds with the logo large
        tl.to('.headerLogo', {
            duration: 2, // Wait for 2 seconds
        })

        // Then shrink the logo and move it
        tl.to('.headerLogo', {
            scale: scaleSize,
            x: xMove,
            y: yMove,
            duration: 2, // Duration of the animation
            ease: 'power3.out',
        })
    }, [])

    return (
        <div className="headerContainer">
            <a href="/">
                <img className="headerLogo" src="/src/assets/logo-white.png" alt="logo-white" />
            </a>
        </div>
    )
}

export default Header
