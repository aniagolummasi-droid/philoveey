import { useProducts } from '../../hooks/useProducts'
import ProductGrid from '../products/ProductGrid'

function BestSellers() {
  const { products } = useProducts()

  return (
    <section className="section-block products-section" id="shop">
      <h2 className="section-title">Best Sellers</h2>
      <ProductGrid initialLimit={5} loadMoreCount={5} products={products} />
    </section>
  )
}

export default BestSellers
