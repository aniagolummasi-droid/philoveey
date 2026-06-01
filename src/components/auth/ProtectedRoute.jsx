import { useAuth } from '../../hooks/useAuth'
import Login from '../../pages/Login'

function ProtectedRoute({ adminOnly = false, children }) {
  const { user } = useAuth()

  if (!user) return <Login />

  if (adminOnly && user.role !== 'admin') {
    return (
      <section className="page-section">
        <h1>Admin access required</h1>
        <p>This area is only for store admins.</p>
      </section>
    )
  }

  return children
}

export default ProtectedRoute
