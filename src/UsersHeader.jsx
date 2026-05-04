import { FiBell, FiPlus, FiMenu } from 'react-icons/fi'

function UsersHeader({ onCreateUser, onBulkImport, onNotifications, onMenuToggle }) {
  return (
    <div className="users-header">
      <div className="header-top">
        <button type="button" className="mobile-menu-button" onClick={onMenuToggle} aria-label="Toggle sidebar">
          <FiMenu />
        </button>
        <div className="header-left">
          <h1 className="page-title">User Management</h1>
        </div>
        <div className="header-right">
          <button className="btn-notifications" onClick={onNotifications}>
            <FiBell size={20} />
            <span className="notification-badge">3</span>
          </button>
          <button className="btn-secondary" onClick={onBulkImport}>
            Bulk Import
          </button>
          <button className="btn-primary" onClick={onCreateUser}>
            <FiPlus size={16} />
            <span>Create User</span>
          </button>
        </div>
      </div>

      <div className="breadcrumb">
        <a href="#" className="breadcrumb-link">Home</a>
        <span className="breadcrumb-sep">/</span>
        <a href="#" className="breadcrumb-link">IAM</a>
        <span className="breadcrumb-sep">/</span>
        <span className="breadcrumb-current">Users</span>
      </div>
    </div>
  )
}

export default UsersHeader
