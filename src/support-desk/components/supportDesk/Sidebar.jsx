import {
  FiBook,
  FiChevronDown,
  FiClock,
  FiFileText,
  FiGitBranch,
  FiGrid,
  FiHome,
  FiSettings,
  FiUsers,
} from 'react-icons/fi'
import { useLocation, useNavigate } from 'react-router-dom'

const menuItems = [
  { label: 'Dashboard', badge: '12', icon: FiHome, active: true },
  { label: 'All Tickets', badge: '156', icon: FiGrid },
  { label: 'Open Tickets', badge: '45', icon: FiFileText },
  { label: 'Pending', badge: '28', icon: FiClock },
  { label: 'Resolved', icon: FiBook },
  { label: 'Closed', icon: FiFileText },
]

const supportTools = [
  { label: 'Customers', icon: FiUsers },
  { label: 'Knowledge Base', icon: FiBook },
  { label: 'Reports', icon: FiGrid, path: '/support-desk/reports' },
  { label: 'Settings', icon: FiSettings, path: '/support-desk/settings' },
  { label: 'System Routing', icon: FiGitBranch, path: '/support-tools/system-routing' },
]

function Sidebar() {
  const navigate = useNavigate()
  const location = useLocation()

  const isActiveItem = (item) => {
    if (!item.path) {
      return false
    }

    return location.pathname === item.path
  }

  const handleMenuItemClick = (label) => {
    if (label === 'All Tickets') {
      navigate('/support-desk/tickets')
      return
    }

    if (label === 'Dashboard') {
      navigate('/support-desk')
    }
  }

  return (
    <aside className="sd-sidebar">
      <div>
        <div className="sd-brand-row">
          <span className="sd-brand-square" />
          <div>
            <p className="sd-brand-title">HelpDesk Pro</p>
            <p className="sd-brand-subtitle">Support Center</p>
          </div>
        </div>

        <div className="sd-online-row">
          <span className="sd-online-dot" />
          <span>Online</span>
        </div>

        <button type="button" className="sd-user-card">
          <img src="https://i.pravatar.cc/38?img=32" alt="Alex Morgan" />
          <div>
            <p>Alex Morgan</p>
            <span>Support Agent</span>
          </div>
          <FiChevronDown size={12} />
        </button>

        <nav className="sd-nav-block">
          {menuItems.map((item) => {
            const Icon = item.icon
            return (
              <button
                key={item.label}
                type="button"
                className={`sd-nav-item ${item.active ? 'active' : ''}`}
                onClick={() => handleMenuItemClick(item.label)}
              >
                <Icon size={14} />
                <span>{item.label}</span>
                {item.badge ? <em>{item.badge}</em> : null}
              </button>
            )
          })}

          <p className="sd-nav-section-title">SUPPORT TOOLS</p>

          {supportTools.map((item) => {
            const Icon = item.icon
            return (
              <button
                key={item.label}
                type="button"
                className={`sd-nav-item ${isActiveItem(item) ? 'active' : ''}`}
                onClick={() => item.path && navigate(item.path)}
              >
                <Icon size={14} />
                <span>{item.label}</span>
              </button>
            )
          })}
        </nav>
      </div>

      <button type="button" className="sd-bottom-profile">
        <img src="https://i.pravatar.cc/24?img=32" alt="Alex Morgan" />
        <div>
          <p>Alex Morgan</p>
          <span>Support Agent</span>
        </div>
      </button>
    </aside>
  )
}

export default Sidebar
