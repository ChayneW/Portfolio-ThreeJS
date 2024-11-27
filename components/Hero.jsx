import React from 'react'
import SpacemanCanvas from './InhanceUI/Spaceman'
import SideScrolling from "./InhanceUI/SideScrolling"
import MultiLayerParallax from './InhanceUI/MultiLayerParallax'
import { FlipLink, FlipLinkAuto } from './InhanceUI/DroppingText'
import BackVid from './InhanceUI/BackVid'


const Hero = ({scrollContainer}) => {
  const jobs = ["Software Developer", "Web Development", "Backend", "Frontend"];
  return (
    <div>
      <div id="hero" className='h-screen'>
        <BackVid/>
        <div className="relative h-full">
          <div className="absolute
            max-md:top-1/2 max-md:left-1/2 max-md:transform max-md:-translate-x-1/2 max-md:-translate-y-1/2
            md:top-1/4 md:left-20">
            <FlipLink href="#">CHAYNE.DEV</FlipLink>
            <FlipLinkAuto textArray={jobs} />
          </div>
        </div>
    </div>
  </div>
  )
}

export default Hero
