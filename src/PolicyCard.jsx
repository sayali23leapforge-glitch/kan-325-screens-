import ProgressBar from './ProgressBar'
import { FiMoreVertical } from 'react-icons/fi'

function PolicyCard({
  icon,
  title,
  subtitle,
  status = 'ACTIVE',
  statusType = 'active',
  gradient,
  details = [],
  complianceScore = 0,
  complianceColor = 'green',
  complianceChips = [],
  onConfigure = () => {},
  onMenu = () => {}
}) {
  return (
    <div className="policy-card">
      <div className={`policy-card-header ${gradient}`}>
        <div className="policy-header-left">
          <div className="policy-header-icon">{icon}</div>
          <div className="policy-header-text">
            <h3 className="policy-card-title">{title}</h3>
            <p className="policy-card-subtitle">{subtitle}</p>
          </div>
        </div>
        <span className={`policy-status-badge policy-status-${statusType}`}>
          {status}
        </span>
      </div>

      <div className="policy-card-body">
        <div className="policy-details">
          {details.map((detail, idx) => (
            <div key={idx} className="policy-detail-row">
              <span className="detail-label">{detail.label}</span>
              <span className="detail-value">{detail.value}</span>
            </div>
          ))}
        </div>

        <div className="policy-compliance">
          <div className="compliance-header">
            <span className="compliance-label">Compliance Score</span>
            <span className="compliance-value">{complianceScore}%</span>
          </div>
          <ProgressBar value={complianceScore} color={complianceColor} />
          <div className="compliance-chips">
            {complianceChips.map((chip, idx) => (
              <span key={idx} className="compliance-chip">
                {chip}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="policy-card-footer">
        <button className="btn-configure" onClick={onConfigure}>
          Configure
        </button>
        <button className="btn-menu" onClick={onMenu}>
          <FiMoreVertical size={18} />
        </button>
      </div>
    </div>
  )
}

export default PolicyCard
