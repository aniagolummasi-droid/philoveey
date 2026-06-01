import { collections } from '../../utils/constants'
import ImagePanel from './ImagePanel'

function Collections() {
  return (
    <section className="section-block collections-section" id="collections">
      <h2 className="section-title">Shop Our Collections</h2>
      <div className="collection-grid">
        {collections.map(({ category, title, text, image }) => (
          <ImagePanel
            alt={`${title} footwear`}
            className="collection-card"
            key={title}
            src={image}
          >
            <div>
              <h3>{title}</h3>
              <p>{text}</p>
              <a href={category ? `#shop?category=${category}` : '#shop'}>Shop Now</a>
            </div>
          </ImagePanel>
        ))}
      </div>
    </section>
  )
}

export default Collections
