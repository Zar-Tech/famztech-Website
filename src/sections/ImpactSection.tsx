import FadeIn from '../components/FadeIn'
import ParticleField from '../components/ParticleField'

export default function ImpactSection() {
  return (
    <section className="relative py-24 bg-black text-white overflow-hidden">
      <ParticleField count={28} />
      <div className="relative max-w-7xl mx-auto px-6 text-center">
        <FadeIn>
          <p className="section-label mb-6 text-orange">Our Impact</p>
          <p className="text-lg text-white/60 max-w-2xl mx-auto mb-12 leading-relaxed">
            Famztech has powered digital transformation for organizations with a combined
            valuation exceeding $500 billion across finance, healthcare, and enterprise SaaS.
          </p>
        </FadeIn>
        <FadeIn delay={0.2} direction="scale">
          <p className="heading-impact text-accent mb-4">500B+</p>
          <p className="text-white/50 text-sm uppercase tracking-widest">
            Combined client enterprise value
          </p>
        </FadeIn>
        <FadeIn delay={0.35}>
          <p className="mt-12 text-white/50 max-w-xl mx-auto leading-relaxed">
            In 2025, Famztech served leading venture firms, Fortune 500 enterprises,
            and high-growth startups across 12 countries worldwide.
          </p>
        </FadeIn>
      </div>
    </section>
  )
}
