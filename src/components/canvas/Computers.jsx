import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";


const Computers = ({ isMobile }) => {
  const computer = useGLTF('./desktop_pc/scene.gltf')
  return (
    <mesh>
      <hemisphereLight intensity={3} groundColor='black' />
      <pointLight intensity={1} />
      <primitive 
      object={computer.scene}
      scale={isMobile ? 0.50 : 0.75} //changes the size of the computer render
      position={isMobile ? [0, -3, -.8] : [0, -2.65, -1.5] } //changes the position of the computer render
      rotation={ [-0.01, -0.9, -0.1] } //changes the rotation of the computer render
      />
    </mesh>
  )
}

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 500px)');
    
    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    }

    mediaQuery.addEventListener('change', handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener('change', handleMediaQueryChange);

    }
  }, [])
  return (
    <Canvas 
      frameLoop ="demand" 
      shadows
      camera={{ position: [20, 3, 5], fov:25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls 
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers isMobile={isMobile}/>
      </Suspense> 
      <Preload all />
    </Canvas>
  )
}

export default ComputersCanvas;
