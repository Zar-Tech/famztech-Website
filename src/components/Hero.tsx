import HeroCanvas from './HeroCanvas'

function Hero() {
  return (
    <section className="hero" id="top" data-reveal>
      <HeroCanvas />
      <div className="hero-content">
        <span className="eyebrow">AI &amp; Software Development</span>
        <h1>
          We build <span className="accent">intelligent software</span> for
          ambitious teams.
        </h1>
        <p>
          FamzTech designs, builds and ships AI-powered products and custom
          software — from first prototype to production scale.
        </p>
        <div className="hero-actions">
          <a className="btn btn-primary" href="#products">
            Explore our products
          </a>
          <a className="btn btn-ghost" href="#contact">
            Start a project
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero
