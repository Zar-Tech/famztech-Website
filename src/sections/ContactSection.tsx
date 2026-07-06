import { useState, type FormEvent } from 'react'
import { ArrowRight, CheckCircle } from 'lucide-react'
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
    <section id="contact" className="relative section-pad gradient-shift text-white overflow-hidden">
      <ParticleField count={20} />
      <div className="section-wrap relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <FadeIn>
            <p className="section-label section-label-dark">Contact</p>
            <h2 className="heading-lg text-white mb-5 max-w-prose">
              Gain <span className="text-accent">insights</span> into your technology
            </h2>
            <p className="body-lg text-white/55 max-w-prose mb-8">
              Request a platform demo or a complimentary infrastructure health
              assessment for your organization.
            </p>
            <a href="#contact-form" className="btn-primary">
              Get Started
              <ArrowRight size={16} />
            </a>
          </FadeIn>

          <FadeIn delay={0.12}>
            <form
              id="contact-form"
              onSubmit={handleSubmit}
              className="bg-white/[0.06] backdrop-blur-sm border border-white/10 rounded-2xl p-7 lg:p-8 space-y-4"
            >
              <div>
                <label htmlFor="name" className="form-label">Full Name</label>
                <input
                  id="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="form-input"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label htmlFor="email" className="form-label">Work Email</label>
                <input
                  id="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="form-input"
                  placeholder="john@company.com"
                />
              </div>
              <div>
                <label htmlFor="company" className="form-label">Company</label>
                <input
                  id="company"
                  type="text"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  className="form-input"
                  placeholder="Your company"
                />
              </div>
              <div>
                <label htmlFor="message" className="form-label">How can we help?</label>
                <textarea
                  id="message"
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="form-input resize-none"
                  placeholder="Tell us about your project..."
                />
              </div>
              <button type="submit" disabled={submitted} className="btn-primary w-full disabled:opacity-70">
                {submitted ? (
                  <>
                    <CheckCircle size={16} />
                    Request Sent
                  </>
                ) : (
                  <>
                    Send Request
                    <ArrowRight size={16} />
                  </>
                )}
              </button>
            </form>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
