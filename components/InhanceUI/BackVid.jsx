'use client'
import React, { useState, useRef, Suspense } from 'react';

const heroVids = [
    '/videos/trippy.mp4',
    '/videos/circular_data.mp4',
    '/videos/cube.mp4',
    '/videos/cyberpunk.mp4',
    '/videos/google_trans.mp4',
    '/videos/stack_visual.mp4',
    '/videos/trippy_enter.mp4',
    '/videos/zoom_out.mp4',
];

const BackVid = () => {
    const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
    const videoRef = useRef(null);
    
    const handleVideoEnd = () => {
        console.log(`inside handleVideoEnd, current is ${currentVideoIndex}`);
        setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % heroVids.length);
    }

    const handleVideoError = () => {
        console.log(`error on video handling: current index: ${currentVideoIndex}`);
        if (currentVideoIndex === 0) {
            setCurrentVideoIndex(1);
        }
    }

    return (
        <div className='-z-10 absolute inset-0 w-full h-full'>
            <Suspense fallback={<div className='-z-10 text-center'>Loading Video...</div>}>
                <div className="vid-container relative w-full h-full">
                    <video 
                        ref={videoRef}
                        className="absolute -z-10 inset-0 w-full h-full object-cover"
                        autoPlay 
                        muted
                        preload='auto' 
                        playsInline
                        onEnded={handleVideoEnd}
                        src={`${heroVids[currentVideoIndex]}`}
                        onError={handleVideoError}
                    >
                        <source src={`${heroVids[currentVideoIndex]}`} type="video/mp4" />
                        Your Browser doesn&apos;t support Video Tag.
                    </video>

                    {/* Gradient overlay */}
                    {/* <div className='absolute inset-0 bg-gradient-to-b from-transparent to-[#171717] w-full h-full'></div> */}
                    
                    {/* Optional additional overlay for opacity */}
                    <div className='absolute inset-0 bg-black opacity-30 w-full h-full'></div>
                </div>
            </Suspense>
        </div>
    );
}

export default BackVid;
