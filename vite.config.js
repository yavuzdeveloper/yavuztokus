import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import { splitVendorChunkPlugin } from "vite";

export default defineConfig({
  plugins: [react(), splitVendorChunkPlugin()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          three_core: ["three"],
          r3f: ["@react-three/fiber"],
          drei: ["@react-three/drei"],
        },
        chunkFileNames: "assets/[name]-[hash].js",
      },
    },
    chunkSizeWarningLimit: 750,
    target: "esnext", // tree-shaking
  },
  optimizeDeps: {
    include: ["react", "react-dom", "@react-three/fiber", "@react-three/drei"],
    exclude: ["@chevrotain/utils"],
  },
});
