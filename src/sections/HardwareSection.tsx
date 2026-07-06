import FadeIn from '../components/FadeIn'
import HardwareVisualization from '../components/HardwareVisualization'

export default function HardwareSection() {
  return (
    <section id="hardware" className="hardware-section">
      <div className="section-wrap hardware-inner">
        <FadeIn>
          <div className="hardware-copy">
            <p className="section-label">Infrastructure</p>
            <h2 className="hardware-title">
              Enterprise-grade <span className="text-accent">hardware</span> visualization
            </h2>
            <p className="hardware-desc">
              Modular systems, connected nodes, and intelligent architecture — engineered
              to power the platforms we build for you.
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.12}>
          <HardwareVisualization />
        </FadeIn>
      </div>
      <div className="hardware-fade" />
    </section>
  )
}
