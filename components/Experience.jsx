import React from 'react'
import MultiLayerParallax from './InhanceUI/MultiLayerParallax'
import Projects from './Projects'
import ShuffleHero from './InhanceUI/ShuffleSkills'
import { VelocityText } from './InhanceUI/TextSide'
import { FlipLink, PageDroppingText } from './InhanceUI/DroppingText'
import MotionElement from './InhanceUI/MotionElement'
import { TypewriterEffectSmoothDemo } from './InhanceUI/TypeWriter'

// https://kevinhilgendorf.com

const Experience = () => {
  const fontSize = ["text-2xl", "text-3xl", "text-4xl"];
  return (
    <MotionElement
      as="div"
    >
      <div className='bg-[#e0e0dc] text-white pt-20'>
        <div className='bg-[#e0e0dc]'>
          <div className='text-black max-md:px-10 md:px-20'>
            <div>
              <MotionElement
                as="h1"
                className='p-10
                max-md:text-4xl md:max-lg:text-6xl lg:text-8xl'
              >
                Experience:
              </MotionElement>
            </div>

            <div className='grid max-md:py-20 md:py-32 gap-20'>
              
              <div className='grid border-b md:mx-20 border-b-black'>
                <div className='experience-div max-lg:grid pb-5'>
                  <div>
                    <PageDroppingText fontSize={fontSize}>
                      AI Contributor/Code Reviewer
                    </PageDroppingText>
                    <h1 className='pt-2'>Outlier.ai</h1>
                  </div>

                  <div className='lg:text-end self-center'>
                    <h1>August 2024 - Present</h1>
                    <h1>Remote</h1>
                  </div>
                </div>
              </div>

              <div className='grid border-b md:mx-20 border-b-black'>
                <div className='experience-div max-lg:grid pb-5'>

                  <div>
                    <PageDroppingText fontSize={fontSize}>
                      Web Developer
                    </PageDroppingText>
                    <h1 className='pt-2'>Notch Beatz Prod.</h1>
                  </div>

                  <div className='lg:text-end self-center'>
                    <h1>June 2024 - August 2024</h1>
                    <h1>Remote</h1>
                  </div>

                </div>
              </div>

              <div className='grid border-b md:mx-20 border-b-black'>
                <div className='experience-div max-lg:grid pb-5'>

                  <div>
                    <PageDroppingText fontSize={fontSize}>
                      Full Stack Developer
                    </PageDroppingText>
                    <h1 className='pt-2'>A-1 Property Management Solutions</h1>
                  </div>

                  <div className='lg:text-end self-center'>
                    <h1>February 2024 - May 2024</h1>
                    <h1>Hybrid</h1>
                  </div>

                </div>
              </div>
            </div>
          </div>          
          <div className='max-md:hidden md:block'>
            <TypewriterEffectSmoothDemo/>
          </div>
          

          <ShuffleHero/>
        </div>
        <VelocityText/>
      </div>
    </MotionElement>
  )
}

export default Experience