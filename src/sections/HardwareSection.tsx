import FadeIn from '../components/FadeIn'
import HardwareVisualization from '../components/HardwareVisualization'

export default function HardwareSection() {
  return (
    <section id="hardware" className="hardware-section" aria-label="Tech hardware visualization">
      <FadeIn>
        <HardwareVisualization />
      </FadeIn>
    </section>
  )
}
