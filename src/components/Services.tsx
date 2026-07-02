import { services } from '../data/services'
import Card from './Card'

function Services() {
  return (
    <section className="section" id="services" data-reveal>
      <div className="section-head">
        <h2>What we do</h2>
        <p>End-to-end AI and software development services.</p>
      </div>
      <ul className="grid">
        {services.map((service) => (
          <Card key={service.title}>
            <span className="card-icon" aria-hidden="true">
              {service.icon}
            </span>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </Card>
        ))}
      </ul>
    </section>
  )
}

export default Services
