import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Mesh } from "three";
import { RoundedBox } from "@react-three/drei";

export const WebsiteAnimation = () => {
  const groupRef = useRef<any>();
  const browserRef = useRef<Mesh>(null);
  const dots = useRef<Mesh[]>([]);
  const cursor = useRef<Mesh>(null);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(t * 0.3) * 0.2;
    }
    if (browserRef.current) {
      browserRef.current.position.y = Math.sin(t * 0.5) * 0.1;
    }
    dots.current.forEach((dot, i) => {
      if (dot) {
        dot.position.y = Math.sin(t * 2 + i) * 0.05;
      }
    });
    if (cursor.current) {
      cursor.current.position.x = Math.sin(t * 1.5) * 0.3;
      cursor.current.position.y = Math.cos(t * 1.2) * 0.3;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Fenêtre de navigateur */}
      <RoundedBox ref={browserRef} args={[3, 2, 0.1]} radius={0.1} position={[0, 0, 0]}>
        <meshStandardMaterial color="#1e293b" metalness={0.4} roughness={0.5} />
      </RoundedBox>
      
      {/* Barre d'adresse */}
      <RoundedBox args={[2.5, 0.2, 0.05]} radius={0.05} position={[0, 0.7, 0.1]}>
        <meshStandardMaterial color="#3b82f6" metalness={0.6} roughness={0.3} />
      </RoundedBox>
      
      {/* Boutons de fenêtre (rouge, jaune, vert) */}
      <mesh position={[-1.2, 0.9, 0.1]}>
        <sphereGeometry args={[0.08, 16, 16]} />
        <meshStandardMaterial color="#ef4444" metalness={0.7} roughness={0.2} />
      </mesh>
      <mesh position={[-1.0, 0.9, 0.1]}>
        <sphereGeometry args={[0.08, 16, 16]} />
        <meshStandardMaterial color="#fbbf24" metalness={0.7} roughness={0.2} />
      </mesh>
      <mesh position={[-0.8, 0.9, 0.1]}>
        <sphereGeometry args={[0.08, 16, 16]} />
        <meshStandardMaterial color="#10b981" metalness={0.7} roughness={0.2} />
      </mesh>
      
      {/* Contenu de la page - lignes de code */}
      {[-0.3, -0.1, 0.1, 0.3].map((y, i) => (
        <RoundedBox key={i} args={[2, 0.08, 0.05]} radius={0.02} position={[-0.3, y, 0.1]}>
          <meshStandardMaterial 
            color={i % 2 === 0 ? "#8b5cf6" : "#a78bfa"} 
            metalness={0.5} 
            roughness={0.4} 
          />
        </RoundedBox>
      ))}
      
      {/* Points décoratifs (pixels) */}
      {[...Array(6)].map((_, i) => (
        <mesh 
          key={i} 
          ref={(el) => { if (el) dots.current[i] = el; }}
          position={[
            -1 + (i % 3) * 1,
            -0.6 + Math.floor(i / 3) * 0.3,
            0.15
          ]}
        >
          <boxGeometry args={[0.1, 0.1, 0.1]} />
          <meshStandardMaterial 
            color={["#ec4899", "#f59e0b", "#06b6d4"][i % 3]} 
            metalness={0.8} 
            roughness={0.2} 
          />
        </mesh>
      ))}
      
      {/* Curseur */}
      <mesh ref={cursor} position={[0.5, 0.2, 0.2]} rotation={[0, 0, -Math.PI / 6]}>
        <coneGeometry args={[0.08, 0.2, 3]} />
        <meshStandardMaterial color="#ffffff" metalness={0.9} roughness={0.1} />
      </mesh>
    </group>
  );
};
