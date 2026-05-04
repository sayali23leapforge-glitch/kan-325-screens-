import { FiBell, FiMenu } from 'react-icons/fi'
import ProfileMenu from './ProfileMenu'
import './dashboard.css'

function DashboardHeader({ dashboardView, setDashboardView, onMenuToggle }) {
  return (
    <header className="dashboard-header">
      <button type="button" className="mobile-menu-button" onClick={onMenuToggle} aria-label="Toggle sidebar">
        <FiMenu />
      </button>
      <div className="header-left">
        <h1>Welcome back, Michael!</h1>
        <nav className="breadcrumb" aria-label="Breadcrumb">
          <a href="#" onClick={(e) => e.preventDefault()}>
            Home
          </a>
          <span className="breadcrumb-separator">/</span>
          <span>Dashboard</span>
        </nav>
      </div>

      <div className="header-right">
        {dashboardView === 'iam1' ? (
          <button 
            className="btn-back-to-dashboard"
            onClick={() => setDashboardView('default')}
          >
            ← Back to Dashboard
          </button>
        ) : (
          <button 
            className="btn-dashboard-1"
            onClick={() => setDashboardView('iam1')}
          >
            Dashboard 1
          </button>
        )}
        
        <button type="button" className="header-icon-btn" aria-label="Search">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="11" cy="11" r="8"></circle>
            <path d="m21 21-4.35-4.35"></path>
          </svg>
        </button>

        <button type="button" className="header-icon-btn notification-bell" aria-label="Notifications">
          <FiBell />
          <span className="bell-badge">3</span>
        </button>

        <ProfileMenu />
      </div>
    </header>
  )
}

export default DashboardHeader
