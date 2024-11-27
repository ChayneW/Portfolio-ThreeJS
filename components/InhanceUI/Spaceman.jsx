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
    <div className='mx-auto sm:max-md:ml-24 h-[400px] max-md:w-[300px] md:w-[400px] rounded-lg'>
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




