import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { copyFileSync, mkdirSync } from 'node:fs'
import { resolve } from 'node:path'

// The app uses client-side routing and the static host returns its own error
// page for unknown paths (it ignores 404.html). So after building, drop a copy
// of the SPA shell at every real route directory — the host then serves
// /category/brand/index.html and React boots into the right route.
const ROUTES = [
  'work',
  'category/about',
  'category/contact',
  'category/brand',
  'category/packaging',
  'category/key-visual',
  'category/ip-design',
  'project/fupei',
  'project/florilegio',
  'project/misini',
  'project/chunshe',
  'project/qq-nails',
  'project/buwu',
  'project/anzhie',
  'project/campaigns',
  'project/skincare',
  'project/leniu-mid-autumn',
  'project/leniu-childrens-day',
  'project/wuhu',
  'project/health',
  'project/ctf',
  'project/aura',
  'project/yooriskin',
  'project/yoomay',
  'project/kavirae',
  'project/nonparey',
]

function staticRouteShells() {
  return {
    name: 'static-route-shells',
    apply: 'build',
    closeBundle() {
      const outDir = resolve(process.cwd(), 'dist')
      const shell = resolve(outDir, 'index.html')
      for (const route of ROUTES) {
        const dir = resolve(outDir, route)
        mkdirSync(dir, { recursive: true })
        copyFileSync(shell, resolve(dir, 'index.html'))
      }
      copyFileSync(shell, resolve(outDir, '404.html'))
    },
  }
}

export default defineConfig({ plugins: [react(), staticRouteShells()] })
