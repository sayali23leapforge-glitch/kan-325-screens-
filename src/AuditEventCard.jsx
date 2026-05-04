import { 
  FiAlertCircle, 
  FiLogIn, 
  FiShield, 
  FiDatabase, 
  FiUserPlus, 
  FiSettings, 
  FiTrash2, 
  FiUserX
} from 'react-icons/fi'

function AuditEventCard({ event, onSelect }) {
  const iconMap = {
    'alert-circle': <FiAlertCircle size={15} />,
    'login': <FiLogIn size={15} />,
    'shield': <FiShield size={15} />,
    'database': <FiDatabase size={15} />,
    'user-plus': <FiUserPlus size={15} />,
    'settings': <FiSettings size={15} />,
    'trash': <FiTrash2 size={15} />,
    'user-x': <FiUserX size={15} />
  }

  const severityBgMap = {
    Critical: '#FEE2E2',
    Warning: '#FEF9C3',
    Info: '#DBEAFE',
    Failed: '#FEE2E2'
  }

  const severityIconColorMap = {
    Critical: '#DC2626',
    Warning: '#CA8A04',
    Info: '#2563EB',
    Failed: '#DC2626'
  }

  const severityBadgeColorMap = {
    Critical: '#DC2626',
    Warning: '#CA8A04',
    Info: '#2563EB',
    Failed: '#991B1B'
  }

  return (
    <div 
      className="event-card-wrapper"
      onClick={() => onSelect && onSelect(event)}
      style={{ cursor: 'pointer' }}
    >
      <div className="event-icon-circle">
        <div 
          className="event-icon" 
          style={{
            backgroundColor: severityBgMap[event.severity] || '#FEE2E2',
            color: severityIconColorMap[event.severity] || '#DC2626'
          }}
        >
          {iconMap[event.icon] || iconMap['alert-circle']}
        </div>
      </div>

      <div className="event-timeline-line" />

      <div className="event-details">
        <div className="event-header-row">
          <div className="event-main-info">
            <h3 className="event-title">{event.type}</h3>
            <p className="event-description">{event.description}</p>
          </div>
          <div className="event-severity-badge" style={{backgroundColor: severityBgMap[event.severity] || '#FEE2E2', color: severityBadgeColorMap[event.severity] || '#991B1B'}}>
            {event.severity || 'FAILED'}
          </div>
        </div>

        <div className="event-metadata-grid">
          <div className="metadata-column">
            <div className="metadata-label">User</div>
            <div className="metadata-value">{event.user}</div>
          </div>
          <div className="metadata-column">
            <div className="metadata-label">IP Address</div>
            <div className="metadata-value">{event.ip}</div>
          </div>
          <div className="metadata-column">
            <div className="metadata-label">Location</div>
            <div className="metadata-value">Unknown</div>
          </div>
          <div className="metadata-column">
            <div className="metadata-label">Timestamp</div>
            <div className="metadata-value">{event.timestamp}</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AuditEventCard
