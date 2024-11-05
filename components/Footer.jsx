import React from 'react'
import { RevealBento } from './InhanceUI/Bento'
import { RevealLinks } from './InhanceUI/DroppingText'
import My3DCanvas from './InhanceUI/Spaceman'

const Footer = () => {
  return (
    <div>
      <h1 className='text-white'>Foote</h1>
      {/* <RevealBento/> */}
      <RevealLinks/>

      {/* <div className='relative h-[300px]'>
          <div className='absolute inset-0'>
            <My3DCanvas/>

          </div>

        </div> */}
    </div>
  )
}

export default Footer