const rulesData = [
  {
    id: 1,
    icon: '✓',
    iconColor: 'green',
    title: 'Auto-assign High Priority Tickets',
    description: 'Automatically assigns tickets marked as "high priority" to senior agents',
    triggered: '23 times',
    lastRun: '5 min ago',
    status: 'Active',
    statusType: 'active',
  },
  {
    id: 2,
    icon: '✉',
    iconColor: 'blue',
    title: 'Send Follow-up Emails',
    description: 'Automatically sends follow-up emails 24 hours after ticket resolution',
    triggered: '18 times',
    lastRun: '12 min ago',
    status: 'Active',
    statusType: 'active',
  },
  {
    id: 3,
    icon: '⚠',
    iconColor: 'yellow',
    title: 'SLA Breach Alert',
    description: 'Notifies support team when tickets are approaching SLA deadlines',
    triggered: '7 times',
    lastRun: '3 hours ago',
    status: 'Active',
    statusType: 'warning',
  },
  {
    id: 4,
    icon: '🏷',
    iconColor: 'purple',
    title: 'Auto-categorize Tickets',
    description: 'Automatically categorizes incoming tickets based on content analysis',
    triggered: '42 times',
    lastRun: '2 hours ago',
    status: 'Active',
    statusType: 'active',
  },
  {
    id: 5,
    icon: '📦',
    iconColor: 'red',
    title: 'Archive Old Tickets',
    description: 'Automatically archives tickets older than 90 days',
    triggered: '5 times',
    lastRun: '1 day ago',
    status: 'Inactive',
    statusType: 'inactive',
  },
]

function AutomationList() {
  return (
    <div className="automation-rules-card">
      <div className="automation-rules-header">
        <h3 className="automation-rules-title">Automation Rules</h3>
        <select className="automation-rules-select">
          <option>All Rules</option>
          <option>Active</option>
          <option>Inactive</option>
        </select>
      </div>

      <div className="automation-rules-list">
        {rulesData.map((rule) => (
          <div key={rule.id} className="automation-rule-item">
            <div className={`automation-rule-icon ${rule.iconColor}`}>{rule.icon}</div>

            <div className="automation-rule-content">
              <p className="automation-rule-title">{rule.title}</p>
              <p className="automation-rule-description">{rule.description}</p>
              <div className="automation-rule-meta">
                <span>⚡ Triggered {rule.triggered}</span>
                <span>🕐 {rule.lastRun}</span>
              </div>
              <div className="automation-rule-footer">
                <span className={`automation-rule-badge ${rule.statusType}`}>{rule.status}</span>
                <span className="automation-rule-menu">⋮</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default AutomationList
