import { motion } from 'framer-motion'
import { ArrowRight, Sparkles, Shield, Zap } from 'lucide-react'
import SectionCanvas from '../components/SectionCanvas'
import HomeScene3D from '../scenes/HomeScene3D'

const features = [
  { icon: Zap, label: 'Lightning Fast', desc: 'Optimized performance at scale' },
  { icon: Shield, label: 'Enterprise Secure', desc: 'Bank-grade protection' },
  { icon: Sparkles, label: 'AI-Powered', desc: 'Intelligent automation' },
]

export default function HomeSection() {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-midnight via-obsidian to-slate-deep" />
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px] animate-pulse-glow" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-cyan-400/10 rounded-full blur-[120px] animate-pulse-glow" />

      <div className="relative w-full max-w-7xl mx-auto px-6 pt-28 pb-16 grid lg:grid-cols-2 gap-12 items-center min-h-screen">
        <div className="section-content">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-xs font-medium text-cyan-400 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
              Next-Gen Technology Solutions
            </span>

            <h1 className="font-[family-name:var(--font-display)] text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] mb-6">
              Build the
              <br />
              <span className="text-gradient">Future</span> with
              <br />
              Famztech
            </h1>

            <p className="text-lg text-slate-400 max-w-lg mb-8 leading-relaxed">
              We craft premium digital experiences and enterprise solutions
              that transform businesses and accelerate innovation.
            </p>

            <div className="flex flex-wrap gap-4 mb-12">
              <a
                href="#products"
                className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 text-white font-semibold hover:shadow-xl hover:shadow-blue-500/20 transition-all duration-300 hover:scale-105"
              >
                Explore Products
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#about"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full glass text-white font-semibold hover:bg-white/10 transition-all duration-300"
              >
                Learn More
              </a>
            </div>

            <div className="grid grid-cols-3 gap-4">
              {features.map((f, i) => (
                <motion.div
                  key={f.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + i * 0.15 }}
                  className="glass rounded-xl p-4 hover:bg-white/5 transition-colors cursor-default group"
                >
                  <f.icon size={20} className="text-blue-400 mb-2 group-hover:scale-110 transition-transform" />
                  <p className="text-sm font-semibold text-white">{f.label}</p>
                  <p className="text-xs text-slate-500 mt-0.5">{f.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="relative h-[400px] lg:h-[550px] rounded-3xl overflow-hidden glass glow-blue"
        >
          <SectionCanvas cameraPosition={[0, 0, 5]}>
            <HomeScene3D />
          </SectionCanvas>
          <div className="absolute bottom-4 left-4 right-4 glass rounded-xl px-4 py-3 flex items-center justify-between pointer-events-none">
            <div>
              <p className="text-xs text-slate-500">Live Preview</p>
              <p className="text-sm font-medium text-white">Tech Core Visualization</p>
            </div>
            <div className="flex gap-1">
              {[...Array(3)].map((_, i) => (
                <div key={i} className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" style={{ animationDelay: `${i * 0.3}s` }} />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
