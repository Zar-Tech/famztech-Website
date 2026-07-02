import { useMemo, useState } from 'react'
import { products } from '../data/products'
import Card from './Card'

function statusClass(status: string) {
  return 'badge badge-' + status.toLowerCase().replace(/\s+/g, '-')
}

function Products() {
  const categories = useMemo(
    () => ['All', ...Array.from(new Set(products.map((p) => p.category)))],
    [],
  )
  const [active, setActive] = useState('All')

  const visible =
    active === 'All'
      ? products
      : products.filter((product) => product.category === active)

  return (
    <section className="section" id="products" data-reveal>
      <div className="section-head">
        <h2>Our products</h2>
        <p>Apps and platforms built by FamzTech that you can use today.</p>
      </div>

      <div
        className="filters"
        role="group"
        aria-label="Filter products by category"
      >
        {categories.map((category) => (
          <button
            key={category}
            type="button"
            className={'filter-chip' + (active === category ? ' active' : '')}
            aria-pressed={active === category}
            onClick={() => setActive(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <ul className="grid">
        {visible.map((product) => (
          <Card key={active + product.name} className="product-card">
            <div className="product-top">
              <span className="card-icon" aria-hidden="true">
                {product.icon}
              </span>
              <span className={statusClass(product.status)}>
                {product.status}
              </span>
            </div>
            <h3>{product.name}</h3>
            <p className="product-tagline">{product.tagline}</p>
            <p>{product.description}</p>
            <div className="product-foot">
              <span className="tag">{product.category}</span>
              {product.url && (
                <a
                  className="product-link"
                  href={product.url}
                  target="_blank"
                  rel="noreferrer"
                >
                  Learn more →
                </a>
              )}
            </div>
          </Card>
        ))}
      </ul>
    </section>
  )
}

export default Products
