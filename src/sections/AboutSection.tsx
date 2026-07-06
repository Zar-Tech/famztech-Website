import FadeIn from '../components/FadeIn'

const features = [
  {
    title: 'Improved Code Quality',
    desc: 'Better determine if code is strong enough to scale and how much investment is needed to reduce technical debt.',
  },
  {
    title: 'Better Use of GenAI',
    desc: 'Understand and improve developer productivity from AI tools while staying compliant with regulations.',
  },
  {
    title: 'Mitigated IP Risk',
    desc: 'Assess if code carries licensing obligations from third-party or open-source dependencies.',
  },
  {
    title: 'Heightened Security',
    desc: 'Identify vulnerabilities in code and infrastructure to prevent breaches and data exposure.',
  },
  {
    title: 'Enhanced Process Quality',
    desc: 'Evaluate development workflows and pinpoint where engineering processes can improve.',
  },
  {
    title: 'More Effective Teams',
    desc: 'Recognize top performers and decide who should maintain and evolve critical systems.',
  },
  {
    title: 'Lowered Cloud Costs',
    desc: 'Compare cloud spend across providers and find opportunities to reduce infrastructure expenses.',
  },
  {
    title: 'Faster Time to Market',
    desc: 'Ship products 2–3x faster with dedicated pods and proven delivery frameworks.',
  },
]

export default function AboutSection() {
  return (
    <section id="about" className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <FadeIn>
          <p className="section-label mb-3">About Us</p>
          <h2 className="heading-lg text-black mb-16">
            What Famztech can do for <span className="text-accent">you</span>
          </h2>
        </FadeIn>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 stagger-children">
          {features.map((feature, i) => (
            <FadeIn key={feature.title} delay={i * 0.08}>
              <div className="feature-card card-hover h-full">
                <h3 className="font-semibold text-black mb-2 text-[0.9375rem]">{feature.title}</h3>
                <p className="text-sm text-muted leading-relaxed">{feature.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
