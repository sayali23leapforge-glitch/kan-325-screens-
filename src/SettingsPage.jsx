import { useState } from 'react'
import {
  FiBell,
  FiEdit2,
  FiFileText,
  FiLock,
  FiMenu,
  FiMonitor,
  FiShield,
  FiSmartphone,
} from 'react-icons/fi'
import HRMSidebar from './HRMSidebar'
import './settings-page.css'

const menuItems = [
  { id: 'profile', label: 'Profile', active: true },
  { id: 'security', label: 'Account Security' },
  { id: 'notifications', label: 'Notifications' },
  { id: 'privacy', label: 'Privacy' },
  { id: 'preferences', label: 'Preferences' },
  { id: 'integrations', label: 'Integrations' },
  { id: 'billing', label: 'Billing' },
]

function SettingsPage({ onSwitchModule }) {
  const [notificationToggles, setNotificationToggles] = useState({
    email: true,
    push: true,
    sms: false,
    weekly: true,
  })

  return (
    <div className="settings-layout">
      <HRMSidebar onSwitchModule={onSwitchModule} />

      <main className="settings-main">
        <header className="settings-header">
          <div className="settings-header-left">
            <h1 className="settings-title">Settings</h1>
            <nav className="settings-breadcrumb">
              <a href="/">Home</a>
              <span>/</span>
              <a href="/hrm">HRM</a>
              <span>/</span>
              <span>Settings</span>
            </nav>
          </div>

          <div className="settings-header-right">
            <button type="button" className="settings-bell-btn" title="Notifications">
              <FiBell size={18} />
              <span className="settings-bell-badge">5</span>
            </button>
            <button type="button" className="settings-save-btn">
              <FiMenu size={14} />
              Save Changes
            </button>
          </div>
        </header>

        <div className="settings-content">
          <aside className="settings-menu-card">
            <div className="settings-menu-title">SETTINGS MENU</div>
            <div className="settings-menu-list">
              {menuItems.map((item) => (
                <button key={item.id} type="button" className={`settings-menu-item ${item.active ? 'active' : ''}`}>
                  <span className="settings-menu-item-label">{item.label}</span>
                </button>
              ))}
            </div>
          </aside>

          <section className="settings-right-column">
            <article className="settings-card profile-card">
              <div className="settings-card-header">
                <h2 className="settings-card-title">Profile Information</h2>
                <span className="settings-status-badge">Verified</span>
              </div>

              <div className="profile-header">
                <div className="profile-avatar-wrap">
                  <div className="profile-avatar">MC</div>
                  <button type="button" className="profile-edit-btn" aria-label="Edit profile image">
                    <FiEdit2 size={10} />
                  </button>
                </div>
                <div className="profile-copy">
                  <div className="profile-name">Michael Chen</div>
                  <div className="profile-role">HR Manager • Human Resources Department</div>
                </div>
              </div>

              <div className="profile-grid">
                <label className="field-group">
                  <span className="field-label">First Name</span>
                  <input className="field-input" defaultValue="Michael" />
                </label>
                <label className="field-group">
                  <span className="field-label">Last Name</span>
                  <input className="field-input" defaultValue="Chen" />
                </label>
                <label className="field-group">
                  <span className="field-label">Email Address</span>
                  <input className="field-input" defaultValue="michael.chen@karnovate.com" />
                </label>
                <label className="field-group">
                  <span className="field-label">Phone Number</span>
                  <input className="field-input" defaultValue="+1 (555) 123-4567" />
                </label>
                <label className="field-group">
                  <span className="field-label">Job Title</span>
                  <input className="field-input" defaultValue="HR Manager" />
                </label>
                <label className="field-group">
                  <span className="field-label">Department</span>
                  <input className="field-input" defaultValue="Human Resources" />
                </label>
                <label className="field-group field-group-full">
                  <span className="field-label">Bio</span>
                  <textarea
                    className="field-textarea"
                    rows={3}
                    defaultValue="Experienced HR professional with 10+ years in talent management and organizational development."
                  />
                </label>
              </div>
            </article>

            <article className="settings-card security-card">
              <h2 className="settings-card-title">Account Security</h2>

              <div className="security-list">
                <div className="security-item security-item-green">
                  <div className="security-item-left">
                    <span className="security-icon security-icon-green"><FiShield size={14} /></span>
                    <div>
                      <div className="security-item-title">Two-Factor Authentication</div>
                      <div className="security-item-subtitle">Enabled via SMS</div>
                    </div>
                  </div>
                  <button type="button" className="security-action-link">Manage</button>
                </div>

                <div className="security-item security-item-gray">
                  <div className="security-item-left">
                    <span className="security-icon security-icon-gray"><FiLock size={14} /></span>
                    <div>
                      <div className="security-item-title">Password</div>
                      <div className="security-item-subtitle">Last changed 45 days ago</div>
                    </div>
                  </div>
                  <button type="button" className="security-action-link">Change</button>
                </div>

                <div className="sessions-block">
                  <div className="security-item-title sessions-title">Active Sessions</div>
                  <div className="session-row">
                    <div className="session-left">
                      <span className="session-device-icon"><FiMonitor size={14} /></span>
                      <div>
                        <div className="session-device-title">MacBook Pro</div>
                        <div className="session-device-subtitle">Chrome on macOS, 2FA enabled</div>
                      </div>
                    </div>
                    <span className="session-active-badge">Active</span>
                  </div>
                  <div className="session-row session-row-last">
                    <div className="session-left">
                      <span className="session-device-icon"><FiSmartphone size={14} /></span>
                      <div>
                        <div className="session-device-title">iPhone 14 Pro</div>
                        <div className="session-device-subtitle">iOS app, 2 hours ago</div>
                      </div>
                    </div>
                    <button type="button" className="session-revoke-btn">Revoke</button>
                  </div>
                </div>
              </div>
            </article>

            <article className="settings-card notifications-card">
              <h2 className="settings-card-title">Notification Preferences</h2>

              <div className="notification-list">
                {[
                  { id: 'email', label: 'Email Notifications', subtitle: 'Receive updates via email' },
                  { id: 'push', label: 'Push Notifications', subtitle: 'Receive push notifications on your device' },
                  { id: 'sms', label: 'SMS Notifications', subtitle: 'Receive text messages for important updates' },
                  { id: 'weekly', label: 'Weekly Reports', subtitle: 'Get weekly summary reports' },
                ].map((item) => (
                  <div key={item.id} className="notification-row">
                    <div>
                      <div className="notification-title">{item.label}</div>
                      <div className="notification-subtitle">{item.subtitle}</div>
                    </div>
                    <button
                      type="button"
                      className={`toggle-switch ${notificationToggles[item.id] ? 'on' : 'off'}`}
                      onClick={() => setNotificationToggles((current) => ({ ...current, [item.id]: !current[item.id] }))}
                      aria-pressed={notificationToggles[item.id]}
                    >
                      <span className="toggle-knob" />
                    </button>
                  </div>
                ))}
              </div>
            </article>
          </section>
        </div>
      </main>
    </div>
  )
}

export default SettingsPage