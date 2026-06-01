import { useState } from 'react'
import { authService } from '../../services/authService'
import { useAuth } from '../../hooks/useAuth'
import Input from '../common/Input'

function RegisterForm() {
  const { setUser } = useAuth()
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (event) => {
    event.preventDefault()
    setError('')
    setLoading(true)

    const formData = new FormData(event.currentTarget)

    try {
      const user = await authService.register({
        email: formData.get('email'),
        name: formData.get('name'),
        password: formData.get('password'),
      })

      setUser(user)
      const nextRoute = localStorage.getItem('philoveey-post-login-route') || '#profile'
      localStorage.removeItem('philoveey-post-login-route')
      window.location.hash = nextRoute
    } catch (submitError) {
      setError(submitError.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <form className="auth-form" onSubmit={handleSubmit}>
      <Input id="name" label="Name" name="name" required />
      <Input id="email" label="Email" name="email" required type="email" />
      <Input id="password" label="Password" minLength="6" name="password" required type="password" />
      {error ? <p className="form-message error">{error}</p> : null}
      <button className="button primary" disabled={loading} type="submit">
        {loading ? 'Creating account...' : 'Register'}
      </button>
    </form>
  )
}

export default RegisterForm
