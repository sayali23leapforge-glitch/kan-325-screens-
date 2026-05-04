import { useState, useMemo } from 'react'
import { useNavigate } from 'react-router-dom'
import Sidebar from './Sidebar'
import UsersHeader from './UsersHeader'
import UsersFiltersBar from './UsersFiltersBar'
import UsersSecurityAlertBanner from './UsersSecurityAlertBanner'
import UsersActiveFiltersDisplay from './UsersActiveFiltersDisplay'
import UsersStatsCards from './UsersStatsCards'
import UsersSelectionBar from './UsersSelectionBar'
import UsersTable from './UsersTable'
import UsersPagination from './UsersPagination'
import './users-management.css'

function UsersManagementPage() {
  const navigate = useNavigate()
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [filtersApplied, setFiltersApplied] = useState(false)
  
  // Mock users data - 38 with MFA disabled, rest with MFA enabled
  const mockUsersData = [
    // MFA Disabled Users (38 total)
    { id: 1, name: 'Sarah Johnson', email: 'sarah.johnson@company.com', role: 'Admin', status: 'Active', mfa: 'Disabled', lastLogin: '2 hours ago', ipAddress: '192.168.1.100' },
    { id: 2, name: 'James Wilson', email: 'james.wilson@company.com', role: 'Manager', status: 'Active', mfa: 'Disabled', lastLogin: '5 hours ago', ipAddress: '10.0.0.45' },
    { id: 3, name: 'Emily Rodriguez', email: 'emily.rodriguez@company.com', role: 'User', status: 'Active', mfa: 'Disabled', lastLogin: '1 day ago', ipAddress: '172.16.0.89' },
    { id: 4, name: 'David Martinez', email: 'david.martinez@company.com', role: 'Developer', status: 'Active', mfa: 'Disabled', lastLogin: '3 hours ago', ipAddress: '192.168.1.55' },
    { id: 5, name: 'Lisa Thompson', email: 'lisa.thompson@company.com', role: 'User', status: 'Active', mfa: 'Disabled', lastLogin: '6 hours ago', ipAddress: '10.0.0.120' },
    { id: 6, name: 'Robert Anderson', email: 'robert.anderson@company.com', role: 'Analyst', status: 'Active', mfa: 'Disabled', lastLogin: '8 hours ago', ipAddress: '192.168.2.30' },
    { id: 7, name: 'Jennifer Chen', email: 'jennifer.chen@company.com', role: 'Manager', status: 'Active', mfa: 'Disabled', lastLogin: '1 day ago', ipAddress: '172.16.5.67' },
    { id: 8, name: 'Michael Brown', email: 'michael.brown@company.com', role: 'User', status: 'Active', mfa: 'Disabled', lastLogin: '2 days ago', ipAddress: '10.1.0.15' },
    { id: 9, name: 'Amanda Williams', email: 'amanda.williams@company.com', role: 'Developer', status: 'Active', mfa: 'Disabled', lastLogin: '12 hours ago', ipAddress: '192.168.3.45' },
    { id: 10, name: 'Chris Lee', email: 'chris.lee@company.com', role: 'User', status: 'Active', mfa: 'Disabled', lastLogin: '3 days ago', ipAddress: '10.2.0.88' },
    { id: 11, name: 'Nicole Taylor', email: 'nicole.taylor@company.com', role: 'Manager', status: 'Active', mfa: 'Disabled', lastLogin: '2 hours ago', ipAddress: '172.17.0.22' },
    { id: 12, name: 'Kevin Martinez', email: 'kevin.martinez@company.com', role: 'Analyst', status: 'Active', mfa: 'Disabled', lastLogin: '5 hours ago', ipAddress: '192.168.5.99' },
    { id: 13, name: 'Rachel Johnson', email: 'rachel.johnson@company.com', role: 'User', status: 'Active', mfa: 'Disabled', lastLogin: '4 days ago', ipAddress: '10.3.0.50' },
    { id: 14, name: 'Tom Garcia', email: 'tom.garcia@company.com', role: 'Developer', status: 'Active', mfa: 'Disabled', lastLogin: '1 day ago', ipAddress: '192.168.6.11' },
    { id: 15, name: 'Patricia Moore', email: 'patricia.moore@company.com', role: 'Manager', status: 'Active', mfa: 'Disabled', lastLogin: '2 hours ago', ipAddress: '172.18.0.75' },
    { id: 16, name: 'Steven Jackson', email: 'steven.jackson@company.com', role: 'User', status: 'Active', mfa: 'Disabled', lastLogin: '6 hours ago', ipAddress: '10.4.0.33' },
    { id: 17, name: 'Karen White', email: 'karen.white@company.com', role: 'Analyst', status: 'Active', mfa: 'Disabled', lastLogin: '3 days ago', ipAddress: '192.168.7.44' },
    { id: 18, name: 'Mark Harris', email: 'mark.harris@company.com', role: 'Developer', status: 'Active', mfa: 'Disabled', lastLogin: '8 hours ago', ipAddress: '10.5.0.99' },
    { id: 19, name: 'Donna Clark', email: 'donna.clark@company.com', role: 'User', status: 'Active', mfa: 'Disabled', lastLogin: '2 days ago', ipAddress: '172.19.0.88' },
    { id: 20, name: 'Paul Lewis', email: 'paul.lewis@company.com', role: 'Manager', status: 'Active', mfa: 'Disabled', lastLogin: '7 hours ago', ipAddress: '192.168.8.22' },
    { id: 21, name: 'Susan Walker', email: 'susan.walker@company.com', role: 'Analyst', status: 'Active', mfa: 'Disabled', lastLogin: '4 days ago', ipAddress: '10.6.0.55' },
    { id: 22, name: 'James Young', email: 'james.young@company.com', role: 'User', status: 'Active', mfa: 'Disabled', lastLogin: '1 day ago', ipAddress: '192.168.9.77' },
    { id: 23, name: 'Mary Hernandez', email: 'mary.hernandez@company.com', role: 'Developer', status: 'Active', mfa: 'Disabled', lastLogin: '5 hours ago', ipAddress: '10.7.0.11' },
    { id: 24, name: 'Richard King', email: 'richard.king@company.com', role: 'Manager', status: 'Active', mfa: 'Disabled', lastLogin: '2 hours ago', ipAddress: '172.20.0.33' },
    { id: 25, name: 'Margaret Scott', email: 'margaret.scott@company.com', role: 'User', status: 'Active', mfa: 'Disabled', lastLogin: '3 days ago', ipAddress: '192.168.10.88' },
    { id: 26, name: 'Daniel Green', email: 'daniel.green@company.com', role: 'Analyst', status: 'Active', mfa: 'Disabled', lastLogin: '6 hours ago', ipAddress: '10.8.0.44' },
    { id: 27, name: 'Linda Adams', email: 'linda.adams@company.com', role: 'Developer', status: 'Active', mfa: 'Disabled', lastLogin: '4 days ago', ipAddress: '192.168.11.99' },
    { id: 28, name: 'Edward Nelson', email: 'edward.nelson@company.com', role: 'Manager', status: 'Active', mfa: 'Disabled', lastLogin: '1 day ago', ipAddress: '10.9.0.55' },
    { id: 29, name: 'Barbara Carter', email: 'barbara.carter@company.com', role: 'User', status: 'Active', mfa: 'Disabled', lastLogin: '7 hours ago', ipAddress: '172.21.0.22' },
    { id: 30, name: 'Thomas Roberts', email: 'thomas.roberts@company.com', role: 'Developer', status: 'Active', mfa: 'Disabled', lastLogin: '2 days ago', ipAddress: '192.168.12.11' },
    { id: 31, name: 'Dorothy Phillips', email: 'dorothy.phillips@company.com', role: 'Analyst', status: 'Active', mfa: 'Disabled', lastLogin: '5 hours ago', ipAddress: '10.10.0.88' },
    { id: 32, name: 'Charles Campbell', email: 'charles.campbell@company.com', role: 'Manager', status: 'Active', mfa: 'Disabled', lastLogin: '3 days ago', ipAddress: '192.168.13.77' },
    { id: 33, name: 'Jean Parker', email: 'jean.parker@company.com', role: 'User', status: 'Active', mfa: 'Disabled', lastLogin: '6 hours ago', ipAddress: '10.11.0.33' },
    { id: 34, name: 'Dennis Evans', email: 'dennis.evans@company.com', role: 'Developer', status: 'Active', mfa: 'Disabled', lastLogin: '1 day ago', ipAddress: '172.22.0.66' },
    { id: 35, name: 'Sandra Edwards', email: 'sandra.edwards@company.com', role: 'Analyst', status: 'Active', mfa: 'Disabled', lastLogin: '4 days ago', ipAddress: '192.168.14.44' },
    { id: 36, name: 'Gary Collins', email: 'gary.collins@company.com', role: 'Manager', status: 'Active', mfa: 'Disabled', lastLogin: '2 hours ago', ipAddress: '10.12.0.99' },
    { id: 37, name: 'Ruth Reyes', email: 'ruth.reyes@company.com', role: 'User', status: 'Active', mfa: 'Disabled', lastLogin: '8 hours ago', ipAddress: '192.168.15.55' },
    { id: 38, name: 'Joe Morris', email: 'joe.morris@company.com', role: 'Developer', status: 'Active', mfa: 'Disabled', lastLogin: '3 days ago', ipAddress: '10.13.0.77' },
    
    // MFA Enabled Users
    { id: 39, name: 'Michael Chen', email: 'michael.chen@company.com', role: 'Super Admin', status: 'Active', mfa: 'Enabled', lastLogin: '5 minutes ago', ipAddress: '192.168.100.1' },
    { id: 40, name: 'Jennifer Lee', email: 'jennifer.lee@company.com', role: 'Admin', status: 'Active', mfa: 'Enabled', lastLogin: '4 hours ago', ipAddress: '192.168.100.2' },
    { id: 41, name: 'Amanda White', email: 'amanda.white@company.com', role: 'Manager', status: 'Active', mfa: 'Enabled', lastLogin: '6 hours ago', ipAddress: '192.168.100.3' },
    { id: 42, name: 'Lisa Anderson', email: 'lisa.anderson@company.com', role: 'User', status: 'Active', mfa: 'Enabled', lastLogin: 'Yesterday', ipAddress: '192.168.100.4' }
  ]

  // State management
  const [search, setSearch] = useState('')
  const [statusFilter, setStatusFilter] = useState('')
  const [roleFilter, setRoleFilter] = useState('')
  const [mfaFilter, setMfaFilter] = useState('')
  const [currentPage, setCurrentPage] = useState(1)
  const [selectedUsers, setSelectedUsers] = useState(new Set())
  const [activeMenu, setActiveMenu] = useState(null)
  
  // Track applied filters separately
  const [appliedFilters, setAppliedFilters] = useState({
    status: '',
    role: '',
    mfa: '',
    search: ''
  })

  const itemsPerPage = 10

  // Filter logic
  const filteredUsers = useMemo(() => {
    let filtered = mockUsersData
    
    if (filtersApplied) {
      // Apply the saved filters
      filtered = mockUsersData.filter(user => {
        const matchSearch =
          !appliedFilters.search ||
          user.name.toLowerCase().includes(appliedFilters.search.toLowerCase()) ||
          user.email.toLowerCase().includes(appliedFilters.search.toLowerCase())

        const matchStatus = !appliedFilters.status || user.status === appliedFilters.status
        const matchRole = !appliedFilters.role || user.role === appliedFilters.role
        const matchMfa = !appliedFilters.mfa || user.mfa === appliedFilters.mfa

        return matchSearch && matchStatus && matchRole && matchMfa
      })
    } else {
      // No filters applied, show all users
      filtered = mockUsersData
    }
    
    return filtered
  }, [appliedFilters, filtersApplied])

  // Pagination logic
  const totalPages = Math.ceil(filteredUsers.length / itemsPerPage)
  const paginatedUsers = filteredUsers.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  )

  // Handle filters
  const handleApplyFilters = () => {
    setCurrentPage(1)
    // Save the current filter values
    setAppliedFilters({
      status: statusFilter,
      role: roleFilter,
      mfa: mfaFilter,
      search: search
    })
    setFiltersApplied(true)
    console.log('Filters applied:', { search, statusFilter, roleFilter, mfaFilter })
  }

  const handleReset = () => {
    setSearch('')
    setStatusFilter('')
    setRoleFilter('')
    setMfaFilter('')
    setCurrentPage(1)
    setSelectedUsers(new Set())
    setFiltersApplied(false)
    setAppliedFilters({ status: '', role: '', mfa: '', search: '' })
  }

  const handleBackToAllLogs = () => {
    setFiltersApplied(false)
    setCurrentPage(1)
    setSelectedUsers(new Set())
    setAppliedFilters({ status: '', role: '', mfa: '', search: '' })
  }

  const handleSelectUser = (userId, isSelected) => {
    const newSelected = new Set(selectedUsers)
    if (isSelected) {
      newSelected.add(userId)
    } else {
      newSelected.delete(userId)
    }
    setSelectedUsers(newSelected)
  }

  const handleSelectAll = (userIds) => {
    setSelectedUsers(new Set(userIds))
  }

  const handleAction = (userId) => {
    setActiveMenu(activeMenu === userId ? null : userId)
  }

  const handleCreateUser = () => {
    navigate('/users/create')
  }

  const handleBulkImport = () => {
    console.log('Bulk import')
  }

  const handleNotifications = () => {
    console.log('View notifications')
  }

  const handleExport = () => {
    console.log('Export users')
  }

  const handleMoreFilters = () => {
    console.log('Open more filters panel')
  }

  return (
    <main className="dashboard-layout">
      <Sidebar sidebarOpen={sidebarOpen} />
      <div className={`sidebar-overlay ${sidebarOpen ? 'active' : ''}`} onClick={() => setSidebarOpen(false)} />
      <section className="dashboard-main">
        <UsersHeader
          onCreateUser={handleCreateUser}
          onBulkImport={handleBulkImport}
          onNotifications={handleNotifications}
          onMenuToggle={() => setSidebarOpen(!sidebarOpen)}
        />

        {!filtersApplied ? (
          <>
            <UsersFiltersBar
              search={search}
              onSearchChange={setSearch}
              status={statusFilter}
              onStatusChange={setStatusFilter}
              role={roleFilter}
              onRoleChange={setRoleFilter}
              mfa={mfaFilter}
              onMfaChange={setMfaFilter}
              onApplyFilters={handleApplyFilters}
              onReset={handleReset}
            />

            <UsersTable
              users={paginatedUsers}
              selectedUsers={selectedUsers}
              onSelectUser={handleSelectUser}
              onSelectAll={handleSelectAll}
              onAction={handleAction}
              onExport={handleExport}
              onMoreFilters={handleMoreFilters}
            />

            <UsersPagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={setCurrentPage}
              totalEntries={filteredUsers.length}
              itemsPerPage={itemsPerPage}
            />
          </>
        ) : (
          <>
            <UsersSecurityAlertBanner />
            <UsersActiveFiltersDisplay 
              appliedFilters={appliedFilters}
              onClearAll={handleBackToAllLogs} 
            />
            <UsersStatsCards 
              filteredUsers={filteredUsers}
              appliedFilters={appliedFilters}
            />
            <UsersSelectionBar totalUsers={filteredUsers.length} selectedCount={selectedUsers.size} />
            
            <UsersTable
              users={paginatedUsers}
              selectedUsers={selectedUsers}
              onSelectUser={handleSelectUser}
              onSelectAll={handleSelectAll}
              onAction={handleAction}
              onExport={handleExport}
              onMoreFilters={handleMoreFilters}
              isFiltered={true}
            />

            <UsersPagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={setCurrentPage}
              totalEntries={filteredUsers.length}
              itemsPerPage={itemsPerPage}
            />
          </>
        )}
      </section>
    </main>
  )
}

export default UsersManagementPage
