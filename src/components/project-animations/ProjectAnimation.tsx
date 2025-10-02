import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { WebsiteAnimation } from "./WebsiteAnimation";
import { DatabaseAnimation } from "./DatabaseAnimation";
import { AlgorithmAnimation } from "./AlgorithmAnimation";
import { SystemAnimation } from "./SystemAnimation";
import { MediaAnimation } from "./MediaAnimation";
import { AppAnimation } from "./AppAnimation";

interface ProjectAnimationProps {
  projectId: number;
}

export const ProjectAnimation = ({ projectId }: ProjectAnimationProps) => {
  const getAnimation = () => {
    switch (projectId) {
      case 1:
        return <WebsiteAnimation />;
      case 2:
        return <DatabaseAnimation />;
      case 3:
        return <AlgorithmAnimation />;
      case 4:
      case 5:
        return <SystemAnimation />;
      case 6:
        return <MediaAnimation />;
      case 7:
        return <AppAnimation />;
      default:
        return <WebsiteAnimation />;
    }
  };

  return (
    <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
      <Suspense fallback={null}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={2} />
        {getAnimation()}
      </Suspense>
    </Canvas>
  );
};
