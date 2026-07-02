import ThemeSwitcher from './ThemeSwitcher'
import type { ThemeId } from '../themes'

type Props = {
  themeId: ThemeId
  onThemeChange: (id: ThemeId) => void
}

function Navbar({ themeId, onThemeChange }: Props) {
  return (
    <header className="nav">
      <a className="brand" href="#top">
        Famz<span>Tech</span>
      </a>
      <div className="nav-right">
        <nav>
          <a href="#services">Services</a>
          <a href="#products">Products</a>
          <a href="#portfolio">Portfolio</a>
          <a href="#contact">Contact</a>
        </nav>
        <ThemeSwitcher themeId={themeId} onChange={onThemeChange} />
      </div>
    </header>
  )
}

export default Navbar
