import { useState } from 'react'
import { motion } from 'framer-motion'
import { Check, ExternalLink } from 'lucide-react'
import SectionCanvas from '../components/SectionCanvas'
import ProductsScene3D from '../scenes/ProductsScene3D'

const productList = [
  {
    name: 'CloudX Platform',
    tag: 'Cloud Infrastructure',
    desc: 'Scalable cloud architecture with auto-healing, global CDN, and 99.99% uptime guarantee.',
    features: ['Multi-region deployment', 'Auto-scaling', 'Real-time monitoring'],
    price: 'From $49/mo',
  },
  {
    name: 'SecureAI Suite',
    tag: 'AI & Security',
    desc: 'Enterprise AI with built-in threat detection, compliance automation, and predictive analytics.',
    features: ['ML-powered insights', 'SOC 2 compliant', 'Zero-trust security'],
    price: 'From $99/mo',
  },
  {
    name: 'DataFlow Engine',
    tag: 'Data Analytics',
    desc: 'Real-time data pipelines with visual workflow builder and advanced visualization dashboards.',
    features: ['Stream processing', 'Custom dashboards', 'API integrations'],
    price: 'From $79/mo',
  },
]

export default function ProductsSection() {
  const [activeProduct, setActiveProduct] = useState(0)

  return (
    <section id="products" className="relative py-28 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-deep via-obsidian to-midnight" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-amber-500/5 rounded-full blur-[100px]" />

      <div className="relative max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-medium text-amber-400 tracking-wider uppercase">Our Products</span>
          <h2 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl font-bold mt-3 mb-4">
            Solutions That <span className="text-gradient-gold">Scale</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Premium tools engineered for performance, security, and seamless integration.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-4"
          >
            {productList.map((product, i) => (
              <motion.div
                key={product.name}
                onClick={() => setActiveProduct(i)}
                className={`glass rounded-2xl p-6 cursor-pointer transition-all duration-300 ${
                  activeProduct === i
                    ? 'bg-white/8 border-amber-500/30 glow-gold'
                    : 'hover:bg-white/5'
                }`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="flex items-start justify-between">
                  <div>
                    <span className="text-xs font-medium text-amber-400">{product.tag}</span>
                    <h3 className="text-xl font-semibold text-white mt-1">{product.name}</h3>
                  </div>
                  <span className="text-sm font-semibold text-slate-400">{product.price}</span>
                </div>
                <p className="text-sm text-slate-400 mt-2 leading-relaxed">{product.desc}</p>
                {activeProduct === i && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    className="mt-4 pt-4 border-t border-white/10"
                  >
                    <ul className="space-y-2 mb-4">
                      {product.features.map((f) => (
                        <li key={f} className="flex items-center gap-2 text-sm text-slate-300">
                          <Check size={14} className="text-amber-400" />
                          {f}
                        </li>
                      ))}
                    </ul>
                    <button className="inline-flex items-center gap-2 text-sm font-semibold text-amber-400 hover:text-amber-300 transition-colors">
                      View Details <ExternalLink size={14} />
                    </button>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative h-[450px] rounded-3xl overflow-hidden glass glow-gold"
          >
            <SectionCanvas cameraPosition={[0, 0, 7]} fov={50}>
              <ProductsScene3D />
            </SectionCanvas>
            <div className="absolute top-4 right-4 glass rounded-lg px-3 py-1.5 pointer-events-none">
              <p className="text-xs text-amber-400 font-medium">Interactive 3D</p>
            </div>
            <p className="absolute bottom-4 left-4 right-4 text-center text-xs text-slate-500 pointer-events-none">
              Hover over product cubes to interact
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
