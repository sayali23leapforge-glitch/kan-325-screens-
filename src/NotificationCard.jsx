import { FiAlertCircle } from 'react-icons/fi'

function NotificationCard({ notification }) {
  return (
    <div className="notification-card" style={{ borderLeftColor: notification.borderColor }}>
      <div 
        className="notification-icon-wrapper"
        style={{ backgroundColor: notification.backgroundColor }}
      >
        <FiAlertCircle size={18} style={{ color: notification.iconColor }} />
      </div>

      <div className="notification-content">
        <div className="notification-header">
          <h3 className="notification-title">{notification.title}</h3>
          <span className="notification-dot" style={{ backgroundColor: notification.iconColor }}></span>
        </div>

        <p className="notification-description">{notification.description}</p>

        <div className="notification-footer">
          <div className="notification-metadata">
            <span className="metadata-icon"></span>
            <span className="metadata-text">{notification.timestamp}</span>
          </div>

          <div className="notification-badges">
            <span 
              className="badge"
              style={{ 
                backgroundColor: notification.backgroundColor,
                color: notification.iconColor
              }}
            >
              {notification.severity}
            </span>
            <span className="badge badge-category">
              {notification.category}
            </span>
          </div>
        </div>
      </div>

      <button className="notification-menu">
        <span>⋮</span>
      </button>
    </div>
  )
}

export default NotificationCard
