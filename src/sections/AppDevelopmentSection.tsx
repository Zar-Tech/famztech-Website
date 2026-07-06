import { ArrowRight } from 'lucide-react'
import FadeIn from '../components/FadeIn'
import PhoneMockup from '../components/PhoneMockup'

const approach = [
  'User-centered mobile & web experiences',
  'Scalable design systems & architecture',
  'High-conversion product interfaces',
  'Clean, implementation-ready code',
  'Consistent experiences across platforms',
]

export default function AppDevelopmentSection() {
  return (
    <section id="app-development" className="app-dev-section">
      {/* Hero */}
      <div className="app-dev-hero">
        <span className="app-dev-badge">Famztech</span>
        <div className="section-wrap app-dev-hero-grid">
          <FadeIn>
            <div className="app-dev-hero-text">
              <h2 className="app-dev-hero-title">
                App Development
                <span className="app-dev-hero-sub">Mobile &amp; Web</span>
              </h2>
            </div>
          </FadeIn>

          <div className="app-dev-phones">
            <FadeIn delay={0.1}>
              <PhoneMockup theme="light" className="phone-pos-left" />
            </FadeIn>
            <FadeIn delay={0.2}>
              <PhoneMockup theme="dark" className="phone-pos-center" />
            </FadeIn>
            <FadeIn delay={0.3}>
              <PhoneMockup theme="orange" className="phone-pos-right" />
            </FadeIn>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="app-dev-content section-pad">
        <div className="section-wrap app-dev-content-inner">
          <FadeIn>
            <p className="app-dev-lead">
              We build mobile and web applications focused on scalability, usability,
              and business growth.
            </p>
            <p className="body-lg text-muted mb-8 max-w-prose">
              Our portfolio spans fintech, SaaS, and enterprise products — combining clean UI,
              intuitive UX, and architectures built for modern technology ecosystems.
            </p>
            <p className="body font-semibold text-black mb-4">Our approach focuses on:</p>
            <ul className="app-dev-list">
              {approach.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p className="body text-muted mt-8 max-w-prose leading-relaxed">
              From concept to launch, Famztech helps startups and enterprises transform ideas
              into polished digital experiences ready to scale.
            </p>
            <a href="#contact" className="link-underline body-sm font-semibold text-orange mt-6 inline-block">
              Book a discovery call
            </a>
          </FadeIn>
        </div>
      </div>

      {/* CTA Banner */}
      <div className="section-wrap app-dev-cta-wrap">
        <FadeIn>
          <div className="app-dev-cta">
            <div className="app-dev-cta-text">
              <h3 className="app-dev-cta-title">
                Better Apps.
                <br />
                Better Business.
              </h3>
              <p className="app-dev-cta-desc">
                We develop mobile and web solutions that convert users and scale with your growth.
              </p>
              <a href="#contact" className="app-dev-cta-btn">
                Start your project
                <ArrowRight size={18} />
              </a>
            </div>
            <div className="app-dev-cta-phones" aria-hidden="true">
              <PhoneMockup theme="dark" className="cta-phone cta-phone-1" />
              <PhoneMockup theme="orange" className="cta-phone cta-phone-2" />
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
