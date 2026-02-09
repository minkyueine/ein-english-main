import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // 상대 경로로 하면 로컬(dev/preview)과 GitHub Pages 배포 시 모두 이미지·에셋이 정상 로드됨
  base: './',
})
