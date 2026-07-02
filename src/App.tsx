import './App.css'
import { useScrollReveal } from './hooks/useScrollReveal'
import { useTheme } from './hooks/useTheme'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Products from './components/Products'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  useScrollReveal()
  const { themeId, setTheme, theme } = useTheme()

  return (
    <div className="page">
      <div className="bg-orbs" aria-hidden="true">
        <span className="orb orb-1" />
        <span className="orb orb-2" />
      </div>
      <Navbar themeId={themeId} onThemeChange={setTheme} />
      <main>
        <Hero scene={theme.scene} />
        <Services />
        <Products />
        <Portfolio />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
