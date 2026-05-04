function LogStatCard({ icon, label, value, lastText, trend, trendType, bgColor }) {
  const getTrendColor = () => {
    if (trendType === 'positive') return '#16A34A'
    if (trendType === 'negative') return '#DC2626'
    return '#CA8A04'
  }

  const iconColorMap = {
    '#DBEAFE': '#2563EB',
    '#FEE2E2': '#DC2626',
    '#FEF3C7': '#CA8A04',
    '#DCFCE7': '#16A34A'
  }

  return (
    <div className="log-stat-card">
      <div className="log-stat-icon" style={{ backgroundColor: bgColor, color: iconColorMap[bgColor] }}>
        {icon}
      </div>

      <div className="log-stat-content">
        <p className="log-stat-label">{label}</p>
        <p className="log-stat-value">{value}</p>
        <p className="log-stat-last-text">{lastText}</p>
        <p className="log-stat-trend" style={{ color: getTrendColor() }}>
          {trend}
        </p>
      </div>
    </div>
  )
}

export default LogStatCard
