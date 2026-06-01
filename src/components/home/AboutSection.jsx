import { FiHeart } from 'react-icons/fi'
import { TbDiamond, TbShieldCheck } from 'react-icons/tb'
import { brandAssets } from '../../utils/constants'
import ImagePanel from './ImagePanel'

function AboutSection() {
  return (
    <section className="about-section" id="about">
      <ImagePanel
        alt="Philoveey handmade footwear packaging"
        className="about-image"
        src={brandAssets.about}
      />
      <div className="about-copy">
        <h2>About Philoveey</h2>
        <p>
          Philoveey is a handmade footwear brand focused on style, comfort, and
          confidence. We create quality footwear for individuals who want to
          stand out effortlessly while enjoying everyday comfort.
        </p>
        <p>
          Every pair is crafted with attention to detail, giving our customers
          fashion they can trust and wear proudly.
        </p>
        <a className="button primary compact" href="#contact">
          Learn More About Us
        </a>
      </div>
      <div className="about-points">
        <p>
          <TbShieldCheck aria-hidden="true" />
          Quality Materials
        </p>
        <p>
          <TbDiamond aria-hidden="true" />
          Unique Designs
        </p>
        <p>
          <FiHeart aria-hidden="true" />
          Made with Love
        </p>
      </div>
    </section>
  )
}

export default AboutSection
