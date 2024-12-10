import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  base: "/netflix-clone/",
  plugins: [react()],
  build: {
    outDir: "dist",
  },
  server: {
    open: true,
  },
});
