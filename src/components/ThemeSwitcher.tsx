import { THEME_ORDER, THEMES, type ThemeId } from '../themes'

type Props = {
  themeId: ThemeId
  onChange: (id: ThemeId) => void
}

function ThemeSwitcher({ themeId, onChange }: Props) {
  return (
    <div className="theme-switcher" role="group" aria-label="Choose a theme">
      {THEME_ORDER.map((id) => (
        <button
          key={id}
          type="button"
          className={'theme-dot' + (themeId === id ? ' active' : '')}
          data-theme-dot={id}
          aria-pressed={themeId === id}
          title={THEMES[id].label}
          onClick={() => onChange(id)}
        >
          <span className="theme-dot-swatch" aria-hidden="true" />
          <span className="theme-dot-label">{THEMES[id].label}</span>
        </button>
      ))}
    </div>
  )
}

export default ThemeSwitcher
