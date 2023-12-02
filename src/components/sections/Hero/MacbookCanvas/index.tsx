"use client";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload } from "@react-three/drei";
import { Suspense } from "react";
import Macbook from "@/components/sections/Hero/MacbookCanvas/Macbook";
import ModelLoading from "@/components/sections/Hero/MacbookCanvas/ModelLoading";
import { useWindowDimensions } from "@/hooks";
import { widthGreaterThanBreakpoint } from "@/lib/utils";

const MacbookCanvas = () => {
  const { width } = useWindowDimensions();
  const isWidthGreaterThanSm = widthGreaterThanBreakpoint(width, "lg");
  return (
    <div className="h-[60vh] lg:h-[75vh] w-full lg:w-3/4 ml-auto pt-60 lg:pt-0">
      <Canvas
        frameloop="demand"
        shadows
        camera={{ position: [0, 1, 0.5], fov: isWidthGreaterThanSm ? 18 : 20 }}
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
