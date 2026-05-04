import './application-details.css'

function DetailsTabs({ activeTab, onTabChange }) {
  const tabs = [
    { id: 'overview', label: 'Overview', icon: '📊' },
    { id: 'settings', label: 'Settings', icon: '⚙️' },
    { id: 'credentials', label: 'Credentials', icon: '🔑' },
    { id: 'branding', label: 'Branding', icon: '🎨' },
    { id: 'logs', label: 'Logs', icon: '📋' }
  ]

  return (
    <div className="details-tabs">
      {tabs.map(tab => (
        <button
          key={tab.id}
          className={`details-tab ${activeTab === tab.id ? 'active' : ''}`}
          onClick={() => onTabChange(tab.id)}
        >
          <span className="tab-icon">{tab.icon}</span>
          <span className="tab-label">{tab.label}</span>
        </button>
      ))}
    </div>
  )
}

export default DetailsTabs
