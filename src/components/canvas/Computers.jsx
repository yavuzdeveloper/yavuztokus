import { Suspense, useEffect, useState, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF, Preload } from "@react-three/drei";

import CanvasLoader from "../Loader";
import { computer } from "../../assets";

const Computers = ({ isMobile }) => {
  const model = useGLTF("./desktop_pc/scene.gltf");
  const meshRef = useRef();

  // Auto rotate the model
  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.002;
    }
  });

  return (
    <mesh ref={meshRef}>
      <hemisphereLight intensity={2} groundColor="black" />
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
        object={model.scene}
        scale={isMobile ? 0.6 : 0.75}
        position={isMobile ? [0, -3, -2.2] : [0, -3.25, -1.5]}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [showHint, setShowHint] = useState(true);

  useEffect(() => {
    // Check if mobile
    const mediaQuery = window.matchMedia("(max-width: 500px)");
    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = event => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);

    // Hide hint after 4 seconds
    const hintTimer = setTimeout(() => {
      setShowHint(false);
    }, 4000);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
      clearTimeout(hintTimer);
    };
  }, []);

  // Hide hint when user interacts
  const handleOrbitStart = () => {
    setShowHint(false);
  };

  // For mobile: show image instead of 3D
  if (isMobile) {
    return (
      <div className="flex justify-center items-center h-full w-full">
        <img
          src={computer}
          alt="Computer model"
          className="w-full max-w-[300px] object-contain"
        />
      </div>
    );
  }

  // For desktop: show 3D model
  return (
    <div className="relative w-full h-full">
      {showHint && (
        <div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 
          bg-black/80 text-white px-4 py-3 rounded-xl text-sm z-10 
          flex items-center gap-2 backdrop-blur-sm border border-white/20 
          animate-pulse shadow-lg"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8 9l4-4 4 4m0 6l-4 4-4-4"
            />
          </svg>
          <span>Drag with mouse to rotate</span>
        </div>
      )}

      <Canvas
        frameloop="always"
        shadows
        dpr={[1, 2]}
        camera={{ position: [20, 3, 5], fov: 25 }}
        gl={{ preserveDrawingBuffer: true, antialias: true }}
        className="w-full h-full cursor-grab active:cursor-grabbing"
      >
        <Suspense fallback={<CanvasLoader />}>
          <OrbitControls
            enableZoom={false}
            enablePan={false}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2}
            autoRotate={true}
            autoRotateSpeed={0.5}
            onStart={handleOrbitStart}
          />
          <Computers isMobile={false} />
        </Suspense>
        <Preload all />
      </Canvas>
    </div>
  );
};

export default ComputersCanvas;
