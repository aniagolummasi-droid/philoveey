import { reviews } from '../../utils/constants'

function Testimonials() {
  return (
    <section className="reviews-section">
      <h2 className="section-title">What Our Customers Say</h2>
      <button className="review-arrow" type="button" aria-label="Previous review">
        ‹
      </button>
      <div className="review-grid">
        {reviews.map((review, index) => (
          <article className="review-card" key={review.name}>
            <span className="quote">“</span>
            <p>{review.text}</p>
            <div>
              <span className="avatar">{index + 1}</span>
              <strong>{review.name}</strong>
            </div>
          </article>
        ))}
      </div>
      <button className="review-arrow" type="button" aria-label="Next review">
        ›
      </button>
    </section>
  )
}

export default Testimonials
