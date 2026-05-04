import { FiExternalLink } from 'react-icons/fi'

function EventDetailsPanel({ event }) {
  if (!event) return null

  return (
    <div className="event-details-panel">
      <div className="details-header">
        <h3 className="details-title">Event Details</h3>
      </div>

      <div className="event-alert-box">
        <div className="event-alert-icon">⚠️</div>
        <div className="event-alert-content">
          <h4 className="alert-event-title">{event.type}</h4>
          <p className="alert-event-id">Event ID: {event.id}</p>
          <span className="alert-status-badge">FAILED</span>
        </div>
      </div>

      <div className="details-section">
        <h5 className="section-title">User Information</h5>
        <div className="details-content">
          <div className="detail-row">
            <span className="detail-label">Email</span>
            <span className="detail-value">{event.user}</span>
          </div>
          <div className="detail-row">
            <span className="detail-label">User ID</span>
            <span className="detail-value">USR-8472</span>
          </div>
          <div className="detail-row">
            <span className="detail-label">Role</span>
            <span className="detail-value">Administrator</span>
          </div>
        </div>
      </div>

      <div className="details-section">
        <h5 className="section-title">Session Details</h5>
        <div className="details-content">
          <div className="detail-row">
            <span className="detail-label">IP Address</span>
            <span className="detail-value">{event.ip}</span>
          </div>
          <div className="detail-row">
            <span className="detail-label">Location</span>
            <span className="detail-value">Unknown</span>
          </div>
          <div className="detail-row">
            <span className="detail-label">User Agent</span>
            <span className="detail-value">Chrome 120.0</span>
          </div>
          <div className="detail-row">
            <span className="detail-label">Device</span>
            <span className="detail-value">Windows 11</span>
          </div>
        </div>
      </div>

      <div className="details-section">
        <h5 className="section-title">Timestamp</h5>
        <div className="details-content">
          <div className="detail-row">
            <span className="detail-label">Occurred</span>
            <span className="detail-value">{event.timestamp}</span>
          </div>
          <div className="detail-row">
            <span className="detail-label">Exact Time</span>
            <span className="detail-value">2024-01-15 14:23:45 UTC</span>
          </div>
        </div>
      </div>

      <div className="details-section">
        <h5 className="section-title">Failure Reason</h5>
        <div className="failure-reason-box">
          {event.description}
        </div>
      </div>

      <div style={{ display: 'flex', gap: '12px', marginTop: 'auto', paddingTop: '20px' }}>
        <button className="view-user-profile-btn">
          View User Profile
        </button>
        <button className="share-details-btn">
          <FiExternalLink size={18} />
        </button>
      </div>
    </div>
  )
}

export default EventDetailsPanel
