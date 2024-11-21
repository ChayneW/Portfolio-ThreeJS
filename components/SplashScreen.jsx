'use client'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
// import { SparklesCore } from './ui/Sparkles'
// import { Vortex } from './ui/Vortex'

const SplashScreen = () => {
  const [count, setCount] = useState('0%')
  const [isVisible, setIsVisible] = useState(true)
  // const [counterColor, setCounterColor] = useState('#FFFFFF')

  useEffect(() => {
    const totalDuration = 3000; // Total duration of the loading in milliseconds
    const updateInterval = 50; // Interval at which to update the counter
    const steps = totalDuration / updateInterval; // Number of steps to reach 100%
    const increment = 100 / steps; // Percentage increment per step
    const colorChangeInterval = totalDuration / 3; // Interval at which to change the color

    let currentValue = 0;
    let elapsedTime = 0;

    function updateCounter() {
      currentValue += increment;
      elapsedTime += updateInterval;

      if (currentValue >= 100) {
        setCount('100%');
        setTimeout(() => {
          setIsVisible(false); // Hide the splash screen
        }, updateInterval); // Small delay to show 100% before unmounting
        return;
      }

      setCount(`${Math.floor(currentValue)}%`);

      // if (elapsedTime >= colorChangeInterval) {
      //   if (elapsedTime < 2 * colorChangeInterval) {
      //     setCounterColor('#009B3A');
      //   } else {
      //     setCounterColor('#FFB81C');
      //   }
      // }

      setTimeout(updateCounter, updateInterval);
    }

    updateCounter();
  }, []);

//   https://codesandbox.io/p/sandbox/framer-motion-animate-content-bxx7lt?file=%2Fsrc%2FApp.tsx%3A10%2C32-10%2C37&from-embed

  if (!isVisible) return null; // Do not render the splash screen if it's not visible

  return (
    <main className="fixed inset-0 z-50 flex items-center justify-center bg-black text-white"> 
        <div className='loader flex flex-col items-center justify-center text-center'>
          <Image
            id='logo'
            // src={'/notch-fix-3-color-speak.png'}
            src='/logo-white.png'
            // src="/notch-fix.png"
            priority
            height={300}
            width={320}
            alt='banner'
          />
          {/* <div className='counter text-4xl font-bold mb-4 py-10' style={{ color: counterColor }}>{count}</div> */}
          <div className='counter text-4xl font-bold mb-4 py-10'>
            {count}
          </div>
          <div className='site-teaser mb-4'>
            <span className='block'>Enjoy the Experience!</span>
          </div>
        </div>
    </main>
  )
}

export default SplashScreen
