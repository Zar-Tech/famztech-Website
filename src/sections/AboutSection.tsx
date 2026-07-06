import { motion } from 'framer-motion'
import { Check } from 'lucide-react'
import SectionCanvas from '../components/SectionCanvas'
import AboutScene3D from '../scenes/AboutScene3D'

const stats = [
  { value: '150+', label: 'Enterprise Clients' },
  { value: '12', label: 'Countries Served' },
  { value: '99.9%', label: 'Uptime SLA' },
  { value: '50+', label: 'Team Members' },
]

const highlights = [
  'World-class product design & engineering',
  '2-3x faster than internal teams',
  'No big upfront payment',
  'Flexible collaboration models',
]

const testimonials = [
  {
    quote: 'Famztech transformed our platform. The results exceeded every expectation we had.',
    author: 'Sarah Chen',
    role: 'CTO, NovaScale',
  },
  {
    quote: 'Best technology partner we\'ve ever worked with. Fast, precise, and genuinely creative.',
    author: 'Marcus Webb',
    role: 'Founder, DataPulse',
  },
  {
    quote: 'They delivered in weeks what our internal team couldn\'t in months. Incredible.',
    author: 'Elena Rodriguez',
    role: 'VP Product, CloudFirst',
  },
]

export default function AboutSection() {
  return (
    <section id="about" className="relative py-28 gradient-dark-mesh text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="section-label mb-3">About Us</p>
            <h2 className="heading-lg mb-6">
              We are a <span className="text-accent">technology</span> leader
            </h2>
            <p className="text-white/60 leading-relaxed mb-6 max-w-lg">
              Founded in 2018, Famztech has helped top startups and enterprises
              turn ambitious ideas into refined products that generate millions in revenue.
            </p>
            <p className="text-white/60 leading-relaxed mb-8 max-w-lg">
              Our team of engineers, designers, and strategists push boundaries
              and deliver solutions that exceed expectations.
            </p>

            <ul className="space-y-3 mb-10">
              {highlights.map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm text-white/80">
                  <span className="w-5 h-5 rounded-full bg-orange/20 flex items-center justify-center flex-shrink-0">
                    <Check size={12} className="text-orange" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>

            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="rounded-2xl border border-white/10 bg-white/5 p-5 hover:bg-white/8 transition-colors"
                >
                  <p className="text-3xl font-bold text-accent">{stat.value}</p>
                  <p className="text-xs text-white/50 mt-1">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative h-[420px] rounded-[2rem] overflow-hidden border border-white/10 bg-black/40"
          >
            <SectionCanvas cameraPosition={[0, 0, 5]}>
              <AboutScene3D />
            </SectionCanvas>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="section-label mb-3">Word on the street</p>
          <h3 className="font-[family-name:var(--font-display)] text-3xl font-bold mb-10">
            People love working with us
          </h3>

          <div className="flex gap-5 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide">
            {testimonials.map((t, i) => (
              <motion.div
                key={t.author}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex-shrink-0 w-[340px] snap-start rounded-2xl border border-white/10 bg-white/5 p-7 hover:bg-white/8 transition-colors card-lift"
              >
                <p className="text-white/80 leading-relaxed mb-6 text-[0.9375rem]">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div>
                  <p className="font-semibold text-white">{t.author}</p>
                  <p className="text-xs text-white/50 mt-0.5">{t.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
