import { useEffect, useMemo, useState } from 'react'
import { productService } from '../services/productService'
import { products as fallbackProducts } from '../utils/constants'
import { ProductContext } from './productContextValue'

function normalizeProduct(product, index) {
  const fallback = fallbackProducts[index % fallbackProducts.length]

  return {
    ...product,
    backendId: product._id,
    color: product.color || fallback.color,
    featured: product.featured || product.bestSeller,
    id: product._id,
    image: product.imageUrl || product.images?.[0] || fallback.image,
  }
}

export function ProductProvider({ children }) {
  const [backendProducts, setBackendProducts] = useState([])
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    let active = true

    productService
      .getAll()
      .then((result) => {
        if (active) setBackendProducts(result.map(normalizeProduct))
      })
      .catch((fetchError) => {
        if (active) setError(fetchError)
      })
      .finally(() => {
        if (active) setLoading(false)
      })

    return () => {
      active = false
    }
  }, [])

  const value = useMemo(
    () => ({
      error,
      loading,
      products: backendProducts.length ? backendProducts : fallbackProducts,
    }),
    [backendProducts, error, loading],
  )

  return (
    <ProductContext.Provider value={value}>
      {children}
    </ProductContext.Provider>
  )
}
