import { OrbitControls, Preload } from "@react-three/drei";
import { Canvas, useThree } from "@react-three/fiber";
import { Suspense, useEffect } from "react";
import ComputerModel from "./ComputerModel";

const Controls = () => {
  const { camera, gl } = useThree();
  
  return (
    <OrbitControls
      enableZoom={false}
      maxPolarAngle={Math.PI / 2}
      minPolarAngle={Math.PI / 2}
      enableRotate={true}
      enablePan={false}
      dampingFactor={0.05}
      rotateSpeed={0.5}
      args={[camera, gl.domElement]}
    />
  );
};

const Computers = () => {
  return (
    <Canvas
      frameloop='demand'
      shadows
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
      style={{ pointerEvents: 'auto' }}
    >
      <Suspense fallback={null}>
        <Controls />
        <ComputerModel />
        <Preload all />
      </Suspense>
    </Canvas>
  );
};

export default Computers;
