import { execFile, execSync } from 'node:child_process'
import { existsSync, readdirSync } from 'node:fs'
import { join } from 'node:path'
import { tanstackStart } from '@tanstack/react-start/plugin/vite'
import { devtools } from '@tanstack/devtools-vite'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { defineConfig, type Plugin } from 'vite'
import svgr from 'vite-plugin-svgr'

function findWindowsCursorExe(): string | null {
  if (
    process.env.CURSOR_WINDOWS_PATH &&
    existsSync(process.env.CURSOR_WINDOWS_PATH)
  ) {
    return process.env.CURSOR_WINDOWS_PATH
  }

  const usersDir = '/mnt/c/Users'
  if (!existsSync(usersDir)) return null

  for (const user of readdirSync(usersDir)) {
    if (user === 'Public' || user === 'Default' || user.startsWith('.')) {
      continue
    }

    const exe = join(
      usersDir,
      user,
      'AppData/Local/Programs/cursor/Cursor.exe'
    )
    if (existsSync(exe)) return exe
  }

  return null
}

function openInCursor(wslPath: string, line: string, column: string) {
  if (!existsSync(wslPath)) {
    console.warn(`[devtools-open-in-cursor] File not found: ${wslPath}`)
    return
  }

  const goto = `${wslPath}:${line}:${column}`

  execFile('cursor', ['-g', goto], { env: process.env }, (err) => {
    if (!err) return

    console.warn(
      `[devtools-open-in-cursor] Remote CLI failed (${err.message}), trying Windows Cursor...`
    )

    if (!process.env.WSL_DISTRO_NAME) return

    const cursorExe = findWindowsCursorExe()
    if (!cursorExe) {
      console.warn('[devtools-open-in-cursor] Cursor.exe not found on Windows.')
      return
    }

    try {
      const winPath = execSync(`wslpath -w ${JSON.stringify(wslPath)}`, {
        encoding: 'utf8'
      }).trim()

      execFile(
        cursorExe,
        ['--goto', `${winPath}:${line}:${column}`],
        (winErr) => {
          if (winErr) {
            console.warn(
              `[devtools-open-in-cursor] Windows Cursor failed: ${winErr.message}`
            )
          }
        }
      )
    } catch (error) {
      console.warn('[devtools-open-in-cursor] wslpath failed:', error)
    }
  })
}

/**
 * TanStack DevTools "Go to Source" uses GET /__tsd/open-source.
 * The default devtools-vite handler hangs when `source` is missing or malformed.
 * This middleware responds immediately and opens files in Cursor (WSL + Windows).
 */
function devtoolsOpenInCursor(): Plugin {
  return {
    name: 'devtools-open-in-cursor',
    enforce: 'pre',
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        const url = req.url ?? ''
        if (!url.includes('__tsd/open-source')) {
          return next()
        }

        res.setHeader('Content-Type', 'text/html')
        res.end('<script>window.close();</script>')

        const searchParams = new URLSearchParams(url.split('?')[1] ?? '')
        const source = searchParams.get('source')
        if (!source) return

        const match = source.match(/^(.+):(\d+):(\d+)$/)
        if (!match) {
          console.warn(`[devtools-open-in-cursor] Invalid source: ${source}`)
          return
        }

        const [, file, line, column] = match
        const absolutePath = file.startsWith('/')
          ? join(process.cwd(), file.slice(1))
          : join(process.cwd(), file)

        openInCursor(absolutePath, line, column)
      })
    }
  }
}

export default defineConfig({
  plugins: [
    devtoolsOpenInCursor(),
    devtools(),
    tailwindcss(),
    tanstackStart({
      server: {
        build: {
          inlineCss: true
        }
      }
    }),
    react(),
    svgr({
      include: '**/*.svg'
    })
  ]
})
