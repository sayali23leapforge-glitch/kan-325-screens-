import './application-details.css'

function StatCard({ icon, label, value, trend, footer, trendType = 'positive' }) {
  const trendColor = trendType === 'positive' ? 'positive' : trendType === 'negative' ? 'negative' : 'neutral'

  return (
    <div className="stat-card">
      <div className="stat-card-top">
        <div className={`stat-icon ${trendType}`}>{icon}</div>
        <span className={`stat-trend ${trendColor}`}>{trend}</span>
      </div>
      <div className="stat-card-content">
        <p className="stat-label">{label}</p>
        <h3 className="stat-value">{value}</h3>
        <p className="stat-footer">{footer}</p>
      </div>
    </div>
  )
}

export default StatCard
