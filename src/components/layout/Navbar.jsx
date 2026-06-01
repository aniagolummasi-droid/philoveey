import {
  FiChevronDown,
  FiMenu,
  FiSearch,
  FiShoppingBag,
  FiUser,
} from 'react-icons/fi'
import { useEffect, useState } from 'react'
import { useAuth } from '../../hooks/useAuth'
import { useCart } from '../../hooks/useCart'
import { collections } from '../../utils/constants'

function getActiveCategory() {
  const hash = window.location.hash.replace('#', '')
  const [, queryString = ''] = hash.split('?')
  const params = new URLSearchParams(queryString)

  return params.get('category') || ''
}

function Navbar() {
  const { itemCount } = useCart()
  const { user } = useAuth()
  const [activeCategory, setActiveCategory] = useState(getActiveCategory)

  useEffect(() => {
    const handleHashChange = () => setActiveCategory(getActiveCategory())

    window.addEventListener('hashchange', handleHashChange)

    return () => window.removeEventListener('hashchange', handleHashChange)
  }, [])

  return (
    <>
      <div className="top-strip">Free delivery on orders over N25,000</div>
      <header className="site-header">
        <a className="brand" href="#home" aria-label="Philoveey home">
          <span>Philoveey</span>
          <small>Handmade Footwear</small>
        </a>

        <nav className="main-nav" aria-label="Primary navigation">
          <a href="#home">Home</a>
          <a href="#shop">Shop</a>
          <div className="nav-dropdown">
            <a href="#collections" className={activeCategory ? 'active' : undefined}>
              Collections <FiChevronDown aria-hidden="true" />
            </a>
            <div className="dropdown-menu">
              {collections.map(({ category, title }) => (
                <a
                  className={category && category === activeCategory ? 'active' : undefined}
                  href={category ? `#shop?category=${category}` : '#shop'}
                  key={title}
                >
                  {title}
                </a>
              ))}
            </div>
          </div>
          <a href="#register">Register With Us</a>
          <a href="#about">About Us</a>
          <a href="#contact">Contact</a>
        </nav>

        <div className="header-actions">
          <button type="button" aria-label="Search">
            <FiSearch />
          </button>
          <a className="icon-link" href={user ? '#profile' : '#login'} aria-label="Account">
            <FiUser />
          </a>
          <a className="cart-button icon-link" href="#cart" aria-label="Cart">
            <FiShoppingBag />
            <span>{itemCount}</span>
          </a>
          <button type="button" className="menu-button" aria-label="Menu">
            <FiMenu />
          </button>
        </div>
      </header>
    </>
  )
}

export default Navbar
