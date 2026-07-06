import FadeIn from '../components/FadeIn'
import SectionHeader from '../components/SectionHeader'
import ParticleField from '../components/ParticleField'

export default function ImpactSection() {
  return (
    <section className="relative section-pad bg-black text-white overflow-hidden">
      <ParticleField count={20} />
      <div className="section-wrap relative text-center">
        <FadeIn>
          <SectionHeader
            align="center"
            dark
            label="Our Impact"
            title="Trusted at enterprise scale"
            description="Famztech has powered digital transformation for organizations across finance, healthcare, and enterprise SaaS."
            className="!mb-10"
          />
        </FadeIn>

        <FadeIn delay={0.15} direction="scale">
          <p className="heading-impact text-accent">$500B+</p>
          <p className="caption text-white/40 mt-3">Combined client enterprise value</p>
        </FadeIn>

        <FadeIn delay={0.25}>
          <p className="body text-white/45 max-w-prose mx-auto mt-10">
            Serving leading venture firms, Fortune 500 companies, and high-growth
            startups across 12 countries worldwide.
          </p>
        </FadeIn>
      </div>
    </section>
  )
}
