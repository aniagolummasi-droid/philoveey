import { useEffect, useState } from 'react'
import { heroSlides } from '../../utils/constants'
import ImagePanel from './ImagePanel'

function Hero() {
  const [activeSlide, setActiveSlide] = useState(0)
  const slide = heroSlides[activeSlide]

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setActiveSlide((currentSlide) => (currentSlide + 1) % heroSlides.length)
    }, 5000)

    return () => window.clearTimeout(timer)
  }, [activeSlide])

  const showPreviousSlide = () => {
    setActiveSlide(
      (currentSlide) =>
        (currentSlide - 1 + heroSlides.length) % heroSlides.length,
    )
  }

  const showNextSlide = () => {
    setActiveSlide((currentSlide) => (currentSlide + 1) % heroSlides.length)
  }

  return (
    <section className="hero-section" id="home">
      <ImagePanel
        alt={slide.alt}
        className="hero-media"
        position={slide.position}
        src={slide.image}
      >
        <div className="hero-shade" />
        <button
          className="slider-arrow left"
          type="button"
          aria-label="Previous"
          onClick={showPreviousSlide}
        >
          &lt;
        </button>
        <div className="hero-copy">
          <h1>{slide.title}</h1>
          <p>{slide.text}</p>
          <div className="hero-buttons">
            <a className="button primary" href="#shop">
              Shop Now
            </a>
            <a className="button secondary" href="#collections">
              View Collection
            </a>
          </div>
        </div>
        <button
          className="slider-arrow right"
          type="button"
          aria-label="Next"
          onClick={showNextSlide}
        >
          &gt;
        </button>
        <div className="slider-dots" aria-hidden="true">
          {heroSlides.map((heroSlide, index) => (
            <span
              className={index === activeSlide ? 'active' : undefined}
              key={heroSlide.title}
            />
          ))}
        </div>
      </ImagePanel>
    </section>
  )
}

export default Hero
