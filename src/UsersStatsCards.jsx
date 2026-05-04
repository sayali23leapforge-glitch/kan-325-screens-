import { FiAlertCircle } from 'react-icons/fi'
import { useMemo } from 'react'

function UsersStatsCards({ filteredUsers = [], appliedFilters = {} }) {
  // Calculate stats from filtered users
  const stats = useMemo(() => {
    const mfaDisabledCount = filteredUsers.filter(u => u.mfa === 'Disabled').length
    const totalCount = filteredUsers.length
    
    // Calculate at-risk percentage (users with disabled MFA out of total)
    const atRiskPercentage = totalCount > 0 
      ? ((mfaDisabledCount / totalCount) * 100).toFixed(1)
      : '0.0'
    
    // Calculate users added in last 30 days (simulated)
    const thirtyDaysAgo = new Date()
    thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30)
    const lastThirtyDaysCount = filteredUsers.filter(u => {
      const userDate = new Date(u.created || u.lastModified || Date.now())
      return userDate >= thirtyDaysAgo
    }).length

    return [
      {
        icon: '⚠️',
        value: mfaDisabledCount.toString(),
        label: 'MFA Disabled',
        bgColor: '#FEF3C7',
        iconBg: '#F59E0B'
      },
      {
        icon: '👥',
        value: totalCount.toString(),
        label: 'Total Users',
        bgColor: '#F3E8FF',
        iconBg: '#9333EA'
      },
      {
        icon: '🚨',
        value: `${atRiskPercentage}%`,
        label: 'At Risk',
        bgColor: '#FEE2E2',
        iconBg: '#DC2626'
      },
      {
        icon: '📅',
        value: lastThirtyDaysCount.toString(),
        label: 'Last 30 Days',
        bgColor: '#DBEAFE',
        iconBg: '#2563EB'
      }
    ]
  }, [filteredUsers])

  return (
    <div className="users-stats-cards-grid">
      {stats.map((stat, idx) => (
        <div key={idx} className="users-stats-card">
          <div 
            className="stats-icon-wrapper"
            style={{ backgroundColor: stat.bgColor }}
          >
            <div className="stats-icon" style={{ color: stat.iconBg }}>
              {stat.icon}
            </div>
          </div>
          <div className="stats-card-content">
            <div className="stats-value">{stat.value}</div>
            <div className="stats-label">{stat.label}</div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default UsersStatsCards
