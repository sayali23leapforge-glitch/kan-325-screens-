import {
  FiBell,
  FiChevronDown,
  FiClock,
  FiMonitor,
  FiSettings,
  FiShield,
  FiSmartphone,
  FiMapPin,
  FiGlobe,
} from 'react-icons/fi'
import './session-policy-management.css'

function SessionPolicyManagementPage() {
  const tabs = ['Overview', 'Users', 'Roles', 'Features', 'Session Policy']

  const sessionRows = [
    {
      name: 'John Smith',
      email: 'john.smith@company.com',
      device: 'Chrome / Windows',
      deviceIcon: <FiMonitor size={14} />,
      location: 'San Francisco, US',
      locationIcon: <FiMapPin size={14} />,
      started: '2 hours ago',
      initials: 'JS',
      avatarClass: 'spmp-avatar-blue',
    },
    {
      name: 'Maya Lee',
      email: 'maya.lee@company.com',
      device: 'Safari / iOS',
      deviceIcon: <FiSmartphone size={14} />,
      location: 'Singapore',
      locationIcon: <FiGlobe size={14} />,
      started: '45 minutes ago',
      initials: 'ML',
      avatarClass: 'spmp-avatar-green',
    },
    {
      name: 'Alex Carter',
      email: 'alex.carter@company.com',
      device: 'Edge / Windows',
      deviceIcon: <FiMonitor size={14} />,
      location: 'London, UK',
      locationIcon: <FiMapPin size={14} />,
      started: '12 minutes ago',
      initials: 'AC',
      avatarClass: 'spmp-avatar-violet',
    },
  ]

  return (
    <div className="spmp-page">
      <header className="spmp-header">
        <div>
          <h1 className="spmp-title">Session Policy Management</h1>
          <div className="spmp-breadcrumbs">
            <span>Home</span>
            <span className="spmp-crumb-sep">&gt;</span>
            <span>Products</span>
            <span className="spmp-crumb-sep">&gt;</span>
            <span className="spmp-crumb-active">Session Policy</span>
          </div>
        </div>
        <div className="spmp-header-actions">
          <button className="spmp-notify-btn" aria-label="Notifications">
            <FiBell size={15} />
            <span className="spmp-notify-count">3</span>
          </button>
          <button className="spmp-new-policy-btn">New Policy</button>
        </div>
      </header>

      <section className="spmp-suite-card">
        <div className="spmp-suite-main">
          <div className="spmp-suite-icon">
            <FiShield size={18} />
          </div>
          <div className="spmp-suite-text">
            <h2>IAM Security Suite</h2>
            <p>Identity and Access Management for secure enterprise collaboration</p>
            <div className="spmp-suite-meta">
              <span><i className="spmp-status-dot" />Active</span>
              <span>Version: 3.1</span>
              <span>Users: 247</span>
            </div>
          </div>
        </div>
        <div className="spmp-suite-actions">
          <button className="spmp-outline-btn">
            <FiSettings size={13} />
            Configure
          </button>
          <button className="spmp-primary-btn">Save Changes</button>
        </div>
      </section>

      <div className="spmp-tabs" role="tablist" aria-label="Session policy tabs">
        {tabs.map((tab) => (
          <button key={tab} className={`spmp-tab ${tab === 'Session Policy' ? 'active' : ''}`}>
            {tab}
          </button>
        ))}
      </div>

      <section className="spmp-success-alert" role="status" aria-live="polite">
        <h3>Policy Updated Successfully</h3>
        <p>Session timeout and security policies have been updated and applied to all users.</p>
      </section>

      <section className="spmp-card">
        <div className="spmp-card-header">
          <h3>Session Timeout Settings</h3>
          <button className="spmp-toggle" type="button" aria-label="Enable session timeout">
            <span className="spmp-toggle-knob" />
          </button>
        </div>
        <div className="spmp-fields-grid">
          <label className="spmp-field">
            <span>Idle Timeout Duration (min)</span>
            <input value="30" readOnly />
          </label>
          <label className="spmp-field">
            <span>Warning Before (min)</span>
            <input value="5" readOnly />
          </label>
          <label className="spmp-field">
            <span>Apply To</span>
            <button className="spmp-select" type="button">
              <span>All Users</span>
              <FiChevronDown size={14} />
            </button>
          </label>
        </div>
      </section>

      <section className="spmp-card">
        <div className="spmp-card-header">
          <h3>Absolute Session Timeout</h3>
          <button className="spmp-toggle" type="button" aria-label="Absolute timeout enabled">
            <span className="spmp-toggle-knob" />
          </button>
        </div>
        <div className="spmp-fields-grid">
          <label className="spmp-field">
            <span>Duration</span>
            <input value="8 hours" readOnly />
          </label>
          <label className="spmp-field">
            <span>Extend on Activity</span>
            <button className="spmp-select" type="button">
              <span>No</span>
              <FiChevronDown size={14} />
            </button>
          </label>
        </div>
      </section>

      <section className="spmp-card">
        <div className="spmp-card-header">
          <h3>Security Policies</h3>
        </div>
        <div className="spmp-policy-list">
          <div className="spmp-policy-row">
            <div className="spmp-policy-left">
              <span>Concurrent Session Limit</span>
              <input value="3" readOnly className="spmp-small-input" />
            </div>
            <button className="spmp-toggle" type="button" aria-label="Concurrent session enabled">
              <span className="spmp-toggle-knob" />
            </button>
          </div>
          <div className="spmp-policy-row">
            <span>Require Re-authentication</span>
            <button className="spmp-toggle" type="button" aria-label="Re-authentication enabled">
              <span className="spmp-toggle-knob" />
            </button>
          </div>
          <div className="spmp-policy-row">
            <span>IP Address Validation</span>
            <button className="spmp-toggle off" type="button" aria-label="IP validation disabled">
              <span className="spmp-toggle-knob" />
            </button>
          </div>
          <div className="spmp-policy-row">
            <span>Remember Device</span>
            <button className="spmp-toggle" type="button" aria-label="Remember device enabled">
              <span className="spmp-toggle-knob" />
            </button>
          </div>
        </div>
      </section>

      <section className="spmp-card spmp-table-card">
        <div className="spmp-card-header">
          <h3>Active Sessions Monitor</h3>
        </div>
        <div className="spmp-table-wrap">
          <table className="spmp-table">
            <thead>
              <tr>
                <th>User</th>
                <th>Device</th>
                <th>Location</th>
                <th>Started</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {sessionRows.map((row) => (
                <tr key={row.email}>
                  <td>
                    <div className="spmp-user-cell">
                      <span className={`spmp-avatar ${row.avatarClass}`}>{row.initials}</span>
                      <div>
                        <p className="spmp-user-name">{row.name}</p>
                        <p className="spmp-user-email">{row.email}</p>
                      </div>
                    </div>
                  </td>
                  <td>
                    <span className="spmp-inline-icon">{row.deviceIcon}{row.device}</span>
                  </td>
                  <td>
                    <span className="spmp-inline-icon">{row.locationIcon}{row.location}</span>
                  </td>
                  <td>{row.started}</td>
                  <td>
                    <button className="spmp-end-btn" type="button">End</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  )
}

export default SessionPolicyManagementPage
