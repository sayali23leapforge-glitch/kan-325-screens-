function StatCard({ title, value, tone }) {
  return (
    <article className="sd-card sd-stat-card">
      <span className={`sd-stat-dot ${tone}`} />
      <p className="sd-stat-value">{value}</p>
      <p className="sd-stat-title">{title}</p>
    </article>
  )
}

export default StatCard
