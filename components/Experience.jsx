import React from 'react'
import MultiLayerParallax from './InhanceUI/MultiLayerParallax'
import Projects from './Projects'
import ShuffleHero from './InhanceUI/ShuffleSkills'
import { VelocityText } from './InhanceUI/TextSide'
import { FlipLink, PageDroppingText } from './InhanceUI/DroppingText'
import MotionElement from './InhanceUI/MotionElement'
import { TypewriterEffectSmoothDemo } from './InhanceUI/TypeWriter'
// import { TypewriterEffectDemo } from './InhanceUI/TypeWriterEffect'

// https://kevinhilgendorf.com

const Experience = () => {
  const fontSize = ["text-2xl", "text-3xl", "text-4xl"];
  return (
    <MotionElement
      as="div"
    >
      <div className='bg-[#e0e0dc] text-white pt-20'>
        <div className='bg-[#e0e0dc]'>
          {/* <MultiLayerParallax/> */}
          <div className='text-black max-md:px-10 md:px-20'>
            <div>
              {/* <h1 className='p-10
                max-md:text-4xl md:max-lg:text-6xl lg:text-8xl'
              >Experience:</h1> */}
              <MotionElement
                as="h1"
                className='p-10
                max-md:text-4xl md:max-lg:text-6xl lg:text-8xl'
              >
                Experience:
              </MotionElement>
            </div>

            {/* <div>
              <p className='max-md:p-10 md:p-20 max-md:text-2xl md:text-4xl'>
                Translating design into dynamic, functional web experiences is where I thrive. 
                I&apos;m passionate about transforming design systems into responsive, 
                web-based environments, leveraging the flexibility of multiple different technologies 
                to create sustainable websites with flexible and responsive components.
              </p>
            </div> */}

            {/* <MotionElement
              as="div"
              className='grid py-10 gap-10'>  */}
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
                    <h1>April 2024 - June 2024</h1>
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
                    <h1>March 2024 - April 2024</h1>
                    <h1>Hybrid</h1>
                  </div>

                </div>
              </div>

            {/* </MotionElement> */}
            </div>
          </div>

          {/* <div className='text-black'>
            <p className='max-md:p-10 md:p-20 max-md:text-2xl md:text-4xl'>
              Translating design into dynamic, functional web experiences is where I thrive. 
              I&apos;m passionate about transforming design systems into responsive, 
              web-based environments, leveraging the flexibility of multiple different technologies 
              to create sustainable websites with flexible and responsive components.
            </p>
          </div> */}
          
          <div>
            <TypewriterEffectSmoothDemo/>
          </div>
          

          <ShuffleHero/>
        </div>
        {/* <VelocityText/> */}
      </div>
    </MotionElement>
  )
}

export default Experience