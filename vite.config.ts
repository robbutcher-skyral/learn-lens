import lensConfigPlugin from "@adk/lens-react/vite-plugin";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss(), lensConfigPlugin()],
  resolve: {
    dedupe: ["@emotion/react", "@emotion/styled"],
  },
});
