// import { Suspense, useEffect, useState } from "react";
// import { Canvas } from "@react-three/fiber";
// import {
//   isWebGL2Available,
//   OrbitControls,
//   Preload,
//   useGLTF,
// } from "@react-three/drei";

// import CanvasLoader from "../Loader";

// const Computers = ({ isMobile }) => {
//   const computer = useGLTF("./desktop_pc/scene.gltf");

//   return (
//     <mesh>
//       <hemisphereLight intensity={0.15} groundColor="black" />
//       <spotLight
//         position={[-20, 50, 10]}
//         angle={0.12}
//         penumbra={1}
//         intensity={1}
//         castShadow
//         shadow-mapSize={1024}
//       />

//       <pointLight intensity={1} />
//       <primitive
//         object={computer.scene}
//         scale={isMobile ? 0.7 : 0.75}
//         position={isMobile ? [0, -3, -2.2] : [0, -3.25, -1.5]}
//         rotation={[-0.01, -0.2, -0.1]}
//       />
//     </mesh>
//   );
// };

// const ComputersCanvas = () => {
//   const [isMobile, setIsMobile] = useState(false);

//   useEffect(() => {
//     // Add a listener for changes to the screen size
//     const mediaQuery = window.matchMedia("(max-width: 500px)");

//     // Set the initial value of the `isMobile` state variable
//     setIsMobile(mediaQuery.matches);

//     // Define a callback function to handle changes to the media query
//     const handleMediaQueryChange = event => {
//       setIsMobile(event.matches);
//     };

//     // Add the callback function as a listener for changes to the media query
//     mediaQuery.addEventListener("change", handleMediaQueryChange);

//     // Remove the listener when the component is unmounted
//     return () => {
//       mediaQuery.removeEventListener("change", handleMediaQueryChange);
//     };
//   }, []);

//   if (!isWebGL2Available()) {
//     return "WebGL not supported. Try another browser or enable hardware acceleration.";
//   }

//   return (
//     <Canvas
//       frameloop="demand"
//       shadows
//       dpr={[1, 2]}
//       camera={{ position: [20, 3, 5], fov: 25 }}
//       gl={{ preserveDrawingBuffer: true }}
//     >
//       <Suspense fallback={<CanvasLoader />}>
//         <OrbitControls
//           enableZoom={false}
//           maxPolarAngle={Math.PI / 2}
//           minPolarAngle={Math.PI / 2}
//         />
//         <Computers isMobile={isMobile} />
//       </Suspense>

//       <Preload all />
//     </Canvas>
//   );
// };

// export default ComputersCanvas;

// import { Suspense, useEffect, useState } from "react";
// import { Canvas } from "@react-three/fiber";
// import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
// import CanvasLoader from "../Loader";

// const Computers = ({ isMobile, onLoaded }) => {
//   const { scene } = useGLTF(
//     "./desktop_pc/scene.gltf",
//     undefined,
//     undefined,
//     loader => {
//       loader.manager.onLoad = () => {
//         onLoaded?.();
//       };
//     }
//   );

//   useEffect(() => {
//     return () => {
//       scene.traverse(child => {
//         if (child.isMesh) {
//           child.geometry?.dispose();
//           child.material?.dispose();
//         }
//       });
//     };
//   }, [scene]);

//   return (
//     <mesh>
//       <hemisphereLight intensity={0.15} groundColor="black" />
//       <spotLight
//         position={[-20, 50, 10]}
//         angle={0.12}
//         penumbra={1}
//         intensity={1}
//         castShadow
//         shadow-mapSize={1024}
//       />
//       <pointLight intensity={1} />
//       <primitive
//         object={scene}
//         scale={isMobile ? 0.7 : 0.75}
//         position={isMobile ? [0, -3, -2.2] : [0, -3.25, -1.5]}
//         rotation={[-0.01, -0.2, -0.1]}
//       />
//     </mesh>
//   );
// };

// const ComputersCanvas = () => {
//   const [isMobile, setIsMobile] = useState(false);
//   const [contextLost, setContextLost] = useState(false);
//   const [modelLoaded, setModelLoaded] = useState(false);

//   useEffect(() => {
//     const mediaQuery = window.matchMedia("(max-width: 500px)");
//     setIsMobile(mediaQuery.matches);

//     const handleMediaQueryChange = event => {
//       setIsMobile(event.matches);
//     };

//     mediaQuery.addEventListener("change", handleMediaQueryChange);
//     return () => {
//       mediaQuery.removeEventListener("change", handleMediaQueryChange);
//     };
//   }, []);

//   const handleContextEvents = ({ gl }) => {
//     gl.domElement.addEventListener(
//       "webglcontextlost",
//       e => {
//         e.preventDefault();
//         setContextLost(true);
//       },
//       false
//     );

//     gl.domElement.addEventListener(
//       "webglcontextrestored",
//       () => {
//         setContextLost(false);
//         setModelLoaded(false);
//       },
//       false
//     );
//   };

//   return (
//     <div style={{ position: "relative", width: "100%", height: "100%" }}>
//       {contextLost && (
//         <div
//           style={{
//             position: "absolute",
//             top: 0,
//             left: 0,
//             right: 0,
//             bottom: 0,
//             display: "flex",
//             alignItems: "center",
//             justifyContent: "center",
//             background: "rgba(0,0,0,0.7)",
//             color: "white",
//             zIndex: 1000,
//           }}
//         >
//           Graphics error. Please refresh the page.
//         </div>
//       )}

//       <Canvas
//         frameloop="demand"
//         shadows
//         dpr={[1, 2]}
//         camera={{ position: [20, 3, 5], fov: 25 }}
//         gl={{
//           preserveDrawingBuffer: true,
//           powerPreference: "high-performance",
//           antialias: true,
//         }}
//         onCreated={handleContextEvents}
//       >
//         <Suspense fallback={<CanvasLoader />}>
//           <OrbitControls
//             enableZoom={false}
//             maxPolarAngle={Math.PI / 2}
//             minPolarAngle={Math.PI / 2}
//             autoRotate
//             autoRotateSpeed={1.5}
//           />
//           <Computers
//             isMobile={isMobile}
//             onLoaded={() => setModelLoaded(true)}
//           />
//         </Suspense>
//         <Preload all />
//       </Canvas>
//     </div>
//   );
// };

// export default ComputersCanvas;

// import { Suspense, useEffect, useState, useRef } from "react";
// import { Canvas } from "@react-three/fiber";
// import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
// import CanvasLoader from "../Loader";

// const Computers = ({ isMobile, onLoaded }) => {
//   const { scene } = useGLTF(
//     "./desktop_pc/scene.gltf",
//     undefined,
//     undefined,
//     loader => {
//       loader.manager.onLoad = () => onLoaded?.();
//     }
//   );

//   useEffect(() => {
//     return () => {
//       scene.traverse(child => {
//         if (child.isMesh) {
//           child.geometry?.dispose();
//           child.material?.dispose();
//         }
//       });
//     };
//   }, [scene]);

//   return (
//     <mesh>
//       <hemisphereLight intensity={0.15} groundColor="black" />
//       <spotLight
//         position={[-20, 50, 10]}
//         angle={0.12}
//         penumbra={1}
//         intensity={1}
//         castShadow
//         shadow-mapSize={isMobile ? 512 : 1024} // Mobilde daha düşük çözünürlük
//       />
//       <pointLight intensity={1} />
//       <primitive
//         object={scene}
//         scale={isMobile ? 0.5 : 0.75} // Mobilde daha küçük ölçek
//         position={isMobile ? [0, -2.5, -1.5] : [0, -3.25, -1.5]}
//         rotation={[-0.01, -0.2, -0.1]}
//       />
//     </mesh>
//   );
// };

// const ComputersCanvas = () => {
//   const [isMobile, setIsMobile] = useState(false);
//   const [contextLost, setContextLost] = useState(false);
//   const [webGLAvailable, setWebGLAvailable] = useState(true);
//   const canvasRef = useRef();

//   // WebGL desteği kontrolü
//   useEffect(() => {
//     const checkWebGL = () => {
//       try {
//         const canvas = document.createElement("canvas");
//         const gl =
//           canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
//         setWebGLAvailable(!!gl);
//       } catch (e) {
//         setWebGLAvailable(false);
//       }
//     };

//     checkWebGL();
//   }, []);

//   // Mobil kontrolü ve recovery mekanizması
//   useEffect(() => {
//     const mediaQuery = window.matchMedia("(max-width: 500px)");
//     setIsMobile(mediaQuery.matches);

//     const handleMediaQueryChange = event => {
//       setIsMobile(event.matches);
//       // Mobil değişikliğinde recovery deneyelim
//       if (contextLost) {
//         setContextLost(false);
//       }
//     };

//     mediaQuery.addEventListener("change", handleMediaQueryChange);
//     return () =>
//       mediaQuery.removeEventListener("change", handleMediaQueryChange);
//   }, [contextLost]);

//   // Context olayları
//   const handleContextEvents = ({ gl }) => {
//     gl.domElement.addEventListener(
//       "webglcontextlost",
//       e => {
//         e.preventDefault();
//         console.log("WebGL context lost on", isMobile ? "mobile" : "desktop");
//         setContextLost(true);

//         // 3 saniye sonra otomatik recovery deneyelim
//         setTimeout(() => setContextLost(false), 3000);
//       },
//       false
//     );

//     gl.domElement.addEventListener(
//       "webglcontextrestored",
//       () => {
//         console.log("WebGL context restored");
//         setContextLost(false);
//       },
//       false
//     );
//   };

//   // Recovery butonu için
//   const handleRetry = () => {
//     setContextLost(false);
//     // Force re-render
//     if (canvasRef.current) {
//       canvasRef.current.style.display = "none";
//       setTimeout(() => {
//         if (canvasRef.current) {
//           canvasRef.current.style.display = "block";
//         }
//       }, 100);
//     }
//   };

//   if (!webGLAvailable) {
//     return (
//       <div
//         style={{
//           height: "100%",
//           display: "flex",
//           alignItems: "center",
//           justifyContent: "center",
//           textAlign: "center",
//           padding: "20px",
//           color: "white",
//           backgroundColor: "rgba(0,0,0,0.7)",
//         }}
//       >
//         <div>
//           <p>Your device/browser doesn't support WebGL or it's disabled.</p>
//           <p>Try updating your browser or enable hardware acceleration.</p>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div style={{ position: "relative", width: "100%", height: "100%" }}>
//       {contextLost ? (
//         <div
//           style={{
//             position: "absolute",
//             top: 0,
//             left: 0,
//             right: 0,
//             bottom: 0,
//             display: "flex",
//             flexDirection: "column",
//             alignItems: "center",
//             justifyContent: "center",
//             background: "rgba(0,0,0,0.9)",
//             color: "white",
//             zIndex: 1000,
//             padding: "20px",
//             textAlign: "center",
//           }}
//         >
//           <p>Graphics error occurred</p>
//           <button
//             onClick={handleRetry}
//             style={{
//               marginTop: "20px",
//               padding: "10px 20px",
//               background: "#fff",
//               color: "#000",
//               border: "none",
//               borderRadius: "5px",
//               cursor: "pointer",
//             }}
//           >
//             Try Again
//           </button>
//           <p style={{ marginTop: "20px", fontSize: "0.8em" }}>
//             If the problem persists, try refreshing the page or use a different
//             browser
//           </p>
//         </div>
//       ) : null}

//       <Canvas
//         ref={canvasRef}
//         frameloop="demand"
//         shadows
//         dpr={isMobile ? Math.min(window.devicePixelRatio, 1) : [1, 2]}
//         camera={{
//           position: isMobile ? [15, 3, 5] : [20, 3, 5],
//           fov: isMobile ? 30 : 25,
//         }}
//         gl={{
//           preserveDrawingBuffer: true,
//           powerPreference: isMobile ? "default" : "high-performance",
//           antialias: !isMobile,
//           alpha: true,
//         }}
//         onCreated={handleContextEvents}
//         performance={{
//           min: isMobile ? 0.5 : 0.1,
//           max: isMobile ? 0.8 : 1,
//           debounce: isMobile ? 500 : 200,
//         }}
//       >
//         <Suspense fallback={<CanvasLoader />}>
//           <OrbitControls
//             enableZoom={false}
//             maxPolarAngle={Math.PI / 2}
//             minPolarAngle={Math.PI / 2}
//             autoRotate
//             autoRotateSpeed={isMobile ? 0 : 1.5}
//           />
//           <Computers
//             isMobile={isMobile}
//             onLoaded={() => console.log("Model loaded successfully")}
//           />
//         </Suspense>
//         <Preload all />
//       </Canvas>
//     </div>
//   );
// };

// export default ComputersCanvas;

// import { Suspense, useEffect, useState } from "react";
// import { Canvas } from "@react-three/fiber";
// import { OrbitControls, useGLTF } from "@react-three/drei";

// // Ana model bileşeni
// const Computers = ({ isMobile }) => {
//   const computer = useGLTF("./desktop_pc/scene.gltf");

//   return (
//     <>
//       {/* Ortak ışık: her iki cihaz için */}
//       <ambientLight intensity={0.3} />

//       {!isMobile && (
//         <>
//           {/* Masaüstü için ekstra ışıklar ve gölgeler */}
//           <hemisphereLight intensity={0.15} groundColor="black" />
//           <spotLight
//             position={[-20, 50, 10]}
//             angle={0.12}
//             penumbra={1}
//             intensity={1}
//             castShadow
//             shadow-mapSize={1024}
//           />
//           <pointLight intensity={1} />
//         </>
//       )}

//       <primitive
//         object={computer.scene}
//         scale={isMobile ? 0.6 : 0.75}
//         position={isMobile ? [0, -3, -2.2] : [0, -3.25, -1.5]}
//         rotation={[-0.01, -0.2, -0.1]}
//       />
//     </>
//   );
// };

// // Canvas bileşeni
// const ComputersCanvas = () => {
//   const [isMobile, setIsMobile] = useState(false);

//   useEffect(() => {
//     const mediaQuery = window.matchMedia("(max-width: 500px)");
//     setIsMobile(mediaQuery.matches);
//     const handleMediaQueryChange = e => setIsMobile(e.matches);
//     mediaQuery.addEventListener("change", handleMediaQueryChange);
//     return () => {
//       mediaQuery.removeEventListener("change", handleMediaQueryChange);
//     };
//   }, []);

//   return (
//     <Canvas
//       shadows={!isMobile}
//       dpr={[1, isMobile ? 1.5 : 2]}
//       camera={{
//         position: isMobile ? [10, 2, 3] : [20, 3, 5],
//         fov: isMobile ? 30 : 25,
//       }}
//       gl={{ preserveDrawingBuffer: true, antialias: !isMobile }}
//     >
//       <Suspense fallback={null}>
//         {!isMobile && (
//           <OrbitControls
//             enableZoom={false}
//             maxPolarAngle={Math.PI / 2}
//             minPolarAngle={Math.PI / 2}
//           />
//         )}
//         <Computers isMobile={isMobile} />
//       </Suspense>
//     </Canvas>
//   );
// };

// export default ComputersCanvas;

import { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF, Preload } from "@react-three/drei";

import CanvasLoader from "../Loader";
import { computer } from "../../assets";

const Computers = ({ isMobile }) => {
  const computer = useGLTF("./desktop_pc/scene.gltf");

  return (
    <mesh>
      {isMobile ? (
        <ambientLight intensity={0.5} />
      ) : (
        <>
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
        </>
      )}

      <primitive
        object={computer.scene}
        scale={isMobile ? 0.6 : 0.75}
        position={isMobile ? [0, -3, -2.2] : [0, -3.25, -1.5]}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 500px)");
    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = event => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  if (isMobile) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
        }}
      >
        <img
          src={computer}
          alt="Computer model"
          style={{ width: "100%", maxWidth: "300px", objectFit: "contain" }}
        />
      </div>
    );
  }

  return (
    <Canvas
      frameloop="demand"
      shadows
      dpr={[1, 2]}
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true, antialias: true }}
      style={{ width: "100%", height: "100%" }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers isMobile={false} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;
