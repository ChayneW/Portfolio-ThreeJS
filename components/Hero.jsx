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

      {/* <div id="hero" className='h-screen'
        style={{
          // backgroundImage: `url(/photos/juskteez.jpg)`,
          // backgroundImage: `url(/photos/fukayamamo.jpg)`,
          // backgroundImage: `url(/photos/moujib.jpg)`,
          // backgroundImage: `url(/photos/lin-mei.jpg)`,
          backgroundImage: `url(/photos/michael-demarco-original.jpg)`,

          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      > */}

      <div id="hero" className='max-lg:h-[40vh] lg:h-screen'>
        <BackVid/>

        <div className="relative max-lg:h-[40vh] lg:h-full">
          <div className="absolute top-1/4 left-20">
            <FlipLink href="#">CHAYNE.DEV</FlipLink>
            {/* <FlipLinkAuto href="#">CHAYNE.DEV</FlipLinkAuto> */}
            <FlipLinkAuto textArray={jobs} />
          </div>

          {/* <div className="absolute bottom-10 w-full">
            <SideScrolling />
          </div> */}
        </div>

        {/* <div className='relative h-[300px]'>
          <div className='absolute inset-0'>
            <SpacemanCanvas/>

          </div>

        </div> */}

    </div>
  </div>
  )
}

export default Hero
