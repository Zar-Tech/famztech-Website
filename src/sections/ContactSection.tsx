import { useState, type FormEvent } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, CheckCircle, Mail, MapPin, Phone } from 'lucide-react'
import SectionCanvas from '../components/SectionCanvas'
import ContactScene3D from '../scenes/ContactScene3D'

const contactInfo = [
  { icon: Mail, label: 'Email', value: 'hello@famztech.com' },
  { icon: Phone, label: 'Phone', value: '+1 (555) 123-4567' },
  { icon: MapPin, label: 'Office', value: 'San Francisco, CA' },
]

const helpOptions = [
  'Take your product to the next level',
  'Build a new platform from scratch',
  'Scale existing infrastructure',
  'Launch fast',
]

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false)
  const [selectedHelp, setSelectedHelp] = useState(0)
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 4000)
    setFormData({ name: '', email: '', message: '' })
  }

  return (
    <section id="contact" className="relative py-28 bg-cream overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="section-label mb-3">Contact</p>
            <h2 className="heading-lg text-black mb-4">
              We&apos;ll reply in <span className="text-accent">24 hrs</span>
            </h2>
            <p className="text-muted leading-relaxed mb-8 max-w-md">
              Limited slots left for new projects. Tell us what you need and
              let&apos;s build something extraordinary together.
            </p>

            <div className="relative h-[260px] rounded-[2rem] overflow-hidden bg-white border border-black/5 mb-8 orange-glow">
              <SectionCanvas cameraPosition={[0, 0, 4]}>
                <ContactScene3D />
              </SectionCanvas>
            </div>

            <div className="space-y-3">
              {contactInfo.map((info) => (
                <div
                  key={info.label}
                  className="flex items-center gap-4 p-4 rounded-2xl bg-white border border-black/5 hover:border-orange/30 transition-colors"
                >
                  <div className="w-10 h-10 rounded-full bg-orange/10 flex items-center justify-center">
                    <info.icon size={18} className="text-orange" />
                  </div>
                  <div>
                    <p className="text-xs text-muted">{info.label}</p>
                    <p className="text-sm font-semibold text-black">{info.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
          >
            <div className="bg-white rounded-[2rem] border border-black/5 p-8 shadow-sm">
              <h3 className="font-[family-name:var(--font-display)] text-xl font-bold text-black mb-6">
                What do you need help with?
              </h3>

              <div className="grid grid-cols-2 gap-3 mb-8">
                {helpOptions.map((option, i) => (
                  <button
                    key={option}
                    type="button"
                    onClick={() => setSelectedHelp(i)}
                    className={`text-left text-sm p-4 rounded-xl border transition-all ${
                      selectedHelp === i
                        ? 'border-orange bg-orange/5 text-black font-medium'
                        : 'border-black/8 text-muted hover:border-black/15'
                    }`}
                  >
                    {option}
                  </button>
                ))}
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-charcoal mb-1.5">
                    Full Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-cream border border-black/8 text-black placeholder-muted focus:outline-none focus:border-orange focus:ring-2 focus:ring-orange/15 transition-all"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-charcoal mb-1.5">
                    Email Address
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-cream border border-black/8 text-black placeholder-muted focus:outline-none focus:border-orange focus:ring-2 focus:ring-orange/15 transition-all"
                    placeholder="john@company.com"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-charcoal mb-1.5">
                    Message
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-cream border border-black/8 text-black placeholder-muted focus:outline-none focus:border-orange focus:ring-2 focus:ring-orange/15 transition-all resize-none"
                    placeholder="Tell us about your project..."
                  />
                </div>
                <button
                  type="submit"
                  disabled={submitted}
                  className="btn-primary w-full justify-center disabled:opacity-70"
                >
                  {submitted ? (
                    <>
                      <CheckCircle size={18} />
                      Message Sent!
                    </>
                  ) : (
                    <>
                      Send Message
                      <ArrowRight size={18} />
                    </>
                  )}
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
