import { ArrowRight, Mail, MapPin } from 'lucide-react'

const exploreLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'App Development', href: '#app-development' },
  { label: 'Contact', href: '#contact' },
]

const expertise = [
  'App Development',
  'Web Development',
  'UI/UX Design',
  'Custom Software',
]

export default function Footer() {
  return (
    <footer className="footer">
      <div className="section-wrap footer-main">
        <div className="footer-brand">
          <a href="#home" className="footer-logo">
            <span className="footer-logo-icon">F</span>
            <span className="brand-logo brand-logo-footer">
              Famz<span className="text-accent">tech</span>
            </span>
          </a>
          <p className="footer-tagline">
            Premium technology for teams that build at scale.
          </p>
          <a href="#contact" className="btn-primary footer-cta">
            Start a Project
            <ArrowRight size={16} />
          </a>
        </div>

        <div className="footer-col">
          <h4 className="footer-heading">Explore</h4>
          <ul className="footer-links">
            {exploreLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer-col">
          <h4 className="footer-heading">Expertise</h4>
          <ul className="footer-list">
            {expertise.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="footer-col">
          <h4 className="footer-heading">Connect</h4>
          <ul className="footer-contact">
            <li>
              <Mail size={15} className="footer-contact-icon" />
              <a href="mailto:hello@famztech.com">hello@famztech.com</a>
            </li>
            <li>
              <MapPin size={15} className="footer-contact-icon" />
              <span>San Francisco, CA</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-bar">
        <div className="section-wrap footer-bar-inner">
          <p className="footer-copy">
            &copy; {new Date().getFullYear()} Famztech
          </p>
          <div className="footer-legal">
            <a href="#">Privacy</a>
            <span className="footer-dot" aria-hidden="true" />
            <a href="#">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
