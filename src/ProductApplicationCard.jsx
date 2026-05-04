import { useState } from 'react'

function ToggleSwitch({ enabled, onToggle }) {
  return (
    <div 
      className={`toggle-switch ${enabled ? 'active' : ''}`}
      onClick={onToggle}
      role="switch"
      aria-checked={enabled}
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault()
          onToggle()
        }
      }}
    >
      <div className="toggle-circle" />
    </div>
  )
}

function ProductApplicationCard({ product }) {
  const [isToggled, setIsToggled] = useState(product.toggle)

  const handleToggle = () => {
    setIsToggled(!isToggled)
  }

  return (
    <article className={`product-application-card ${product.status === 'Disabled' ? 'disabled-product' : ''}`}>
      <div className="card-header">
        <div className="card-icon-wrapper" style={{ background: product.gradient }}>
          <div className="card-icon">{product.icon}</div>
        </div>
        <div className="card-title-section">
          <h3 className="card-title">{product.name}</h3>
          <div className="card-meta-row">
            <span className="card-domain">{product.domain}</span>
            <span className={`status-badge ${product.statusColor}`}>
              {product.status}
            </span>
          </div>
        </div>
        <div className="card-toggle">
          <ToggleSwitch enabled={isToggled} onToggle={handleToggle} />
        </div>
      </div>

      <p className="card-description">{product.description}</p>

      <div className="card-stats">
        <div className={`stat-item ${product.status === 'Disabled' ? 'disabled-value' : ''}`}>
          <span className="stat-item-label">Assigned Users</span>
          <span className="stat-item-value">{product.assignedUsers}</span>
        </div>
        <div className={`stat-item ${product.status === 'Disabled' ? 'disabled-value' : ''}`}>
          <span className="stat-item-label">Assigned Roles</span>
          <span className="stat-item-value">{product.assignedRoles}</span>
        </div>
      </div>

      <div className="card-footer">
        <svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor">
          <circle cx="12" cy="12" r="2" />
          <circle cx="19" cy="12" r="2" />
          <circle cx="5" cy="12" r="2" />
        </svg>
        <span>All changes are logged in audit trail</span>
      </div>
    </article>
  )
}

export default ProductApplicationCard
