import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// On GitHub Actions, GITHUB_REPOSITORY is "owner/repo".
// - Project page (repo "portfolio")        -> served at /portfolio/ -> base "/portfolio/"
// - User page    (repo "<user>.github.io")  -> served at root        -> base "/"
// Locally (no env var) base stays "/".
const repo = process.env.GITHUB_REPOSITORY?.split('/')[1]
const base = repo && !repo.endsWith('.github.io') ? `/${repo}/` : '/'

// https://vite.dev/config/
export default defineConfig({
  base,
  plugins: [react()],
})
