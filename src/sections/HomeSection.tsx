import { ArrowRight } from 'lucide-react'
import FadeIn from '../components/FadeIn'
import AnimatedCodeEditor from '../components/AnimatedCodeEditor'

export default function HomeSection() {
  return (
    <section id="home" className="relative bg-white pt-32 pb-20 lg:pt-40">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <FadeIn>
            <h1 className="heading-xl text-black mb-6">
              We help teams{' '}
              <span className="text-accent">build</span> and{' '}
              <span className="text-accent">scale</span> premium technology
            </h1>
            <p className="text-lg text-muted max-w-lg mb-10 leading-relaxed">
              Famztech partners with startups and enterprises to deliver cloud platforms,
              AI security, and data solutions that accelerate growth and reduce risk.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#contact" className="btn-primary">
                Get Started
                <ArrowRight size={18} />
              </a>
              <a href="#products" className="btn-secondary">
                View Products
              </a>
            </div>
          </FadeIn>

          <FadeIn delay={0.15}>
            <div className="h-[400px] lg:h-[460px]">
              <AnimatedCodeEditor />
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
