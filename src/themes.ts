export type ThemeId = 'daylight' | 'midnight' | 'azure'

export type Theme = {
  id: ThemeId
  label: string
  /** Colors used by the WebGL 3D hero. */
  scene: {
    blob: string
    ring: string
    emissive: string
    keyLight: string
    fillLight: string
  }
}

export const THEMES: Record<ThemeId, Theme> = {
  daylight: {
    id: 'daylight',
    label: 'Daylight',
    scene: {
      blob: '#e0532f',
      ring: '#0f7d6b',
      emissive: '#2a0d05',
      keyLight: '#fff1e6',
      fillLight: '#0f7d6b',
    },
  },
  midnight: {
    id: 'midnight',
    label: 'Midnight',
    scene: {
      blob: '#ff6a45',
      ring: '#2dd4bf',
      emissive: '#3a0f06',
      keyLight: '#ffd9c2',
      fillLight: '#2dd4bf',
    },
  },
  azure: {
    id: 'azure',
    label: 'Azure',
    scene: {
      blob: '#4f46e5',
      ring: '#0ea5a3',
      emissive: '#0b1030',
      keyLight: '#e6e9ff',
      fillLight: '#0ea5a3',
    },
  },
}

export const THEME_ORDER: ThemeId[] = ['daylight', 'midnight', 'azure']

export const DEFAULT_THEME: ThemeId = 'daylight'

export function isThemeId(value: unknown): value is ThemeId {
  return value === 'daylight' || value === 'midnight' || value === 'azure'
}
