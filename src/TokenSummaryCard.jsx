import './create-application-review.css'

function TokenSummaryCard({ title, value, unit, helper }) {
  return (
    <div className="token-summary-card">
      <h4 className="token-summary-title">{title}</h4>
      <div className="token-summary-value-group">
        <span className="token-summary-value">{value}</span>
        {unit && <span className="token-summary-unit">{unit}</span>}
      </div>
      {helper && <p className="token-summary-helper">{helper}</p>}
    </div>
  )
}

export default TokenSummaryCard
