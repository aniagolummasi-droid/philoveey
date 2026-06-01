import { FiMinus, FiPlus, FiTrash2 } from 'react-icons/fi'
import { useCart } from '../../hooks/useCart'
import { formatCurrency } from '../../utils/formatCurrency'

function CartItem({ item }) {
  const { removeItem, updateItemQuantity } = useCart()

  return (
    <article className="cart-item">
      <img src={item.image} alt={`${item.name} in ${item.color}`} />
      <div>
        <h3>{item.name}</h3>
        <p>
          {item.color} / {formatCurrency(item.price)}
        </p>
        <div className="quantity-control">
          <button
            type="button"
            aria-label={`Reduce ${item.name} quantity`}
            onClick={() => updateItemQuantity(item.id, item.quantity - 1)}
          >
            <FiMinus />
          </button>
          <span>{item.quantity}</span>
          <button
            type="button"
            aria-label={`Increase ${item.name} quantity`}
            onClick={() => updateItemQuantity(item.id, item.quantity + 1)}
          >
            <FiPlus />
          </button>
        </div>
      </div>
      <strong>{formatCurrency(item.price * item.quantity)}</strong>
      <button
        className="remove-item"
        type="button"
        aria-label={`Remove ${item.name}`}
        onClick={() => removeItem(item.id)}
      >
        <FiTrash2 />
      </button>
    </article>
  )
}

export default CartItem
