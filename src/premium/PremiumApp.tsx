import { useEffect, useRef, useState } from 'react'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { services } from '../data/services'
import { products } from '../data/products'
import { portfolio } from '../data/portfolio'
import PremiumScene from './PremiumScene'

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

const STATS = [
  { value: 120, suffix: '+', label: 'Products shipped' },
  { value: 40, suffix: '+', label: 'Happy clients' },
  { value: 9, suffix: ' yrs', label: 'Building software' },
  { value: 98, suffix: '%', label: 'Client retention' },
]

function CountUp({ end, suffix }: { end: number; suffix: string }) {
  const [value, setValue] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    let raf = 0
    let start = 0
    const duration = 1400

    const step = (t: number) => {
      if (!start) start = t
      const p = Math.min((t - start) / duration, 1)
      setValue(Math.floor(p * end))
      if (p < 1) raf = requestAnimationFrame(step)
    }

    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          raf = requestAnimationFrame(step)
          io.disconnect()
        }
      },
      { threshold: 0.4 },
    )
    if (ref.current) io.observe(ref.current)

    return () => {
      io.disconnect()
      cancelAnimationFrame(raf)
    }
  }, [end])

  return (
    <span ref={ref}>
      {value}
      {suffix}
    </span>
  )
}

function statusClass(status: string) {
  return 'px-badge px-badge-' + status.toLowerCase().replace(/\s+/g, '-')
}

function PremiumApp() {
  useScrollReveal()

  const [email, setEmail] = useState('')
  const [sent, setSent] = useState<string | null>(null)
  const [error, setError] = useState<string | null>(null)

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const value = email.trim()
    if (!EMAIL_PATTERN.test(value)) {
      setError('Please enter a valid email address.')
      setSent(null)
      return
    }
    setError(null)
    setSent(value)
    setEmail('')
  }

  return (
    <div className="px-page">
      <header className="px-nav">
        <a className="px-brand" href="#top">
          Famz<span>Tech</span> Studio
        </a>
        <nav className="px-nav-links">
          <a href="#services">Services</a>
          <a href="#products">Products</a>
          <a href="#work">Work</a>
          <a href="#contact">Contact</a>
        </nav>
        <div className="px-nav-cta">
          <a className="px-link-muted" href="/">
            Classic site ↗
          </a>
          <a className="px-btn px-btn-solid" href="#contact">
            Start a project
          </a>
        </div>
      </header>

      <main>
        <section className="px-hero" id="top">
          <PremiumScene />
          <div className="px-hero-inner" data-reveal>
            <span className="px-eyebrow">AI &amp; Software Product Studio</span>
            <h1>
              Premium software,
              <br />
              <span className="px-grad">engineered to impress.</span>
            </h1>
            <p>
              FamzTech Studio partners with ambitious teams to design, build and
              scale AI-powered products people love.
            </p>
            <div className="px-hero-actions">
              <a className="px-btn px-btn-solid" href="#products">
                Explore our products
              </a>
              <a className="px-btn px-btn-glass" href="#work">
                See our work
              </a>
            </div>
          </div>
          <div className="px-scroll-hint" aria-hidden="true">
            Scroll
          </div>
        </section>

        <section className="px-stats" data-reveal>
          {STATS.map((stat) => (
            <div className="px-stat" key={stat.label}>
              <div className="px-stat-value">
                <CountUp end={stat.value} suffix={stat.suffix} />
              </div>
              <div className="px-stat-label">{stat.label}</div>
            </div>
          ))}
        </section>

        <section className="px-section" id="services" data-reveal>
          <div className="px-head">
            <span className="px-kicker">Capabilities</span>
            <h2>What we craft</h2>
          </div>
          <div className="px-grid">
            {services.map((service) => (
              <article className="px-card" key={service.title}>
                <span className="px-card-icon" aria-hidden="true">
                  {service.icon}
                </span>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="px-section" id="products" data-reveal>
          <div className="px-head">
            <span className="px-kicker">Products</span>
            <h2>Apps we&apos;ve launched</h2>
          </div>
          <div className="px-grid">
            {products.map((product) => (
              <article className="px-card px-product" key={product.name}>
                <div className="px-product-top">
                  <span className="px-card-icon" aria-hidden="true">
                    {product.icon}
                  </span>
                  <span className={statusClass(product.status)}>
                    {product.status}
                  </span>
                </div>
                <h3>{product.name}</h3>
                <p className="px-tagline">{product.tagline}</p>
                <p>{product.description}</p>
                <div className="px-product-foot">
                  <span className="px-tag">{product.category}</span>
                  {product.url && (
                    <a className="px-learn" href={product.url}>
                      Learn more →
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="px-section" id="work" data-reveal>
          <div className="px-head">
            <span className="px-kicker">Selected work</span>
            <h2>Portfolio</h2>
          </div>
          <div className="px-grid">
            {portfolio.map((item) => (
              <article className="px-card px-work" key={item.title}>
                <div className="px-work-top">
                  <span className="px-work-client">{item.client}</span>
                  <span className="px-work-year">{item.year}</span>
                </div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <div className="px-tags">
                  {item.tags.map((tag) => (
                    <span className="px-tag" key={tag}>
                      {tag}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="px-section px-contact" id="contact" data-reveal>
          <div className="px-contact-card">
            <span className="px-kicker">Let&apos;s talk</span>
            <h2>Build something premium with us.</h2>
            <p>Subscribe for studio updates or reach out to start a project.</p>
            <form onSubmit={handleSubmit} noValidate>
              <label htmlFor="px-email">Email address</label>
              <div className="px-field">
                <input
                  id="px-email"
                  type="email"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                />
                <button type="submit" className="px-btn px-btn-solid">
                  Subscribe
                </button>
              </div>
            </form>
            {error && (
              <p role="alert" className="px-error">
                {error}
              </p>
            )}
            {sent && (
              <p role="status" className="px-success">
                Thanks! We&apos;ll keep {sent} posted.
              </p>
            )}
          </div>
        </section>
      </main>

      <footer className="px-footer">
        <span>
          © {new Date().getFullYear()} FamzTech Studio. AI &amp; Software
          Development.
        </span>
        <a className="px-link-muted" href="/">
          Classic site ↗
        </a>
      </footer>
    </div>
  )
}

export default PremiumApp
