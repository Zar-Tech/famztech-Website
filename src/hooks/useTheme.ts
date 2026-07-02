import { useCallback, useEffect, useState } from 'react'
import { DEFAULT_THEME, isThemeId, THEMES, type ThemeId } from '../themes'

const STORAGE_KEY = 'famztech-theme'

function readStoredTheme(): ThemeId {
  try {
    const stored = localStorage.getItem(STORAGE_KEY)
    if (isThemeId(stored)) return stored
  } catch {
    // localStorage may be unavailable; fall back to the default.
  }
  return DEFAULT_THEME
}

export function useTheme() {
  const [themeId, setThemeId] = useState<ThemeId>(readStoredTheme)

  useEffect(() => {
    document.documentElement.dataset.theme = themeId
    try {
      localStorage.setItem(STORAGE_KEY, themeId)
    } catch {
      // Ignore write failures (e.g. private mode).
    }
  }, [themeId])

  const setTheme = useCallback((next: ThemeId) => setThemeId(next), [])

  return { themeId, setTheme, theme: THEMES[themeId] }
}
