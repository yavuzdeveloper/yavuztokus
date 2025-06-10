import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import { splitVendorChunkPlugin } from "vite";

export default defineConfig({
  plugins: [react(), splitVendorChunkPlugin()],
  base: "/yavuztokus",
  build: {
    rollupOptions: {
      output: {
        manualChunks: id => {
          if (id.includes("node_modules")) {
            if (id.includes("three") || id.includes("@react-three")) {
              return "vendor_three";
            }
            if (id.includes("framer-motion")) {
              return "vendor_framer";
            }
            if (id.includes("lodash")) {
              return "vendor_lodash";
            }
            return "vendor";
          }
        },
        chunkFileNames: "assets/[name]-[hash].js",
      },
    },
    chunkSizeWarningLimit: 750,
    target: "esnext", // tree-shaking
  },
});
