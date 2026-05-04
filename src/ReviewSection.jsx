import { FiCheckCircle } from 'react-icons/fi'
import './create-application-review.css'

function ReviewSection({ title, icon, children }) {
  return (
    <div className="review-section">
      <div className="review-section-header">
        {icon && <span className="review-section-icon">{icon}</span>}
        <h3 className="review-section-title">{title}</h3>
      </div>
      <div className="review-section-content">
        {children}
      </div>
    </div>
  )
}

export default ReviewSection
