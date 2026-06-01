import { useEffect, useState } from 'react'
import ProductCard from './ProductCard'

function ProductGrid({ initialLimit = 10, loadMoreCount = initialLimit, products }) {
  const [visibleCount, setVisibleCount] = useState(initialLimit)
  const visibleProducts = products.slice(0, visibleCount)
  const hasMoreProducts = visibleCount < products.length

  useEffect(() => {
    setVisibleCount(initialLimit)
  }, [initialLimit, products])

  return (
    <>
      <div className="product-grid">
        {visibleProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {hasMoreProducts ? (
        <div className="see-more-row">
          <button
            className="button secondary compact"
            type="button"
            onClick={() => setVisibleCount((count) => count + loadMoreCount)}
          >
            See More
          </button>
        </div>
      ) : null}
    </>
  )
}

export default ProductGrid
