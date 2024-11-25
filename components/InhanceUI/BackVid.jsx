// 'use client'
// import React, { useState, useRef, Suspense } from 'react';

// const heroVids = [
//     '/videos/trippy.mp4',
//     '/videos/circular_data.mp4',
//     '/videos/cube.mp4',
//     '/videos/cyberpunk.mp4',
//     '/videos/google_trans.mp4',
//     '/videos/stack_visual.mp4',
//     '/videos/trippy_enter.mp4',
//     '/videos/zoom_out.mp4',
// ];

// const BackVid = () => {
//     const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
//     const videoRef = useRef(null);

    

//     const preloadVideo = (index) => {
//         console.log("creating new video element")
//         const video = document.createElement('video');
//         video.src = heroVids[index];
//         // console.log(video.src)
//         video.preload = 'auto';
//     }
    
//     const handleVideoEnd = () => {
//         // console.log(`inside handleVideoEnd, current is ${currentVideoIndex}`);
//         // setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % heroVids.length);
//         // console.log(`switching to next video: ${currentVideoIndex}`)

//         const nextIndex = (currentVideoIndex + 1) % heroVids.length;
//         preloadVideo(nextIndex); // Preload next video
//         setCurrentVideoIndex(nextIndex);
//     }

//     const handleVideoError = () => {
//         console.log(`error on video handling: current index: ${currentVideoIndex}`);
//         if (currentVideoIndex === 0) {
//             setCurrentVideoIndex(1);
//         }
//     }

//     return (
//         <div className='-z-10 absolute inset-0 w-full h-full'>
//             <Suspense fallback={<div className='-z-10 text-center'>Loading Video...</div>}>
//                 <div className="vid-container relative w-full h-full">
//                     <video 
//                         ref={videoRef}
//                         className="absolute -z-10 inset-0 w-full h-full object-cover"
//                         autoPlay 
//                         muted
//                         preload='auto' 
//                         playsInline
//                         onEnded={handleVideoEnd}
//                         src={`${heroVids[currentVideoIndex]}`}
//                         onError={handleVideoError}
//                     >
//                         <source src={`${heroVids[currentVideoIndex]}`} type="video/mp4" />
//                         Your Browser doesn&apos;t support Video Tag.
//                     </video>

//                     {/* Gradient overlay */}
//                     {/* <div className='absolute inset-0 bg-gradient-to-b from-transparent to-[#171717] w-full h-full'></div> */}
                    
//                     {/* Optional additional overlay for opacity */}
//                     <div className='absolute inset-0 bg-black opacity-20 w-full h-full'></div>
//                 </div>
//             </Suspense>
//         </div>
//     );
// }

// export default BackVid;


'use client';
import React, { useState, useEffect, useRef } from 'react';

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

const fallbackVideo = '/videos/trippy.mp4'; // Dedicated fallback video

const BackVid = () => {
    const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
    const [isLoading, setIsLoading] = useState(true); // Track loading state
    const videoRef = useRef(null);

    const loadVideo = (index) => {
        const video = videoRef.current;
        if (!video) return;

        setIsLoading(true); // Start loading

        video.src = heroVids[index];
        video.load();
        video.oncanplay = () => {
            setIsLoading(false); // Mark loading complete
            video.play();
        };
        video.onerror = () => {
            console.error(`Error loading video: ${heroVids[index]}`);
            const nextIndex = (index + 1) % heroVids.length;
            setCurrentVideoIndex(nextIndex); // Skip to the next video
        };
    };

    const handleVideoEnd = () => {
        const nextIndex = (currentVideoIndex + 1) % heroVids.length;
        loadVideo(nextIndex);
        setCurrentVideoIndex(nextIndex);
    };

    useEffect(() => {
        loadVideo(currentVideoIndex); // Load the initial video
    }, [currentVideoIndex]);

    return (
        <div className='-z-10 absolute inset-0 w-full h-full'>
            <div className="vid-container relative w-full h-full">
                {isLoading && ( // Show fallback video while loading
                    <video
                        className="absolute -z-10 inset-0 w-full h-full object-cover"
                        autoPlay
                        muted
                        loop
                        src={fallbackVideo}
                        playsInline
                    >
                        Your browser doesn&apos;t support the video tag.
                    </video>
                )}
                <video
                    ref={videoRef}
                    className={`absolute -z-10 inset-0 w-full h-full object-cover transition-opacity duration-500 ${
                        isLoading ? 'opacity-0' : 'opacity-100'
                    }`}
                    autoPlay
                    muted
                    preload="auto"
                    playsInline
                    onEnded={handleVideoEnd}
                >
                    Your browser doesn&apos;t support the video tag.
                </video>
                <div className='absolute inset-0 bg-black opacity-20 w-full h-full'></div>
            </div>
        </div>
    );
};

export default BackVid;
