import { products } from '../data/products'

function statusClass(status: string) {
  return 'badge badge-' + status.toLowerCase().replace(/\s+/g, '-')
}

function Products() {
  return (
    <section className="section" id="products">
      <div className="section-head">
        <h2>Our products</h2>
        <p>Apps and platforms built by FamzTech that you can use today.</p>
      </div>
      <ul className="grid">
        {products.map((product) => (
          <li key={product.name} className="card product-card">
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
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Products
