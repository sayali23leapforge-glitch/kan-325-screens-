import { FiAlertTriangle, FiFileText, FiLogIn, FiSettings, FiUserCheck } from 'react-icons/fi'

const activityRows = [
  {
    title: 'User Login',
    subtitle: 'alex.morgan@company.com logged in',
    time: '2 min ago',
    source: '192.168.1.1',
    icon: FiLogIn,
    tone: 'green',
  },
  {
    title: 'Ticket Created',
    subtitle: 'New ticket #12547 created by customer',
    time: '5 min ago',
    source: 'Support Form',
    icon: FiFileText,
    tone: 'blue',
  },
  {
    title: 'Settings Modified',
    subtitle: 'Email notification settings updated',
    time: '12 min ago',
    source: 'Admin Panel',
    icon: FiSettings,
    tone: 'orange',
  },
  {
    title: 'Role Assignment',
    subtitle: 'User role changed from Agent to Senior Agent',
    time: '18 min ago',
    source: 'User Management',
    icon: FiUserCheck,
    tone: 'purple',
  },
  {
    title: 'Security Alert',
    subtitle: 'Failed login attempt detected',
    time: '25 min ago',
    source: 'Unknown IP',
    icon: FiAlertTriangle,
    tone: 'red',
  },
]

function RecentActivitySection() {
  return (
    <article className="audit-panel">
      <div className="audit-panel-header">
        <div className="audit-panel-icon purple">
          <FiFileText size={14} />
        </div>
        <div>
          <h2>Recent Activity</h2>
          <p>Latest audit events</p>
        </div>
      </div>

      <div className="audit-activity-list">
        {activityRows.map((row) => {
          const Icon = row.icon

          return (
            <div key={row.title} className={`audit-activity-row ${row.tone === 'red' ? 'alert' : ''}`}>
              <span className={`audit-activity-icon ${row.tone}`}>
                <Icon size={12} />
              </span>
              <div className="audit-activity-copy">
                <strong>{row.title}</strong>
                <p>{row.subtitle}</p>
              </div>
              <div className="audit-activity-time">
                <strong>{row.time}</strong>
                <span>{row.source}</span>
              </div>
            </div>
          )
        })}
      </div>

      <button type="button" className="audit-view-all-btn">View All Activity</button>
    </article>
  )
}

export default RecentActivitySection