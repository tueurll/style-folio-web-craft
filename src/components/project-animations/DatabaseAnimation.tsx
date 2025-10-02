import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Mesh } from "three";

export const DatabaseAnimation = () => {
  const cylinder1 = useRef<Mesh>(null);
  const cylinder2 = useRef<Mesh>(null);
  const cylinder3 = useRef<Mesh>(null);
  const dataParticles = useRef<Mesh[]>([]);
  const connections = useRef<Mesh[]>([]);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (cylinder1.current) {
      cylinder1.current.rotation.y = t * 0.5;
      cylinder1.current.scale.y = 1 + Math.sin(t * 2) * 0.1;
    }
    if (cylinder2.current) {
      cylinder2.current.rotation.y = t * 0.5;
      cylinder2.current.scale.y = 1 + Math.sin(t * 2 + 2) * 0.1;
    }
    if (cylinder3.current) {
      cylinder3.current.rotation.y = t * 0.5;
      cylinder3.current.scale.y = 1 + Math.sin(t * 2 + 4) * 0.1;
    }
    
    dataParticles.current.forEach((particle, i) => {
      if (particle) {
        const angle = (t + i * Math.PI / 4) * 0.8;
        particle.position.x = Math.cos(angle) * 1.3;
        particle.position.z = Math.sin(angle) * 1.3;
        particle.rotation.y = t;
      }
    });
    
    connections.current.forEach((conn, i) => {
      if (conn) {
        conn.scale.y = 1 + Math.sin(t * 3 + i) * 0.2;
      }
    });
  });

  return (
    <group>
      {/* Cylindres de base de données */}
      <mesh ref={cylinder1} position={[0, 0.8, 0]}>
        <cylinderGeometry args={[1, 1, 0.3, 32]} />
        <meshStandardMaterial color="#8b5cf6" metalness={0.8} roughness={0.2} />
      </mesh>
      
      <mesh ref={cylinder2} position={[0, 0, 0]}>
        <cylinderGeometry args={[1, 1, 0.3, 32]} />
        <meshStandardMaterial color="#06b6d4" metalness={0.8} roughness={0.2} />
      </mesh>
      
      <mesh ref={cylinder3} position={[0, -0.8, 0]}>
        <cylinderGeometry args={[1, 1, 0.3, 32]} />
        <meshStandardMaterial color="#10b981" metalness={0.8} roughness={0.2} />
      </mesh>
      
      {/* Lignes de connexion entre les cylindres */}
      {[0.4, -0.4].map((y, i) => (
        <mesh 
          key={i} 
          ref={(el) => { if (el) connections.current[i] = el; }}
          position={[0, y, 0]}
        >
          <cylinderGeometry args={[0.05, 0.05, 0.4, 8]} />
          <meshStandardMaterial color="#fbbf24" metalness={0.9} roughness={0.1} />
        </mesh>
      ))}
      
      {/* Particules de données orbitant */}
      {[...Array(8)].map((_, i) => (
        <mesh 
          key={i} 
          ref={(el) => { if (el) dataParticles.current[i] = el; }}
          position={[0, 0, 0]}
        >
          <boxGeometry args={[0.15, 0.15, 0.15]} />
          <meshStandardMaterial 
            color={["#ef4444", "#f59e0b", "#ec4899", "#a78bfa"][i % 4]} 
            metalness={0.8} 
            roughness={0.2} 
          />
        </mesh>
      ))}
      
      {/* Icône de données sur le dessus */}
      <mesh position={[0, 1.2, 0]}>
        <torusGeometry args={[0.3, 0.08, 16, 32]} />
        <meshStandardMaterial color="#ec4899" metalness={0.9} roughness={0.1} />
      </mesh>
    </group>
  );
};
