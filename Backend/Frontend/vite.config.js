import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3001,
    proxy: {
      "/api": {
        target: process.env.BACKEND_URL || "http://localhost:4002",
        changeOrigin: true,
        ws: true, // Enable WebSocket proxying
      },
    },
  },
  base: process.env.NODE_ENV === "production" ? "/frontend/" : "/",
});
