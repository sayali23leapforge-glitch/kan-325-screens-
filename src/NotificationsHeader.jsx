import { FiBell, FiMenu } from 'react-icons/fi'

function NotificationsHeader({ onMarkAllRead, unreadCount, onMenuToggle }) {
  return (
    <div className="notifications-header">
      <div className="notifications-header-top">
        <button type="button" className="mobile-menu-button" onClick={onMenuToggle} aria-label="Toggle sidebar">
          <FiMenu />
        </button>
        <div className="notifications-title-section">
          <FiBell size={24} className="notifications-icon" />
          <h1 className="notifications-title">Notifications</h1>
        </div>
        <button 
          className="btn-mark-all-read"
          onClick={onMarkAllRead}
          disabled={unreadCount === 0}
        >
          <span>Mark All Read</span>
        </button>
      </div>
      <div className="notifications-breadcrumb">
        <span className="breadcrumb-item">Home</span>
        <span className="breadcrumb-dot">›</span>
        <span className="breadcrumb-item">IAM</span>
        <span className="breadcrumb-dot">›</span>
        <span className="breadcrumb-item active">Notifications</span>
      </div>
    </div>
  )
}

export default NotificationsHeader
