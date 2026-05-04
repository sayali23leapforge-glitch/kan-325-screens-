
import React, { useState, useMemo } from 'react'
import { useNavigate } from 'react-router-dom'
import { FiArrowLeft, FiSearch, FiFilter, FiDownload, FiUsers, FiCheck, FiClock, FiX, FiPlus } from 'react-icons/fi'
import Sidebar from './Sidebar'
import './create-user-page.css'

function CreateUserPage() {
  const navigate = useNavigate()
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [search, setSearch] = useState('')
  const [tenantFilter, setTenantFilter] = useState('all')
  const [roleFilter, setRoleFilter] = useState('all')
  const [statusFilter, setStatusFilter] = useState('all')
  const [currentPage, setCurrentPage] = useState(1)

  // Mock users data for the reference table
  const mockUsersData = [
    {
      id: 1,
      name: 'Sarah Johnson',
      email: 'sarah.johnson@company.com',
      tenant: 'Acme Corp',
      role: 'Admin',
      status: 'Active',
      lastLogin: '2 hours ago',
      avatar: 'SJ'
    },
    {
      id: 2,
      name: 'Michael Chen',
      email: 'michael.chen@techstart.com',
      tenant: 'TechStart Inc',
      role: 'Super Admin',
      status: 'Active',
      lastLogin: '5 minutes ago',
      avatar: 'MC'
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      email: 'emily.r@global.com',
      tenant: 'Global Systems',
      role: 'Manager',
      status: 'Pending',
      lastLogin: 'Never',
      avatar: 'ER'
    },
    {
      id: 4,
      name: 'David Park',
      email: 'david.park@acme.com',
      tenant: 'Acme Corp',
      role: 'User',
      status: 'Active',
      lastLogin: '1 day ago',
      avatar: 'DP'
    },
    {
      id: 5,
      name: 'Lisa Martinez',
      email: 'lisa.m@techstart.com',
      tenant: 'TechStart Inc',
      role: 'Viewer',
      status: 'Suspended',
      lastLogin: '2 weeks ago',
      avatar: 'LM'
    }
  ]

  // Filter logic
  const filteredUsers = useMemo(() => {
    return mockUsersData.filter(user => {
      const matchSearch = !search || 
        user.name.toLowerCase().includes(search.toLowerCase()) ||
        user.email.toLowerCase().includes(search.toLowerCase())
      
      const matchTenant = tenantFilter === 'all' || user.tenant === tenantFilter
      const matchRole = roleFilter === 'all' || user.role === roleFilter
      const matchStatus = statusFilter === 'all' || user.status === statusFilter

      return matchSearch && matchTenant && matchRole && matchStatus
    })
  }, [search, tenantFilter, roleFilter, statusFilter])

  const itemsPerPage = 25
  const totalPages = Math.ceil(filteredUsers.length / itemsPerPage)
  const paginatedUsers = filteredUsers.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  )

  const handleBack = () => {
    navigate('/users')
  }

  const handleAddNewUser = () => {
    navigate('/users/create/form')
  }

  const getRoleColor = (role) => {
    const roleColors = {
      'Admin': 'blue',
      'Super Admin': 'purple',
      'Manager': 'green',
      'User': 'gray',
      'Viewer': 'orange'
    }
    return roleColors[role] || 'gray'
  }

  const getStatusBadgeClass = (status) => {
    const statusClasses = {
      'Active': 'status-badge-active',
      'Pending': 'status-badge-pending',
      'Suspended': 'status-badge-suspended',
      'Inactive': 'status-badge-inactive'
    }
    return statusClasses[status] || 'status-badge-inactive'
  }

  const getRoleBadgeClass = (role) => {
    const roleClasses = {
      'Admin': 'role-badge-admin',
      'Super Admin': 'role-badge-super-admin',
      'Manager': 'role-badge-manager',
      'User': 'role-badge-user',
      'Viewer': 'role-badge-viewer'
    }
    return roleClasses[role] || 'role-badge-user'
  }

  const getAvatarColor = (name) => {
    const colors = [
      'linear-gradient(135deg, #3B82F6 0%, #1D4ED8 100%)',
      'linear-gradient(135deg, #8B5CF6 0%, #6D28D9 100%)',
      'linear-gradient(135deg, #10B981 0%, #059669 100%)',
      'linear-gradient(135deg, #F59E0B 0%, #D97706 100%)',
      'linear-gradient(135deg, #EF4444 0%, #DC2626 100%)',
      'linear-gradient(135deg, #06B6D4 0%, #0891B2 100%)'
    ]
    const hash = name.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0)
    return colors[hash % colors.length]
  }

  return (
    <main className="dashboard-layout">
      <Sidebar sidebarOpen={sidebarOpen} />
      <div className={`sidebar-overlay ${sidebarOpen ? 'active' : ''}`} onClick={() => setSidebarOpen(false)} />
      <section className="dashboard-main">
        
        {/* Page Header with Breadcrumb and Action Button */}
        <div className="page-header-bar">
          <div className="breadcrumb-nav">
            <span className="breadcrumb-item">
              <a href="/" style={{textDecoration: 'none', color: 'inherit'}}>Home</a>
            </span>
            <span className="breadcrumb-separator">›</span>
            <span className="breadcrumb-item">IAM</span>
            <span className="breadcrumb-separator">›</span>
            <span className="breadcrumb-item">Users</span>
          </div>
          <button className="action-button-primary" onClick={handleAddNewUser}>
            <FiPlus size={18} />
            <span>Add New User</span>
          </button>
        </div>

        {/* Stats Cards */}
        <div className="stats-cards-row">
          <div className="stat-card">
            <div className="stat-icon-wrapper blue">
              <FiUsers className="stat-icon-svg" />
            </div>
            <div className="stat-content">
              <div className="stat-value">1,247</div>
              <div className="stat-label">Total Users</div>
            </div>
            <div className="stat-trend positive">
              <span>+8%</span>
              <span className="trend-text">vs last month</span>
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-icon-wrapper green">
              <FiCheck className="stat-icon-svg" />
            </div>
            <div className="stat-content">
              <div className="stat-value">1,156</div>
              <div className="stat-label">Active Users</div>
            </div>
            <div className="stat-trend positive">
              <span>+5%</span>
              <span className="trend-text">vs last month</span>
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-icon-wrapper yellow">
              <FiClock className="stat-icon-svg" />
            </div>
            <div className="stat-content">
              <div className="stat-value">67</div>
              <div className="stat-label">Pending Users</div>
            </div>
            <div className="stat-trend positive">
              <span>+12</span>
              <span className="trend-text">this week</span>
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-icon-wrapper red">
              <FiX className="stat-icon-svg" />
            </div>
            <div className="stat-content">
              <div className="stat-value">24</div>
              <div className="stat-label">Suspended</div>
            </div>
            <div className="stat-trend negative">
              <span>-3</span>
              <span className="trend-text">vs last month</span>
            </div>
          </div>
        </div>

        {/* Filters Card */}
        <div className="filters-card">
          <div className="filters-grid">
            <div className="filter-search">
              <FiSearch className="search-icon" />
              <input
                type="text"
                className="search-input"
                placeholder="Search users..."
                value={search}
                onChange={(e) => {
                  setSearch(e.target.value)
                  setCurrentPage(1)
                }}
              />
            </div>
            <select 
              className="filter-select"
              value={tenantFilter}
              onChange={(e) => {
                setTenantFilter(e.target.value)
                setCurrentPage(1)
              }}
            >
              <option value="all">All Tenants</option>
              <option value="Acme Corp">Acme Corp</option>
              <option value="TechStart Inc">TechStart Inc</option>
              <option value="Global Systems">Global Systems</option>
            </select>
            <select 
              className="filter-select"
              value={roleFilter}
              onChange={(e) => {
                setRoleFilter(e.target.value)
                setCurrentPage(1)
              }}
            >
              <option value="all">All Roles</option>
              <option value="Admin">Admin</option>
              <option value="Super Admin">Super Admin</option>
              <option value="Manager">Manager</option>
              <option value="User">User</option>
              <option value="Viewer">Viewer</option>
            </select>
            <select 
              className="filter-select"
              value={statusFilter}
              onChange={(e) => {
                setStatusFilter(e.target.value)
                setCurrentPage(1)
              }}
            >
              <option value="all">All Status</option>
              <option value="Active">Active</option>
              <option value="Pending">Pending</option>
              <option value="Suspended">Suspended</option>
            </select>
            <button className="btn-filters">
              <FiFilter size={14} />
              <span>Filters</span>
            </button>
            <button className="btn-export">
              <FiDownload size={14} />
              <span>Export</span>
            </button>
          </div>
        </div>

        {/* User List Card */}
        <div className="user-list-card">
          <div className="card-header">
            <h2 className="card-title">User List</h2>
            <div className="entries-control">
              <span>Show</span>
              <select className="entries-select" defaultValue="25">
                <option value="10">10</option>
                <option value="25">25</option>
                <option value="50">50</option>
              </select>
              <span>entries</span>
            </div>
          </div>

          {/* Table */}
          <div className="table-wrapper">
            <table className="users-table">
              <thead>
                <tr className="table-header-row">
                  <th className="col-checkbox">
                    <input type="checkbox" className="header-checkbox" />
                  </th>
                  <th>User</th>
                  <th>Tenant</th>
                  <th>Role</th>
                  <th>Status</th>
                  <th>Last Login</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {paginatedUsers.map(user => (
                  <tr key={user.id} className="user-table-row">
                    <td className="col-checkbox">
                      <input type="checkbox" className="user-checkbox" />
                    </td>
                    <td>
                      <div className="user-info">
                        <div 
                          className="user-avatar"
                          style={{ background: getAvatarColor(user.name) }}
                        >
                          {user.avatar}
                        </div>
                        <div className="user-details">
                          <div className="user-name">{user.name}</div>
                          <div className="user-email">{user.email}</div>
                        </div>
                      </div>
                    </td>
                    <td>{user.tenant}</td>
                    <td className="cell-role">
                      <span className={`role-badge ${getRoleBadgeClass(user.role)}`}>
                        {user.role}
                      </span>
                    </td>
                    <td className="cell-status">
                      <span className={`status-badge ${getStatusBadgeClass(user.status)}`}>
                        <span className={`status-dot status-dot-${user.status.toLowerCase()}`}></span>
                        {user.status}
                      </span>
                    </td>
                    <td className="cell-last-login">{user.lastLogin}</td>
                    <td className="cell-actions">
                      <button className="action-btn">⋯</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div className="pagination-footer">
            <span className="pagination-info">Showing 1 to {Math.min(5, paginatedUsers.length)} of {filteredUsers.length} results</span>
            <div className="pagination-controls">
              <button 
                className="pagination-btn prev-btn"
                disabled={currentPage === 1}
                onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
              >
                prev
              </button>
              {Array.from({ length: Math.min(5, totalPages) }, (_, i) => (
                <button
                  key={i + 1}
                  className={`pagination-btn ${currentPage === i + 1 ? 'active' : ''}`}
                  onClick={() => setCurrentPage(i + 1)}
                >
                  {i + 1}
                </button>
              ))}
              {totalPages > 5 && <span className="pagination-dots">...</span>}
              {totalPages > 5 && (
                <button className="pagination-btn" onClick={() => setCurrentPage(totalPages)}>
                  {totalPages}
                </button>
              )}
              <button 
                className="pagination-btn next-btn"
                disabled={currentPage === totalPages}
                onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
              >
                next
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default CreateUserPage
