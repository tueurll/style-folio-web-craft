import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Mesh } from "three";
import { RoundedBox } from "@react-three/drei";

export const MediaAnimation = () => {
  const groupRef = useRef<any>();
  const playButton = useRef<Mesh>(null);
  const waveforms = useRef<Mesh[]>([]);
  const particles = useRef<Mesh[]>([]);
  const filmStrip = useRef<any>();

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(t * 0.5) * 0.2;
    }
    if (playButton.current) {
      const scale = 1 + Math.sin(t * 3) * 0.15;
      playButton.current.scale.set(scale, scale, scale);
      playButton.current.rotation.z = Math.sin(t * 2) * 0.1;
    }
    
    waveforms.current.forEach((wave, i) => {
      if (wave) {
        wave.scale.y = 0.5 + Math.sin(t * 4 + i * 0.3) * 0.5;
      }
    });
    
    particles.current.forEach((particle, i) => {
      if (particle) {
        particle.position.y = Math.sin(t * 2 + i * 0.5) * 0.5;
        particle.position.x = Math.cos(t + i) * 0.3 + Math.sin(i) * 2;
      }
    });
    
    if (filmStrip.current) {
      filmStrip.current.position.x = ((t * 0.5) % 2) - 1;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Écran vidéo principal */}
      <RoundedBox args={[3.5, 2.2, 0.15]} radius={0.12}>
        <meshStandardMaterial color="#1e293b" metalness={0.5} roughness={0.3} />
      </RoundedBox>
      
      {/* Écran interne avec dégradé */}
      <RoundedBox args={[3.2, 1.9, 0.08]} radius={0.1} position={[0, 0, 0.1]}>
        <meshStandardMaterial color="#8b5cf6" metalness={0.4} roughness={0.4} />
      </RoundedBox>
      
      {/* Bouton play circulaire */}
      <mesh position={[0, 0, 0.25]}>
        <cylinderGeometry args={[0.5, 0.5, 0.1, 32]} />
        <meshStandardMaterial color="#10b981" metalness={0.8} roughness={0.2} />
      </mesh>
      
      {/* Triangle play */}
      <mesh ref={playButton} position={[0.05, 0, 0.35]} rotation={[0, 0, Math.PI / 2]}>
        <coneGeometry args={[0.25, 0.4, 3]} />
        <meshStandardMaterial color="#ffffff" metalness={0.9} roughness={0.1} />
      </mesh>
      
      {/* Barres d'égaliseur audio colorées */}
      {[-2, -1.2, -0.4, 0.4, 1.2, 2].map((x, i) => (
        <mesh 
          key={i} 
          ref={(el) => { if (el) waveforms.current[i] = el; }}
          position={[x * 0.5, -1.4, 0.2]}
        >
          <boxGeometry args={[0.15, 0.6, 0.1]} />
          <meshStandardMaterial 
            color={["#ef4444", "#f59e0b", "#fbbf24", "#10b981", "#06b6d4", "#ec4899"][i]} 
            metalness={0.7} 
            roughness={0.3}
            emissive={["#ef4444", "#f59e0b", "#fbbf24", "#10b981", "#06b6d4", "#ec4899"][i]}
            emissiveIntensity={0.3}
          />
        </mesh>
      ))}
      
      {/* Bande de film */}
      <group ref={filmStrip} position={[0, 1.3, 0.2]}>
        <RoundedBox args={[2, 0.3, 0.05]} radius={0.03}>
          <meshStandardMaterial color="#fbbf24" metalness={0.6} roughness={0.4} />
        </RoundedBox>
        {[-0.8, -0.4, 0, 0.4, 0.8].map((x, i) => (
          <mesh key={i} position={[x, 0, 0.05]}>
            <boxGeometry args={[0.25, 0.2, 0.03]} />
            <meshStandardMaterial color="#1e293b" metalness={0.5} roughness={0.5} />
          </mesh>
        ))}
      </group>
      
      {/* Particules flottantes (notes de musique stylisées) */}
      {[...Array(8)].map((_, i) => (
        <mesh 
          key={i} 
          ref={(el) => { if (el) particles.current[i] = el; }}
          position={[Math.sin(i) * 2, 0, 0.5]}
        >
          <sphereGeometry args={[0.08, 16, 16]} />
          <meshStandardMaterial 
            color={["#ec4899", "#06b6d4", "#8b5cf6"][i % 3]} 
            metalness={0.9} 
            roughness={0.1} 
          />
        </mesh>
      ))}
      
      {/* Boutons de contrôle */}
      {[-1, 1].map((x, i) => (
        <mesh key={i} position={[x * 0.8, -1.4, 0.2]}>
          <cylinderGeometry args={[0.15, 0.15, 0.1, 32]} />
          <meshStandardMaterial 
            color={i === 0 ? "#ef4444" : "#10b981"} 
            metalness={0.8} 
            roughness={0.2} 
          />
        </mesh>
      ))}
    </group>
  );
};
