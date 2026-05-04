import { FiCheckCircle } from 'react-icons/fi'
import './create-application-review.css'

function ReviewHeroBanner({ appName, appType, status }) {
  return (
    <div className="review-hero-banner">
      <div className="review-hero-icon-container">
        <div className="review-hero-icon">
          <span>🔐</span>
        </div>
      </div>
      <div className="review-hero-content">
        <h2 className="review-hero-title">{appName}</h2>
        <p className="review-hero-subtitle">{appType}</p>
      </div>
      {status && (
        <div className="review-hero-status">
          <FiCheckCircle size={16} />
          <span>{status}</span>
        </div>
      )}
    </div>
  )
}

export default ReviewHeroBanner
