
import { Html, useProgress } from "@react-three/drei";

const CanvasLoader = () => {
  const { progress } = useProgress();

  return (
    <Html
      as='div'
      center
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <div className="flex flex-col items-center justify-center">
        {/* Animated Loading Ring */}
        <div className="relative w-20 h-20">
          <div className="absolute top-0 left-0 w-full h-full border-4 border-[#915EFF] border-opacity-20 rounded-full"></div>
          <div className="absolute top-0 left-0 w-full h-full border-4 border-t-[#915EFF] rounded-full animate-spin"></div>
        </div>
        
        {/* Progress Text */}
        <p
          style={{
            fontSize: 14,
            color: '#F1F1F1',
            fontWeight: 800,
            marginTop: 40,
            fontFamily: 'monospace'
          }}
        >
          {progress.toFixed(0)}%
        </p>

        {/* Loading Text with Pulse Animation */}
        <p
          style={{
            fontSize: 14,
            color: '#915EFF',
            fontWeight: 800,
            marginTop: 10,
            animation: 'pulse 1.5s cubic-bezier(0.4, 0, 0.6, 1) infinite'
          }}
        >
          Loading...
        </p>
      </div>
    </Html>
  );
};

export default CanvasLoader;
