import { useEffect, useState } from 'react'
import Footer from './components/layout/Footer'
import Navbar from './components/layout/Navbar'
import Preloader from './components/common/Preloader'
import AppRoutes from './routes/AppRoutes'

function App() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Hide preloader after page fully loads
    if (document.readyState === 'complete') {
      setIsLoading(false)
    } else {
      window.addEventListener('load', () => setIsLoading(false))
      return () => window.removeEventListener('load', () => setIsLoading(false))
    }
  }, [])

  return (
    <>
      {isLoading && <Preloader />}
      <main className="site-shell">
        <Navbar />
        <AppRoutes />
        <a className="whatsapp-button" href="https://wa.me/2349033898769">
          Chat on WhatsApp
        </a>
        <Footer />
      </main>
    </>
  )
}

export default App
