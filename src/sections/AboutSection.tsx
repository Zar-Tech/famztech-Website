import FadeIn from '../components/FadeIn'
import SectionHeader from '../components/SectionHeader'

const features = [
  {
    title: 'Improved Code Quality',
    desc: 'Determine if code is ready to scale and estimate investment needed to reduce technical debt.',
  },
  {
    title: 'Better Use of GenAI',
    desc: 'Improve developer productivity from AI tools while staying compliant with regulations.',
  },
  {
    title: 'Mitigated IP Risk',
    desc: 'Identify licensing obligations from third-party and open-source dependencies.',
  },
  {
    title: 'Heightened Security',
    desc: 'Find vulnerabilities in code and infrastructure before they become breaches.',
  },
  {
    title: 'Enhanced Process Quality',
    desc: 'Evaluate development workflows and improve engineering processes.',
  },
  {
    title: 'More Effective Teams',
    desc: 'Recognize top performers and align ownership across critical systems.',
  },
]

export default function AboutSection() {
  return (
    <section id="about" className="section-pad bg-white">
      <div className="section-wrap">
        <FadeIn>
          <SectionHeader
            label="About Us"
            title={<>What Famztech can do for <span className="text-accent">you</span></>}
            description="End-to-end capabilities that help technology teams ship faster, stay secure, and scale with confidence."
          />
        </FadeIn>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((feature, i) => (
            <FadeIn key={feature.title} delay={i * 0.06}>
              <div className="feature-card card-hover">
                <h3 className="heading-md">{feature.title}</h3>
                <p className="body-sm">{feature.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
