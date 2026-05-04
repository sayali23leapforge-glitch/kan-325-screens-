import { FiBell, FiSearch, FiPlus, FiMenu } from 'react-icons/fi'

function SessionsTokensHeader({
  onBulkRevoke = () => {},
  onNotifications = () => {},
  onSearch = () => {},
  onMenuToggle = () => {},
  notificationCount = 3
}) {
  return (
    <div className="sessions-tokens-header">
      <div className="header-breadcrumb">
        <span className="breadcrumb-item">Home</span>
        <span className="breadcrumb-separator">›</span>
        <span className="breadcrumb-item">IAM</span>
        <span className="breadcrumb-separator">›</span>
        <span className="breadcrumb-item active">Sessions & Tokens</span>
      </div>

      <div className="header-title-section">
        <button type="button" className="mobile-menu-button" onClick={onMenuToggle} aria-label="Toggle sidebar">
          <FiMenu />
        </button>
        <h1 className="header-title">Sessions & Tokens</h1>
        <div className="header-actions">
          <button className="btn-icon" onClick={onNotifications} title="Notifications">
            <FiBell size={20} />
            {notificationCount > 0 && (
              <span className="notification-badge">{notificationCount}</span>
            )}
          </button>
          <button className="btn-icon" onClick={onSearch} title="Search">
            <FiSearch size={20} />
          </button>
          <button className="btn-primary" onClick={onBulkRevoke}>
            <FiPlus size={18} />
            Bulk Revoke
          </button>
        </div>
      </div>
    </div>
  )
}

export default SessionsTokensHeader
