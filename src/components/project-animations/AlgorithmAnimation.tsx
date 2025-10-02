import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Mesh } from "three";

export const AlgorithmAnimation = () => {
  const torusRef = useRef<Mesh>(null);
  const spheres = useRef<Mesh[]>([]);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (torusRef.current) {
      torusRef.current.rotation.x = t * 0.3;
      torusRef.current.rotation.y = t * 0.5;
    }
    spheres.current.forEach((sphere, i) => {
      if (sphere) {
        const angle = (t + i * Math.PI / 3) * 0.5;
        sphere.position.x = Math.cos(angle) * 2;
        sphere.position.z = Math.sin(angle) * 2;
        sphere.position.y = Math.sin(t + i) * 0.5;
      }
    });
  });

  return (
    <group>
      <mesh ref={torusRef}>
        <torusGeometry args={[1.5, 0.3, 16, 100]} />
        <meshStandardMaterial color="#8b5cf6" metalness={0.6} roughness={0.3} />
      </mesh>
      
      {[0, 1, 2, 3, 4, 5].map((i) => (
        <mesh key={i} ref={(el) => { if (el) spheres.current[i] = el; }}>
          <sphereGeometry args={[0.2, 32, 32]} />
          <meshStandardMaterial color="#c4b5fd" metalness={0.8} roughness={0.2} />
        </mesh>
      ))}
    </group>
  );
};
