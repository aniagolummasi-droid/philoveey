import Footer from './components/layout/Footer'
import Navbar from './components/layout/Navbar'
import AppRoutes from './routes/AppRoutes'

function App() {
  return (
    <main className="site-shell">
      <Navbar />
      <AppRoutes />
      <a className="whatsapp-button" href="https://wa.me/2349033898769">
        Chat on WhatsApp
      </a>
      <Footer />
    </main>
  )
}

export default App
