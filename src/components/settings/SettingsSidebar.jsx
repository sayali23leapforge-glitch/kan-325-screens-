import { useLocation, useNavigate } from 'react-router-dom'

function SettingsSidebar() {
  const navigate = useNavigate()
  const location = useLocation()

  const items = [
    { label: 'General', path: '/support-desk/settings' },
    { label: 'Users & Roles' },
    { label: 'Channels' },
    { label: 'Automation' },
    { label: 'Notifications' },
    { label: 'Security' },
    { label: 'Billing' },
    { label: 'Integrations' },
    { label: 'Audit', path: '/support/settings/audit' },
  ]

  const isItemActive = (item) => {
    if (!item.path) {
      return false
    }

    return location.pathname === item.path
  }

  return (
    <aside className="settings-nav-card">
      <div className="settings-nav-title">Settings</div>
      <div className="settings-nav-list">
        {items.map((item) => (
          <button
            key={item.label}
            type="button"
            className={`settings-nav-item ${isItemActive(item) ? 'active' : ''}`}
            onClick={() => item.path && navigate(item.path)}
          >
            <span className="settings-nav-dot" />
            <span>{item.label}</span>
          </button>
        ))}
      </div>
    </aside>
  )
}

export default SettingsSidebar