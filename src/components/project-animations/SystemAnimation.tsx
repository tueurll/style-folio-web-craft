import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Mesh } from "three";

export const SystemAnimation = () => {
  const cubeRef = useRef<Mesh>(null);
  const innerCubes = useRef<Mesh[]>([]);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (cubeRef.current) {
      cubeRef.current.rotation.x = t * 0.2;
      cubeRef.current.rotation.y = t * 0.3;
    }
    innerCubes.current.forEach((cube, i) => {
      if (cube) {
        cube.rotation.x = -t * 0.5;
        cube.rotation.y = -t * 0.4;
        const scale = 1 + Math.sin(t * 2 + i) * 0.2;
        cube.scale.set(scale, scale, scale);
      }
    });
  });

  return (
    <group>
      <mesh ref={cubeRef}>
        <boxGeometry args={[2, 2, 2]} />
        <meshStandardMaterial color="#8b5cf6" wireframe metalness={0.8} roughness={0.2} />
      </mesh>
      
      {[-0.5, 0, 0.5].map((pos, i) => (
        <mesh key={i} ref={(el) => { if (el) innerCubes.current[i] = el; }} position={[pos, pos, pos]}>
          <boxGeometry args={[0.3, 0.3, 0.3]} />
          <meshStandardMaterial color="#c4b5fd" metalness={0.7} roughness={0.3} />
        </mesh>
      ))}
    </group>
  );
};
