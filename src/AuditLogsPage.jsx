import { useState, useMemo } from 'react'
import Sidebar from './Sidebar'
import AuditLogsHeader from './AuditLogsHeader'
import AuditFiltersPanel from './AuditFiltersPanel'
import ActivityTimelinePanel from './ActivityTimelinePanel'
import FilteredAlertBanner from './FilteredAlertBanner'
import ActiveFiltersDisplay from './ActiveFiltersDisplay'
import AuditStatsCards from './AuditStatsCards'
import ExportOptionsPanel from './ExportOptionsPanel'
import EventTimeline from './EventTimeline'
import EventDetailsPanel from './EventDetailsPanel'
import './audit-logs.css'

function AuditLogsPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [selectedEvent, setSelectedEvent] = useState(null)
  const [filtersApplied, setFiltersApplied] = useState(false)
  // Mock audit events data
  const mockAuditEvents = [
    {
      id: 'AUD-2024-001847',
      type: 'Failed Login Attempt',
      description: 'Multiple failed login attempts from IP 192.168.1.100',
      user: 'admin@karnovate.com',
      severity: 'Critical',
      timestamp: '2 minutes ago',
      ip: '192.168.1.100',
      icon: 'alert-circle'
    },
    {
      id: 'AUD-2024-001846',
      type: 'User Login',
      description: 'Successful login from Chrome browser',
      user: 'sarah.j@acmecorp.com',
      severity: 'Info',
      timestamp: '2 minutes ago',
      ip: '192.168.1.45',
      icon: 'login'
    },
    {
      id: 'AUD-2024-001845',
      type: 'Permission Modified',
      description: 'Admin permissions granted to Marcus Chen',
      user: 'm.chen@techstart.io',
      severity: 'Warning',
      timestamp: '15 minutes ago',
      ip: '10.0.1.128',
      icon: 'shield'
    },
    {
      id: 'AUD-2024-001844',
      type: 'Data Access',
      description: 'User accessed sensitive employee data export',
      user: 'alex.r@innovate.com',
      severity: 'Warning',
      timestamp: '28 minutes ago',
      ip: '172.16.0.99',
      icon: 'database'
    },
    {
      id: 'AUD-2024-001843',
      type: 'User Created',
      description: 'New user account created for James Wilson',
      user: 'admin@karnovate.com',
      severity: 'Info',
      timestamp: '45 minutes ago',
      ip: '192.168.1.10',
      icon: 'user-plus'
    },
    {
      id: 'AUD-2024-001842',
      type: 'System Configuration',
      description: 'System settings updated - MFA enforced',
      user: 'admin@karnovate.com',
      severity: 'Info',
      timestamp: '1 hour ago',
      ip: '192.168.1.10',
      icon: 'settings'
    },
    {
      id: 'AUD-2024-001841',
      type: 'Role Deleted',
      description: 'Custom role "Temporary Viewer" was deleted',
      user: 'admin@karnovate.com',
      severity: 'Critical',
      timestamp: '3 hours ago',
      ip: '192.168.1.10',
      icon: 'trash'
    },
    {
      id: 'AUD-2024-001840',
      type: 'User Disabled',
      description: 'User account disabled after inactivity',
      user: 'system@karnovate.com',
      severity: 'Warning',
      timestamp: '5 hours ago',
      ip: '127.0.0.1',
      icon: 'user-x'
    }
  ]

  // State management
  const [userSearch, setUserSearch] = useState('')
  const [selectedActionType, setSelectedActionType] = useState('All')
  const [selectedProduct, setSelectedProduct] = useState('All')
  const [dateRange, setDateRange] = useState('Last 7 days')
  const [selectedSeverities, setSelectedSeverities] = useState({
    Info: true,
    Warning: true,
    Critical: true
  })
  const [eventTypeFilters, setEventTypeFilters] = useState({
    'User Login': true,
    'Failed Login Attempt': true,
    'Permission Modified': true,
    'Data Access': true,
    'User Created': true,
    'System Configuration': false,
    'Role Deleted': false,
    'User Disabled': false
  })

  // Filter events based on criteria
  const filteredEvents = useMemo(() => {
    return mockAuditEvents.filter(event => {
      // Filter by user search
      if (userSearch && !event.user.toLowerCase().includes(userSearch.toLowerCase())) {
        return false
      }
      // Filter by severity
      if (!selectedSeverities[event.severity]) {
        return false
      }
      // Filter by event type
      if (!eventTypeFilters[event.type]) {
        return false
      }
      return true
    })
  }, [userSearch, selectedSeverities, eventTypeFilters])

  // Calculate statistics
  const stats = {
    totalEvents: 2847,
    securityEvents: 23,
    dataAccess: 1456,
    userActions: 1368
  }

  // Handlers
  const handleUserSearch = (e) => {
    setUserSearch(e.target.value)
  }

  const handleActionTypeChange = (e) => {
    setSelectedActionType(e.target.value)
  }

  const handleProductChange = (e) => {
    setSelectedProduct(e.target.value)
  }

  const handleDateRangeChange = (e) => {
    setDateRange(e.target.value)
  }

  const handleQuickDateSelect = (range) => {
    setDateRange(range)
  }

  const handleEventTypeToggle = (eventType) => {
    setEventTypeFilters(prev => ({
      ...prev,
      [eventType]: !prev[eventType]
    }))
  }

  const handleSeverityToggle = (severity) => {
    setSelectedSeverities(prev => ({
      ...prev,
      [severity]: !prev[severity]
    }))
  }

  const handleApplyFilters = () => {
    setFiltersApplied(true)
    console.log('Filters applied:', {
      userSearch,
      eventTypeFilters,
      selectedSeverities,
      dateRange
    })
  }

  const handleResetFilters = () => {
    setFiltersApplied(false)
    setUserSearch('')
    setSelectedActionType('All')
    setSelectedProduct('All')
    setDateRange('Last 7 days')
    setSelectedSeverities({
      Info: true,
      Warning: true,
      Critical: true
    })
    setEventTypeFilters({
      'User Login': true,
      'Failed Login Attempt': true,
      'Permission Modified': true,
      'Data Access': true,
      'User Created': true,
      'System Configuration': false,
      'Role Deleted': false,
      'User Disabled': false
    })
  }

  const handleExportCsv = () => {
    console.log('Exporting to CSV...')
  }

  const handleExportPdf = () => {
    console.log('Exporting to PDF...')
  }

  const handleDownload = () => {
    console.log('Downloading logs...')
  }

  return (
    <main className="dashboard-layout">
      <Sidebar sidebarOpen={sidebarOpen} />
      <div className={`sidebar-overlay ${sidebarOpen ? 'active' : ''}`} onClick={() => setSidebarOpen(false)} />
      <section className="audit-logs-container">
        <AuditLogsHeader 
          stats={stats}
          onDownload={handleDownload}
          unreadCount={3}
          onMenuToggle={() => setSidebarOpen(!sidebarOpen)}
        />
        
        {!filtersApplied ? (
          // Show filter panel initially
          <div className="audit-logs-main">
            <AuditFiltersPanel
              userSearch={userSearch}
              onUserSearch={handleUserSearch}
              selectedActionType={selectedActionType}
              onActionTypeChange={handleActionTypeChange}
              selectedProduct={selectedProduct}
              onProductChange={handleProductChange}
              dateRange={dateRange}
              onDateRangeChange={handleDateRangeChange}
              onQuickDateSelect={handleQuickDateSelect}
              eventTypeFilters={eventTypeFilters}
              onEventTypeToggle={handleEventTypeToggle}
              selectedSeverities={selectedSeverities}
              onSeverityToggle={handleSeverityToggle}
              onApplyFilters={handleApplyFilters}
              onResetFilters={handleResetFilters}
            />
            
            <ActivityTimelinePanel
              events={filteredEvents}
              onExportCsv={handleExportCsv}
              onExportPdf={handleExportPdf}
            />
          </div>
        ) : (
          // Show filtered results view
          <div className="audit-logs-content">
            <div className="audit-main-panel">
              <FilteredAlertBanner onBackToAllLogs={handleResetFilters} />
              <ActiveFiltersDisplay />
              <AuditStatsCards />
              <ExportOptionsPanel />
              <EventTimeline events={filteredEvents} onEventSelect={setSelectedEvent} />
            </div>
            
            {selectedEvent && (
              <>
                <div 
                  className="event-details-overlay"
                  onClick={() => setSelectedEvent(null)}
                />
                <div className="event-details-side-panel">
                  <button 
                    className="close-details-btn"
                    onClick={() => setSelectedEvent(null)}
                    title="Close"
                    aria-label="Close event details"
                  >
                    ✕
                  </button>
                  <EventDetailsPanel event={selectedEvent} />
                </div>
              </>
            )}
          </div>
        )}
      </section>
    </main>
  )
}

export default AuditLogsPage
