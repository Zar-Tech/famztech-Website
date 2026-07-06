import { ArrowUpRight } from 'lucide-react'
import type { Product } from '../data/products'
import ProductViz from './ProductViz'

interface ProductCardProps {
  product: Product
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <article className="product-card card-hover">
      <div className="product-viz h-[180px]">
        <ProductViz type={product.viz} />
      </div>
      <div className="product-card-body">
        <div className="product-card-top">
          <p className="caption text-orange">{product.tag}</p>
          {product.price && (
            <span className="product-price">{product.price}</span>
          )}
        </div>
        <h3 className="product-title mt-2 mb-3">{product.name}</h3>
        <p className="body text-muted mb-5">{product.description}</p>
        <ul className="feature-list mb-6">
          {product.features.map((feature) => (
            <li key={feature}>{feature}</li>
          ))}
        </ul>
        <a
          href={product.ctaHref ?? '#contact'}
          className="product-cta link-underline"
          {...(product.external
            ? { target: '_blank', rel: 'noopener noreferrer' }
            : {})}
        >
          {product.ctaLabel ?? 'Learn more'}
          <ArrowUpRight size={14} />
        </a>
      </div>
    </article>
  )
}
