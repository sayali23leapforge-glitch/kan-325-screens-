import { FiLock, FiRefreshCw, FiCode } from 'react-icons/fi'

function SecurityTipsCard() {
  const tips = [
    {
      id: 1,
      icon: FiLock,
      title: 'Store Securely',
      description: 'Never commit secrets to version control or expose them in client-side code'
    },
    {
      id: 2,
      icon: FiRefreshCw,
      title: 'Rotate Regularly',
      description: 'Update your secrets every 90 days or immediately if compromised'
    },
    {
      id: 3,
      icon: FiCode,
      title: 'Use Environment Variables',
      description: 'Store credentials in environment variables, not in application code'
    }
  ]

  return (
    <div className="credentials-card">
      <h3 className="credentials-card-title">Security Tips</h3>

      <div className="security-tips-list">
        {tips.map(tip => {
          const Icon = tip.icon
          return (
            <div key={tip.id} className="security-tip-item">
              <div className="security-tip-icon">
                <Icon size={18} />
              </div>
              <div className="security-tip-content">
                <p className="security-tip-title">{tip.title}</p>
                <p className="security-tip-description">{tip.description}</p>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default SecurityTipsCard
