import { useGLTF } from "@react-three/drei";

const Macbook = () => {
  const macbook = useGLTF("/macbook-model/scene.gltf");

  return (
    <mesh>
      <ambientLight intensity={30} />
      <directionalLight intensity={5} color="#ddf7ef" />
      <spotLight position={[0, 5, -5]} intensity={10} />
      <primitive object={macbook.scene} rotation={[0, 0.4, 0]} />
    </mesh>
  );
};

export default Macbook;
