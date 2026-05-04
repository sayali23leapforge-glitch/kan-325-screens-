import { useState } from 'react'
import Sidebar from './Sidebar'
import ApplicationsHeader from './ApplicationsHeader'
import ApplicationsToolbar from './ApplicationsToolbar'
import ApplicationCard from './ApplicationCard'
import Pagination from './Pagination'
import ApplicationsEmptyStatePage from './ApplicationsEmptyStatePage'
import './applications.css'

const APPLICATIONS_DATA = [
  {
    id: 1,
    name: 'Customer Portal',
    status: 'Active',
    clientId: 'app_cust_portal_001',
    type: 'Web Application',
    created: 'Mar 15, 2024',
    lastUsed: '2 hours ago',
    iconColor: 'blue'
  },
  {
    id: 2,
    name: 'Mobile App iOS',
    status: 'Active',
    clientId: 'app_mobile_ios_002',
    type: 'Mobile App',
    created: 'Mar 10, 2024',
    lastUsed: '5 minutes ago',
    iconColor: 'purple'
  },
  {
    id: 3,
    name: 'API Gateway',
    status: 'Pending',
    clientId: 'api_gateway_service_003',
    type: 'API Service',
    created: 'Mar 8, 2024',
    lastUsed: 'Never',
    iconColor: 'green'
  },
  {
    id: 4,
    name: 'Admin Dashboard',
    status: 'Active',
    clientId: 'admin_dashboard_004',
    type: 'SPA',
    created: 'Feb 28, 2024',
    lastUsed: '1 day ago',
    iconColor: 'orange'
  },
  {
    id: 5,
    name: 'Mobile App Android',
    status: 'Inactive',
    clientId: 'app_android_005',
    type: 'Mobile App',
    created: 'Feb 20, 2024',
    lastUsed: '2 weeks ago',
    iconColor: 'red'
  },
  {
    id: 6,
    name: 'Developer API',
    status: 'Active',
    clientId: 'dev_api_service_006',
    type: 'API Service',
    created: 'Jan 15, 2024',
    lastUsed: '30 minutes ago',
    iconColor: 'indigo'
  }
]

// Set to empty array to show empty state
// const CURRENT_APPLICATIONS = []

// Set to APPLICATIONS_DATA to show list
const CURRENT_APPLICATIONS = APPLICATIONS_DATA

function ApplicationsPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [searchValue, setSearchValue] = useState('')
  const [statusFilter, setStatusFilter] = useState('All Status')
  const [typeFilter, setTypeFilter] = useState('All Types')
  const [currentPage, setCurrentPage] = useState(1)

  // Show empty state if no applications
  if (CURRENT_APPLICATIONS.length === 0) {
    return <ApplicationsEmptyStatePage />
  }

  // Filter applications
  const filteredApps = CURRENT_APPLICATIONS.filter(app => {
    const matchesSearch = app.name.toLowerCase().includes(searchValue.toLowerCase()) ||
                         app.clientId.toLowerCase().includes(searchValue.toLowerCase())
    const matchesStatus = statusFilter === 'All Status' || app.status === statusFilter
    const matchesType = typeFilter === 'All Types' || app.type === typeFilter
    return matchesSearch && matchesStatus && matchesType
  })

  return (
    <main className="dashboard-layout">
      <Sidebar sidebarOpen={sidebarOpen} />
      <div className={`sidebar-overlay ${sidebarOpen ? 'active' : ''}`} onClick={() => setSidebarOpen(false)} />
      <section className="dashboard-main">
        <ApplicationsHeader onMenuToggle={() => setSidebarOpen(!sidebarOpen)} />

        <div className="dashboard-content">
          <ApplicationsToolbar
            searchValue={searchValue}
            onSearchChange={setSearchValue}
            statusFilter={statusFilter}
            onStatusChange={setStatusFilter}
            typeFilter={typeFilter}
            onTypeChange={setTypeFilter}
          />

          <div className="applications-grid">
            {filteredApps.length > 0 ? (
              filteredApps.map(app => (
                <ApplicationCard
                  key={app.id}
                  app={app}
                  iconColor={app.iconColor}
                />
              ))
            ) : (
              <div className="no-results">
                <p>No applications found</p>
              </div>
            )}
          </div>

          {filteredApps.length > 0 && (
            <Pagination
              currentPage={currentPage}
              totalPages={4}
              onPageChange={setCurrentPage}
            />
          )}
        </div>
      </section>
    </main>
  )
}

export default ApplicationsPage
