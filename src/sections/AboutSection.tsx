import { motion } from 'framer-motion'
import { Target, Users, Award, TrendingUp } from 'lucide-react'
import SectionCanvas from '../components/SectionCanvas'
import AboutScene3D from '../scenes/AboutScene3D'

const stats = [
  { value: '150+', label: 'Enterprise Clients' },
  { value: '12', label: 'Countries Served' },
  { value: '99.9%', label: 'Uptime SLA' },
  { value: '50+', label: 'Team Members' },
]

const values = [
  { icon: Target, title: 'Mission-Driven', desc: 'Empowering businesses with cutting-edge technology that creates real impact.' },
  { icon: Users, title: 'People First', desc: 'Our diverse team of experts brings passion and innovation to every project.' },
  { icon: Award, title: 'Excellence', desc: 'We hold ourselves to the highest standards in design, code, and service.' },
  { icon: TrendingUp, title: 'Growth Partner', desc: 'We grow alongside our clients, adapting solutions as needs evolve.' },
]

export default function AboutSection() {
  return (
    <section id="about" className="relative py-28 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-midnight via-obsidian to-slate-deep" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-[120px]" />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="order-2 lg:order-1 relative h-[400px] rounded-3xl overflow-hidden glass glow-blue"
          >
            <SectionCanvas cameraPosition={[0, 0, 6]}>
              <AboutScene3D />
            </SectionCanvas>
            <div className="absolute bottom-4 left-4 glass rounded-xl px-4 py-2 pointer-events-none">
              <p className="text-xs text-slate-500">Our Network</p>
              <p className="text-sm font-medium text-white">Connected Team Ecosystem</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="order-1 lg:order-2 section-content"
          >
            <span className="text-sm font-medium text-purple-400 tracking-wider uppercase">About Us</span>
            <h2 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl font-bold mt-3 mb-6">
              Pioneering <span className="text-gradient">Innovation</span>
            </h2>
            <p className="text-slate-400 leading-relaxed mb-6">
              Founded in 2018, Famztech has grown from a small startup into a global
              technology leader. We believe in the power of technology to transform
              industries and improve lives.
            </p>
            <p className="text-slate-400 leading-relaxed mb-8">
              Our team of engineers, designers, and strategists work collaboratively
              to deliver solutions that exceed expectations and drive measurable results.
            </p>

            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="glass rounded-xl p-4 text-center hover:bg-white/5 transition-colors"
                >
                  <p className="text-2xl font-bold text-gradient">{stat.value}</p>
                  <p className="text-xs text-slate-500 mt-1">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h3 className="font-[family-name:var(--font-display)] text-2xl font-bold text-center mb-10">
            Our Core Values
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass rounded-2xl p-6 hover:bg-white/5 transition-all duration-300 group cursor-default"
                whileHover={{ y: -4 }}
              >
                <div className="w-10 h-10 rounded-lg bg-purple-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <v.icon size={20} className="text-purple-400" />
                </div>
                <h4 className="font-semibold text-white mb-2">{v.title}</h4>
                <p className="text-sm text-slate-400 leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
