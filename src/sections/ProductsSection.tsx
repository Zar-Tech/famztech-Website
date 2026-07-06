import FadeIn from '../components/FadeIn'
import AnimatedCodeEditor from '../components/AnimatedCodeEditor'
import AnimatedBars from '../components/AnimatedBars'

const products = [
  {
    name: 'CloudX Platform',
    tag: 'Cloud Infrastructure',
    desc: 'Real-time monitoring of cloud infrastructure health and performance across your entire organization.',
    features: [
      'Multi-region deployment with auto-scaling',
      '99.99% uptime SLA guarantee',
      'Real-time performance dashboards',
      'Industry-based infrastructure benchmarks',
    ],
    viz: 'code' as const,
  },
  {
    name: 'SecureAI Suite',
    tag: 'AI & Security',
    desc: 'Comprehensive assessment of AI-generated code with risk heat maps and compliance tracking.',
    features: [
      'GenAI code risk assessment',
      'Compliance automation (SOC 2, GDPR)',
      'Threat detection and zero-trust security',
      'Developer productivity analytics',
    ],
    viz: 'bars' as const,
  },
]

export default function ProductsSection() {
  return (
    <section id="products" className="py-28 bg-cream">
      <div className="max-w-7xl mx-auto px-6">
        <FadeIn>
          <p className="section-label mb-3">Our Products</p>
          <h2 className="heading-lg text-black mb-4">
            Built for teams that need to <span className="text-accent">move fast</span>
          </h2>
          <p className="text-muted max-w-2xl mb-16 leading-relaxed">
            By partnering with developers and technologists, Famztech delivers platforms
            that increase productivity while reducing operational and security risk.
          </p>
        </FadeIn>

        <div className="grid lg:grid-cols-2 gap-8">
          {products.map((product, i) => (
            <FadeIn key={product.name} delay={i * 0.12}>
              <article className="bg-white rounded-2xl border border-black/8 overflow-hidden card-hover">
                <div className="product-viz h-[200px]">
                  {product.viz === 'code' ? (
                    <AnimatedCodeEditor compact showChart />
                  ) : (
                    <AnimatedBars />
                  )}
                </div>
                <div className="p-8">
                  <span className="text-xs font-semibold text-orange uppercase tracking-wider">
                    {product.tag}
                  </span>
                  <h3 className="font-[family-name:var(--font-display)] text-2xl font-bold text-black mt-2 mb-3">
                    {product.name}
                  </h3>
                  <p className="text-muted text-sm leading-relaxed mb-5">{product.desc}</p>
                  <ul className="space-y-2 mb-6">
                    {product.features.map((f) => (
                      <li key={f} className="text-sm text-charcoal flex items-start gap-2">
                        <span className="text-orange mt-0.5">—</span>
                        {f}
                      </li>
                    ))}
                  </ul>
                  <a href="#contact" className="link-underline text-sm font-semibold text-orange">
                    Learn more
                  </a>
                </div>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
