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
    <section id="contact" className="relative py-28 gradient-shift text-white overflow-hidden">
      <ParticleField count={32} />
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <FadeIn>
            <h2 className="heading-lg mb-6">
              Gain <span className="text-accent">insights</span> into your technology
            </h2>
            <p className="text-white/60 leading-relaxed mb-8 max-w-md">
              Get in touch to see a sample platform demo or receive a complimentary
              infrastructure health assessment for your organization.
            </p>
            <a href="#contact-form" className="btn-primary">
              Get Started
              <ArrowRight size={18} />
            </a>
          </FadeIn>

          <FadeIn delay={0.15}>
            <form
              id="contact-form"
              onSubmit={handleSubmit}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 space-y-4"
            >
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-white/80 mb-1.5">
                  Full Name
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/15 text-white placeholder-white/40 focus:outline-none focus:border-orange transition-colors"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-white/80 mb-1.5">
                  Work Email
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/15 text-white placeholder-white/40 focus:outline-none focus:border-orange transition-colors"
                  placeholder="john@company.com"
                />
              </div>
              <div>
                <label htmlFor="company" className="block text-sm font-medium text-white/80 mb-1.5">
                  Company
                </label>
                <input
                  id="company"
                  type="text"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/15 text-white placeholder-white/40 focus:outline-none focus:border-orange transition-colors"
                  placeholder="Your company"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-white/80 mb-1.5">
                  How can we help?
                </label>
                <textarea
                  id="message"
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/15 text-white placeholder-white/40 focus:outline-none focus:border-orange transition-colors resize-none"
                  placeholder="Tell us about your project..."
                />
              </div>
              <button type="submit" disabled={submitted} className="btn-primary w-full justify-center disabled:opacity-70">
                {submitted ? (
                  <>
                    <CheckCircle size={18} />
                    Request Sent!
                  </>
                ) : (
                  <>
                    Send Request
                    <ArrowRight size={18} />
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
