import { useState } from 'react'
import Input from '../components/common/Input'
import { adminAuthService } from '../services/adminAuthService'
import { useAuth } from '../hooks/useAuth'

function AdminLogin() {
  const { setUser } = useAuth()
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    setLoading(true)

    const form = new FormData(e.currentTarget)

    try {
      const user = await adminAuthService.login({
        email: form.get('email'),
        password: form.get('password'),
      })

      setUser(user)
      window.location.hash = '#admin'
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className="page-section">
      <h1>Admin Sign In</h1>
      <form className="auth-form" onSubmit={handleSubmit}>
        <Input id="email" label="Email" name="email" required type="email" />
        <Input id="password" label="Password" name="password" required type="password" />
        {error ? <p className="form-message error">{error}</p> : null}
        <button className="button primary" disabled={loading} type="submit">
          {loading ? 'Signing in...' : 'Sign In'}
        </button>
      </form>
    </section>
  )
}

export default AdminLogin
