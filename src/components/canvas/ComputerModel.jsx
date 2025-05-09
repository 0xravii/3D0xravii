import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

const ComputerModel = () => {
  const computer = useGLTF("./desktop_pc/scene.gltf");
  const modelRef = useRef();
  
  useFrame((state) => {
    if (modelRef.current) {
      // Prevent text selection when interacting with the model
      const canvas = state.gl.domElement;
      canvas.style.userSelect = 'none';
    }
  });

  return (
    <mesh ref={modelRef}>
      <hemisphereLight intensity={0.15} groundColor="black" />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight intensity={1} />
      <primitive
        object={computer.scene}
        scale={0.75}
        position={[0, -3.25, -1.5]}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  );
};

export default ComputerModel;