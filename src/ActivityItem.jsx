function ActivityItem({ title, description, timestamp, iconColor }) {
  const colorMap = {
    blue: '#2563eb',
    green: '#16a34a',
    purple: '#9333ea',
    orange: '#f97316',
    teal: '#0d9488',
  }

  return (
    <div className="activity-item">
      <div
        className="activity-icon"
        style={{ backgroundColor: `${colorMap[iconColor]}20`, color: colorMap[iconColor] }}
      >
        <span className="activity-dot" style={{ backgroundColor: colorMap[iconColor] }} />
      </div>
      <div className="activity-details">
        <h5 className="activity-title">{title}</h5>
        <p className="activity-description">{description}</p>
        <span className="activity-time">{timestamp}</span>
      </div>
    </div>
  )
}

export default ActivityItem
