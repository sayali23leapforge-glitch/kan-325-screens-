import { FiDownload, FiBook, FiCode } from 'react-icons/fi'

function QuickActionsCard() {
  const actions = [
    {
      id: 1,
      icon: FiDownload,
      title: 'Download Keys',
      subtitle: 'Export as JSON',
      color: 'blue'
    },
    {
      id: 2,
      icon: FiBook,
      title: 'View Docs',
      subtitle: 'Integration guide',
      color: 'purple'
    },
    {
      id: 3,
      icon: FiCode,
      title: 'Code Samples',
      subtitle: 'Multiple languages',
      color: 'green'
    }
  ]

  const handleAction = (actionId) => {
    console.log('Quick action clicked:', actionId)
  }

  return (
    <div className="credentials-card">
      <h3 className="credentials-card-title">Quick Actions</h3>

      <div className="quick-actions-list">
        {actions.map(action => {
          const Icon = action.icon
          return (
            <button
              key={action.id}
              className={`quick-action-item quick-action-${action.color}`}
              onClick={() => handleAction(action.id)}
            >
              <div className={`quick-action-icon quick-action-icon-${action.color}`}>
                <Icon size={20} />
              </div>
              <div className="quick-action-text">
                <p className="quick-action-title">{action.title}</p>
                <p className="quick-action-subtitle">{action.subtitle}</p>
              </div>
            </button>
          )
        })}
      </div>
    </div>
  )
}

export default QuickActionsCard
