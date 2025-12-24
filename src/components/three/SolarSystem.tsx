import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Stars, Trail } from "@react-three/drei";
import * as THREE from "three";

const Planet = ({ 
  radius, 
  distance, 
  speed, 
  color, 
  emissive,
  hasRing = false,
  hasMoon = false
}: { 
  radius: number; 
  distance: number; 
  speed: number; 
  color: string;
  emissive?: string;
  hasRing?: boolean;
  hasMoon?: boolean;
}) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const orbitRef = useRef<THREE.Group>(null);
  const moonRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (orbitRef.current) {
      orbitRef.current.rotation.y = state.clock.elapsedTime * speed;
    }
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.01;
    }
    if (moonRef.current) {
      moonRef.current.rotation.y = state.clock.elapsedTime * speed * 3;
    }
  });

  return (
    <group ref={orbitRef}>
      <Trail
        width={radius * 2}
        length={8}
        color={color}
        attenuation={(t) => t * t}
      >
        <mesh ref={meshRef} position={[distance, 0, 0]}>
          <sphereGeometry args={[radius, 32, 32]} />
          <meshStandardMaterial 
            color={color} 
            emissive={emissive || color}
            emissiveIntensity={0.4}
            roughness={0.5}
            metalness={0.3}
          />
        </mesh>
      </Trail>
      
      {/* Planet Ring */}
      {hasRing && (
        <mesh position={[distance, 0, 0]} rotation={[Math.PI / 2.5, 0, 0]}>
          <ringGeometry args={[radius * 1.4, radius * 2, 32]} />
          <meshStandardMaterial 
            color={color} 
            transparent 
            opacity={0.4} 
            side={THREE.DoubleSide}
          />
        </mesh>
      )}
      
      {/* Moon */}
      {hasMoon && (
        <group position={[distance, 0, 0]}>
          <group ref={moonRef}>
            <mesh position={[radius * 2, 0, 0]}>
              <sphereGeometry args={[radius * 0.3, 16, 16]} />
              <meshStandardMaterial 
                color="#9ca3af" 
                emissive="#6b7280"
                emissiveIntensity={0.2}
              />
            </mesh>
          </group>
        </group>
      )}
    </group>
  );
};

const OrbitRing = ({ distance, color = "#00d4ff" }: { distance: number; color?: string }) => {
  const points = useMemo(() => {
    const pts = [];
    for (let i = 0; i <= 128; i++) {
      const angle = (i / 128) * Math.PI * 2;
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
      <lineBasicMaterial color={color} opacity={0.2} transparent />
    </line>
  );
};

const Sun = () => {
  const meshRef = useRef<THREE.Mesh>(null);
  const coronaRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.002;
    }
    if (coronaRef.current) {
      coronaRef.current.rotation.z += 0.001;
      const scale = 1 + Math.sin(state.clock.elapsedTime * 2) * 0.05;
      coronaRef.current.scale.set(scale, scale, scale);
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={0.1} floatIntensity={0.3}>
      {/* Core */}
      <mesh ref={meshRef}>
        <sphereGeometry args={[1.2, 64, 64]} />
        <meshStandardMaterial 
          color="#fbbf24" 
          emissive="#f59e0b"
          emissiveIntensity={1.5}
        />
      </mesh>
      
      {/* Inner glow layer */}
      <mesh>
        <sphereGeometry args={[1.4, 32, 32]} />
        <meshStandardMaterial 
          color="#fbbf24"
          emissive="#fbbf24"
          emissiveIntensity={0.5}
          transparent
          opacity={0.3}
        />
      </mesh>
      
      {/* Corona effect */}
      <mesh ref={coronaRef}>
        <sphereGeometry args={[1.8, 32, 32]} />
        <meshStandardMaterial 
          color="#f97316"
          emissive="#f97316"
          emissiveIntensity={0.3}
          transparent
          opacity={0.15}
        />
      </mesh>
      
      {/* Sun light */}
      <pointLight color="#fbbf24" intensity={3} distance={30} decay={2} />
      <pointLight color="#f97316" intensity={1.5} distance={15} decay={2} />
    </Float>
  );
};

const AsteroidBelt = () => {
  const asteroids = useMemo(() => {
    const items = [];
    for (let i = 0; i < 100; i++) {
      const angle = Math.random() * Math.PI * 2;
      const distance = 5.3 + Math.random() * 0.4;
      const x = Math.cos(angle) * distance;
      const z = Math.sin(angle) * distance;
      const y = (Math.random() - 0.5) * 0.3;
      items.push({ position: [x, y, z] as [number, number, number], scale: 0.02 + Math.random() * 0.04 });
    }
    return items;
  }, []);

  return (
    <group>
      {asteroids.map((asteroid, i) => (
        <mesh key={i} position={asteroid.position}>
          <dodecahedronGeometry args={[asteroid.scale]} />
          <meshStandardMaterial color="#6b7280" roughness={0.9} />
        </mesh>
      ))}
    </group>
  );
};

const ShootingStar = () => {
  const ref = useRef<THREE.Mesh>(null);
  const startPos = useMemo(() => ({
    x: (Math.random() - 0.5) * 40,
    y: 10 + Math.random() * 10,
    z: -20 - Math.random() * 10
  }), []);
  
  useFrame((state) => {
    if (ref.current) {
      const t = (state.clock.elapsedTime * 0.3) % 5;
      ref.current.position.x = startPos.x + t * 8;
      ref.current.position.y = startPos.y - t * 4;
      ref.current.position.z = startPos.z + t * 3;
      ref.current.visible = t < 1.5;
    }
  });

  return (
    <Trail
      width={0.1}
      length={10}
      color="#ffffff"
      attenuation={(t) => t * t}
    >
      <mesh ref={ref} position={[startPos.x, startPos.y, startPos.z]}>
        <sphereGeometry args={[0.03, 8, 8]} />
        <meshBasicMaterial color="#ffffff" />
      </mesh>
    </Trail>
  );
};

const Nebula = () => {
  const ref = useRef<THREE.Points>(null);
  
  const particles = useMemo(() => {
    const positions = [];
    const colors = [];
    for (let i = 0; i < 500; i++) {
      const x = (Math.random() - 0.5) * 60;
      const y = (Math.random() - 0.5) * 40;
      const z = -30 - Math.random() * 20;
      positions.push(x, y, z);
      
      // Nebula colors: purple, cyan, pink
      const colorChoice = Math.random();
      if (colorChoice < 0.33) {
        colors.push(0.6, 0.2, 0.9); // Purple
      } else if (colorChoice < 0.66) {
        colors.push(0.2, 0.8, 0.9); // Cyan
      } else {
        colors.push(0.9, 0.3, 0.6); // Pink
      }
    }
    return {
      positions: new Float32Array(positions),
      colors: new Float32Array(colors)
    };
  }, []);

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y = state.clock.elapsedTime * 0.01;
    }
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particles.positions.length / 3}
          array={particles.positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          count={particles.colors.length / 3}
          array={particles.colors}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.15}
        vertexColors
        transparent
        opacity={0.6}
        sizeAttenuation
      />
    </points>
  );
};

const Scene = () => {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.02;
    }
  });

  return (
    <>
      <ambientLight intensity={0.15} />
      <Stars 
        radius={80} 
        depth={80} 
        count={4000} 
        factor={4} 
        saturation={0.5} 
        fade 
        speed={0.5} 
      />
      
      <Nebula />
      
      {[0, 1, 2].map((i) => (
        <ShootingStar key={i} />
      ))}
      
      <group ref={groupRef}>
        <Sun />
        
        {/* Orbit rings with gradient colors */}
        <OrbitRing distance={2.8} color="#a855f7" />
        <OrbitRing distance={4} color="#ec4899" />
        <OrbitRing distance={5.5} color="#06b6d4" />
        <OrbitRing distance={7.2} color="#10b981" />
        <OrbitRing distance={9} color="#f59e0b" />
        
        {/* Asteroid belt */}
        <AsteroidBelt />
        
        {/* Planets with enhanced features */}
        <Planet radius={0.25} distance={2.8} speed={0.6} color="#a855f7" emissive="#a855f7" />
        <Planet radius={0.35} distance={4} speed={0.4} color="#ec4899" emissive="#ec4899" hasMoon />
        <Planet radius={0.4} distance={5.5} speed={0.28} color="#06b6d4" emissive="#06b6d4" hasRing />
        <Planet radius={0.3} distance={7.2} speed={0.18} color="#10b981" emissive="#10b981" />
        <Planet radius={0.5} distance={9} speed={0.1} color="#f59e0b" emissive="#f59e0b" hasRing hasMoon />
      </group>
    </>
  );
};

const SolarSystem = () => {
  return (
    <div className="absolute inset-0 w-full h-full">
      <Canvas
        camera={{ position: [0, 12, 18], fov: 50 }}
        style={{ background: "transparent" }}
        gl={{ antialias: true, alpha: true }}
        dpr={[1, 2]}
      >
        <Scene />
      </Canvas>
    </div>
  );
};

export default SolarSystem;
