const toneToClass = {
  Technical: 'technical',
  Billing: 'billing',
  Sales: 'sales',
  General: 'general',
  Urgent: 'urgent',
  Security: 'security',
  Onboarding: 'onboarding',
  Archived: 'archived',
}

function QueueCard({ queue }) {
  const toneClass = toneToClass[queue.tone]
  const isArchived = queue.tone === 'Archived'

  return (
    <article className={`support-queue-card ${isArchived ? 'archived' : ''}`}>
      <div className="support-queue-card-head">
        <div className={`support-queue-icon ${toneClass}`}>
          <svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2">
            <rect x="4" y="5" width="16" height="14" rx="2" />
            <path d="M8 10h8" />
          </svg>
        </div>

        <div className="support-queue-title-wrap">
          <h3>{queue.title}</h3>
          <p>{queue.subtitle}</p>
        </div>

        <span className={`support-queue-status ${isArchived ? 'archived' : 'active'}`}>
          {isArchived ? 'Archived' : 'Active'}
        </span>
      </div>

      <div className="support-queue-metrics">
        <div>
          <strong>{queue.open}</strong>
          <span>Open</span>
        </div>
        <div>
          <strong>{queue.pending}</strong>
          <span>Pending</span>
        </div>
        <div>
          <strong>{queue.avgTime}</strong>
          <span>Avg Time</span>
        </div>
      </div>

      <div className="support-queue-assignees">
        <p>Assigned Agents</p>
        <div>
          {queue.agents.map((agent, index) => (
            <img key={agent} src={agent} alt="Agent" style={{ marginLeft: index === 0 ? 0 : -6 }} />
          ))}
          <span>{queue.agentCount}</span>
        </div>
      </div>

      <div className="support-queue-card-actions">
        <button type="button" className="support-queue-view-btn" disabled={isArchived}>
          {isArchived ? 'Archive Queue' : 'View Tickets'}
        </button>
        <button type="button" className="support-queue-settings-btn" aria-label="Queue settings">
          <svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="2" />
            <circle cx="5" cy="12" r="1.2" />
            <circle cx="19" cy="12" r="1.2" />
          </svg>
        </button>
      </div>
    </article>
  )
}

export default QueueCard
