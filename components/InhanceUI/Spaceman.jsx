// "use client"
// import React from 'react';
// import { useAnimations, useGLTF } from '@react-three/drei';
// import { Canvas } from '@react-three/fiber';
// import { Suspense, useEffect, useRef, useState } from 'react';
// import spacemanScene from "../public/3d/spaceman.glb";

// const Spaceman = ({scale, position}) => {
//     const spacemanRef = useRef()
//     const {scene, animations} = useGLTF(spacemanScene);
//     const {actions} = useAnimations(animations, spacemanRef);
    
//     useEffect(() => {
//         actions["Idle"].play();   
//     }, [actions]);


//     return (
//     <mesh ref={spacemanRef} 
//         position={position} 
//         scale={scale} 
//         rotation={[0, 2.2, 0]}
//     >
//         <primitive object={scene} />
//     </mesh>
//   );
// };

// const SpacemanCanvas = ({scrollContainer}) => {
//     const [rotationX, setRotationX] = useState(0);
//     const [rotationY, setRotationY] = useState(0);
//     const [scale, setScale] = useState([3, 3, 3]);
//     const [position, setPosition] = useState([0, -0.7, 0])

//     useEffect(() => {
//         const handleScroll = () => {
//             const scrollTop = scrollContainer.current.scrollTop;
//             const rotationXValue = scrollTop * -0.0006;
//             const rotationYValue = scrollTop * -0.00075;
//             setRotationX(rotationXValue);
//             setRotationY(rotationYValue);
//         };

//         const handleResize = () => {
//             if (window.innerWidth < 768) {
//                 setScale([1, 1, 1]);
//                 setPosition([0.2, -0.1, 0]);
//             } else if (window.innerWidth < 1024) {
//                 setScale([1.33, 1.33, 1.33]);
//                 setPosition([0.2, -0.3, 0]);
//             } else if (window.innerWidth < 1280) {
//                 setScale([1.5, 1.5, 1.5]);
//                 setPosition([0.2, -0.4, 0]);
//             } else if (window.innerWidth < 1536) {
//                 setScale([1.66, 1.66, 1.66]);
//                 setPosition([0.2, -0.5, 0]);
//             } else {
//                 setScale([2, 2, 2]);
//                 setPosition([0.2, -0.7, 0]);
//             }
//         } 

//         handleResize();
//         window.addEventListener("scroll", handleScroll);
//         window.addEventListener("resize", handleResize);

//         return () => {
//             window.addEventListener("scroll", handleScroll);
//             window.addEventListener("resize", handleResize);
//         }

//     }, [scrollContainer])

     
//     return (
//         <Canvas className={`w-full h-screen bg-transparent z-10`}
//             // camera={{near: 0.1, far: 1000}}
//             camera={{ position: [0, 0, 3], fov: 50 }} // Set the camera closer and adjust fov for better focus

//         >
//             <Suspense>
//                 <directionalLight position={[1, 1, 1]} intensity={2}/>
//                 <ambientLight intensity={0.5}/>
//                 <pointLight position={[10, 5, 10]} intensity={2}/>
//                 <spotLight position={[0, 50, 10]} angle={0.15} penumbra={1} intensity={2}/>
//                 <hemisphereLight skyColor="#b1e1ff" groundColor="#000000" intensity={1}/>
    
//                 <Spaceman rotationX={rotationX} rotationY={rotationY} scale={scale} position={position} />
//             </Suspense>
    
//         </Canvas>
//     );
// };

// export default SpacemanCanvas;


//#333############################


"use client"
import React, { Suspense, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useGLTF, OrbitControls } from '@react-three/drei';

// const My3DModel = ({rotationY}) => {
const My3DModel = ({rotationY}) => {
    const { scene } = useGLTF("/3d/samurai.glb");
    // const { scene } = useGLTF("/3d/samurai_mask.glb");
    const modelRef = useRef();

    // Rotate the model slowly around the Y-axis
    useFrame(() => {
        if (modelRef.current) {
            modelRef.current.rotation.y += 0.01; // Adjust the rotation speed here
        }
    });

    return (
        <primitive
            ref={modelRef}
            object={scene}
            scale={[.1, .1, .1]}    // Start with a neutral scale
            position={[0, 0, 0]} // Center the model
            // position={position} // Center the model
            rotation={[0, rotationY, 0]} // Default rotation
        />
    );
};

const My3DCanvas = () => {
  return (
    // <div className='h-[100vh] w-[100vw]'>
    //     <Canvas
    //         camera={{ position: [0, 0, 40], far: 1000 }}
    //     >
    //     <Suspense fallback={null}>
    //         <ambientLight intensity={0.5} />
    //         <directionalLight position={[5, 5, 5]} intensity={1} />
    //         <My3DModel rotationY={0} />
    //     </Suspense>
    //     </Canvas>
    // </div>
    <div className='mx-auto max-md:ml-24 h-[400px] max-md:w-[300px] md:w-[400px] rounded-lg'>
      <Canvas camera={{ position: [0, 0, 20], far: 1000 }}>
        <Suspense fallback={null}>
          <ambientLight intensity={0.5} />
          <directionalLight position={[5, 5, 5]} intensity={1} />
          <My3DModel rotationY={0} />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default My3DCanvas;




