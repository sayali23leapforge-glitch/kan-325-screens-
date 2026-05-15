const stats = [
  { label: 'Total Articles', value: '248', tone: 'blue' },
  { label: 'Categories', value: '18', tone: 'purple' },
  { label: 'Views Today', value: '1,842', tone: 'green' },
  { label: 'Avg Rating', value: '4.6', tone: 'yellow' },
]

function KBStats() {
  return (
    <section className="kb-stats-grid" aria-label="Knowledge base stats">
      {stats.map((item) => (
        <article key={item.label} className="kb-stat-card">
          <p>{item.label}</p>
          <div className="kb-stat-row">
            <strong>{item.value}</strong>
            <span className={`kb-stat-icon ${item.tone}`}>
              <svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="6" y="5" width="12" height="14" rx="2" />
                <path d="M9 10h6" />
              </svg>
            </span>
          </div>
        </article>
      ))}
    </section>
  )
}

export default KBStats
