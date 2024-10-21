"use client"
import React, {useRef} from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

const MultiLayerParallax = () => {

    const ref = useRef(null);
    const {scrollYProgress} = useScroll({
        target: ref,
        offset: ["start start", "end start"],
    });
    
    // use transform hook:
    const backgroundY = useTransform(scrollYProgress, [0,1], ["0%", "100%"]);
    const textY = useTransform(scrollYProgress, [0,1], ["0%", "200%"]);

    return (
        <div>
            <div 
                // Ref used here for scrolling tracking
                ref={ref}
                className='w-full h-screen overflow-hidden relative grid place-items-center'>
                
                <motion.h1 
                    className='font-bold text-white text-7xl absolute z-10' 
                    style={{ 
                        // top: '40%', 
                        top: '20%', 
                        y: textY, 
                    }}  // Moves the h1 down 10% from the top
                >
                    CHAYNE.DEV
                </motion.h1>

                <motion.div className="absolute inset-0 z-0"
                    style={{
                        backgroundImage: `url(/photos/juskteez.jpg)`,
                        // backgroundImage: `url(/photos/jeremy-kieran-RVvr_g5-u3M-unsplash.jpg)`,
                        // backgroundPosition: "bottom",
                        backgroundPosition: "center",
                        backgroundSize: "cover",
                        y: backgroundY,
                    }}
                >
                </motion.div>
                
                <div className='absolute inset-0 z-20'
                    style={{
                        backgroundImage: `url(/photos/juskteez-trans.png)`,
                        // backgroundImage: `url(/photos/jeremy-kieran-trans-new.png)`,
                        // backgroundPosition: "bottom",
                        backgroundPosition: "center",
                        backgroundSize: "cover",
                    }}>
                </div>
                
                

            </div>
            
            {/* <div className='grid px-40 text-2xl gap-20'>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum deleniti, nisi, qui maxime ullam eveniet veritatis labore pariatur totam amet quasi beatae? Commodi laudantium nam doloremque eveniet! Laboriosam, exercitationem amet.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum deleniti, nisi, qui maxime ullam eveniet veritatis labore pariatur totam amet quasi beatae? Commodi laudantium nam doloremque eveniet! Laboriosam, exercitationem amet.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum deleniti, nisi, qui maxime ullam eveniet veritatis labore pariatur totam amet quasi beatae? Commodi laudantium nam doloremque eveniet! Laboriosam, exercitationem amet.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum deleniti, nisi, qui maxime ullam eveniet veritatis labore pariatur totam amet quasi beatae? Commodi laudantium nam doloremque eveniet! Laboriosam, exercitationem amet.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum deleniti, nisi, qui maxime ullam eveniet veritatis labore pariatur totam amet quasi beatae? Commodi laudantium nam doloremque eveniet! Laboriosam, exercitationem amet.</p>
            </div> */}
            
    </div>
    )
}

export default MultiLayerParallax