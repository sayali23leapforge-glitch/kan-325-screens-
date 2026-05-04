import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Sidebar from './Sidebar'
import ViewSessionsTable from './ViewSessionsTable'
import './view-sessions.css'
import { FiBell, FiMenu, FiSearch, FiSettings } from 'react-icons/fi'

function ViewSessionsPage() {
  const navigate = useNavigate()
  const [selectedSessions, setSelectedSessions] = useState([])
  const [selectAll, setSelectAll] = useState(false)
  const [sidebarOpen, setSidebarOpen] = useState(false)

  // Mock sessions data
  const mockSessions = [
    {
      id: 'sess_7x9k2m4p1q8w',
      user: 'Sarah Johnson',
      email: 'sarah.johnson@company.com',
      avatar: 'SJ',
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
      user: 'Michael Chen',
      email: 'm.chen@company.com',
      avatar: 'MC',
      device: 'Safari Mobile',
      deviceType: 'iOS 17.2',
      ipAddress: '10.0.1.23',
      location: 'San Francisco, US',
      loginTime: '45 minutes ago',
      duration: '45m',
      status: 'Active'
    },
    {
      id: 'sess_2p8r4t6u1v3w',
      user: 'Emma Davis',
      email: 'emma.d@company.com',
      avatar: 'ED',
      device: 'Firefox 121',
      deviceType: 'macOS 14',
      ipAddress: '172.16.0.89',
      location: 'London, UK',
      loginTime: '3 hours ago',
      duration: '3h 22m',
      status: 'Active'
    },
    {
      id: 'sess_5v9w2x8y3z1a',
      user: 'James Wilson',
      email: 'j.wilson@company.com',
      avatar: 'JW',
      device: 'Chrome Mobile',
      deviceType: 'Android 14',
      ipAddress: '198.51.100.42',
      location: 'Toronto, CA',
      loginTime: '1 hour ago',
      duration: '1h 08m',
      status: 'Active'
    },
    {
      id: 'sess_3a7b1c4d6e9f',
      user: 'Lisa Anderson',
      email: 'l.anderson@company.com',
      avatar: 'LA',
      device: 'Edge 120',
      deviceType: 'Windows 11',
      ipAddress: '203.0.113.15',
      location: 'Sydney, AU',
      loginTime: '5 hours ago',
      duration: '5h 34m',
      status: 'Active'
    }
  ]

  const handleSelectSession = (id) => {
    setSelectedSessions((prev) => {
      if (prev.includes(id)) {
        return prev.filter((sid) => sid !== id)
      } else {
        return [...prev, id]
      }
    })
  }

  const handleSelectAll = () => {
    if (selectAll) {
      setSelectedSessions([])
      setSelectAll(false)
    } else {
      setSelectedSessions(mockSessions.map((s) => s.id))
      setSelectAll(true)
    }
  }

  const handleRevoke = (sessionId) => {
    navigate(`/view-sessions/revoke/${sessionId}`)
  }

  const handleBulkRevoke = () => {
    if (selectedSessions.length > 0) {
      const firstSelectedSessionId = selectedSessions[0]
      navigate(`/view-sessions/revoke/${firstSelectedSessionId}`)
    }
  }

  return (
    <main className="dashboard-layout">
      <Sidebar sidebarOpen={sidebarOpen} />
      <div className={`sidebar-overlay ${sidebarOpen ? 'active' : ''}`} onClick={() => setSidebarOpen(false)} />
      <section className="dashboard-main view-sessions-main">
        {/* Header */}
        <header className="view-sessions-header">
          <div className="header-top">
            <div className="header-title-group">
              <h1 className="header-title">View Sessions</h1>
            </div>
            <div className="header-actions">
              <button className="btn-revoke-session" onClick={handleBulkRevoke} disabled={selectedSessions.length === 0}>
                <span className="icon">🔒</span>
                Revoke Session
              </button>
              <button className="btn-notifications">
                <FiBell size={20} />
                <span className="notification-badge">3</span>
              </button>
            </div>
          </div>
          <div className="header-breadcrumb">
            <span className="breadcrumb-item">Home</span>
            <span className="breadcrumb-sep">/</span>
            <span className="breadcrumb-item">Security</span>
            <span className="breadcrumb-sep">/</span>
            <span className="breadcrumb-item active">Sessions</span>
          </div>
        </header>

        <div className="view-sessions-content">
          {/* Stats Cards */}
          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-icon" style={{ backgroundColor: '#DCFCE7' }}>
                <span style={{ color: '#16A34A', fontSize: '24px' }}>✓</span>
              </div>
              <div className="stat-badge" style={{ backgroundColor: '#DCFCE7', color: '#166534' }}>Live</div>
              <div className="stat-value">1,246</div>
              <div className="stat-label">Active Sessions</div>
            </div>

            <div className="stat-card">
              <div className="stat-icon" style={{ backgroundColor: '#DBEAFE' }}>
                <span style={{ color: '#2563EB', fontSize: '24px' }}>⏱</span>
              </div>
              <div className="stat-badge" style={{ backgroundColor: '#DBEAFE', color: '#1E40AF' }}>24h</div>
              <div className="stat-value">4.2h</div>
              <div className="stat-label">Avg. Duration</div>
            </div>

            <div className="stat-card">
              <div className="stat-icon" style={{ backgroundColor: '#FFEDD5' }}>
                <span style={{ color: '#EA580C', fontSize: '24px' }}>⚠</span>
              </div>
              <div className="stat-badge" style={{ backgroundColor: '#FEE2E2', color: '#991B1B' }}>Alert</div>
              <div className="stat-value">22</div>
              <div className="stat-label">Suspicious Sessions</div>
            </div>

            <div className="stat-card">
              <div className="stat-icon" style={{ backgroundColor: '#F3E8FF' }}>
                <span style={{ color: '#9333EA', fontSize: '24px' }}>📱</span>
              </div>
              <div className="stat-badge" style={{ backgroundColor: '#F3E8FF', color: '#6B21A8' }}>Mobile</div>
              <div className="stat-value">67%</div>
              <div className="stat-label">Mobile Sessions</div>
            </div>
          </div>

          {/* Alert Banner */}
          <div className="alert-banner alert-banner-success">
            <div className="alert-icon">✓</div>
            <div className="alert-content">
              <div className="alert-title">Session Revoked Successfully</div>
              <div className="alert-message">User "Unknown User" session from Russia has been terminated and access revoked.</div>
            </div>
            <button className="alert-close">✕</button>
          </div>

          {/* Toolbar */}
          <div className="toolbar">
            <div className="toolbar-search">
              <FiSearch className="search-icon" />
              <input type="text" placeholder="Search sessions..." className="search-input" />
            </div>
            <div className="toolbar-filters">
              <select className="filter-select">
                <option>All Sessions</option>
              </select>
              <select className="filter-select">
                <option>All Devices</option>
              </select>
              <button className="btn-filter-icon">
                <FiSettings size={18} />
              </button>
            </div>
          </div>

          {/* Active Sessions Table */}
          <div className="sessions-table-wrapper">
            <div className="sessions-table-header">
              <div className="header-title">Active Sessions</div>
              <div className="header-actions">
                <button className="header-action-btn">⋮</button>
                <button className="header-action-btn">↔</button>
              </div>
            </div>
            <ViewSessionsTable
              sessions={mockSessions}
              selectedSessions={selectedSessions}
              selectAll={selectAll}
              onSelectSession={handleSelectSession}
              onSelectAll={handleSelectAll}
              onRevoke={handleRevoke}
            />
          </div>

          {/* Pagination */}
          <div className="pagination-section">
            <div className="pagination-info">
              <span>Showing <strong>1-5</strong> of <strong>1,246</strong> sessions</span>
            </div>
            <div className="pagination-controls">
              <button className="pagination-btn pagination-btn-prev" disabled>◀</button>
              <button className="pagination-btn pagination-btn-active">1</button>
              <button className="pagination-btn">2</button>
              <button className="pagination-btn">3</button>
              <span className="pagination-dots">...</span>
              <button className="pagination-btn">25</button>
              <button className="pagination-btn pagination-btn-next">▶</button>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default ViewSessionsPage
