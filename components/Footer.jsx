import React from 'react'
import { RevealBento } from './InhanceUI/Bento'
import { RevealLinks } from './InhanceUI/DroppingText'

const Footer = () => {
  return (
    <div>
      <h1 className='text-white'>Foote</h1>
      {/* <RevealBento/> */}
      <RevealLinks/>
    </div>
  )
}

export default Footer