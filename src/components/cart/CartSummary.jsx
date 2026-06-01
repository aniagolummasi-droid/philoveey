import { formatCurrency } from '../../utils/formatCurrency'
import { useAuth } from '../../hooks/useAuth'

function CartSummary({ total = 0 }) {
  const { user } = useAuth()

  const handleCheckout = () => {
    if (!user?.token) {
      localStorage.setItem('philoveey-post-login-route', '#checkout')
      window.location.hash = '#register'
    }
  }

  return (
    <aside className="cart-summary">
      <h2>Order Summary</h2>
      <p>Subtotal: {formatCurrency(total)}</p>
      <p>Delivery calculated after confirmation.</p>
      <a
        className="button primary compact"
        href={user?.token ? '#checkout' : '#register'}
        onClick={handleCheckout}
      >
        Checkout
      </a>
    </aside>
  )
}

export default CartSummary
