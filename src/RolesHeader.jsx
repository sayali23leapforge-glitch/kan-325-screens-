import { FiBell, FiPlus, FiDownload, FiMenu } from 'react-icons/fi'

function RolesHeader({ onCreateRole, onViewHistory, onNotifications, onExport, showExport, onMenuToggle }) {
  return (
    <div className="roles-header">
      <div className="header-top">
        <div className="header-left">
          <button type="button" className="mobile-menu-button" onClick={onMenuToggle} aria-label="Toggle sidebar">
            <FiMenu />
          </button>
          <h1 className="page-title">Roles & Permissions</h1>
        </div>
        <div className="header-right">
          <button className="btn-notifications" onClick={onNotifications}>
            <FiBell size={20} />
            <span className="notification-badge">3</span>
          </button>
          {showExport && (
            <button className="btn-secondary" onClick={onExport}>
              <FiDownload size={16} />
              <span>Export</span>
            </button>
          )}
          {!showExport && (
            <button className="btn-secondary" onClick={onViewHistory}>
              View History
            </button>
          )}
          <button className="btn-primary" onClick={onCreateRole}>
            <FiPlus size={16} />
            <span>Create Role</span>
          </button>
        </div>
      </div>

      <div className="breadcrumb">
        <a href="#" className="breadcrumb-link">Home</a>
        <span className="breadcrumb-sep">/</span>
        <a href="#" className="breadcrumb-link">IAM</a>
        <span className="breadcrumb-sep">/</span>
        <span className="breadcrumb-current">Roles & Permissions</span>
      </div>
    </div>
  )
}

export default RolesHeader
