import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// base: "./" keeps all asset URLs relative, so the build works on
// GitHub Pages whether it's served from username.github.io or /repo-name/.
export default defineConfig({
  plugins: [react()],
  base: "./",
});
