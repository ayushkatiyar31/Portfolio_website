import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Stars } from "@react-three/drei";
import * as THREE from "three";

const Planet = ({ 
  radius, 
  distance, 
  speed, 
  color, 
  emissive 
}: { 
  radius: number; 
  distance: number; 
  speed: number; 
  color: string;
  emissive?: string;
}) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const orbitRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (orbitRef.current) {
      orbitRef.current.rotation.y = state.clock.elapsedTime * speed;
    }
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.01;
    }
  });

  return (
    <group ref={orbitRef}>
      <mesh ref={meshRef} position={[distance, 0, 0]}>
        <sphereGeometry args={[radius, 32, 32]} />
        <meshStandardMaterial 
          color={color} 
          emissive={emissive || color}
          emissiveIntensity={0.2}
          roughness={0.7}
        />
      </mesh>
    </group>
  );
};

const OrbitRing = ({ distance }: { distance: number }) => {
  const points = useMemo(() => {
    const pts = [];
    for (let i = 0; i <= 64; i++) {
      const angle = (i / 64) * Math.PI * 2;
      pts.push(new THREE.Vector3(Math.cos(angle) * distance, 0, Math.sin(angle) * distance));
    }
    return pts;
  }, [distance]);

  return (
    <line>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={points.length}
          array={new Float32Array(points.flatMap(p => [p.x, p.y, p.z]))}
          itemSize={3}
        />
      </bufferGeometry>
      <lineBasicMaterial color="#00d4ff" opacity={0.15} transparent />
    </line>
  );
};

const Sun = () => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.002;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.2} floatIntensity={0.5}>
      <mesh ref={meshRef}>
        <sphereGeometry args={[1.2, 32, 32]} />
        <meshStandardMaterial 
          color="#00d4ff" 
          emissive="#00d4ff"
          emissiveIntensity={0.8}
        />
      </mesh>
      <pointLight color="#00d4ff" intensity={2} distance={20} />
    </Float>
  );
};

const Scene = () => {
  return (
    <>
      <ambientLight intensity={0.1} />
      <Stars radius={50} depth={50} count={2000} factor={3} saturation={0} fade speed={1} />
      
      <Sun />
      
      <OrbitRing distance={3} />
      <OrbitRing distance={4.5} />
      <OrbitRing distance={6.5} />
      <OrbitRing distance={8.5} />
      
      <Planet radius={0.3} distance={3} speed={0.5} color="#a855f7" emissive="#a855f7" />
      <Planet radius={0.4} distance={4.5} speed={0.35} color="#ec4899" emissive="#ec4899" />
      <Planet radius={0.35} distance={6.5} speed={0.25} color="#06b6d4" emissive="#06b6d4" />
      <Planet radius={0.25} distance={8.5} speed={0.15} color="#10b981" emissive="#10b981" />
    </>
  );
};

const SolarSystem = () => {
  return (
    <div className="absolute inset-0 w-full h-full">
      <Canvas
        camera={{ position: [0, 8, 12], fov: 45 }}
        style={{ background: "transparent" }}
        gl={{ antialias: true, alpha: true }}
      >
        <Scene />
      </Canvas>
    </div>
  );
};

export default SolarSystem;