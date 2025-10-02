import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Mesh } from "three";
import { RoundedBox } from "@react-three/drei";

export const WebsiteAnimation = () => {
  const groupRef = useRef<any>();
  const screen1 = useRef<Mesh>(null);
  const screen2 = useRef<Mesh>(null);
  const screen3 = useRef<Mesh>(null);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(t * 0.3) * 0.2;
    }
    if (screen1.current) {
      screen1.current.position.y = Math.sin(t) * 0.1;
    }
    if (screen2.current) {
      screen2.current.position.y = Math.sin(t + 1) * 0.1;
    }
    if (screen3.current) {
      screen3.current.position.y = Math.sin(t + 2) * 0.1;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Écran principal */}
      <RoundedBox ref={screen1} args={[2, 1.5, 0.1]} radius={0.05} position={[0, 0, 0]}>
        <meshStandardMaterial color="#8b5cf6" metalness={0.3} roughness={0.4} />
      </RoundedBox>
      
      {/* Écran gauche */}
      <RoundedBox ref={screen2} args={[1.2, 1, 0.1]} radius={0.05} position={[-1.5, -0.3, -0.5]}>
        <meshStandardMaterial color="#a78bfa" metalness={0.3} roughness={0.4} />
      </RoundedBox>
      
      {/* Écran droit */}
      <RoundedBox ref={screen3} args={[1.2, 1, 0.1]} radius={0.05} position={[1.5, 0.3, -0.5]}>
        <meshStandardMaterial color="#c4b5fd" metalness={0.3} roughness={0.4} />
      </RoundedBox>
    </group>
  );
};
