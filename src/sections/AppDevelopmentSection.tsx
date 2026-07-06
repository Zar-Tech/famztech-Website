import { ArrowRight } from 'lucide-react'
import FadeIn from '../components/FadeIn'
import PhoneMockup from '../components/PhoneMockup'

const approach = [
  'User-first mobile & web experiences',
  'Scalable design systems & architecture',
  'Clean, production-ready code',
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
        <div className="section-wrap app-dev-content-grid">
          <FadeIn>
            <div className="app-dev-copy">
              <p className="section-label">Our Approach</p>
              <h3 className="heading-lg text-black mb-5">
                Mobile &amp; web apps built to <span className="text-accent">scale</span>
              </h3>
              <p className="body-lg text-muted mb-8 max-w-prose">
                Fintech, SaaS, and enterprise — clean UI, sharp UX, and architecture
                that grows with you.
              </p>
              <a href="#contact" className="btn-primary">
                Book a call
                <ArrowRight size={16} />
              </a>
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className="app-dev-features">
              <p className="app-dev-features-label">What we deliver</p>
              <ul className="app-dev-list">
                {approach.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
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
