import { useEffect, useState } from 'react'
import { useCart } from '../hooks/useCart'
import { paymentService } from '../services/paymentService'

function getPaymentReference() {
  const searchParams = new URLSearchParams(window.location.search)
  const searchReference = searchParams.get('reference') || searchParams.get('trxref')
  const hashQuery = window.location.hash.split('?')[1]
  const hashReference = hashQuery ? new URLSearchParams(hashQuery).get('reference') || new URLSearchParams(hashQuery).get('trxref') : null

  return searchReference || hashReference
}

function PaymentStatus() {
  const { clearCart } = useCart()
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(true)
  const [status, setStatus] = useState('')
  const [emailMessage, setEmailMessage] = useState('')

  useEffect(() => {
    const reference = getPaymentReference()

    if (!reference) {
      setError('Payment reference was not found.')
      setLoading(false)
      return
    }

    paymentService
      .verify(reference)
      .then(({ order }) => {
        setStatus(`Payment ${order.paymentStatus}. Order status: ${order.orderStatus}.`)

        if (order.paymentStatus === 'paid') {
          clearCart()
          setEmailMessage(
            'Your cart has been emptied. A confirmation email is being sent to your inbox.',
          )
        }
      })
      .catch((paymentError) => setError(paymentError.message))
      .finally(() => setLoading(false))
  }, [clearCart])

  return (
    <section className="page-section">
      <h1>Payment Status</h1>
      {loading ? <p>Verifying payment...</p> : null}
      {error ? <p className="form-message error">{error}</p> : null}
      {status ? (
        <div className="status-card">
          <p className="form-message success">{status}</p>
          {emailMessage ? <p className="form-message info">{emailMessage}</p> : null}
        </div>
      ) : null}
      <a className="button primary compact" href="#orders">
        View Orders
      </a>
    </section>
  )
}

export default PaymentStatus
