import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Mesh } from "three";

export const AlgorithmAnimation = () => {
  const networkNodes = useRef<Mesh[]>([]);
  const connections = useRef<Mesh[]>([]);
  const centralNode = useRef<Mesh>(null);
  const dataFlow = useRef<Mesh[]>([]);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    
    if (centralNode.current) {
      centralNode.current.rotation.y = t * 0.5;
      const scale = 1 + Math.sin(t * 2) * 0.1;
      centralNode.current.scale.set(scale, scale, scale);
    }
    
    networkNodes.current.forEach((node, i) => {
      if (node) {
        const angle = (t * 0.5 + i * Math.PI / 3);
        node.position.x = Math.cos(angle) * 2;
        node.position.z = Math.sin(angle) * 2;
        node.position.y = Math.sin(t + i) * 0.3;
        node.rotation.y = t;
      }
    });
    
    connections.current.forEach((conn, i) => {
      if (conn) {
        const angle = (t * 0.5 + i * Math.PI / 3);
        conn.rotation.z = angle;
        conn.scale.y = 0.8 + Math.sin(t * 3 + i) * 0.2;
      }
    });
    
    dataFlow.current.forEach((data, i) => {
      if (data) {
        const angle = (t * 2 + i * Math.PI / 6);
        data.position.x = Math.cos(angle) * (0.5 + (Math.sin(t + i) * 0.5 + 0.5) * 1.5);
        data.position.z = Math.sin(angle) * (0.5 + (Math.sin(t + i) * 0.5 + 0.5) * 1.5);
        data.rotation.x = t * 2;
        data.rotation.y = t * 3;
      }
    });
  });

  return (
    <group>
      {/* Nœud central - cerveau de l'algorithme */}
      <mesh ref={centralNode}>
        <octahedronGeometry args={[0.5, 0]} />
        <meshStandardMaterial color="#8b5cf6" metalness={0.9} roughness={0.1} />
      </mesh>
      
      {/* Anneau externe */}
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[2, 0.05, 16, 100]} />
        <meshStandardMaterial color="#06b6d4" metalness={0.8} roughness={0.2} />
      </mesh>
      
      {/* Nœuds du réseau */}
      {[...Array(6)].map((_, i) => (
        <mesh 
          key={i} 
          ref={(el) => { if (el) networkNodes.current[i] = el; }}
        >
          <icosahedronGeometry args={[0.25, 0]} />
          <meshStandardMaterial 
            color={["#ef4444", "#f59e0b", "#10b981", "#ec4899", "#06b6d4", "#8b5cf6"][i]} 
            metalness={0.8} 
            roughness={0.2} 
          />
        </mesh>
      ))}
      
      {/* Connexions entre nœuds */}
      {[...Array(6)].map((_, i) => (
        <mesh 
          key={i} 
          ref={(el) => { if (el) connections.current[i] = el; }}
          position={[0, 0, 0]}
        >
          <cylinderGeometry args={[0.02, 0.02, 2, 8]} />
          <meshStandardMaterial 
            color="#a78bfa" 
            metalness={0.7} 
            roughness={0.3}
            transparent
            opacity={0.6}
          />
        </mesh>
      ))}
      
      {/* Flux de données */}
      {[...Array(12)].map((_, i) => (
        <mesh 
          key={i} 
          ref={(el) => { if (el) dataFlow.current[i] = el; }}
        >
          <boxGeometry args={[0.08, 0.08, 0.08]} />
          <meshStandardMaterial 
            color={["#fbbf24", "#ec4899", "#06b6d4"][i % 3]} 
            metalness={0.9} 
            roughness={0.1} 
          />
        </mesh>
      ))}
    </group>
  );
};
