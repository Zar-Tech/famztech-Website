import { useState, type FormEvent } from 'react'
import { ArrowRight, CheckCircle, Clock, Mail } from 'lucide-react'
import FadeIn from '../components/FadeIn'
import ParticleField from '../components/ParticleField'

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({ name: '', email: '', company: '', message: '' })

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 4000)
    setFormData({ name: '', email: '', company: '', message: '' })
  }

  return (
    <section id="contact" className="contact-section section-pad gradient-shift overflow-hidden">
      <ParticleField count={16} />
      <div className="section-wrap contact-wrap">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          <FadeIn>
            <div className="contact-copy">
              <p className="contact-label">Contact</p>
              <h2 className="contact-title">
                Let&apos;s build something{' '}
                <span className="contact-title-accent">great together</span>
              </h2>
              <p className="contact-lead">
                Tell us about your project and we&apos;ll respond within one business day
                with next steps tailored to your goals.
              </p>

              <ul className="contact-meta">
                <li>
                  <Clock size={16} className="contact-meta-icon" aria-hidden="true" />
                  <div>
                    <span className="contact-meta-label">Response time</span>
                    <span className="contact-meta-value">Within 24 hours</span>
                  </div>
                </li>
                <li>
                  <Mail size={16} className="contact-meta-icon" aria-hidden="true" />
                  <div>
                    <span className="contact-meta-label">Email us</span>
                    <a href="mailto:hello@famztech.com" className="contact-meta-value contact-meta-link">
                      hello@famztech.com
                    </a>
                  </div>
                </li>
              </ul>
            </div>
          </FadeIn>

          <FadeIn delay={0.12}>
            <div className="contact-form-card">
              <div className="contact-form-header">
                <h3 className="contact-form-title">Send a message</h3>
                <p className="contact-form-desc">
                  Share a few details and our team will get back to you shortly.
                </p>
              </div>

              <form id="contact-form" onSubmit={handleSubmit} className="contact-form">
                <div className="contact-field">
                  <label htmlFor="name" className="contact-field-label">Full name</label>
                  <input
                    id="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="contact-input"
                    placeholder="John Doe"
                  />
                </div>
                <div className="contact-field">
                  <label htmlFor="email" className="contact-field-label">Work email</label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="contact-input"
                    placeholder="john@company.com"
                  />
                </div>
                <div className="contact-field">
                  <label htmlFor="company" className="contact-field-label">Company</label>
                  <input
                    id="company"
                    type="text"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="contact-input"
                    placeholder="Your company name"
                  />
                </div>
                <div className="contact-field">
                  <label htmlFor="message" className="contact-field-label">Message</label>
                  <textarea
                    id="message"
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="contact-input contact-textarea"
                    placeholder="What are you looking to build?"
                  />
                </div>
                <button type="submit" disabled={submitted} className="contact-submit disabled:opacity-70">
                  {submitted ? (
                    <>
                      <CheckCircle size={16} />
                      Message sent
                    </>
                  ) : (
                    <>
                      Send message
                      <ArrowRight size={16} />
                    </>
                  )}
                </button>
              </form>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
