import { useState } from 'react'

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function Contact() {
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
    <section className="section contact" id="contact" data-reveal>
      <div className="section-head">
        <h2>Let&apos;s build something</h2>
        <p>Subscribe for product updates or reach out to start a project.</p>
      </div>
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
          <button type="submit" className="btn btn-primary">
            Subscribe
          </button>
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
  )
}

export default Contact
