import { useEffect, useState } from 'react'
import OrdersTable from '../components/dashboard/OrdersTable'
import DashboardLayout from '../components/layout/DashboardLayout'
import { orderService } from '../services/orderService'

function Orders() {
  const [orders, setOrders] = useState([])
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    orderService
      .getMine()
      .then(setOrders)
      .catch((ordersError) => setError(ordersError.message))
      .finally(() => setLoading(false))
  }, [])

  return (
    <DashboardLayout>
      <h1>Orders</h1>
      {loading ? <p>Loading orders...</p> : null}
      {error ? <p className="form-message error">{error}</p> : null}
      {!loading && !error ? <OrdersTable orders={orders} /> : null}
    </DashboardLayout>
  )
}

export default Orders
