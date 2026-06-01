function OrdersTable({ orders = [] }) {
  return (
    <table className="data-table">
      <thead>
        <tr>
          <th>Order</th>
          <th>Total</th>
          <th>Payment</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {orders.map((order) => (
          <tr key={order._id}>
            <td>{order._id}</td>
            <td>N{Number(order.total || 0).toLocaleString()}</td>
            <td>{order.paymentStatus}</td>
            <td>{order.orderStatus}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default OrdersTable
