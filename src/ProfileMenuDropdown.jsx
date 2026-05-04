import { FiSettings, FiLogOut, FiBell, FiChevronRight } from 'react-icons/fi'
import './profile-menu.css'

function ProfileMenuDropdown({ onClose, onSignOut }) {
  const handleMenuItemClick = () => {
    // Items can implement their own handlers
    onClose()
  }

  const handleSignOutClick = () => {
    onSignOut()
  }

  return (
    <div className="profile-menu-dropdown">
      {/* Profile Header */}
      <div className="profile-dropdown-header">
        <div className="profile-header-content">
          <div className="profile-avatar-ring">
            <img
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 120 120'%3E%3Crect width='120' height='120' fill='%23D4A574'/%3E%3Ctext x='50%25' y='50%25' font-size='48' font-weight='600' fill='%23FFFFFF' text-anchor='middle' dominant-baseline='middle'%3EMC%3C/text%3E%3C/svg%3E"
              alt="Michael Chen"
              className="avatar-image"
            />
            <span className="online-indicator" />
          </div>
          <div className="profile-header-text">
            <h4 className="profile-name">Michael Chen</h4>
            <p className="profile-email">michael.chen@karnovate.com</p>
            <div className="profile-badge">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </svg>
              <span>Super Admin</span>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Row */}
      <div className="profile-stats-row">
        <div className="stat-mini-card">
          <div className="stat-value">24</div>
          <div className="stat-label">Tenants</div>
        </div>
        <div className="stat-mini-card">
          <div className="stat-value">156</div>
          <div className="stat-label">Actions</div>
        </div>
        <div className="stat-mini-card">
          <div className="stat-value">99%</div>
          <div className="stat-label">Uptime</div>
        </div>
      </div>

      {/* Menu Items */}
      <div className="profile-menu-items">
        <button
          type="button"
          className="profile-menu-item"
          onClick={handleMenuItemClick}
        >
          <div className="menu-item-icon account-icon">
            <FiSettings />
          </div>
          <div className="menu-item-content">
            <div className="menu-item-title">Account Settings</div>
            <div className="menu-item-subtitle">Profile, security & preferences</div>
          </div>
          <FiChevronRight className="menu-item-chevron" />
        </button>

        <button
          type="button"
          className="profile-menu-item"
          onClick={handleMenuItemClick}
        >
          <div className="menu-item-icon tenant-icon">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="23 6 13.46 15.89 8 10.5 1 17"></polyline>
              <polyline points="17 6 23 6 23 12"></polyline>
            </svg>
          </div>
          <div className="menu-item-content">
            <div className="menu-item-title">Switch Tenant</div>
            <div className="menu-item-subtitle">Change your active workspace</div>
            <div className="tenant-pill">
              <span className="tenant-dot" />
              <span className="tenant-name">Acme Corp</span>
            </div>
          </div>
          <FiChevronRight className="menu-item-chevron" />
        </button>

        <button
          type="button"
          className="profile-menu-item"
          onClick={handleMenuItemClick}
        >
          <div className="menu-item-icon activity-icon">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M9 11l3 3L22 4" />
              <path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11" />
            </svg>
          </div>
          <div className="menu-item-content">
            <div className="menu-item-title">Activity Log</div>
            <div className="menu-item-subtitle">View your recent actions</div>
          </div>
          <FiChevronRight className="menu-item-chevron" />
        </button>

        <button
          type="button"
          className="profile-menu-item"
          onClick={handleMenuItemClick}
        >
          <div className="menu-item-icon notification-icon">
            <FiBell />
          </div>
          <div className="menu-item-content">
            <div className="menu-item-title">Notifications</div>
            <div className="menu-item-subtitle">Manage your alerts</div>
          </div>
          <FiChevronRight className="menu-item-chevron" />
        </button>
      </div>

      {/* Divider */}
      <div className="profile-menu-divider" />

      {/* Sign Out */}
      <button
        type="button"
        className="profile-sign-out-item"
        onClick={handleSignOutClick}
      >
        <div className="signout-icon">
          <FiLogOut />
        </div>
        <div className="signout-content">
          <div className="signout-title">Sign Out</div>
          <div className="signout-subtitle">End your current session</div>
        </div>
        <FiChevronRight className="signout-chevron" />
      </button>
    </div>
  )
}

export default ProfileMenuDropdown
