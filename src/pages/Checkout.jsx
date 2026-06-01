import CheckoutForm from '../components/cart/CheckoutForm'
import CartSummary from '../components/cart/CartSummary'
import EmptyState from '../components/common/EmptyState'
import { useCart } from '../hooks/useCart'

function Checkout() {
  const { items, total } = useCart()

  return (
    <section className="page-section">
      <h1>Checkout</h1>
      {items.length ? (
        <div className="checkout-layout">
          <CheckoutForm />
          <CartSummary total={total} />
        </div>
      ) : (
        <EmptyState text="Add an item to your cart before checkout." />
      )}
    </section>
  )
}

export default Checkout
