import { FiSearch, FiSettings } from 'react-icons/fi'
import AuditEventCard from './AuditEventCard'

function EventTimeline({ events, onEventSelect }) {
  return (
    <div className="event-timeline">
      <div className="timeline-header">
        <div className="timeline-header-left">
          <h3 className="timeline-title">Event Timeline</h3>
        </div>
        
        <div className="timeline-header-right">
          <div className="search-box">
            <FiSearch size={16} className="search-icon" />
            <input 
              type="text" 
              placeholder="Search events..."
              className="timeline-search-input"
            />
          </div>
          <button className="timeline-settings-btn" title="Settings">
            <FiSettings size={16} />
          </button>
        </div>
      </div>

      <div className="timeline-events-list">
        {events && events.length > 0 ? (
          events.map((event) => (
            <AuditEventCard 
              key={event.id} 
              event={event}
              onSelect={onEventSelect}
            />
          ))
        ) : (
          <div className="no-events-message">
            No events found matching your filters.
          </div>
        )}
      </div>
    </div>
  )
}

export default EventTimeline
