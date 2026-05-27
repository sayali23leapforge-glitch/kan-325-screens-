import { FiAlertTriangle, FiActivity, FiCheckCircle, FiUsers, FiShield, FiLock, FiAlertCircle, FiBarChart2, FiClock, FiFileText, FiSettings } from 'react-icons/fi'
import './iam-dashboard-1.css'

function IAMDashboard1({ setDashboardView }) {
  const statsCards = [
    {
      number: '1,247',
      label: 'Total Users',
      percentage: '8.2%',
      comparison: 'vs last month',
      iconColor: '#DBEAFE',
      iconBg: '#2563EB',
      icon: <FiUsers size={24} />,
    },
    {
      number: '342',
      label: 'Active Sessions',
      percentage: '12.5%',
      comparison: 'from yesterday',
      iconColor: '#DCFCE7',
      iconBg: '#16A34A',
      icon: <FiActivity size={24} />,
    },
    {
      number: '87.3%',
      label: 'MFA Adoption Rate',
      percentage: '3.1%',
      comparison: 'this quarter',
      iconColor: '#F3E8FF',
      iconBg: '#9333EA',
      icon: <FiCheckCircle size={24} />,
    },
    {
      number: '23',
      label: 'Failed Login Attempts',
      percentage: '15.7%',
      comparison: 'today',
      percentageColor: '#991B1B',
      iconColor: '#FEE2E2',
      iconBg: '#DC2626',
      icon: <FiAlertCircle size={24} />,
    },
    {
      number: '8',
      label: 'Locked Accounts',
      label2: 'Requires Action',
      iconColor: '#FFEDD5',
      iconBg: '#EA580C',
      icon: <FiLock size={24} />,
    },
    {
      number: '1,893',
      label: 'Tokens Issued Today',
      percentage: '5.3%',
      comparison: 'vs yesterday',
      iconColor: '#E0E7FF',
      iconBg: '#4F46E5',
      icon: <FiShield size={24} />,
    },
    {
      number: '12',
      label: 'Security Alerts',
      label2: '3 Critical',
      iconColor: '#FEF9C3',
      iconBg: '#CA8A04',
      icon: <FiAlertTriangle size={24} />,
    },
    {
      number: '99.8%',
      label: 'System Health',
      label2: 'All Systems Operational',
      iconColor: '#DCFCE7',
      iconBg: '#16A34A',
      icon: <FiBarChart2 size={24} />,
    },
  ]

  const securityAlerts = [
    {
      title: 'Brute Force Attack',
      description: 'Multiple failed login attempts from IP: 192.168.1.100',
      time: '2 minutes ago',
      severity: 'critical',
      icon: '!',
    },
    {
      title: 'Suspicious Activity',
      description: 'Admin account accessed from new location',
      time: '15 minutes ago',
      severity: 'critical',
      icon: '!',
    },
    {
      title: 'Policy Violation',
      description: 'Password policy not met for 3 users',
      time: '1 hour ago',
      severity: 'warning',
      icon: '⚠',
    },
    {
      title: 'Session Timeout',
      description: '5 sessions expired due to inactivity',
      time: '2 hours ago',
      severity: 'info',
      icon: 'i',
    },
  ]

  const recentActivities = [
    {
      title: 'New user registered',
      description: 'sarah.johnson@company.com joined Tenant: Acme Corp',
      time: '2 minutes ago',
      type: 'success',
      icon: '✓',
    },
    {
      title: 'Security policy updated',
      description: 'Password policy strengthened for all tenants',
      time: '15 minutes ago',
      type: 'info',
      icon: '→',
    },
    {
      title: 'Role assignment changed',
      description: 'Michael Chen promoted to Super Admin',
      time: '1 hour ago',
      type: 'primary',
      icon: '◆',
    },
    {
      title: 'Failed login attempt detected',
      description: 'Multiple failed attempts from IP: 192.168.1.100',
      time: '2 hours ago',
      type: 'error',
      icon: '✕',
    },
  ]

  const quickActions = [
    {
      title: 'View Audit Logs',
      description: 'Review system activity and user actions',
      iconBg: '#DBEAFE',
      iconColor: '#2563EB',
      icon: <FiFileText size={24} />,
    },
    {
      title: 'Manage Policies',
      description: 'Configure security and access policies',
      iconBg: '#F3E8FF',
      iconColor: '#9333EA',
      icon: <FiSettings size={24} />,
    },
    {
      title: 'User Management',
      description: 'Add, edit, or remove user accounts',
      iconBg: '#DCFCE7',
      iconColor: '#16A34A',
      icon: <FiUsers size={24} />,
    },
    {
      title: 'Generate Reports',
      description: 'Create custom security and usage reports',
      iconBg: '#FFEDD5',
      iconColor: '#EA580C',
      icon: <FiBarChart2 size={24} />,
    },
  ]

  return (
    <div className="iam-dashboard-1">
      {/* Header */}
      <div className="iam-header">
        <h1 className="iam-title">IAM Dashboard</h1>
        <button className="btn-new-tenant">
          <span>New Tenant</span>
        </button>
      </div>

      {/* Critical Alert Banner */}
      <div className="iam-critical-alert">
        <div className="alert-icon">!</div>
        <div className="alert-content">
          <h3 className="alert-title">Critical Security Alert</h3>
          <p className="alert-message">Multiple failed login attempts detected from unusual locations. Immediate review recommended.</p>
        </div>
        <button className="alert-button">View Details</button>
      </div>

      {/* Stats Grid */}
      <div className="iam-stats-grid">
        {statsCards.map((stat, idx) => (
          <div key={idx} className="iam-stat-card">
            <div className="stat-icon-box" style={{ backgroundColor: stat.iconColor }}>
              <div style={{ color: stat.iconBg }}>{stat.icon}</div>
            </div>
            <div className="stat-number">{stat.number}</div>
            <div className="stat-label">{stat.label}</div>
            {stat.label2 && <div className="stat-label-secondary">{stat.label2}</div>}
            {stat.percentage && (
              <div className="stat-percentage-box">
                <span className="stat-percentage" style={{ color: stat.percentageColor || '#166534' }}>
                  {stat.percentage}
                </span>
              </div>
            )}
            {stat.comparison && <div className="stat-comparison">{stat.comparison}</div>}
          </div>
        ))}
      </div>

      {/* Main Content Grid */}
      <div className="iam-main-grid">
        {/* Authentication Trends */}
        <div className="iam-trends-card">
          <div className="trends-header">
            <h3>Authentication Trends</h3>
            <p className="trends-subtitle">Login activity over the last 30 days</p>
            <div className="trends-buttons">
              <button className="trend-btn active">Day</button>
              <button className="trend-btn active-week">Week</button>
              <button className="trend-btn">Month</button>
            </div>
          </div>
          <div className="trends-chart-placeholder">
            <div className="chart-area">
              <div className="chart-y-axis">
                <div>3000</div>
                <div>2000</div>
                <div>1000</div>
                <div>0</div>
              </div>
              <div className="chart-visual">
                <svg style={{ width: '100%', height: '100%', position: 'absolute' }} viewBox="0 0 600 200" preserveAspectRatio="none">
                  <polyline points="0,150 100,120 200,130 300,140 400,100 500,160 600,180" fill="none" stroke="#3B82F6" strokeWidth="2" />
                  <polyline points="0,180 100,175 200,185 300,170 400,180 500,175 600,190" fill="none" stroke="#EF4444" strokeWidth="2" />
                </svg>
              </div>
            </div>
            <div className="chart-x-axis">
              <div>Mon</div>
              <div>Tue</div>
              <div>Wed</div>
              <div>Thu</div>
              <div>Fri</div>
              <div>Sat</div>
              <div>Sun</div>
            </div>
          </div>
          <div className="trends-legend">
            <div className="legend-item">
              <span className="legend-color" style={{ backgroundColor: '#3B82F6' }}></span>
              <span>Successful</span>
            </div>
            <div className="legend-item">
              <span className="legend-color" style={{ backgroundColor: '#EF4444' }}></span>
              <span>Failed</span>
            </div>
          </div>
        </div>

        {/* Security Alerts Sidebar */}
        <div className="iam-alerts-card">
          <h3 className="alerts-title">Security Alerts</h3>
          {securityAlerts.map((alert, idx) => (
            <div 
              key={idx} 
              className={`alert-item alert-${alert.severity}`}
            >
              <div className={`alert-icon-${alert.severity}`}>{alert.icon}</div>
              <div className="alert-body">
                <h4 className={`alert-item-title alert-text-${alert.severity}`}>{alert.title}</h4>
                <p className={`alert-item-desc alert-text-${alert.severity}`}>{alert.description}</p>
                <span className={`alert-item-time alert-time-${alert.severity}`}>{alert.time}</span>
              </div>
            </div>
          ))}
          <button className="btn-view-all-alerts" onClick={() => setDashboardView('security-alerts')}>View All Alerts</button>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="iam-quick-actions">
        <h3>Quick Actions</h3>
        <div className="iam-actions-grid">
          {quickActions.map((action, idx) => (
            <div key={idx} className="action-card">
              <div className="action-icon" style={{ backgroundColor: action.iconBg }}>
                <div style={{ color: action.iconColor }}>{action.icon}</div>
              </div>
              <h4 className="action-title">{action.title}</h4>
              <p className="action-desc">{action.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Recent Activity */}
      <div className="iam-activity-card">
        <div className="activity-card-header">
          <h3>Recent Activity</h3>
          <a href="#" className="view-all-link" onClick={(e) => { e.preventDefault(); setDashboardView('security-alerts'); }}>View All</a>
        </div>
        <div className="activity-list">
          {recentActivities.map((activity, idx) => (
            <div key={idx} className="activity-item">
              <div className={`activity-icon activity-${activity.type}`}>
                {activity.icon}
              </div>
              <div className="activity-content">
                <h4 className="activity-title">{activity.title}</h4>
                <p className="activity-desc">{activity.description}</p>
                <span className="activity-time">{activity.time}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default IAMDashboard1
