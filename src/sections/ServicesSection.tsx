import type { LucideIcon } from 'lucide-react'
import { Blocks, Globe, Palette, Smartphone } from 'lucide-react'
import FadeIn from '../components/FadeIn'
import SectionHeader from '../components/SectionHeader'

interface Service {
  title: string
  description: string
  icon: LucideIcon
}

const services: Service[] = [
  {
    title: 'App Development',
    description:
      'Native and cross-platform mobile apps built for performance, reliability, and a polished user experience.',
    icon: Smartphone,
  },
  {
    title: 'Web Development',
    description:
      'Fast, responsive websites and web applications engineered with modern frameworks and scalable architecture.',
    icon: Globe,
  },
  {
    title: 'UI/UX Design',
    description:
      'User-centered interfaces and design systems that look premium and make every interaction feel effortless.',
    icon: Palette,
  },
  {
    title: 'Custom Software Development',
    description:
      'Tailored software solutions designed around your workflows, integrations, and long-term business goals.',
    icon: Blocks,
  },
]

export default function ServicesSection() {
  return (
    <section id="services" className="section-pad bg-white">
      <div className="section-wrap">
        <FadeIn>
          <SectionHeader
            label="Our Services"
            title={<>What we <span className="text-accent">build</span> for you</>}
            description="From mobile apps to custom platforms — Famztech delivers end-to-end digital solutions crafted for your business."
          />
        </FadeIn>

        <div className="services-grid">
          {services.map((service, i) => {
            const Icon = service.icon
            return (
              <FadeIn key={service.title} delay={i * 0.08}>
                <article className="service-card card-hover">
                  <div className="service-icon-wrap">
                    <Icon size={22} className="service-icon" strokeWidth={1.75} />
                  </div>
                  <h3 className="service-title">{service.title}</h3>
                  <p className="service-desc">{service.description}</p>
                </article>
              </FadeIn>
            )
          })}
        </div>
      </div>
    </section>
  )
}
