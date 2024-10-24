'use client'
import React from 'react'
import Image from 'next/image'
import { SmoothScrollHero } from './InhanceUI/TomSmoothScroll'

const About = () => {
  return (
    <>
      <SmoothScrollHero/>
      <section className='py-[200px] text-black bg-[#e0e0dc]'>
        <h1 className='px-10
          max-md:text-4xl md:max-lg:text-6xl 
          lg:text-8xl'
        >
            Whether in Florida or elsewhere, I am crafting
          digital experiences and innovative web/software development solutions for
          brands, companies and your next big idea.
        </h1>

      </section>
    </>
  )
}

export default About
