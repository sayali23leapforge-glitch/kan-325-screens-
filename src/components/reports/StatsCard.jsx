function StatsCard({ icon: Icon, iconBg, iconColor, title, value, badge, badgeTone }) {
  return (
    <article className="reports-stat-card">
      <div className="reports-stat-top">
        <span className="reports-stat-icon" style={{ backgroundColor: iconBg, color: iconColor }}>
          <Icon size={18} />
        </span>
        {badge ? <span className={`reports-stat-badge ${badgeTone}`}>{badge}</span> : <span />}
      </div>
      <p className="reports-stat-value">{value}</p>
      <p className="reports-stat-title">{title}</p>
    </article>
  )
}

export default StatsCard