import { FiList, FiAlertCircle, FiGlobe, FiClock } from 'react-icons/fi'

function AuditStatsCards() {
  const stats = [
    {
      icon: FiList,
      label: 'Total Events',
      value: '127',
      bgColor: '#DBEAFE',
      iconColor: '#2563EB'
    },
    {
      icon: FiAlertCircle,
      label: 'Failed Attempts',
      value: '5',
      bgColor: '#FEE2E2',
      iconColor: '#DC2626'
    },
    {
      icon: FiGlobe,
      label: 'Unique IPs',
      value: '3',
      bgColor: '#F3E8FF',
      iconColor: '#9333EA'
    },
    {
      icon: FiClock,
      label: 'Time Span',
      value: '2m',
      bgColor: '#FFEDD5',
      iconColor: '#EA580C'
    }
  ]

  return (
    <div className="audit-stats-cards">
      {stats.map((stat, idx) => {
        const Icon = stat.icon
        return (
          <div key={idx} className="stats-card">
            <div 
              className="stats-icon-wrapper"
              style={{ backgroundColor: stat.bgColor }}
            >
              <Icon size={24} color={stat.iconColor} />
            </div>
            <div className="stats-value">{stat.value}</div>
            <div className="stats-label">{stat.label}</div>
          </div>
        )
      })}
    </div>
  )
}

export default AuditStatsCards
