import { useState } from 'react'
import Sidebar from './Sidebar'
import SessionsTokensHeader from './SessionsTokensHeader'
import MonitoringToolbar from './MonitoringToolbar'
import ActiveSessionsCard from './ActiveSessionsCard'
import ApiTokensCard from './ApiTokensCard'
import './sessions-tokens.css'

function SessionsTokensPage() {
  const [selectedSessions, setSelectedSessions] = useState([])
  const [selectAll, setSelectAll] = useState(false)
  const [sidebarOpen, setSidebarOpen] = useState(false)

  // Mock sessions data
  const mockSessions = [
    {
      id: 1,
      user: 'Sarah Johnson',
      email: 'sarah.j@acmecorp.com',
      avatar: 'SJ',
      device: 'Chrome on Windows',
      ipAddress: '192.168.1.45',
      location: 'San Francisco, US',
      loginTime: '2 hours ago',
      status: 'Active'
    },
    {
      id: 2,
      user: 'Marcus Chen',
      email: 'm.chen@techstart.io',
      avatar: 'MC',
      device: 'Safari on iPhone',
      ipAddress: '10.0.1.128',
      location: 'New York, US',
      loginTime: '5 hours ago',
      status: 'Active'
    },
    {
      id: 3,
      user: 'Alex Rivera',
      email: 'alex.r@innovate.com',
      avatar: 'AR',
      device: 'Firefox on Mac',
      ipAddress: '172.16.0.99',
      location: 'Austin, US',
      loginTime: '1 day ago',
      status: 'Idle'
    }
  ]

  // Mock tokens data
  const mockTokens = [
    {
      id: 1,
      title: 'Production API Token',
      tagLabel: 'OAuth 2.0',
      tagColor: 'blue',
      clientId: 'prod_api_xk9j2n4m8q7p',
      scope: 'read:users write:users admin:all',
      created: 'Dec 15, 2024',
      daysRemaining: 45,
      isExpiringSoon: false
    },
    {
      id: 2,
      title: 'Development Token',
      tagLabel: 'JWT',
      tagColor: 'purple',
      clientId: 'dev_api_7t3h5m9k2w8x',
      scope: 'read:users read:products',
      created: 'Jan 5, 2025',
      daysRemaining: 27,
      isExpiringSoon: false
    },
    {
      id: 3,
      title: 'Legacy Integration Token',
      tagLabel: 'API Key',
      tagColor: 'gray',
      warningTag: 'Expiring Soon',
      clientId: 'legacy_5r8n3j6m1k9p',
      scope: 'read:all',
      created: 'Aug 20, 2024',
      daysRemaining: 3,
      isExpiringSoon: true
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
    console.log('Revoke session:', sessionId)
    // TODO: Add revoke confirmation modal
  }

  const handleBulkRevoke = () => {
    console.log('Bulk revoke sessions:', selectedSessions)
    // TODO: Add bulk revoke confirmation modal
  }

  const handleRevokeToken = (tokenId) => {
    console.log('Revoke token:', tokenId)
    // TODO: Add token revoke confirmation modal
  }

  const handleExport = () => {
    console.log('Export sessions and tokens')
    // TODO: Implement export
  }

  const handleFilter = () => {
    console.log('Open filter panel')
    // TODO: Implement filter panel
  }

  const handleSearch = () => {
    console.log('Open search')
    // TODO: Implement search modal
  }

  const handleNotifications = () => {
    console.log('View notifications')
    // TODO: Implement notifications panel
  }

  return (
    <main className="dashboard-layout">
      <Sidebar sidebarOpen={sidebarOpen} />
      <div className={`sidebar-overlay ${sidebarOpen ? 'active' : ''}`} onClick={() => setSidebarOpen(false)} />
      <section className="dashboard-main sessions-main">
        <SessionsTokensHeader
          onBulkRevoke={handleBulkRevoke}
          onSearch={handleSearch}
          onNotifications={handleNotifications}
          onMenuToggle={() => setSidebarOpen(!sidebarOpen)}
          notificationCount={3}
        />

        <div className="sessions-tokens-content">
          <MonitoringToolbar onFilter={handleFilter} onExport={handleExport} />

          <ActiveSessionsCard
            sessions={mockSessions}
            selectedSessions={selectedSessions}
            selectAll={selectAll}
            onSelectSession={handleSelectSession}
            onSelectAll={handleSelectAll}
            onRevoke={handleRevoke}
          />

          <ApiTokensCard tokens={mockTokens} onRevokeToken={handleRevokeToken} />
        </div>
      </section>
    </main>
  )
}

export default SessionsTokensPage
