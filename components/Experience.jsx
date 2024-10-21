import React from 'react'
import MultiLayerParallax from './InhanceUI/MultiLayerParallax'
import Projects from './Projects'
import ShuffleHero from './InhanceUI/ShuffleSkills'
import { VelocityText } from './InhanceUI/TextSide'

// https://kevinhilgendorf.com/#services

const Experience = () => {
  return (
    <div className='bg-white'>
      <div className=''>
        <h1>Experience</h1>
        {/* <MultiLayerParallax/> */}
        <ShuffleHero/>
        <VelocityText/>
      </div>
    </div>
  )
}

export default Experience