import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Mesh } from "three";

export const DatabaseAnimation = () => {
  const cylinder1 = useRef<Mesh>(null);
  const cylinder2 = useRef<Mesh>(null);
  const cylinder3 = useRef<Mesh>(null);

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
  });

  return (
    <group>
      <mesh ref={cylinder1} position={[0, 0.8, 0]}>
        <cylinderGeometry args={[1, 1, 0.3, 32]} />
        <meshStandardMaterial color="#8b5cf6" metalness={0.8} roughness={0.2} />
      </mesh>
      
      <mesh ref={cylinder2} position={[0, 0, 0]}>
        <cylinderGeometry args={[1, 1, 0.3, 32]} />
        <meshStandardMaterial color="#a78bfa" metalness={0.8} roughness={0.2} />
      </mesh>
      
      <mesh ref={cylinder3} position={[0, -0.8, 0]}>
        <cylinderGeometry args={[1, 1, 0.3, 32]} />
        <meshStandardMaterial color="#c4b5fd" metalness={0.8} roughness={0.2} />
      </mesh>
    </group>
  );
};
