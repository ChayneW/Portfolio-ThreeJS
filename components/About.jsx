'use client'
import React from 'react'
import Image from 'next/image'
import { SmoothScrollHero } from './InhanceUI/TomSmoothScroll'

const About = () => {
  return (
    <section className='relative'>
      <div className='absolute bottom-0'>
        <SmoothScrollHero/>
      </div>
      
    </section>
  )
}

export default About
