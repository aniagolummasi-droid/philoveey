import { useEffect, useMemo, useState } from 'react'
import ProductFilter from '../components/products/ProductFilter'
import ProductGrid from '../components/products/ProductGrid'
import { useProducts } from '../hooks/useProducts'

function Shop({ initialCategory = '' }) {
  const { products } = useProducts()
  const [selectedCategory, setSelectedCategory] = useState(initialCategory)
  const filteredProducts = useMemo(() => {
    if (!selectedCategory) return products

    return products.filter(
      (product) => product.category?.toLowerCase() === selectedCategory.toLowerCase(),
    )
  }, [products, selectedCategory])

  useEffect(() => {
    setSelectedCategory(initialCategory)
  }, [initialCategory])

  const handleCategoryChange = (category) => {
    setSelectedCategory(category)
    window.location.hash = category ? `shop?category=${encodeURIComponent(category)}` : 'shop'
  }

  return (
    <section className="page-section">
      <h1>Shop</h1>
      <ProductFilter
        selectedCategory={selectedCategory}
        onCategoryChange={handleCategoryChange}
      />
      <ProductGrid initialLimit={10} loadMoreCount={5} products={filteredProducts} />
    </section>
  )
}

export default Shop
