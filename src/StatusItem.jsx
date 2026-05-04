import './create-application-final-review.css'

function StatusItem({ title, subtitle, enabled = false }) {
  return (
    <div className={`status-item ${enabled ? 'enabled' : 'disabled'}`}>
      <div className={`status-item-icon ${enabled ? 'enabled' : 'disabled'}`}>
        {enabled ? '✓' : '✕'}
      </div>
      <div className="status-item-content">
        <h4 className="status-item-title">{title}</h4>
        <p className="status-item-subtitle">{subtitle}</p>
      </div>
    </div>
  )
}

export default StatusItem
