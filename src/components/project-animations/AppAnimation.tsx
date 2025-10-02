import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Mesh } from "three";
import { RoundedBox } from "@react-three/drei";

export const AppAnimation = () => {
  const phoneRef = useRef<any>();
  const cards = useRef<Mesh[]>([]);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (phoneRef.current) {
      phoneRef.current.rotation.y = Math.sin(t * 0.3) * 0.2;
    }
    cards.current.forEach((card, i) => {
      if (card) {
        card.position.y = Math.sin(t * 2 + i * 0.5) * 0.1;
      }
    });
  });

  return (
    <group ref={phoneRef}>
      {/* Téléphone */}
      <RoundedBox args={[1.2, 2.4, 0.2]} radius={0.15}>
        <meshStandardMaterial color="#1e1e1e" metalness={0.9} roughness={0.1} />
      </RoundedBox>
      
      {/* Écran */}
      <RoundedBox args={[1, 2.1, 0.05]} radius={0.1} position={[0, 0, 0.15]}>
        <meshStandardMaterial color="#8b5cf6" metalness={0.3} roughness={0.4} />
      </RoundedBox>
      
      {/* Cartes d'événements */}
      {[-0.6, 0, 0.6].map((y, i) => (
        <RoundedBox 
          key={i} 
          args={[0.7, 0.4, 0.05]} 
          radius={0.05} 
          position={[0, y, 0.25]}
          ref={(el) => { if (el) cards.current[i] = el; }}
        >
          <meshStandardMaterial color="#c4b5fd" metalness={0.5} roughness={0.3} />
        </RoundedBox>
      ))}
    </group>
  );
};
