const statItems = [
  {
    title: 'Active Rules',
    value: '24',
    tone: 'blue',
    icon: (
      <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 5v14M5 12h14" />
      </svg>
    ),
  },
  {
    title: 'Triggered Today',
    value: '156',
    tone: 'green',
    icon: (
      <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M9 12l2 2 4-4" />
        <circle cx="12" cy="12" r="9" />
      </svg>
    ),
  },
  {
    title: 'Time Saved',
    value: '8.2h',
    tone: 'purple',
    icon: (
      <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3 2" />
      </svg>
    ),
  },
  {
    title: 'Success Rate',
    value: '98%',
    tone: 'orange',
    icon: (
      <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
      </svg>
    ),
  },
]

function AutomationStats() {
  return (
    <section className="automation-stats-grid" aria-label="Automation stats">
      {statItems.map((item) => (
        <article key={item.title} className="automation-stat-card">
          <p>{item.title}</p>
          <div className="automation-stat-row">
            <strong>{item.value}</strong>
            <span className={`automation-stat-icon ${item.tone}`}>{item.icon}</span>
          </div>
        </article>
      ))}
    </section>
  )
}

export default AutomationStats
