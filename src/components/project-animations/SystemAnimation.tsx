import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Mesh } from "three";
import { RoundedBox } from "@react-three/drei";

export const SystemAnimation = () => {
  const serverRacks = useRef<Mesh[]>([]);
  const lights = useRef<Mesh[]>([]);
  const fans = useRef<Mesh[]>([]);
  const dataPackets = useRef<Mesh[]>([]);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    
    serverRacks.current.forEach((rack, i) => {
      if (rack) {
        rack.position.y = Math.sin(t * 2 + i) * 0.02;
      }
    });
    
    lights.current.forEach((light, i) => {
      if (light) {
        const intensity = Math.sin(t * 4 + i * 0.5) * 0.5 + 0.5;
        light.scale.set(intensity, intensity, intensity);
      }
    });
    
    fans.current.forEach((fan, i) => {
      if (fan) {
        fan.rotation.z = t * 5;
      }
    });
    
    dataPackets.current.forEach((packet, i) => {
      if (packet) {
        packet.position.y = ((t * 2 + i * 0.5) % 3) - 1.5;
        packet.rotation.y = t * 2;
      }
    });
  });

  return (
    <group>
      {/* Racks de serveurs */}
      {[-0.8, 0, 0.8].map((x, i) => (
        <group key={i} position={[x, 0, 0]}>
          <RoundedBox 
            ref={(el) => { if (el) serverRacks.current[i] = el; }}
            args={[0.6, 2, 0.4]} 
            radius={0.05}
          >
            <meshStandardMaterial 
              color={["#1e293b", "#334155", "#475569"][i]} 
              metalness={0.8} 
              roughness={0.3} 
            />
          </RoundedBox>
          
          {/* Lumières LED sur chaque rack */}
          {[...Array(5)].map((_, j) => (
            <mesh 
              key={j} 
              ref={(el) => { if (el) lights.current[i * 5 + j] = el; }}
              position={[0.25, 0.6 - j * 0.3, 0.25]}
            >
              <sphereGeometry args={[0.04, 8, 8]} />
              <meshStandardMaterial 
                color={j % 2 === 0 ? "#10b981" : "#ef4444"} 
                metalness={0.9} 
                roughness={0.1}
                emissive={j % 2 === 0 ? "#10b981" : "#ef4444"}
                emissiveIntensity={0.5}
              />
            </mesh>
          ))}
          
          {/* Ventilateurs */}
          <mesh 
            ref={(el) => { if (el) fans.current[i] = el; }}
            position={[0, -0.8, 0.25]}
          >
            <cylinderGeometry args={[0.15, 0.15, 0.02, 6]} />
            <meshStandardMaterial color="#06b6d4" metalness={0.8} roughness={0.2} />
          </mesh>
        </group>
      ))}
      
      {/* Paquets de données circulant */}
      {[...Array(8)].map((_, i) => (
        <mesh 
          key={i} 
          ref={(el) => { if (el) dataPackets.current[i] = el; }}
          position={[-1.2 + (i % 4) * 0.8, 0, 0.8]}
        >
          <boxGeometry args={[0.1, 0.1, 0.1]} />
          <meshStandardMaterial 
            color={["#8b5cf6", "#ec4899", "#f59e0b", "#06b6d4"][i % 4]} 
            metalness={0.9} 
            roughness={0.1} 
          />
        </mesh>
      ))}
      
      {/* Connexions réseau */}
      {[-0.4, 0.4].map((x, i) => (
        <mesh key={i} position={[x, 0, 0]}>
          <cylinderGeometry args={[0.02, 0.02, 2, 8]} />
          <meshStandardMaterial 
            color="#fbbf24" 
            metalness={0.8} 
            roughness={0.2}
            emissive="#fbbf24"
            emissiveIntensity={0.3}
          />
        </mesh>
      ))}
    </group>
  );
};
