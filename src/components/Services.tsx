import { services } from '../data/services'

function Services() {
  return (
    <section className="section" id="services">
      <div className="section-head">
        <h2>What we do</h2>
        <p>End-to-end AI and software development services.</p>
      </div>
      <ul className="grid">
        {services.map((service) => (
          <li key={service.title} className="card">
            <span className="card-icon" aria-hidden="true">
              {service.icon}
            </span>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Services
