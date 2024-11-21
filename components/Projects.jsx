"use client"
import React, {useEffect} from 'react'
import Link from 'next/link'
import Image from 'next/image'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import {ReactLenis} from "lenis/react"
import { FocusCards } from './ui/focus-cards'
import { FocusCardsDemo } from './InhanceUI/CardDemo'
// import ProjectFocusCards from "../components/InhanceUI/ProjectFocusCards"
import MotionElement from './InhanceUI/MotionElement'

const Projects = () => {

    return (
        <MotionElement
            as="div"
            className='py-20'
            id="Projects"
        >
        {/* // <div className='py-20'> */}
        {/* <ProjectFocusCards/> */}
        {/* <FocusCards/> */}
        <div className='text-white'>
            <h1 className='p-10
            max-md:text-4xl md:max-lg:text-6xl lg:text-8xl'
            >My Works:</h1>
        </div>
        
        <div className='py-10'>
            <FocusCardsDemo/>
        </div>
    </MotionElement>
    )
}

export default Projects



{/* <ReactLenis root>
                <section className='hero'>
                    <div className='img'>
                        <img src="/photos/patel-unsplash.jpg" alt=""/>
                    </div>
                </section>

                <section className='content'>
                    <div className="content-main">
                        <div className="logo">
                            <img src="./logo.png" alt=""/>
                        </div>

                        <div className="copy">  
                            <div className="line">
                                <p>Delve into coding without clutter</p>
                            </div>

                            <div className="line">
                                <p>Delve into coding without clutter</p>
                            </div>

                            <div className="line">
                                <p>Delve into coding without clutter</p>
                            </div>
                        </div>

                        <div className="btn">
                            <button>Get Pro</button>
                        </div>
                    </div>

                </section>

                <section className='ending'>
                    <Link href="">Link in description.
                    </Link>

                </section>

            </ReactLenis> */}