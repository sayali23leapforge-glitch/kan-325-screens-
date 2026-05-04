import { FiDownload, FiFileText } from 'react-icons/fi'
import AuditEventCard from './AuditEventCard'
import SeverityBadge from './SeverityBadge'

function ActivityTimelinePanel({ events, onExportCsv, onExportPdf }) {
  return (
    <div className="activity-timeline-panel">
      <div className="timeline-header">
        <div className="timeline-title-section">
          <h2 className="timeline-title">Activity Timeline</h2>
          <p className="timeline-subtitle">Real-time audit trail of system events</p>
        </div>
        
        <div className="timeline-header-actions">
          <button className="btn-secondary" onClick={onExportCsv}>
            <span>Export CSV</span>
          </button>
          <button className="btn-secondary" onClick={onExportPdf}>
            <span>Export PDF</span>
          </button>
        </div>
      </div>

      <div className="timeline-events">
        {events.length > 0 ? (
          events.map((event) => (
            <AuditEventCard key={event.id} event={event} />
          ))
        ) : (
          <div className="no-events">
            <p>No audit events found matching your filters.</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default ActivityTimelinePanel
