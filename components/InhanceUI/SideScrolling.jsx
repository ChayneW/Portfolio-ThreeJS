"use client"
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import ScrollTrigger from 'gsap/ScrollTrigger';
import Image from 'next/image';

gsap.registerPlugin(useGSAP)

const Marquee = () => {
  const marqueeInnerRef = useRef(null);



  useGSAP(() => {
    let currentScroll = 0;
    let isScrollingDown = true;

    // Set up the GSAP animation
    let tween = gsap.to(".marquee__part", { 
      xPercent: -100, 
      repeat: -1, 
      duration: 40, 
      ease: "linear" 
    }).totalProgress(0.5);

    gsap.set(".marquee__inner", { xPercent: -50 });

    const handleScroll = () => {
      if (window.scrollY > currentScroll) {
        isScrollingDown = true;
      } else {
        isScrollingDown = false;
      }

      gsap.to(tween, {
        timeScale: isScrollingDown ? 1 : -1,
      });

      currentScroll = window.scrollY;
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <section className="spacer"></section>

      <section className="marquee grid items-center">
        <div className="marquee__inner flex items-center gap-40" aria-hidden="true" ref={marqueeInnerRef}>
          
          <div className="marquee__part flex items-center gap-40 justify-around max-lg:text-xl lg:text-4xl font-bold px-20">
            <h1 className='flex items-center'>SOFTWARE DEVELOPER</h1>
            <Image
                src='public/photos/diamond.svg'
                alt='diamond'
                width={40}
                height={40}
            />
            <h1 className='flex items-center'>BACKEND</h1>
            <Image
                src='public/photos/diamond.svg'
                alt='diamond'
                width={40}
                height={40}
            />
            <h1>FRONTEND</h1>
            <Image
                src='photos/diamond.svg'
                alt='diamond'
                width={40}
                height={40}
            />
            <h1>SOFTWARE DEVELOPER</h1>
            <Image
                src='photos/diamond.svg'
                alt='diamond'
                width={40}
                height={40}
            />
          </div>

          <div className="marquee__part flex items-center gap-40 justify-around max-lg:text-xl lg:text-4xl font-bold px-20">
            <h1>BACKEND</h1>
            <Image
                src='photos/diamond.svg'
                alt='diamond'
                width={40}
                height={40}
            />
            <h1>FRONTEND</h1>
            <Image
                src='photos/diamond.svg'
                alt='diamond'
                width={40}
                height={40}
            />
            <h1>SOFTWARE DEVELOPER</h1>
            <Image
                src='photos/diamond.svg'
                alt='diamond'
                width={40}
                height={40}
            />
            <h1>BACKEND</h1>
            <Image
                src='photos/diamond.svg'
                alt='diamond'
                width={40}
                height={40}
            />
          </div>

          <div className="marquee__part flex items-center gap-40 justify-around max-lg:text-xl lg:text-4xl font-bold px-20">
            <h1>FRONTEND</h1>
            <Image
                src='photos/diamond.svg'
                alt='diamond'
                width={40}
                height={40}
            />
            <h1>SOFTWARE DEVELOPER</h1>
            <Image
                src='photos/diamond.svg'
                alt='diamond'
                width={40}
                height={40}
            />
            <h1>BACKEND</h1>
            <Image
                src='photos/diamond.svg'
                alt='diamond'
                width={40}
                height={40}
            />
            <h1>FRONTEND</h1>
            <Image
                src='photos/diamond.svg'
                alt='diamond'
                width={40}
                height={40}
            />
          </div>

          <div className="marquee__part flex items-center gap-40 justify-around max-lg:text-xl lg:text-4xl font-bold px-20">
            <h1>SOFTWARE DEVELOPER</h1>
            <Image
                src='photos/diamond.svg'
                alt='diamond'
                width={40}
                height={40}
            />
            <h1>BACKEND</h1>
            <Image
                src='photos/diamond.svg'
                alt='diamond'
                width={40}
                height={40}
            />
            <h1>FRONTEND</h1>
            <Image
                src='photos/diamond.svg'
                alt='diamond'
                width={40}
                height={40}
            />
            <h1>SOFTWARE DEVELOPER</h1>
            <Image
                src='photos/diamond.svg'
                alt='diamond'
                width={40}
                height={40}
            />
          </div>
        </div>
      </section>

      <section className="spacer"></section>
    </>
  );
};

export default Marquee;
