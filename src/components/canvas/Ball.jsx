// import { Suspense } from "react";
// import { Canvas } from "@react-three/fiber";
// import {
//   Decal,
//   Float,
//   OrbitControls,
//   Preload,
//   useTexture,
// } from "@react-three/drei";

// import CanvasLoader from "../Loader";

// const Ball = props => {
//   const [decal] = useTexture([props.imgUrl]);

//   return (
//     <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
//       <ambientLight intensity={0.25} />
//       <directionalLight position={[0, 0, 0.05]} />
//       <mesh castShadow receiveShadow scale={2.75}>
//         <icosahedronGeometry args={[1, 1]} />
//         <meshStandardMaterial
//           color="#fff8eb"
//           polygonOffset
//           polygonOffsetFactor={-5}
//           flatShading
//         />
//         <Decal
//           position={[0, 0, 1]}
//           rotation={[2 * Math.PI, 0, 6.25]}
//           scale={1}
//           map={decal}
//           flatShading
//         />
//       </mesh>
//     </Float>
//   );
// };

// const BallCanvas = ({ icon }) => {
//   return (
//     <Canvas
//       frameloop="demand"
//       dpr={[1, 2]}
//       gl={{ preserveDrawingBuffer: true }}
//     >
//       <Suspense fallback={<CanvasLoader />}>
//         <OrbitControls enableZoom={false} />
//         <Ball imgUrl={icon} />
//       </Suspense>

//       <Preload all />
//     </Canvas>
//   );
// };

// export default BallCanvas;

import { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import {
  Decal,
  Float,
  OrbitControls,
  Preload,
  useTexture,
} from "@react-three/drei";
import CanvasLoader from "../Loader";

const Ball = ({ imgUrl, onTextureLoaded }) => {
  const [decal] = useTexture([imgUrl], () => {
    // Texture loaded callback
    onTextureLoaded?.();
  });

  // Clean up texture when component unmounts
  useEffect(() => {
    return () => {
      if (decal) decal.dispose();
    };
  }, [decal]);

  return (
    <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
      <ambientLight intensity={0.25} />
      <directionalLight position={[0, 0, 0.05]} />
      <mesh castShadow receiveShadow scale={2.75}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial
          color="#fff8eb"
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
        />
        <Decal
          position={[0, 0, 1]}
          rotation={[2 * Math.PI, 0, 6.25]}
          scale={1}
          map={decal}
          flatShading
        />
      </mesh>
    </Float>
  );
};

const BallCanvas = ({ icon }) => {
  const [contextLost, setContextLost] = useState(false);
  const [textureLoaded, setTextureLoaded] = useState(false);

  const handleContextEvent = ({ gl }) => {
    gl.domElement.addEventListener(
      "webglcontextlost",
      e => {
        e.preventDefault();
        console.warn("WebGL context lost! Attempting recovery...");
        setContextLost(true);
      },
      false
    );

    gl.domElement.addEventListener(
      "webglcontextrestored",
      () => {
        console.log("WebGL context restored!");
        setContextLost(false);
        // The canvas will automatically re-render when context is restored
      },
      false
    );
  };

  // Reset after context recovery
  useEffect(() => {
    if (!contextLost && textureLoaded) {
      // Additional recovery logic if needed
    }
  }, [contextLost, textureLoaded]);

  return (
    <div style={{ position: "relative", width: "100%", height: "100%" }}>
      {contextLost && (
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "rgba(0,0,0,0.7)",
            color: "white",
            zIndex: 1000,
          }}
        >
          Graphics context lost. Reloading...
        </div>
      )}

      <Canvas
        frameloop="demand"
        dpr={[1, 2]}
        gl={{
          preserveDrawingBuffer: true,
          powerPreference: "high-performance",
          antialias: true,
          alpha: true,
        }}
        onCreated={handleContextEvent}
        performance={{
          min: 0.1,
          max: 1,
          debounce: 200,
        }}
      >
        <Suspense fallback={<CanvasLoader />}>
          <OrbitControls
            enableZoom={false}
            autoRotate
            autoRotateSpeed={3}
            enablePan={false}
          />
          <Ball imgUrl={icon} onTextureLoaded={() => setTextureLoaded(true)} />
        </Suspense>
        <Preload all />
      </Canvas>
    </div>
  );
};

export default BallCanvas;
