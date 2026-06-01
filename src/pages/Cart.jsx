import CartItem from '../components/cart/CartItem'
import CartSummary from '../components/cart/CartSummary'
import EmptyState from '../components/common/EmptyState'
import { useCart } from '../hooks/useCart'

function Cart() {
  const { items, total } = useCart()

  return (
    <section className="page-section">
      <h1>Cart</h1>
      {items.length ? (
        <div className="cart-layout">
          <div>
            {items.map((item) => (
              <CartItem key={item.id} item={item} />
            ))}
          </div>
          <CartSummary total={total} />
        </div>
      ) : (
        <EmptyState text="Your selected footwear will appear here." />
      )}
    </section>
  )
}

export default Cart
