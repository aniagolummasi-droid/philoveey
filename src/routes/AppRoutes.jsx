import Admin from '../pages/Admin'
import Dashboard from '../pages/Dashboard'
import AdminLogin from '../pages/AdminLogin'
import AdminRegister from '../pages/AdminRegister'
import { useEffect, useState } from 'react'
import Cart from '../pages/Cart'
import Checkout from '../pages/Checkout'
import Home from '../pages/Home'
import Login from '../pages/Login'
import Orders from '../pages/Orders'
import PaymentStatus from '../pages/PaymentStatus'
import ProductPage from '../pages/ProductPage'
import Profile from '../pages/Profile'
import Register from '../pages/Register'
import Shop from '../pages/Shop'
import ProtectedRoute from '../components/auth/ProtectedRoute'

function getRoute() {
  return window.location.hash.replace('#', '') || 'home'
}

function AppRoutes() {
  const [route, setRoute] = useState(getRoute)

  useEffect(() => {
    const handleHashChange = () => {
      setRoute(getRoute())
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    window.addEventListener('hashchange', handleHashChange)

    return () => window.removeEventListener('hashchange', handleHashChange)
  }, [])

  const [routeName, queryString = ''] = route.split('?')
  const routeParams = new URLSearchParams(queryString)

  if (routeName === 'shop') return <Shop initialCategory={routeParams.get('category') || ''} />
  if (route === 'philo-admin-secure-login') return <AdminLogin />
  if (route === 'philo-admin-register') return <AdminRegister />
  if (route === 'admin') return <ProtectedRoute adminOnly><Admin /></ProtectedRoute>
  if (route === 'cart') return <Cart />
  if (route === 'checkout') return <Checkout />
  if (route === 'dashboard') return <ProtectedRoute adminOnly><Dashboard /></ProtectedRoute>
  if (route === 'login') return <Login />
  if (route === 'orders') return <ProtectedRoute><Orders /></ProtectedRoute>
  if (route.startsWith('payment-status')) return <ProtectedRoute><PaymentStatus /></ProtectedRoute>
  if (route === 'profile') return <ProtectedRoute><Profile /></ProtectedRoute>
  if (route === 'register') return <Register />
  if (route.startsWith('product/')) return <ProductPage productId={route.split('/')[1]} />

  return <Home />
}

export default AppRoutes
