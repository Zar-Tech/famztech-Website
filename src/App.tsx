import { useState } from 'react'
import './App.css'

const SERVICES = [
  {
    title: 'Web Platforms',
    description: 'Fast, accessible web apps built with modern tooling.',
  },
  {
    title: 'Cloud & DevOps',
    description: 'Reliable infrastructure, CI/CD and observability.',
  },
  {
    title: 'Product Design',
    description: 'Interfaces your customers actually enjoy using.',
  },
]

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function App() {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState<string | null>(null)
  const [error, setError] = useState<string | null>(null)

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const value = email.trim()
    if (!EMAIL_PATTERN.test(value)) {
      setError('Please enter a valid email address.')
      setSubscribed(null)
      return
    }
    setError(null)
    setSubscribed(value)
    setEmail('')
  }

  return (
    <div className="page">
      <header className="nav">
        <span className="brand">FamzTech</span>
        <nav>
          <a href="#services">Services</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main>
        <section className="hero">
          <h1>Software that moves your business forward.</h1>
          <p>
            FamzTech designs, builds and scales digital products for ambitious
            teams.
          </p>
          <a className="cta" href="#contact">
            Get in touch
          </a>
        </section>

        <section id="services" className="services">
          <h2>What we do</h2>
          <ul>
            {SERVICES.map((service) => (
              <li key={service.title}>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </li>
            ))}
          </ul>
        </section>

        <section id="contact" className="contact">
          <h2>Stay in the loop</h2>
          <p>Subscribe for product updates from the FamzTech team.</p>
          <form onSubmit={handleSubmit} noValidate>
            <label htmlFor="email">Email address</label>
            <div className="field">
              <input
                id="email"
                name="email"
                type="email"
                placeholder="you@example.com"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              />
              <button type="submit">Subscribe</button>
            </div>
          </form>
          {error && (
            <p role="alert" className="error">
              {error}
            </p>
          )}
          {subscribed && (
            <p role="status" className="success">
              Thanks! We&apos;ll keep {subscribed} posted.
            </p>
          )}
        </section>
      </main>

      <footer className="footer">
        <p>© {new Date().getFullYear()} FamzTech. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default App
