import React, { useEffect, useState } from 'react'
// import gsap from 'gsap'
// import ScrollTrigger from 'gsap'

import '../styles/hero.scss' // Path to your SCSS file

const Hero: React.FC = () => {
    const [translate, setTranslate] = useState({ x: 0, y: 0 })

    useEffect(() => {
        const oh = document.querySelector('.circle.oh') as HTMLDivElement // Cast to HTMLDivElement

        const handleMouseMove = (event: MouseEvent) => {
            const domainX: [number, number] = [0, document.body.clientWidth]
            const domainY: [number, number] = [0, document.body.clientHeight]
            const range: [number, number] = [-10, 10]

            const translateX = range[0] + ((event.clientX - domainX[0]) * (range[1] - range[0])) / (domainX[1] - domainX[0])
            const translateY = range[0] + ((event.clientY - domainY[0]) * (range[1] - range[0])) / (domainY[1] - domainY[0])

            setTranslate({ x: translateX, y: translateY })

            if (oh) {
                oh.style.animation = 'none'
                oh.style.transform = `translate(${translateX}px, ${translateY}px)`
            }
        }

        const handleMouseLeave = () => {
            if (oh) {
                oh.style.animation = 'floating 3s linear infinite'
            }
        }

        document.addEventListener('mousemove', handleMouseMove)
        document.addEventListener('mouseleave', handleMouseLeave)

        return () => {
            document.removeEventListener('mousemove', handleMouseMove)
            document.removeEventListener('mouseleave', handleMouseLeave)
        }
    }, [])

    return (
        <div className="heroContainer">
            <div className="center">
                {/* <div className="circle circle--outer" />
                <div className="circle circle--inner"> */}
                <div className="circle oh" style={{ transform: `translate(${translate.x}px, ${translate.y}px)` }}>
                    <div className="astronaut">
                        <div className="astronaut-backpack" />
                        <div className="astronaut-head">
                            <div className="astronaut-antena antena--left">
                                <div className="ear-down" />
                                <div className="ear-up" />
                                <div className="antena" />
                                <div className="antena-tip" />
                            </div>
                            <div className="astronaut-antena antena--right">
                                <div className="ear-down" />
                                <div className="ear-up" />
                                <div className="antena" />
                                <div className="antena-tip" />
                            </div>
                            <div className="astronaut-helmet">
                                <div className="astronaut-glass" />
                                <div className="glow glow--1" />
                                <div className="glow glow--2" />
                            </div>
                            <div className="astronaut-body" />
                        </div>
                        <svg className="astronaut-wire" viewBox="-9 -9 259 823" width="259" height="823">
                            <path
                                d="M241 0c-24 54-30 113-78 148S63 159 27 215c-35 55 32 102 73 141s103 94 98 166c-6 97-169 66-192 157-10 43-8 84 9 126"
                                fill="none"
                                strokeWidth="6"
                                stroke="#FFF"
                            />
                        </svg>
                        <div className="circle planet">
                            <div className="craters">
                                <div className="crater crater--1" />
                                <div className="crater crater--2" />
                                <div className="crater crater--3" />
                                <div className="crater crater--4" />
                                <div className="crater crater--5" />
                                <div className="crater crater--6" />
                            </div>
                        </div>
                        <div className="astronaut-hands">
                            <div className="astronaut-hand hand--left">
                                <svg width="35" height="75">
                                    <path
                                        d="M30.23 17.209c-7.925 5.118-11.657 12.786-11.226 22.975-7.113.934-12.948 4.345-18.44 5.117C-1.951 26.539 3.92 9.346 18.635 1.369 30.66-4.39 39.53 9.398 30.23 17.209z"
                                        fill="#D2D2D2"
                                    />
                                    <g fill="none" stroke="#999" strokeLinecap="round">
                                        <path d="M11.78 6.977c7.983.129 13.547 3.968 16.308 11.111" />
                                        <path d="M4.67 17.161c7.307-.379 13.1 1.924 17.93 6.94" />
                                        <path d="M.816 31.334c6.439-2.441 12.295-1.746 18.149 2.488" strokeLinejoin="round" />
                                    </g>
                                    <g fill="#fff">
                                        <path d="M7.721 37.171c5.875-1.994 12.264 1.156 14.258 7.031l1.218 3.588c1.995 5.875-1.156 12.264-7.03 14.258-5.875 1.995-12.264-1.156-14.259-7.031L.69 51.429c-1.994-5.875 1.156-12.263 7.031-14.258z" />
                                        <path d="M7.829 38.159c5.794-1.967 12.094 1.14 14.061 6.934l5.044 14.855c1.967 5.794-1.14 12.095-6.934 14.062-5.794 1.967-12.095-1.14-14.062-6.934L.895 52.221c-1.967-5.794 1.14-12.095 6.934-14.062z" />
                                        <path d="M16.863 39.472l12.879 7.384a3.876 3.876 0 0 1 1.433 5.287 3.875 3.875 0 0 1-5.286 1.433l-12.878-7.384a3.874 3.874 0 0 1-1.434-5.286 3.874 3.874 0 0 1 5.286-1.434z" />
                                    </g>
                                </svg>
                            </div>
                            <div className="astronaut-hand hand--right">
                                <svg width="35" height="75">
                                    <path
                                        d="M30.23 17.209c-7.925 5.118-11.657 12.786-11.226 22.975-7.113.934-12.948 4.345-18.44 5.117C-1.951 26.539 3.92 9.346 18.635 1.369 30.66-4.39 39.53 9.398 30.23 17.209z"
                                        fill="#D2D2D2"
                                    />
                                    <g fill="none" stroke="#999" strokeLinecap="round">
                                        <path d="M11.78 6.977c7.983.129 13.547 3.968 16.308 11.111" />
                                        <path d="M4.67 17.161c7.307-.379 13.1 1.924 17.93 6.94" />
                                        <path d="M.816 31.334c6.439-2.441 12.295-1.746 18.149 2.488" strokeLinejoin="round" />
                                    </g>
                                    <g fill="#fff">
                                        <path d="M7.721 37.171c5.875-1.994 12.264 1.156 14.258 7.031l1.218 3.588c1.995 5.875-1.156 12.264-7.03 14.258-5.875 1.995-12.264-1.156-14.259-7.031L.69 51.429c-1.994-5.875 1.156-12.263 7.031-14.258z" />
                                        <path d="M7.829 38.159c5.794-1.967 12.094 1.14 14.061 6.934l5.044 14.855c1.967 5.794-1.14 12.095-6.934 14.062-5.794 1.967-12.095-1.14-14.062-6.934L.895 52.221c-1.967-5.794 1.14-12.095 6.934-14.062z" />
                                        <path d="M16.863 39.472l12.879 7.384a3.876 3.876 0 0 1 1.433 5.287 3.875 3.875 0 0 1-5.286 1.433l-12.878-7.384a3.874 3.874 0 0 1-1.434-5.286 3.874 3.874 0 0 1 5.286-1.434z" />
                                    </g>
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
                {/* </div> */}
            </div>
        </div>
    )
}

export default Hero