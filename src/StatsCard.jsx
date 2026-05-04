function StatsCard({ stat }) {
  return (
    <article className="stat-card">
      <div className={`stat-icon ${stat.iconTone}`} aria-hidden="true">
        {stat.icon}
      </div>
      <div className="stat-copy">
        <strong>{stat.value}</strong>
        <span>{stat.label}</span>
      </div>
      {stat.delta && (
        <small className={`stat-delta ${stat.delta.startsWith('-') ? 'negative' : 'positive'}`}>
          {stat.delta}
        </small>
      )}
      {stat.footer && <div className="stat-footer">{stat.footer}</div>}
    </article>
  )
}

export default StatsCard
