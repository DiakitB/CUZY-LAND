import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Html } from '@react-three/drei';

function Candle({ color = '#fff', label = '' }) {
  return (
    <group>
      {/* Candle Body */}
      <mesh position={[0, 0, 0]} castShadow>
        <cylinderGeometry args={[1, 1.2, 2.5, 64]} />
        <meshStandardMaterial color={color} roughness={0.8} />
      </mesh>

      {/* Wick */}
      <mesh position={[0, 1.3, 0]}>
        <cylinderGeometry args={[0.05, 0.05, 0.3, 32]} />
        <meshStandardMaterial color="#000" />
      </mesh>

      {/* Flame */}
      <mesh position={[0, 1.5, 0]}>
        <coneGeometry args={[0.1, 0.3, 16]} />
        <meshStandardMaterial color="#ff4500" emissive="#ff6347" emissiveIntensity={1.5} />
      </mesh>

      {/* Label */}
      {label && (
        <Html position={[0, 0.5, 1.1]} transform>
          <div
            style={{
              fontSize: '14px',
              background: '#fff',
              padding: '2px 5px',
              borderRadius: '3px',
              fontFamily: 'serif',
              textAlign: 'center',
              boxShadow: '0 2px 4px rgba(0,0,0,0.2)',
            }}
          >
            {label}
          </div>
        </Html>
      )}
    </group>
  );
}

export default function CandlePreview3D({ color, label }) {
  return (
    <div className="w-full h-80 bg-white rounded-lg shadow-md overflow-hidden">
      <Canvas
        shadows
        camera={{ position: [0, 3, 5], fov: 50 }}
      >
        {/* Lighting */}
        <ambientLight intensity={0.5} />
        <spotLight position={[5, 10, 5]} angle={0.3} penumbra={1} castShadow />
        <directionalLight position={[-2, 5, 2]} intensity={0.5} />

        {/* Candle */}
        <Candle color={color} label={label} />

        {/* Controls */}
        <OrbitControls enableZoom={true} />
      </Canvas>
    </div>
  );
}