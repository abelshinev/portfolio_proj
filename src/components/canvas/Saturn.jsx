import { Suspense, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';
import * as THREE from 'three';

import Loader from '../Loader';

const Saturn = () => {
    const saturn = useGLTF('/saturn/saturnedit.gltf'); // Ensure path is correct
    console.log("Saturn model loaded:", saturn);

    useEffect(() => {
      if (!saturn) {
        console.warn('[Saturn] saturn is undefined');
      } else {
        console.log('[Saturn] ✅ Loaded:', saturn);
        console.log('[Saturn] Nodes:', saturn.nodes);
        console.log('[Saturn] Scene:', saturn.scene);
      }
    }, [saturn]);

    return (
        <>
            <hemisphereLight  intensity={0.6} 
                groundColor={new THREE.Color(0x222244)} // Custom dark blue instead of "black"
                color={new THREE.Color(0x8888ff)} position={[0, 10, 0]} />
            <primitive object={saturn.scene} scale={[0.005, 0.005, 0.005]} position-y={-4.9}/>
        </>
    );
};

const SaturnCanvas = () => {
    return (
        <Canvas
            frameloop='demand'
            shadows
            camera={{ position: [5, 5, 15], fov: 25 }}
            gl={{ preserveDrawingBuffer: true }}
        >
            <Suspense fallback={<Loader />}>
                <OrbitControls 
                    
                    enableZoom={false}
                    maxPolarAngle={Math.PI / 2}
                    minPolarAngle={Math.PI / 2}
                />
                <Saturn />
            </Suspense>

            <Preload all />
        </Canvas>
    );
}

export default SaturnCanvas;
