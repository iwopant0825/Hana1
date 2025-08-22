import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ThemeProvider, createGlobalStyle } from 'styled-components'
import App from './App.tsx'

const theme = {
  color: {
    bg: '#0b0f19',
    surface: '#111827',
    text: '#e5e7eb',
    subtext: '#9ca3af',
    primary: '#60a5fa',
    accent: '#34d399',
    border: '#1f2937',
  },
}

const Global = createGlobalStyle`
  *, *::before, *::after { box-sizing: border-box; }
  html, body, #root { height: 100%; }
  body { margin: 0; background: ${theme.color.bg}; color: ${theme.color.text}; font-family: Inter, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial; }
  a { color: inherit; text-decoration: none; }
  .btn{ padding: 8px 12px; border-radius: 10px; border: 1px solid ${theme.color.border}; display: inline-flex; align-items: center; gap: 8px; }
  .btn.primary{ background: ${theme.color.primary}; color: #0b1220; border-color: transparent; }
  .btn.ghost{ background: transparent; color: ${theme.color.text}; }
`

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <Global />
      <App />
    </ThemeProvider>
  </StrictMode>,
)
