import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Mesh } from "three";
import { RoundedBox } from "@react-three/drei";

export const MediaAnimation = () => {
  const groupRef = useRef<any>();
  const playButton = useRef<Mesh>(null);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(t * 0.5) * 0.3;
    }
    if (playButton.current) {
      const scale = 1 + Math.sin(t * 3) * 0.1;
      playButton.current.scale.set(scale, scale, scale);
    }
  });

  return (
    <group ref={groupRef}>
      {/* Écran vidéo */}
      <RoundedBox args={[3, 2, 0.1]} radius={0.1}>
        <meshStandardMaterial color="#8b5cf6" metalness={0.4} roughness={0.3} />
      </RoundedBox>
      
      {/* Bouton play */}
      <mesh ref={playButton} position={[0, 0, 0.3]} rotation={[0, 0, Math.PI / 2]}>
        <coneGeometry args={[0.4, 0.6, 3]} />
        <meshStandardMaterial color="#c4b5fd" metalness={0.8} roughness={0.2} />
      </mesh>
      
      {/* Barres de progression */}
      {[-1, -0.5, 0, 0.5, 1].map((x, i) => (
        <mesh key={i} position={[x * 1.2, -1.2, 0.1]}>
          <boxGeometry args={[0.1, 0.3 + i * 0.1, 0.1]} />
          <meshStandardMaterial color="#a78bfa" metalness={0.6} roughness={0.4} />
        </mesh>
      ))}
    </group>
  );
};
