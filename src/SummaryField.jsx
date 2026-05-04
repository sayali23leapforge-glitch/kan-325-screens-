import './create-application-review.css'

function SummaryField({ label, value, isMuted = false }) {
  return (
    <div className="summary-field">
      <label className="summary-field-label">{label}</label>
      {isMuted ? (
        <p className="summary-field-value muted">{value}</p>
      ) : (
        <p className="summary-field-value">{value}</p>
      )}
    </div>
  )
}

export default SummaryField
