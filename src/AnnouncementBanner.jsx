import { FiAlertTriangle, FiX } from 'react-icons/fi'

function AnnouncementBanner({ onDismiss }) {
  return (
    <div className="announcement-banner">
      <div className="banner-icon">
        <FiAlertTriangle />
      </div>

      <div className="banner-content">
        <h4>System Maintenance Scheduled</h4>
        <p>
          System maintenance will occur on Sunday, January 28, 2024 from 2:00 AM to 6:00 AM EST. Some services may be temporarily unavailable.
        </p>
      </div>

      <div className="banner-actions">
        <button type="button" className="banner-btn view-details">
          View Details
        </button>
        <button type="button" className="banner-btn dismiss">
          Dismiss
        </button>
      </div>

      <button
        type="button"
        className="banner-close"
        aria-label="Dismiss banner"
        onClick={onDismiss}
      >
        <FiX />
      </button>
    </div>
  )
}

export default AnnouncementBanner
