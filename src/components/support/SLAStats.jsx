const stats = [
  { label: 'Active SLAs', value: '12', tone: 'blue' },
  { label: 'SLA Compliance', value: '94%', tone: 'green' },
  { label: 'Breached SLAs', value: '8', tone: 'red' },
  { label: 'Avg Response Time', value: '2.3h', tone: 'purple' },
]

function SLAStats() {
  return (
    <section className="support-sla-stats-grid" aria-label="SLA stats">
      {stats.map((item) => (
        <article key={item.label} className="support-sla-stat-card">
          <p>{item.label}</p>
          <div className="support-sla-stat-row">
            <strong>{item.value}</strong>
            <span className={`support-sla-icon ${item.tone}`}>
              <svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="8" />
                <path d="M12 8v4l2 2" />
              </svg>
            </span>
          </div>
        </article>
      ))}
    </section>
  )
}

export default SLAStats
