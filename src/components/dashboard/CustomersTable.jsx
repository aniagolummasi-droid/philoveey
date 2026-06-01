function CustomersTable({ customers = [] }) {
  return (
    <table className="data-table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody>
        {customers.map((customer) => (
          <tr key={customer.email}>
            <td>{customer.name}</td>
            <td>{customer.email}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default CustomersTable
