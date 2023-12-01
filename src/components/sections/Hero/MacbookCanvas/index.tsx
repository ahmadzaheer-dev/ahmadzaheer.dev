"use client";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload } from "@react-three/drei";
import { Suspense } from "react";
import Macbook from "@/components/sections/Hero/MacbookCanvas/Macbook";
import ModelLoading from "@/components/sections/Hero/MacbookCanvas/ModelLoading";

const MacbookCanvas = () => {
  return (
    <div className="h-[75vh] w-3/4 ml-auto">
      <Canvas
        frameloop="demand"
        shadows
        camera={{ position: [0, 1, 0.5], fov: 18 }}
        flat
        linear
      >
        <Suspense fallback={<ModelLoading />}>
          <OrbitControls enableZoom={false} />
          <Macbook />
        </Suspense>
        <Preload all />
      </Canvas>
    </div>
  );
};

export default MacbookCanvas;
