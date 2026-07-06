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

  const deliveryFeeNotice = total < 25000
    ? 'Orders below N25,000 incur a delivery fee of N2,000 at checkout.'
    : 'You qualify for free delivery.'

  return (
    <aside className="cart-summary">
      <h2>Order Summary</h2>
      <p>Subtotal: {formatCurrency(total)}</p>
      <p className="form-message info">{deliveryFeeNotice}</p>
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
