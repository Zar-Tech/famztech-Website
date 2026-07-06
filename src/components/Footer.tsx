const footerLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Products', href: '#products' },
  { label: 'About Us', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

const services = ['CloudX Platform', 'SecureAI Suite', 'App Development', 'Infrastructure Audits']

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="section-wrap pt-16 pb-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 rounded-full bg-orange flex items-center justify-center font-semibold text-white text-xs">
                F
              </div>
              <span className="brand-logo text-white">
                Famz<span className="text-accent">tech</span>
              </span>
            </div>
            <p className="body-sm text-white/45 max-w-sm leading-relaxed">
              World-class technology platforms for startups and enterprises
              building secure, scalable digital products.
            </p>
          </div>

          <div>
            <h4 className="caption text-white/70 mb-4">Company</h4>
            <ul className="space-y-2.5">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="link-underline body-sm text-white/45 hover:text-white transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="caption text-white/70 mb-4">Products</h4>
            <ul className="space-y-2.5">
              {services.map((s) => (
                <li key={s}>
                  <span className="body-sm text-white/45">{s}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="body-sm text-white/35">
            &copy; {new Date().getFullYear()} Famztech. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="link-underline body-sm text-white/35">Privacy</a>
            <a href="#" className="link-underline body-sm text-white/35">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
