import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Environment, Float, MeshDistortMaterial, Sphere, Stars } from '@react-three/drei';
import * as THREE from 'three';

function AnimatedSphere() {
  const sphereRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (sphereRef.current) {
      sphereRef.current.rotation.x = state.clock.elapsedTime * 0.1;
      sphereRef.current.rotation.y = state.clock.elapsedTime * 0.15;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={1} floatIntensity={1.5}>
      <Sphere ref={sphereRef} args={[1, 64, 64]} scale={1.8}>
        <MeshDistortMaterial
          color="#d6c5b3" // Light brown / beige
          attach="material"
          distort={0.3}
          speed={1.5}
          roughness={0.4}
          metalness={0.6}
        />
      </Sphere>
    </Float>
  );
}

function FloatingShapes() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.03;
    }
  });

  const colors = ['#ffffff', '#a1a1aa', '#d6c5b3', '#3f3f46']; // White, Light Gray, Light Brown, Dark Gray

  return (
    <group ref={groupRef}>
      {Array.from({ length: 15 }).map((_, i) => (
        <Float
          key={i}
          speed={0.5 + Math.random()}
          rotationIntensity={1}
          floatIntensity={1}
          position={[
            (Math.random() - 0.5) * 20,
            (Math.random() - 0.5) * 20,
            (Math.random() - 0.5) * 15 - 5,
          ]}
        >
          <mesh>
            {i % 2 === 0 ? (
              <boxGeometry args={[0.6, 0.6, 0.6]} />
            ) : (
              <octahedronGeometry args={[0.5]} />
            )}
            <meshStandardMaterial
              color={colors[i % colors.length]}
              roughness={0.3}
              metalness={0.7}
              wireframe={i % 5 === 0}
            />
          </mesh>
        </Float>
      ))}
    </group>
  );
}

export default function Scene() {
  return (
    <div className="absolute inset-0 -z-10 bg-[#0a0a0a]"> {/* Very dark gray/black */}
      <Canvas camera={{ position: [0, 0, 10], fov: 45 }}>
        <ambientLight intensity={0.8} />
        <directionalLight position={[10, 10, 5]} intensity={1.5} color="#ffffff" />
        <pointLight position={[-10, -10, -5]} intensity={0.5} color="#d6c5b3" />
        
        <AnimatedSphere />
        <FloatingShapes />
        
        <Stars radius={100} depth={50} count={3000} factor={3} saturation={0} fade speed={0.5} />
        <Environment preset="city" />
      </Canvas>
    </div>
  );
}
