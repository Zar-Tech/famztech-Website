import FadeIn from '../components/FadeIn'
import SectionHeader from '../components/SectionHeader'
import AnimatedCodeEditor from '../components/AnimatedCodeEditor'
import AnimatedBars from '../components/AnimatedBars'

const products = [
  {
    name: 'CloudX Platform',
    tag: 'Cloud Infrastructure',
    desc: 'Monitor cloud health and performance across your entire organization in real time.',
    features: [
      'Multi-region auto-scaling',
      '99.99% uptime SLA',
      'Performance dashboards',
      'Infrastructure benchmarks',
    ],
    viz: 'code' as const,
  },
  {
    name: 'SecureAI Suite',
    tag: 'AI & Security',
    desc: 'Assess AI-generated code risk with heat maps, compliance tracking, and threat detection.',
    features: [
      'GenAI risk assessment',
      'SOC 2 & GDPR compliance',
      'Zero-trust security',
      'Developer analytics',
    ],
    viz: 'bars' as const,
  },
]

export default function ProductsSection() {
  return (
    <section id="products" className="section-pad bg-cream">
      <div className="section-wrap">
        <FadeIn>
          <SectionHeader
            label="Our Products"
            title={<>Built for teams that need to <span className="text-accent">move fast</span></>}
            description="Platforms that increase productivity while reducing operational and security risk."
          />
        </FadeIn>

        <div className="grid lg:grid-cols-2 gap-6">
          {products.map((product, i) => (
            <FadeIn key={product.name} delay={i * 0.1}>
              <article className="product-card card-hover">
                <div className="product-viz h-[180px]">
                  {product.viz === 'code' ? (
                    <AnimatedCodeEditor compact showChart />
                  ) : (
                    <AnimatedBars />
                  )}
                </div>
                <div className="product-card-body">
                  <p className="caption text-orange">{product.tag}</p>
                  <h3 className="product-title mt-2 mb-3">{product.name}</h3>
                  <p className="body text-muted mb-5">{product.desc}</p>
                  <ul className="feature-list mb-6">
                    {product.features.map((f) => (
                      <li key={f}>{f}</li>
                    ))}
                  </ul>
                  <a href="#contact" className="link-underline body-sm font-semibold text-orange">
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
