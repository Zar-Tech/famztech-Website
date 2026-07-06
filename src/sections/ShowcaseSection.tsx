import FadeIn from '../components/FadeIn'
import AnimatedOrb from '../components/AnimatedOrb'

const highlights = [
  'Cloud Infrastructure',
  'AI & Security',
  'Data Analytics',
  'Enterprise Platforms',
]

export default function ShowcaseSection() {
  return (
    <section id="showcase" className="showcase-section">
      <div className="showcase-edge showcase-edge-left" />
      <div className="showcase-edge showcase-edge-right" />

      <div className="section-wrap showcase-inner">
        <FadeIn>
          <div className="showcase-copy">
            <p className="section-label section-label-dark">Innovation at Scale</p>
            <h2 className="showcase-title">
              Engineering the future of{' '}
              <span className="showcase-accent">digital products</span>
            </h2>
            <p className="showcase-subtitle">
              A living visualization of the platforms we build — secure, intelligent,
              and designed to perform at enterprise scale.
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.15}>
          <div className="showcase-orb-wrap">
            <AnimatedOrb />
          </div>
        </FadeIn>

        <FadeIn delay={0.25}>
          <ul className="showcase-tags">
            {highlights.map((tag) => (
              <li key={tag}>{tag}</li>
            ))}
          </ul>
        </FadeIn>
      </div>
    </section>
  )
}
