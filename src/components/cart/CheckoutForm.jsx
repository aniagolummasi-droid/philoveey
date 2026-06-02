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
  const [notice, setNotice] = useState('')

  const handleSubmit = async (event) => {
    event.preventDefault()
    setError('')
    setNotice('')

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
    setNotice('Your order is being placed. Please wait while we connect you to the secure Paystack payment gateway.')

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

      try {
        const payment = await paymentService.initialize(order._id)

        if (payment.authorization_url) {
          window.location.href = payment.authorization_url
          return
        }

        setError('Payment gateway did not return a redirect URL. Please try again.')
      } catch (paymentError) {
        setError(`Payment setup failed: ${paymentError.message}`)
      }
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
      {notice ? <p className="form-message success">{notice}</p> : null}
      <button className="button primary" disabled={loading} type="submit">
        {loading ? 'Please wait...' : 'Place Order'}
      </button>
    </form>
  )
}

export default CheckoutForm
