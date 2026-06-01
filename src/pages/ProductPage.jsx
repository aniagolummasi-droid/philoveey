import { useCart } from '../hooks/useCart'
import { formatCurrency } from '../utils/formatCurrency'
import ProductDetails from '../components/products/ProductDetails'
import { useProducts } from '../hooks/useProducts'

function ProductPage({ productId }) {
  const { addItem } = useCart()
  const { products } = useProducts()
  const product = products.find((item) => item.id === productId)

  if (!product) {
    return (
      <section className="page-section">
        <h1>Product not found</h1>
        <a className="button primary compact" href="#shop">
          Back to Shop
        </a>
      </section>
    )
  }

  return (
    <section className="page-section">
      <ProductDetails product={product} />
      <p className="product-detail-price">{formatCurrency(product.price)}</p>
      <button className="button primary compact" type="button" onClick={() => addItem(product)}>
        Add to Cart
      </button>
    </section>
  )
}

export default ProductPage
