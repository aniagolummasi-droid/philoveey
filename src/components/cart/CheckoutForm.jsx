import { useState } from 'react'
import { useAuth } from '../../hooks/useAuth'
import { useCart } from '../../hooks/useCart'
import { orderService } from '../../services/orderService'
import { paymentService } from '../../services/paymentService'
import Input from '../common/Input'

function CheckoutForm() {
  const { clearCart, items } = useCart()
  const { user } = useAuth()
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState('')

  const handleSubmit = async (event) => {
    event.preventDefault()
    setError('')
    setSuccess('')

    if (!user?.token) {
      localStorage.setItem('philoveey-post-login-route', '#checkout')
      setError('Please create an account before placing your order. Your cart will stay saved.')
      window.location.hash = '#register'
      return
    }

    const orderItems = items.map((item) => ({
      product: item.backendId || item._id || item.id,
      quantity: item.quantity,
    }))
    const hasDemoItems = orderItems.some(
      (item) => !/^[a-f\d]{24}$/i.test(item.product),
    )

    if (hasDemoItems) {
      setError('Please add products loaded from the backend before placing an order.')
      return
    }

    const formData = new FormData(event.currentTarget)
    setLoading(true)

    try {
      const order = await orderService.create({
        items: orderItems,
        paymentMethod: 'cash',
        shippingAddress: {
          address: formData.get('address'),
          fullName: formData.get('fullName'),
          phone: formData.get('phone'),
        },
      })

      await clearCart()

      try {
        const payment = await paymentService.initialize(order._id)

        if (payment.authorization_url) {
          window.location.href = payment.authorization_url
          return
        }
      } catch (paymentError) {
        setSuccess(`Order saved. Payment setup needs attention: ${paymentError.message}`)
        event.currentTarget.reset()
        return
      }

      setSuccess(`Order placed successfully. Reference: ${order._id}`)
      event.currentTarget.reset()
    } catch (submitError) {
      setError(submitError.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <form className="checkout-form" onSubmit={handleSubmit}>
      <Input id="fullName" label="Full Name" name="fullName" required />
      <Input id="phone" label="Phone Number" name="phone" required />
      <Input id="address" label="Delivery Address" name="address" required />
      {error ? <p className="form-message error">{error}</p> : null}
      {success ? <p className="form-message success">{success}</p> : null}
      <button className="button primary" disabled={loading} type="submit">
        {loading ? 'Placing order...' : 'Place Order'}
      </button>
    </form>
  )
}

export default CheckoutForm
