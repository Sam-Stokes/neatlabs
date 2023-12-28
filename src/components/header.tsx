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
            yStart = '-5%' // Starting Y position
            xMove = '-42%'
            yMove = '-40%'
            scaleSize = 0.1
        } else {
            // For smaller screens
            xStart = '0' // Starting X position
            yStart = '100%' // Starting Y position
            xMove = '0' // Less movement
            yMove = '-30%'
            scaleSize = 0.25 // Larger scale
        }

        // Set initial position and scale
        gsap.set('.headerLogo', {
            scale: window.innerWidth > 768 ? 0.8 : 1, // Conditional starting scale
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
            <img className="headerLogo" src="/src/assets/logo-white-cropped.png" alt="logo-white" />
        </div>
    )
}

export default Header
