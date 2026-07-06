import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Products', href: '#products' },
  { label: 'About Us', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40)
      const sections = navLinks.map((l) => l.href.slice(1))
      for (const id of [...sections].reverse()) {
        const el = document.getElementById(id)
        if (el && el.getBoundingClientRect().top <= 100) {
          setActiveSection(id)
          break
        }
      }
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNavClick = (href: string) => {
    setMobileOpen(false)
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  const isDark = activeSection === 'about'

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${
        scrolled
          ? isDark
            ? 'bg-black/90 backdrop-blur-xl border-b border-white/10 py-3'
            : 'bg-white/90 backdrop-blur-xl border-b border-black/5 shadow-sm py-3'
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <a
          href="#home"
          onClick={(e) => { e.preventDefault(); handleNavClick('#home') }}
          className="flex items-center gap-2.5 group"
        >
          <div className="w-9 h-9 rounded-full bg-orange flex items-center justify-center font-bold text-white text-sm group-hover:scale-110 transition-transform">
            F
          </div>
          <span className={`font-[family-name:var(--font-display)] text-xl font-bold tracking-tight ${
            isDark && !scrolled ? 'text-white' : 'text-black'
          }`}>
            Famz<span className="text-accent">tech</span>
          </span>
        </a>

        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => { e.preventDefault(); handleNavClick(link.href) }}
              className={`relative px-4 py-2 text-sm font-medium rounded-full transition-colors ${
                activeSection === link.href.slice(1)
                  ? isDark && !scrolled ? 'text-white' : 'text-black'
                  : isDark && !scrolled ? 'text-white/60 hover:text-white' : 'text-muted hover:text-black'
              }`}
            >
              {activeSection === link.href.slice(1) && (
                <motion.div
                  layoutId="nav-indicator"
                  className={`absolute inset-0 rounded-full ${isDark && !scrolled ? 'bg-white/10' : 'bg-orange/10'}`}
                  transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                />
              )}
              <span className="relative z-10">{link.label}</span>
            </a>
          ))}
          <a
            href="#contact"
            onClick={(e) => { e.preventDefault(); handleNavClick('#contact') }}
            className="ml-3 btn-primary text-sm !py-2.5 !px-5"
          >
            Contact Us
          </a>
        </div>

        <button
          className={`md:hidden p-2 ${isDark && !scrolled ? 'text-white' : 'text-black'}`}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden mx-4 mt-2 bg-white rounded-2xl shadow-xl border border-black/5 overflow-hidden"
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => { e.preventDefault(); handleNavClick(link.href) }}
                className="block px-6 py-3.5 text-sm font-medium text-charcoal hover:bg-cream transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="px-4 pb-4">
              <a
                href="#contact"
                onClick={(e) => { e.preventDefault(); handleNavClick('#contact') }}
                className="btn-primary w-full justify-center text-sm"
              >
                Contact Us
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
