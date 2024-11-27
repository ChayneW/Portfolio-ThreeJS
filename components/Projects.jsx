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