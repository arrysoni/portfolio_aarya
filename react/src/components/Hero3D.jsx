// Hero3D.jsx
import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

const Blob = () => {
  return (
    <mesh>
      <torusKnotGeometry args={[1, 0.4, 120, 16]} />
      <meshStandardMaterial color="#f4b942" wireframe />
    </mesh>
  );
};

const Hero3D = () => {
  return (
    <div style={{ width: '100%', height: '100vh' }}>
      <Canvas camera={{ position: [0, 0, 4] }}>
        <ambientLight />
        <directionalLight position={[1, 2, 3]} />
        <OrbitControls enableZoom={false} autoRotate />
        <Blob />
      </Canvas>
    </div>
  );
};

export default Hero3D;
