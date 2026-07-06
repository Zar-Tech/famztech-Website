import { Globe, Share2, Code2 } from 'lucide-react'

const footerLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Products', href: '#products' },
  { label: 'About Us', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

const socials = [
  { icon: Share2, href: '#', label: 'Social' },
  { icon: Globe, href: '#', label: 'Website' },
  { icon: Code2, href: '#', label: 'GitHub' },
]

export default function Footer() {
  return (
    <footer className="relative border-t border-white/5 bg-midnight">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center font-bold text-white text-xs">
              F
            </div>
            <span className="font-[family-name:var(--font-display)] text-lg font-bold">
              Famz<span className="text-gradient">tech</span>
            </span>
          </div>

          <div className="flex flex-wrap justify-center gap-6">
            {footerLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-slate-400 hover:text-white transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="flex gap-3">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                aria-label={s.label}
                className="w-9 h-9 rounded-lg glass flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/10 transition-all"
              >
                <s.icon size={16} />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-white/5 text-center">
          <p className="text-xs text-slate-500">
            &copy; {new Date().getFullYear()} Famztech. All rights reserved. Crafted with precision.
          </p>
        </div>
      </div>
    </footer>
  )
}
