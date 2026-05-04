import { FiCopy, FiMoreVertical, FiGlobe, FiSmartphone, FiActivity, FiMonitor, FiCode } from 'react-icons/fi'
import { useNavigate } from 'react-router-dom'
import StatusBadge from './StatusBadge'
import './applications.css'

function ApplicationCard({ app, iconColor }) {
  const navigate = useNavigate()

  const handleCopyClientId = () => {
    navigator.clipboard.writeText(app.clientId)
    alert('Client ID copied to clipboard!')
  }

  const handleViewDetails = () => {
    navigate(`/applications/${app.id}`)
  }

  const iconColors = {
    blue: '#3B82F6',
    purple: '#A855F7',
    green: '#10B981',
    orange: '#F97316',
    red: '#EF4444',
    indigo: '#6366F1'
  }

  const bgColors = {
    blue: '#DBEAFE',
    purple: '#E9D5FF',
    green: '#D1FAE5',
    orange: '#FED7AA',
    red: '#FEE2E2',
    indigo: '#E0E7FF'
  }

  // Map app name to icon
  const getIcon = () => {
    switch (app.name) {
      case 'Customer Portal':
        return <FiGlobe size={24} />
      case 'Mobile App iOS':
      case 'Mobile App Android':
        return <FiSmartphone size={24} />
      case 'API Gateway':
      case 'Developer API':
        return <FiCode size={24} />
      case 'Admin Dashboard':
        return <FiMonitor size={24} />
      default:
        return <FiActivity size={24} />
    }
  }

  const color = iconColors[iconColor] || iconColors.blue
  const bgColor = bgColors[iconColor] || bgColors.blue

  return (
    <div className="application-card">
      {/* Top section with icon and kebab */}
      <div className="app-card-header">
        <div className="app-icon-box" style={{ backgroundColor: bgColor }}>
          <div
            style={{
              color: color,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            {getIcon()}
          </div>
        </div>
        <button className="app-kebab-btn" aria-label="More options">
          <FiMoreVertical size={18} />
        </button>
      </div>

      {/* App name and status */}
      <div className="app-card-title-section">
        <h3 className="app-name">{app.name}</h3>
        <StatusBadge status={app.status} />
      </div>

      {/* Client ID with copy */}
      <div className="app-client-section">
        <div className="app-info-group">
          <label className="app-label">CLIENT ID</label>
          <div className="client-id-row">
            <code className="client-id">{app.clientId}</code>
            <button
              className="copy-btn"
              onClick={handleCopyClientId}
              aria-label="Copy client ID"
              title="Copy client ID"
            >
              <FiCopy size={16} />
            </button>
          </div>
        </div>
      </div>

      {/* Info grid - Type, Created, Last Used */}
      <div className="app-info-grid">
        <div className="app-info-group">
          <label className="app-label">TYPE</label>
          <p className="app-info-value">{app.type}</p>
        </div>
        <div className="app-info-group">
          <label className="app-label">CREATED</label>
          <p className="app-info-value">{app.created}</p>
        </div>
        <div className="app-info-group">
          <label className="app-label">LAST USED</label>
          <p className="app-info-value">{app.lastUsed}</p>
        </div>
      </div>

      {/* Divider */}
      <div className="app-card-divider"></div>

      {/* Footer actions */}
      <div className="app-card-footer">
        <button className="app-action-link" onClick={handleViewDetails}>View Details</button>
        <button className="app-action-link">Settings</button>
      </div>
    </div>
  )
}

export default ApplicationCard
