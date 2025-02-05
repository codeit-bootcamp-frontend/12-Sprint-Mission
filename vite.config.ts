import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: "localhost",
    port: 3000, // 포트 설정. 기본값은 5173
    open: true, // 서버 시작 시 브라우저 자동 열기
  },
  build: {
    outDir: "build",
  },
});
