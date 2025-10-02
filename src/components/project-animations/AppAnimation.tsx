import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Mesh } from "three";
import { RoundedBox } from "@react-three/drei";

export const AppAnimation = () => {
  const phoneRef = useRef<any>();
  const cards = useRef<Mesh[]>([]);
  const notifications = useRef<Mesh[]>([]);
  const icons = useRef<Mesh[]>([]);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (phoneRef.current) {
      phoneRef.current.rotation.y = Math.sin(t * 0.3) * 0.15;
    }
    cards.current.forEach((card, i) => {
      if (card) {
        card.position.y = -0.6 + i * 0.6 + Math.sin(t * 2 + i * 0.5) * 0.05;
      }
    });
    notifications.current.forEach((notif, i) => {
      if (notif) {
        const scale = 1 + Math.sin(t * 3 + i) * 0.2;
        notif.scale.set(scale, scale, scale);
      }
    });
    icons.current.forEach((icon, i) => {
      if (icon) {
        icon.rotation.y = t + i;
      }
    });
  });

  return (
    <group ref={phoneRef}>
      {/* Téléphone - Corps */}
      <RoundedBox args={[1.3, 2.6, 0.15]} radius={0.18}>
        <meshStandardMaterial color="#0f172a" metalness={0.9} roughness={0.1} />
      </RoundedBox>
      
      {/* Boutons latéraux */}
      <mesh position={[-0.7, 0.5, 0]}>
        <boxGeometry args={[0.05, 0.3, 0.1]} />
        <meshStandardMaterial color="#334155" metalness={0.8} roughness={0.2} />
      </mesh>
      
      {/* Écran */}
      <RoundedBox args={[1.1, 2.3, 0.05]} radius={0.12} position={[0, 0, 0.12]}>
        <meshStandardMaterial color="#1e293b" metalness={0.4} roughness={0.5} />
      </RoundedBox>
      
      {/* Barre de statut */}
      <RoundedBox args={[1, 0.15, 0.03]} radius={0.03} position={[0, 1.05, 0.18]}>
        <meshStandardMaterial color="#8b5cf6" metalness={0.6} roughness={0.3} />
      </RoundedBox>
      
      {/* Icônes de statut */}
      {[-0.4, -0.2, 0, 0.2, 0.4].map((x, i) => (
        <mesh key={i} position={[x, 1.05, 0.21]}>
          <sphereGeometry args={[0.03, 8, 8]} />
          <meshStandardMaterial 
            color={["#10b981", "#fbbf24", "#06b6d4", "#ec4899", "#ef4444"][i]} 
            metalness={0.8} 
            roughness={0.2} 
          />
        </mesh>
      ))}
      
      {/* Cartes d'événements avec couleurs */}
      {[0, 1, 2].map((i) => (
        <RoundedBox 
          key={i} 
          args={[0.8, 0.45, 0.04]} 
          radius={0.06} 
          position={[0, 0, 0.22]}
          ref={(el) => { if (el) cards.current[i] = el; }}
        >
          <meshStandardMaterial 
            color={["#8b5cf6", "#ec4899", "#06b6d4"][i]} 
            metalness={0.5} 
            roughness={0.4} 
          />
        </RoundedBox>
      ))}
      
      {/* Icônes sur les cartes */}
      {[0, 1, 2].map((i) => (
        <mesh 
          key={i} 
          ref={(el) => { if (el) icons.current[i] = el; }}
          position={[-0.25, -0.6 + i * 0.6, 0.27]}
        >
          <octahedronGeometry args={[0.08, 0]} />
          <meshStandardMaterial 
            color={["#fbbf24", "#10b981", "#f59e0b"][i]} 
            metalness={0.9} 
            roughness={0.1} 
          />
        </mesh>
      ))}
      
      {/* Notifications badge */}
      {[0, 1].map((i) => (
        <mesh 
          key={i} 
          ref={(el) => { if (el) notifications.current[i] = el; }}
          position={[0.35, -0.3 + i * 0.6, 0.27]}
        >
          <sphereGeometry args={[0.06, 16, 16]} />
          <meshStandardMaterial 
            color="#ef4444" 
            metalness={0.8} 
            roughness={0.2}
            emissive="#ef4444"
            emissiveIntensity={0.5}
          />
        </mesh>
      ))}
      
      {/* Bouton home */}
      <mesh position={[0, -1.15, 0.12]}>
        <cylinderGeometry args={[0.15, 0.15, 0.05, 32]} />
        <meshStandardMaterial color="#334155" metalness={0.8} roughness={0.2} />
      </mesh>
      
      {/* Particules flottantes (notifications) */}
      {[...Array(6)].map((_, i) => (
        <mesh 
          key={i} 
          position={[
            Math.sin(i) * 0.8,
            -0.8 + i * 0.3,
            0.5 + Math.cos(i) * 0.2
          ]}
        >
          <boxGeometry args={[0.05, 0.05, 0.05]} />
          <meshStandardMaterial 
            color={["#10b981", "#fbbf24", "#ec4899"][i % 3]} 
            metalness={0.9} 
            roughness={0.1} 
          />
        </mesh>
      ))}
    </group>
  );
};
