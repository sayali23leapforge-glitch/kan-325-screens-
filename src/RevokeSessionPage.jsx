import { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { FiArrowLeft, FiBell } from 'react-icons/fi'
import Sidebar from './Sidebar'
import './revoke-session-page.css'

function RevokeSessionPage() {
  const { sessionId } = useParams()
  const navigate = useNavigate()
  const [sidebarOpen, setSidebarOpen] = useState(false)

  // Mock session data - in real app, fetch based on sessionId
  const mockSessions = [
    {
      id: 'sess_7x9k2m4p1q8w',
      user: 'Sarah Johnson',
      email: 'sarah.johnson@company.com',
      avatar: 'https://placehold.co/60x60',
      device: 'Chrome 120',
      deviceType: 'Windows 11',
      ipAddress: '192.168.1.45',
      location: 'New York, US',
      loginTime: '2 hours ago',
      duration: '2h 15m',
      status: 'Active'
    },
    {
      id: 'sess_9k1m5n2p3q7r',
      user: 'John Smith',
      email: 'john.smith@company.com',
      avatar: 'https://placehold.co/60x60',
      device: 'Safari 17',
      deviceType: 'macOS Sonoma',
      ipAddress: '10.0.0.89',
      location: 'San Francisco, US',
      loginTime: '5 hours ago',
      duration: '5h 42m',
      status: 'Active'
    },
    {
      id: 'sess_2p8r4t6u1v3w',
      user: 'Emma Davis',
      email: 'emma.davis@company.com',
      avatar: 'https://placehold.co/60x60',
      device: 'Firefox 121',
      deviceType: 'Ubuntu 22.04',
      ipAddress: '172.16.0.23',
      location: 'London, UK',
      loginTime: '8 hours ago',
      duration: '8h 3m',
      status: 'Active'
    },
    {
      id: 'sess_5v9w2x8y3z1a',
      user: 'Michael Brown',
      email: 'michael.brown@company.com',
      avatar: 'https://placehold.co/60x60',
      device: 'Mobile Safari',
      deviceType: 'iPhone 15 Pro',
      ipAddress: '203.0.113.42',
      location: 'Toronto, Canada',
      loginTime: '1 hour ago',
      duration: '1h 22m',
      status: 'Active'
    },
    {
      id: 'sess_3a7b1c4d6e9f',
      user: 'Lisa Wilson',
      email: 'lisa.wilson@company.com',
      avatar: 'https://placehold.co/60x60',
      device: 'Edge 121',
      deviceType: 'Windows 11',
      ipAddress: '198.51.100.78',
      location: 'Sydney, Australia',
      loginTime: '12 hours ago',
      duration: '12h 51m',
      status: 'Active'
    }
  ]

  const session = mockSessions.find(s => s.id === sessionId)
  const [revocationOption, setRevocationOption] = useState('this-session')
  const [reason, setReason] = useState('Security breach suspected')
  const [notes, setNotes] = useState('')
  const [confirmed, setConfirmed] = useState(false)

  if (!session) {
    return (
      <main className="dashboard-layout">
        <Sidebar sidebarOpen={sidebarOpen} />
        <div className={`sidebar-overlay ${sidebarOpen ? 'active' : ''}`} onClick={() => setSidebarOpen(false)} />
        <section className="dashboard-main revoke-session-main">
          <div className="revoke-page-header">
            <h1>Session Not Found</h1>
          </div>
          <div className="revoke-page-error">
            <p>The session you're looking for could not be found.</p>
          </div>
        </section>
      </main>
    )
  }

  const handleRevoke = () => {
    if (confirmed) {
      console.log('Revoking session:', {
        sessionId: session.id,
        option: revocationOption,
        reason,
        notes
      })
      // Navigate back to View Sessions
      navigate('/view-sessions')
    }
  }

  const handleCancel = () => {
    navigate('/view-sessions')
  }

  return (
    <main className="dashboard-layout">
      <Sidebar sidebarOpen={sidebarOpen} />
      <div className={`sidebar-overlay ${sidebarOpen ? 'active' : ''}`} onClick={() => setSidebarOpen(false)} />
      <section className="dashboard-main revoke-session-main">
        {/* Header Section */}
        <div className="revoke-page-header">
          <div className="header-top">
            <h1 className="page-title">Revoke Session</h1>
            <div className="header-actions">
              <button className="btn-notifications">
                <FiBell size={20} />
                <span className="notification-badge">3</span>
              </button>
              <button onClick={handleCancel} className="btn-back-primary">
                <FiArrowLeft size={16} />
                Back to Sessions
              </button>
            </div>
          </div>
          <div className="header-breadcrumb">
            <span className="breadcrumb-item">Home</span>
            <span className="breadcrumb-sep">/</span>
            <span className="breadcrumb-item">Security</span>
            <span className="breadcrumb-sep">/</span>
            <span className="breadcrumb-item active">Revoke Session</span>
          </div>
        </div>

        {/* Content Section */}
        <div className="revoke-page-content">
          {/* Alert Banner */}
          <div className="alert-section">
            <div className="alert-icon">âš </div>
            <div>
              <h3 className="alert-title">Session Revocation Confirmation</h3>
              <p className="alert-message">You are about to revoke an active user session. This action cannot be undone.</p>
            </div>
          </div>

          {/* Session Details */}
          <div className="details-section">
            <h2 className="section-heading">Session Details</h2>
            
            <div className="session-card">
              <div className="user-info">
                <img src={session.avatar} alt={session.user} className="user-avatar" />
                <div>
                  <h3 className="user-name">{session.user}</h3>
                  <p className="user-email">{session.email}</p>
                  <span className="user-flag">Flagged as Suspicious</span>
                </div>
              </div>

              <div className="session-meta">
                <div className="meta-row">
                  <span className="meta-label">Session ID:</span>
                  <span className="meta-value">{session.id}</span>
                </div>
                <div className="meta-row">
                  <span className="meta-label">Started:</span>
                  <span className="meta-value">{session.loginTime}</span>
                </div>
                <div className="meta-row">
                  <span className="meta-label">Duration:</span>
                  <span className="meta-value">{session.duration}</span>
                </div>
              </div>
            </div>

            {/* Device Info Grid */}
            <div className="device-grid">
              <div className="device-card">
                <div className="device-icon">ðŸ’»</div>
                <div className="device-name">{session.device}</div>
                <div className="device-type">{session.deviceType}</div>
              </div>
              <div className="device-card">
                <div className="device-icon">ðŸ“</div>
                <div className="device-name">{session.location}</div>
                <div className="device-type">{session.ipAddress}</div>
              </div>
              <div className="device-card risk-card">
                <div className="device-icon">âš ï¸</div>
                <div className="device-name risk-text">High Risk</div>
                <div className="device-type">Multiple alerts</div>
              </div>
            </div>
          </div>

          {/* Security Alerts */}
          <div className="alerts-section">
            <h2 className="section-heading alerts-heading">ðŸ”´ Security Alerts</h2>
            
            <div className="alerts-list">
              {[
                { title: 'Unusual Geographic Location', desc: 'Login from Russia - outside normal user pattern', severity: 'High', icon: 'ðŸ”´' },
                { title: 'Unusual Login Time', desc: 'Session started at 3:42 AM - outside normal hours', severity: 'Medium', icon: 'ðŸŸ ' },
                { title: 'Anonymous Network', desc: 'Connection through VPN/Tor network detected', severity: 'High', icon: 'ðŸ”´' }
              ].map((alert, i) => (
                <div key={i} className="alert-item">
                  <span className="alert-icon">{alert.icon}</span>
                  <div className="alert-content">
                    <h4 className="alert-item-title">{alert.title}</h4>
                    <p className="alert-item-desc">{alert.desc}</p>
                  </div>
                  <span className={`severity-badge severity-${alert.severity.toLowerCase()}`}>{alert.severity}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Revocation Options */}
          <div className="options-section">
            <h2 className="section-heading">Revocation Options</h2>
            
            <div className="radio-options">
              <label className="radio-option">
                <input
                  type="radio"
                  value="this-session"
                  checked={revocationOption === 'this-session'}
                  onChange={(e) => setRevocationOption(e.target.value)}
                />
                <span className="radio-label">
                  <span className="radio-title">Revoke This Session Only</span>
                  <span className="radio-desc">Only this specific session will be terminated</span>
                </span>
              </label>

              <label className="radio-option">
                <input
                  type="radio"
                  value="all-sessions"
                  checked={revocationOption === 'all-sessions'}
                  onChange={(e) => setRevocationOption(e.target.value)}
                />
                <span className="radio-label">
                  <span className="radio-title">Revoke All Sessions</span>
                  <span className="radio-desc">All active sessions for this user will be terminated</span>
                </span>
              </label>

              <label className="radio-option danger-option">
                <input
                  type="radio"
                  value="block-account"
                  checked={revocationOption === 'block-account'}
                  onChange={(e) => setRevocationOption(e.target.value)}
                />
                <span className="radio-label">
                  <span className="radio-title">Block This Account</span>
                  <span className="radio-desc">Account will be temporarily blocked and all sessions terminated</span>
                </span>
              </label>
            </div>
          </div>

          {/* Reason Section */}
          <div className="form-section">
            <label className="form-label">
              Reason for Revocation
            </label>
            <input
              type="text"
              className="form-input"
              value={reason}
              onChange={(e) => setReason(e.target.value)}
              placeholder="Enter reason for revocation"
            />
          </div>

          {/* Notes Section */}
          <div className="form-section">
            <label className="form-label">
              Additional Notes (Optional)
            </label>
            <textarea
              className="form-textarea"
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="Add any additional context or notes about this revocation..."
              rows="4"
            />
          </div>

          {/* Confirmation Section */}
          <div className="confirmation-section">
            <div className="warning-box">
              <span className="warning-icon">âš ï¸</span>
              <div>
                <h3 className="warning-title">Please Confirm</h3>
                <p className="warning-text">This action will immediately terminate the selected session(s). The user will be logged out and may lose any unsaved work.</p>
              </div>
            </div>

            <label className="confirmation-checkbox">
              <input
                type="checkbox"
                checked={confirmed}
                onChange={(e) => setConfirmed(e.target.checked)}
              />
              <span>I understand the consequences and want to proceed</span>
            </label>
          </div>

          {/* Action Buttons */}
          <div className="action-buttons">
            <button
              className="btn-revoke"
              onClick={handleRevoke}
              disabled={!confirmed}
            >
              ðŸ”’ Revoke Session
            </button>
            <button
              className="btn-cancel"
              onClick={handleCancel}
            >
              â† Cancel & Go Back
            </button>
          </div>
        </div>
      </section>
    </main>
  )
}

export default RevokeSessionPage