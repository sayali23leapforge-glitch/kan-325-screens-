const statItems = [
  {
    title: 'Total Queues',
    value: '8',
    tone: 'blue',
    icon: (
      <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M7 7h10" />
        <path d="M7 12h10" />
        <path d="M7 17h6" />
      </svg>
    ),
  },
  {
    title: 'Active Tickets',
    value: '156',
    tone: 'yellow',
    icon: (
      <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M4 7h16v10H4z" />
        <path d="M9 12h6" />
      </svg>
    ),
  },
  {
    title: 'Avg Response Time',
    value: '2.5h',
    tone: 'green',
    icon: (
      <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="8" />
        <path d="M12 8v5l3 2" />
      </svg>
    ),
  },
  {
    title: 'Agents Online',
    value: '12',
    tone: 'purple',
    icon: (
      <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="9" cy="8" r="3" />
        <path d="M4 18c1-3 3-4 5-4s4 1 5 4" />
        <circle cx="17" cy="9" r="2" />
      </svg>
    ),
  },
]

function QueueStats() {
  return (
    <section className="support-queue-stats-grid" aria-label="Queue stats">
      {statItems.map((item) => (
        <article key={item.title} className="support-queue-stat-card">
          <p>{item.title}</p>
          <div className="support-queue-stat-row">
            <strong>{item.value}</strong>
            <span className={`support-queue-stat-icon ${item.tone}`}>{item.icon}</span>
          </div>
        </article>
      ))}
    </section>
  )
}

export default QueueStats
