const footerLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Products', href: '#products' },
  { label: 'About Us', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

const services = ['CloudX Platform', 'SecureAI Suite', 'DataFlow Engine', 'Infrastructure Audits']

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-6 pt-16 pb-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 rounded-full bg-orange flex items-center justify-center font-bold text-white text-sm">
                F
              </div>
              <span className="font-[family-name:var(--font-display)] text-xl font-bold">
                Famz<span className="text-accent">tech</span>
              </span>
            </div>
            <p className="text-white/50 text-sm leading-relaxed max-w-sm">
              We build world-class technology platforms and help startups and enterprises
              deliver secure, scalable digital products.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold mb-4">Company</h4>
            <ul className="space-y-2.5">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="link-underline text-sm text-white/50 hover:text-orange transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold mb-4">Products</h4>
            <ul className="space-y-2.5">
              {services.map((s) => (
                <li key={s}>
                  <span className="text-sm text-white/50">{s}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/40">
            &copy; {new Date().getFullYear()} Famztech. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="link-underline text-xs text-white/40">Privacy Policy</a>
            <a href="#" className="link-underline text-xs text-white/40">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
