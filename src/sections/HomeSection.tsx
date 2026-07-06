import { ArrowRight } from 'lucide-react'
import FadeIn from '../components/FadeIn'
import AnimatedCodeEditor from '../components/AnimatedCodeEditor'

export default function HomeSection() {
  return (
    <section id="home" className="relative bg-white py-16 lg:py-24">
      <div className="section-wrap">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <FadeIn>
            <p className="section-label">Technology Solutions</p>
            <h1 className="heading-xl text-black mb-6 max-w-prose">
              We help teams build and scale{' '}
              <span className="text-accent">premium technology</span>
            </h1>
            <p className="body-lg text-muted max-w-prose mb-10">
              Famztech partners with startups and enterprises to deliver secure cloud
              platforms, AI tooling, and data infrastructure.
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <a href="#contact" className="btn-primary">
                Get Started
                <ArrowRight size={16} />
              </a>
              <a href="#products" className="btn-secondary">
                View Products
              </a>
            </div>
          </FadeIn>

          <FadeIn delay={0.12}>
            <div className="h-[360px] lg:h-[420px]">
              <AnimatedCodeEditor />
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
