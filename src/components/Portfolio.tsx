import { portfolio } from '../data/portfolio'
import TiltCard from './TiltCard'

function Portfolio() {
  return (
    <section className="section" id="portfolio" data-reveal>
      <div className="section-head">
        <h2>Portfolio</h2>
        <p>A selection of projects we have delivered for our clients.</p>
      </div>
      <ul className="grid">
        {portfolio.map((item) => (
          <TiltCard key={item.title} className="portfolio-card">
            <div className="portfolio-top">
              <span className="portfolio-client">{item.client}</span>
              <span className="portfolio-year">{item.year}</span>
            </div>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <ul className="tags">
              {item.tags.map((tag) => (
                <li key={tag} className="tag">
                  {tag}
                </li>
              ))}
            </ul>
          </TiltCard>
        ))}
      </ul>
    </section>
  )
}

export default Portfolio
