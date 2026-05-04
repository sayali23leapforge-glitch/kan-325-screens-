import { FiBell, FiPlus, FiSettings, FiMenu } from 'react-icons/fi'

function SecurityPoliciesHeader({
  onCreatePolicy = () => {},
  onNotifications = () => {},
  onSP1Click = () => {},
  onMenuToggle = () => {},
  notificationCount = 12
}) {
  return (
    <div className="security-policies-header">
      <div className="header-breadcrumb">
        <span className="breadcrumb-item">Home</span>
        <span className="breadcrumb-separator">›</span>
        <span className="breadcrumb-item">IAM</span>
        <span className="breadcrumb-separator">›</span>
        <span className="breadcrumb-item active">Security Policies</span>
      </div>

      <div className="header-title-section">
        <button type="button" className="mobile-menu-button" onClick={onMenuToggle} aria-label="Toggle sidebar">
          <FiMenu />
        </button>
        <h1 className="header-title">Security Policies</h1>
        <div className="header-actions">
          <button className="btn-sp1" onClick={onSP1Click}>
            <FiSettings size={16} />
            SP1
          </button>
          <button className="btn-notification" onClick={onNotifications}>
            <FiBell size={20} />
            {notificationCount > 0 && (
              <span className="notification-badge">{notificationCount}</span>
            )}
          </button>
          <button className="btn-primary" onClick={onCreatePolicy}>
            <FiPlus size={18} />
            Create Policy
          </button>
        </div>
      </div>
    </div>
  )
}

export default SecurityPoliciesHeader
