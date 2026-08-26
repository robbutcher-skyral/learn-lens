import lensConfigPlugin from "@adk/lens-react/vite-plugin";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import { protomapsAssetsPlugin } from "@adk/vite-plugin-protomaps-assets";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    lensConfigPlugin(),
    protomapsAssetsPlugin({ flavors: ["dark"] }),
  ],
  resolve: {
    dedupe: ["@emotion/react", "@emotion/styled"],
  },
});
