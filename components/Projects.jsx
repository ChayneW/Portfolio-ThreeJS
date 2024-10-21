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

const Projects = () => {
    

    return (
        <div className='py-20'>
            {/* <ProjectFocusCards/> */}
            {/* <FocusCards/> */}
            <FocusCardsDemo/>
        </div>
            
           
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