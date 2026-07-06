import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import RotatingBadge from '../components/RotatingBadge'
import SectionCanvas from '../components/SectionCanvas'
import HomeScene3D from '../scenes/HomeScene3D'

const avatars = ['A', 'B', 'C', 'D']

export default function HomeSection() {
  return (
    <section id="home" className="relative min-h-screen overflow-hidden gradient-orange-mesh">
      <div className="relative max-w-7xl mx-auto px-6 pt-32 pb-20 lg:pt-40">
        <div className="grid lg:grid-cols-2 gap-16 items-center min-h-[calc(100vh-8rem)]">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <RotatingBadge />

            <h1 className="heading-xl text-black mt-8 mb-6">
              We build
              <br />
              <span className="text-accent">technology</span>
              <br />
              people trust
            </h1>

            <p className="text-lg text-muted max-w-md mb-10 leading-relaxed">
              Famztech crafts premium digital products and enterprise solutions
              that delight users and drive real business results.
            </p>

            <div className="flex flex-wrap items-center gap-4 mb-10">
              <a href="#contact" className="btn-primary group">
                Start a Project
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="#products" className="btn-secondary">
                View Products
              </a>
            </div>

            <div className="flex items-center gap-4">
              <div className="flex -space-x-2">
                {avatars.map((a, i) => (
                  <div
                    key={a}
                    className="w-9 h-9 rounded-full border-2 border-white flex items-center justify-center text-xs font-bold text-white"
                    style={{ background: `hsl(${20 + i * 15}, 90%, 55%)`, zIndex: 4 - i }}
                  >
                    {a}
                  </div>
                ))}
              </div>
              <p className="text-sm text-muted">
                <span className="font-semibold text-black">150+</span> teams already trust us
              </p>
            </div>

            <p className="mt-6 text-sm text-orange font-medium italic">
              * We also get booked fast 🔥
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative h-[420px] lg:h-[520px] rounded-[2rem] overflow-hidden bg-white border border-black/5 orange-glow"
          >
            <SectionCanvas cameraPosition={[0, 0, 4.5]}>
              <HomeScene3D />
            </SectionCanvas>
          </motion.div>
        </div>
      </div>

      <div className="border-y border-black/5 bg-white py-5 overflow-hidden">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...Array(2)].map((_, set) => (
            <div key={set} className="flex items-center gap-12 px-6">
              {['CloudX', 'SecureAI', 'DataFlow', 'NovaPay', 'SyncHub', 'EdgeCore'].map((name) => (
                <span key={`${set}-${name}`} className="text-sm font-semibold text-black/30 uppercase tracking-widest">
                  {name}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
