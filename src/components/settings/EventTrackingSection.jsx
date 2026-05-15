import { useState } from 'react'
import { FiActivity, FiDownload, FiLock, FiSettings, FiUser, FiUsers } from 'react-icons/fi'

const trackingItems = [
  { id: 'login', title: 'User Login', subtitle: 'Track user authentication', icon: FiUser, enabled: true },
  { id: 'settings', title: 'Settings Changes', subtitle: 'Monitor configuration updates', icon: FiSettings, enabled: true },
  { id: 'tickets', title: 'Ticket Actions', subtitle: 'Monitor ticket operations', icon: FiActivity, enabled: true },
  { id: 'export', title: 'Data Export', subtitle: 'Track data downloads', icon: FiDownload, enabled: false },
  { id: 'users', title: 'User Management', subtitle: 'Track user role changes', icon: FiUsers, enabled: true },
  { id: 'security', title: 'Security Events', subtitle: 'Monitor security incidents', icon: FiLock, enabled: true },
]

function EventTrackingSection() {
  const [toggles, setToggles] = useState(
    trackingItems.reduce((accumulator, item) => ({ ...accumulator, [item.id]: item.enabled }), {}),
  )

  return (
    <article className="audit-panel">
      <div className="audit-panel-header with-action">
        <div className="audit-panel-icon green">
          <FiActivity size={14} />
        </div>
        <div>
          <h2>Event Tracking</h2>
          <p>Configure what events to monitor</p>
        </div>
        <button type="button" className="audit-link-btn">Configure All</button>
      </div>

      <div className="audit-toggle-grid">
        {trackingItems.map((item) => {
          const Icon = item.icon

          return (
            <div key={item.id} className="audit-toggle-card">
              <div className="audit-toggle-left">
                <span className="audit-toggle-icon">
                  <Icon size={12} />
                </span>
                <div>
                  <strong>{item.title}</strong>
                  <p>{item.subtitle}</p>
                </div>
              </div>
              <button
                type="button"
                className={`audit-switch ${toggles[item.id] ? 'on' : 'off'}`}
                onClick={() => setToggles((current) => ({ ...current, [item.id]: !current[item.id] }))}
                aria-pressed={toggles[item.id]}
              >
                <span />
              </button>
            </div>
          )
        })}
      </div>
    </article>
  )
}

export default EventTrackingSection