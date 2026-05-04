import ProgressBar from './ProgressBar'

function TokenCard({
  title,
  tagLabel,
  tagColor = 'blue',
  warningTag = null,
  clientId,
  scope,
  created,
  daysRemaining,
  isExpiringSoon = false,
  onRevoke = () => {}
}) {
  const getTagClass = () => {
    switch (tagColor) {
      case 'blue':
        return 'tag-blue'
      case 'purple':
        return 'tag-purple'
      case 'gray':
        return 'tag-gray'
      default:
        return 'tag-blue'
    }
  }

  const getProgressColor = () => {
    if (isExpiringSoon) return 'red'
    return 'green'
  }

  const getProgressValue = () => {
    if (daysRemaining <= 0) return 0
    if (daysRemaining <= 7) return (daysRemaining / 90) * 100
    if (daysRemaining <= 30) return (daysRemaining / 90) * 100
    return Math.min((daysRemaining / 90) * 100, 100)
  }

  return (
    <div className="token-card">
      <div className="token-header">
        <div className="token-title-section">
          <h3 className="token-title">{title}</h3>
          <div className="token-tags">
            <span className={`tag ${getTagClass()}`}>{tagLabel}</span>
            {warningTag && (
              <span className="tag tag-warning">{warningTag}</span>
            )}
          </div>
        </div>
        <button className="btn-token-revoke" onClick={onRevoke}>
          Revoke
        </button>
      </div>

      <div className="token-body">
        <div className="token-field">
          <span className="field-label">client_id</span>
          <span className="field-value">{clientId}</span>
        </div>
        <div className="token-field">
          <span className="field-label">Scope</span>
          <span className="field-value">{scope}</span>
        </div>
        <div className="token-field">
          <span className="field-label">Created</span>
          <span className="field-value">{created}</span>
        </div>
      </div>

      <div className="token-footer">
        <div className="progress-section">
          <ProgressBar value={getProgressValue()} color={getProgressColor()} />
        </div>
        <div className="token-remaining">{daysRemaining} days remaining</div>
      </div>
    </div>
  )
}

export default TokenCard
