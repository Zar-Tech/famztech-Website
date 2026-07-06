import FadeIn from '../components/FadeIn'
import SectionHeader from '../components/SectionHeader'
import ProductCard from '../components/ProductCard'
import { products } from '../data/products'

export default function ProductsSection() {
  const gridClass =
    products.length >= 3
      ? 'product-grid product-grid-3'
      : 'product-grid product-grid-2'

  return (
    <section id="products" className="section-pad bg-cream">
      <div className="section-wrap">
        <FadeIn>
          <SectionHeader
            label="Our Products"
            title={<>Built for teams that need to <span className="text-accent">move fast</span></>}
            description="Explore the Famztech product suite — platforms that increase productivity while reducing operational and security risk."
          />
        </FadeIn>

        <div className={gridClass}>
          {products.map((product, i) => (
            <FadeIn key={product.id} delay={i * 0.08}>
              <ProductCard product={product} />
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
