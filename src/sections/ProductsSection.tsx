import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import SectionCanvas from '../components/SectionCanvas'
import ProductsScene3D from '../scenes/ProductsScene3D'

const products = [
  {
    name: 'CloudX Platform',
    tag: 'Cloud Infrastructure',
    desc: 'Scalable cloud architecture with auto-healing and 99.99% uptime.',
    gradient: 'from-orange to-amber',
    span: 'lg:col-span-2 lg:row-span-2',
    tall: true,
  },
  {
    name: 'SecureAI Suite',
    tag: 'AI & Security',
    desc: 'Enterprise AI with threat detection and predictive analytics.',
    gradient: 'from-black to-charcoal',
    span: '',
    tall: false,
  },
  {
    name: 'DataFlow Engine',
    tag: 'Data Analytics',
    desc: 'Real-time pipelines with visual workflow builder.',
    gradient: 'from-orange-deep to-orange',
    span: '',
    tall: false,
  },
  {
    name: 'NovaPay',
    tag: 'FinTech',
    desc: 'Secure payment infrastructure for modern businesses.',
    gradient: 'from-charcoal to-dark',
    span: 'lg:col-span-2',
    tall: false,
  },
]

export default function ProductsSection() {
  return (
    <section id="products" className="relative py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <p className="section-label mb-3">Our Products</p>
          <h2 className="heading-lg text-black max-w-2xl">
            Solutions that <span className="text-accent">scale</span> with you
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-5 auto-rows-[220px]">
          {products.map((product, i) => (
            <motion.article
              key={product.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className={`card-lift relative rounded-3xl overflow-hidden cursor-pointer group ${product.span} ${product.tall ? 'min-h-[460px]' : ''}`}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${product.gradient}`} />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-400" />

              {product.tall && (
                <div className="absolute inset-0 opacity-90">
                  <SectionCanvas cameraPosition={[0, 0, 5]} fov={40}>
                    <ProductsScene3D />
                  </SectionCanvas>
                </div>
              )}

              <div className="relative z-10 h-full flex flex-col justify-end p-7">
                <span className="text-xs font-semibold text-white/70 uppercase tracking-wider mb-2">
                  {product.tag}
                </span>
                <h3 className="font-[family-name:var(--font-display)] text-2xl font-bold text-white mb-2">
                  {product.name}
                </h3>
                <p className="text-sm text-white/75 max-w-xs leading-relaxed">{product.desc}</p>
                <div className="mt-4 flex items-center gap-1 text-sm font-semibold text-white opacity-0 group-hover:opacity-100 transition-opacity">
                  View product <ArrowUpRight size={16} />
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
