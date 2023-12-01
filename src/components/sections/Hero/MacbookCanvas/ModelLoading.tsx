import { Html } from "@react-three/drei";
import { useProgress } from "@react-three/drei";

const ModelLoading = () => {
  const progress = useProgress();
  return (
    <Html>
      <div className="flex items-center justify-center text-sm">
        <span className="w-80">{`${progress.progress}/100%`}</span>
      </div>
    </Html>
  );
};

export default ModelLoading;
