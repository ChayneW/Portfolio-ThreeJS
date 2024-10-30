import React from 'react'
import MultiLayerParallax from './InhanceUI/MultiLayerParallax'
import Projects from './Projects'
import ShuffleHero from './InhanceUI/ShuffleSkills'
import { VelocityText } from './InhanceUI/TextSide'
import { FlipLink, PageDroppingText } from './InhanceUI/DroppingText'

// https://kevinhilgendorf.com

const Experience = () => {
  const fontSize = ["text-xl", "text-xl", "text-4xl"];
  return (
    // <div className='bg-black text-white'>
    <div className='bg-[#e0e0dc] text-white'>
      <div className=''>
        {/* <MultiLayerParallax/> */}
        <div className=' text-black max-md:px-10 md:px-20'>
          <div>
            <h1 className='p-10
              max-md:text-4xl md:max-lg:text-6xl lg:text-8xl'
            >Experience:</h1>
          </div>

          <div>
            <p className='max-md:p-10 md:p-20 max-md:text-2xl md:text-4xl'>
              Translating design into dynamic, functional web experiences is where I thrive. 
              I&apos;m passionate about transforming design systems into responsive, 
              web-based environments, leveraging the flexibility of multiple different technologies 
              to create sustainable websites with flexible and responsive components.
            </p>
          </div>

          <div className='grid gap-10'>
            
            <div className='grid border-b md:mx-20 border-b-black'>
              <div className='experience-div max-lg:grid'>

                <div>
                  {/* <div className='md:hidden'>
                    <h1 className='text-[1em]'>Contributor/Code Reviewer</h1>
                  </div> */}
                  <div className=''>
                    <PageDroppingText fontSize={fontSize}>
                      Contributor/AI Code Reviewer
                    </PageDroppingText>
                  </div>
                </div>

                <p className='self-center'>August 2024 - Present</p>
              </div>

              <div className='experience-div max-lg:grid '>
                <h1>Outlier.AI</h1>
                <p>On-Site</p>
              </div>
            </div>

            <div className='md:mx-20 border-b border-b-black'>
              <div className="experience-div max-lg:grid">
                
                <div>
                  {/* <div className='md:hidden'>
                    <h1 className='text-[1em]'>Web Developer</h1>
                  </div> */}
                  <div className=''>
                    <PageDroppingText fontSize={fontSize}>
                      Web Developer
                    </PageDroppingText>
                  </div>
                </div>

                <p className='self-center'>May 2024 - June 2024</p>
              </div>
              <div className="experience-div max-lg:grid ">
                <h1>Notch Beatz Prod.</h1>
                <p>Remote</p>
              </div>
            </div>

            <div className='md:mx-20 border-b border-b-black'>
              <div className='experience-div max-lg:grid'>

                <div>
                  {/* <div className='md:hidden'>
                    <h1 className='text-[1em]'>Web Developer</h1>
                  </div> */}
                  <div className=''>
                    <PageDroppingText fontSize={fontSize}>
                      Web Developer
                    </PageDroppingText>
                  </div>
                </div>
                <p className='self-center'>March 2024 - April 2024</p>
              </div>
              <div className="experience-div max-lg:grid">
                <h1>A-1 Property Management Solutions</h1>
                <p>On-Site</p>
              </div>
            </div>

          </div>
        </div>
        

        <ShuffleHero/>
        <VelocityText/>
      </div>
    </div>
  )
}

export default Experience