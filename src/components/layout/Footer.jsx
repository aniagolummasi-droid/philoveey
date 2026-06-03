import { FiMapPin } from 'react-icons/fi'

function Footer() {
  return (
    <footer className="site-footer" id="contact">
      <div>
        <a className="brand footer-brand" href="#home">
          <span>Philoveey</span>
          <small>Handmade Footwear</small>
        </a>
        <p>
          Walk bold. Walk Philoveey. Handmade footwear for every step of your
          journey.
        </p>
      </div>
      <div>
        <h2>Quick Links</h2>
        <a href="#home">Home</a>
        <a href="#shop">Shop</a>
        <a href="#collections">Collections</a>
        <a href="#about">About Us</a>
      </div>
      <div>
        <h2>Customer Care</h2>
        <a href="#shop">Shipping & Delivery</a>
        <a href="#shop">Returns & Exchanges</a>
        <a href="#shop">Size Guide</a>
        <a href="#shop">Privacy Policy</a>
      </div>
      <div>
        <h2>Contact Us</h2>
        <p>+234 9033898769</p>
        <p>PhiloVeeyStore@gmail.com</p>
        <p>
          <FiMapPin aria-hidden="true" /> Lagos, Nigeria
        </p>
      </div>
    </footer>
  )
}

export default Footer
