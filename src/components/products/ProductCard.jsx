import { FiShoppingCart } from 'react-icons/fi'
import { useCart } from '../../hooks/useCart'
import { formatCurrency } from '../../utils/formatCurrency'
import ImagePanel from '../home/ImagePanel'

function ProductCard({ product }) {
  const { addItem } = useCart()

  return (
    <article className="product-card">
      <a href={`#product/${product.id}`} aria-label={`View ${product.name}`}>
        <ImagePanel
          alt={`${product.name} in ${product.color}`}
          className="product-image"
          src={product.image}
        />
      </a>
      <div className="product-info">
        <div>
          <span>{product.category}</span>
          <h3>
            <a href={`#product/${product.id}`}>
              {product.name} ({product.color})
            </a>
          </h3>
          <p>{formatCurrency(product.price)}</p>
        </div>
        <button
          type="button"
          aria-label={`Add ${product.name} to cart`}
          onClick={() => addItem(product)}
        >
          <FiShoppingCart />
        </button>
      </div>
    </article>
  )
}

export default ProductCard
