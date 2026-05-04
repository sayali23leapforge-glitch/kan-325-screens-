import './create-application-final-review.css'

function InfoRow({ label, value, isCode = false, isMasked = false, onCopy, onToggleVisibility }) {
  return (
    <div className="info-row">
      <label className="info-row-label">{label}</label>
      <div className="info-row-value-container">
        {isCode ? (
          <code className="info-row-code">{isMasked ? '••••••••••••••••••••' : value}</code>
        ) : (
          <span className={isCode ? 'info-row-code' : 'info-row-value'}>{value}</span>
        )}
        {onCopy && (
          <button className="info-row-copy-btn" onClick={onCopy} title="Copy to clipboard">
            <span>📋</span>
          </button>
        )}
        {onToggleVisibility && (
          <button className="info-row-toggle-btn" onClick={onToggleVisibility} title="Toggle visibility">
            <span>{isMasked ? '👁' : '👁‍🗨'}</span>
          </button>
        )}
      </div>
    </div>
  )
}

export default InfoRow
