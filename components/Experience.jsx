import React from 'react'
import MultiLayerParallax from './InhanceUI/MultiLayerParallax'
import Projects from './Projects'
import ShuffleHero from './InhanceUI/ShuffleSkills'
import { VelocityText } from './InhanceUI/TextSide'

// https://kevinhilgendorf.com

const Experience = () => {
  return (
    // <div className='bg-black text-white'>
    <div className='bg-[#e0e0dc] text-white'>
      <div className=''>
        <h1>Experience</h1>
        {/* <MultiLayerParallax/> */}
        <div className=' text-black bg-[#e0e0dc]'>
          <h1 className='px-10
            max-md:text-4xl md:max-lg:text-6xl 
            lg:text-8xl'>My Works:</h1>
        </div>
        

        <ShuffleHero/>
        <VelocityText/>
      </div>
    </div>
  )
}

export default Experience