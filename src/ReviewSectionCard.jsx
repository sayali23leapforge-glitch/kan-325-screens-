import './create-application-final-review.css'

function ReviewSectionCard({ title, children, onEdit }) {
  return (
    <div className="review-section-card">
      <div className="review-section-card-header">
        <h3 className="review-section-card-title">{title}</h3>
        {onEdit && (
          <button className="review-section-edit-btn" onClick={onEdit}>
            <span className="edit-icon">✎</span>
            Edit
          </button>
        )}
      </div>
      <div className="review-section-card-content">
        {children}
      </div>
    </div>
  )
}

export default ReviewSectionCard
