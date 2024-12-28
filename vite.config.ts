import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      {
        find: "@components",
        replacement: path.resolve(__dirname, "src/components"),
      },
      { find: "@hooks", replacement: path.resolve(__dirname, "src/hooks") },
      { find: "@context", replacement: path.resolve(__dirname, "src/context") },
      { find: "@service", replacement: path.resolve(__dirname, "src/service") },
      { find: "@util", replacement: path.resolve(__dirname, "src/util") },
      { find: "@assets", replacement: path.resolve(__dirname, "src/assets") },
      { find: "@type", replacement: path.resolve(__dirname, "src/types") },
    ],
  },
  css: {
    preprocessorOptions: {
      scss: {
        api: "modern-compiler",
      },
    },
  },
});
