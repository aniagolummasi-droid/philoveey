import { useEffect, useState } from 'react'
import { paymentService } from '../services/paymentService'

function getPaymentReference() {
  const searchReference = new URLSearchParams(window.location.search).get('reference')
  const hashQuery = window.location.hash.split('?')[1]
  const hashReference = hashQuery ? new URLSearchParams(hashQuery).get('reference') : null

  return searchReference || hashReference
}

function PaymentStatus() {
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(true)
  const [status, setStatus] = useState('')

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
      })
      .catch((paymentError) => setError(paymentError.message))
      .finally(() => setLoading(false))
  }, [])

  return (
    <section className="page-section">
      <h1>Payment Status</h1>
      {loading ? <p>Verifying payment...</p> : null}
      {error ? <p className="form-message error">{error}</p> : null}
      {status ? <p className="form-message success">{status}</p> : null}
      <a className="button primary compact" href="#orders">
        View Orders
      </a>
    </section>
  )
}

export default PaymentStatus
