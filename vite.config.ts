import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/weather": {
        // Adjust '/api' to match your API endpoint
        target: "https://api.seniverse.com/", // Replace with your API URL
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/weather/, ""),
      },
    },
  },
});
