import lensConfigPlugin from "@adk/lens-react/vite-plugin";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import * as path from "path";

export default defineConfig({
  plugins: [react(), tailwindcss(), lensConfigPlugin()],
  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "./src"),
    },
    dedupe: ["@emotion/react", "@emotion/styled"],
  },
});
