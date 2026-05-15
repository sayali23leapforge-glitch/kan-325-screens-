const quickActionsData = [
  {
    id: 1,
    icon: '+ ',
    label: 'Create New Rule',
    highlighted: true,
  },
  {
    id: 2,
    icon: '↓',
    label: 'Import Rules',
  },
  {
    id: 3,
    icon: '↑',
    label: 'Export Rules',
  },
  {
    id: 4,
    icon: '📊',
    label: 'View Analytics',
  },
]

function QuickActions() {
  return (
    <div className="quick-actions-card">
      <h3 className="quick-actions-title">Quick Actions</h3>
      <div className="quick-actions-list">
        {quickActionsData.map((action) => (
          <button
            key={action.id}
            type="button"
            className={`quick-action-item ${action.highlighted ? 'highlighted' : ''}`}
          >
            <span className="quick-action-icon">{action.icon}</span>
            <span>{action.label}</span>
          </button>
        ))}
      </div>
    </div>
  )
}

export default QuickActions
