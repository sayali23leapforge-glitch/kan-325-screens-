import { FiBell, FiPlus, FiMenu } from 'react-icons/fi'

function UsersHeader({ onCreateUser, onBulkImport, onNotifications, onMenuToggle }) {
  return (
    <div className="users-header">
      <div className="users-header-top">
        <button type="button" className="users-mobile-menu-button" onClick={onMenuToggle} aria-label="Toggle sidebar">
          <FiMenu />
        </button>
        <div className="users-header-left">
          <h1 className="users-page-title">User Management</h1>
        </div>
        <div className="users-header-right">
          <button className="users-btn-notifications" onClick={onNotifications}>
            <FiBell size={20} />
            <span className="users-notification-badge">3</span>
          </button>
          <button className="users-btn-secondary" onClick={onBulkImport}>
            Bulk Import
          </button>
          <button className="users-btn-primary" onClick={onCreateUser}>
            <FiPlus size={16} />
            <span>Add New User</span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default UsersHeader
