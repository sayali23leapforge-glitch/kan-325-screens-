import React, { useState, useMemo } from 'react'
import { useNavigate } from 'react-router-dom'
import { FiSearch, FiSettings, FiDownload, FiFilter, FiChevronLeft, FiChevronRight, FiMenu } from 'react-icons/fi'
import Sidebar from './Sidebar'
import './tenant.css'

const TenantsPage = () => {
  const navigate = useNavigate()
  const [currentPage, setCurrentPage] = useState(1)
  const [searchTerm, setSearchTerm] = useState('')
  const [statusFilter, setStatusFilter] = useState('Active')
  const [planFilter, setPlanFilter] = useState('Enterprise')
  const [filtersApplied, setFiltersApplied] = useState(true)
  const [sidebarOpen, setSidebarOpen] = useState(false)

  // Mock tenants data - 8 total as shown in design
  const mockTenantsData = [
    {
      id: 'TNT-001',
      name: 'Acme Corporation',
      initials: 'AC',
      domain: 'acme.karnovate.com',
      subscription: 'Enterprise',
      users: 247,
      revenue: '$2,990/mo',
      status: 'Active',
      created: 'Jan 15, 2024',
      avatarGradient: 'linear-gradient(135deg, #3B82F6 0%, #9333EA 100%)'
    },
    {
      id: 'TNT-002',
      name: 'TechCorp Solutions',
      initials: 'TC',
      domain: 'techcorp.karnovate.com',
      subscription: 'Professional',
      users: 89,
      revenue: '$1,290/mo',
      status: 'Active',
      created: 'Dec 8, 2023',
      avatarGradient: 'linear-gradient(135deg, #22C55E 0%, #0D9488 100%)'
    },
    {
      id: 'TNT-003',
      name: 'StartupInc',
      initials: 'SI',
      domain: 'startup.karnovate.com',
      subscription: 'Starter',
      users: 12,
      revenue: '$290/mo',
      status: 'Active',
      created: 'Feb 2, 2024',
      avatarGradient: 'linear-gradient(135deg, #F97316 0%, #DC2626 100%)'
    },
    {
      id: 'TNT-004',
      name: 'DigitalLogic Ltd',
      initials: 'DL',
      domain: 'digitallogic.karnovate.com',
      subscription: 'Professional',
      users: 156,
      revenue: '$1,890/mo',
      status: 'Suspended',
      created: 'Nov 20, 2023',
      avatarGradient: 'linear-gradient(135deg, #A855F7 0%, #DB2777 100%)'
    },
    {
      id: 'TNT-005',
      name: 'InnovateSoft',
      initials: 'IS',
      domain: 'innovate.karnovate.com',
      subscription: 'Enterprise',
      users: 342,
      revenue: '$3,490/mo',
      status: 'Active',
      created: 'Oct 5, 2023',
      avatarGradient: 'linear-gradient(135deg, #6366F1 0%, #2563EB 100%)'
    },
    {
      id: 'TNT-006',
      name: 'CloudWorks',
      initials: 'CW',
      domain: 'cloudworks.karnovate.com',
      subscription: 'Starter',
      users: 8,
      revenue: '$190/mo',
      status: 'Active',
      created: 'Jan 28, 2024',
      avatarGradient: 'linear-gradient(135deg, #06B6D4 0%, #2563EB 100%)'
    },
    {
      id: 'TNT-007',
      name: 'SecureNet Inc',
      initials: 'SN',
      domain: 'securenet.karnovate.com',
      subscription: 'Enterprise',
      users: 405,
      revenue: '$4,290/mo',
      status: 'Active',
      created: 'Sep 15, 2023',
      avatarGradient: 'linear-gradient(135deg, #EC4899 0%, #F43F5E 100%)'
    },
    {
      id: 'TNT-008',
      name: 'DataFlow Solutions',
      initials: 'DF',
      domain: 'dataflow.karnovate.com',
      subscription: 'Professional',
      users: 178,
      revenue: '$1,690/mo',
      status: 'Active',
      created: 'Aug 10, 2023',
      avatarGradient: 'linear-gradient(135deg, #8B5CF6 0%, #7C3AED 100%)'
    }
  ]

  // Calculate stats
  const stats = [
    {
      icon: '📦',
      value: mockTenantsData.length.toString(),
      label: 'Total Tenants',
      bgColor: '#DBEAFE',
      iconBg: '#2563EB'
    },
    {
      icon: '✅',
      value: mockTenantsData.filter(t => t.status === 'Active').length.toString(),
      label: 'Active Tenants',
      bgColor: '#DCFCE7',
      iconBg: '#16A34A'
    },
    {
      icon: '👑',
      value: mockTenantsData.filter(t => t.subscription === 'Enterprise').length.toString(),
      label: 'Enterprise Plans',
      bgColor: '#F3E8FF',
      iconBg: '#9333EA'
    },
    {
      icon: '👥',
      value: mockTenantsData.reduce((acc, t) => acc + t.users, 0).toString(),
      label: 'Total Users',
      bgColor: '#FFEDD5',
      iconBg: '#EA580C'
    }
  ]

  // Filter tenants
  const filteredTenants = useMemo(() => {
    let filtered = mockTenantsData

    if (filtersApplied) {
      filtered = mockTenantsData.filter(tenant => {
        const matchSearch =
          !searchTerm ||
          tenant.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          tenant.domain.toLowerCase().includes(searchTerm.toLowerCase())
        
        const matchStatus = !statusFilter || tenant.status === statusFilter
        const matchPlan = !planFilter || tenant.subscription === planFilter

        return matchSearch && matchStatus && matchPlan
      })
    }

    return filtered
  }, [searchTerm, statusFilter, planFilter, filtersApplied])

  // Pagination
  const itemsPerPage = 5
  const totalPages = Math.ceil(filteredTenants.length / itemsPerPage)
  const paginatedTenants = filteredTenants.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  )

  const handleApplyFilters = () => {
    setCurrentPage(1)
    setFiltersApplied(true)
  }

  const handleClearFilters = () => {
    setSearchTerm('')
    setStatusFilter('')
    setPlanFilter('')
    setFiltersApplied(false)
    setCurrentPage(1)
  }

  const getSubscriptionBadgeStyle = (subscription) => {
    const styles = {
      'Enterprise': { bg: '#F3E8FF', text: '#6B21A8', icon: '#6B21A8' },
      'Professional': { bg: '#DBEAFE', text: '#1E40AF', icon: '#1E40AF' },
      'Starter': { bg: '#F3F4F6', text: '#1F2937', icon: '#1F2937' }
    }
    return styles[subscription] || styles['Starter']
  }

  const getStatusBadgeStyle = (status) => {
    if (status === 'Active') {
      return { bg: '#DCFCE7', text: '#166534', dotColor: '#16A34A' }
    }
    return { bg: '#FEF9C3', text: '#854D0E', dotColor: '#CA8A04' }
  }

  return (
    <main className="dashboard-layout">
      <Sidebar sidebarOpen={sidebarOpen} />
      <div className={`sidebar-overlay ${sidebarOpen ? 'active' : ''}`} onClick={() => setSidebarOpen(false)} />
      <section className="dashboard-main tenants-main">
        {/* Header */}
        <div className="tenants-header">
          <button 
            className="mobile-menu-btn"
            onClick={() => setSidebarOpen(!sidebarOpen)}
            aria-label="Toggle sidebar"
          >
            <FiMenu size={20} />
          </button>
          <div className="header-left">
            <h1 className="tenants-title">Tenants</h1>
            <div className="tenants-breadcrumb">
              <span className="breadcrumb-item active">Home</span>
              <span className="breadcrumb-divider">/</span>
              <span className="breadcrumb-item active">IAM</span>
              <span className="breadcrumb-divider">/</span>
              <span className="breadcrumb-item current">Tenants</span>
            </div>
          </div>
          <div className="header-actions">
            <button className="icon-btn notifications">
              <FiSettings size={16} />
              <span className="notification-badge">3</span>
            </button>
            <button className="btn btn-primary" onClick={() => navigate('/tenants/create')}>
              <span className="btn-icon">+</span>
              Add Tenant
            </button>
          </div>
        </div>

      {/* Stats Cards */}
      <div className="tenants-stats-grid">
        {stats.map((stat, idx) => (
          <div key={idx} className="tenants-stat-card">
            <div 
              className="stat-icon-wrapper"
              style={{ backgroundColor: stat.bgColor }}
            >
              <div style={{ color: stat.iconBg }}>
                {stat.icon}
              </div>
            </div>
            <div className="stat-content">
              <div className="stat-value">{stat.value}</div>
              <div className="stat-label">{stat.label}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Filters Bar */}
      <div className="tenants-filters-bar">
        <div className="search-container">
          <FiSearch className="search-icon" size={16} />
          <input
            type="text"
            placeholder="Search tenants..."
            className="search-input"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <button className="filter-btn">
          <FiFilter size={16} />
          Filters
        </button>

        <button className="export-btn">
          <FiDownload size={16} />
          Export
        </button>

        <button className="view-btn">
          <FiSettings size={16} />
          View
        </button>

        <div className="active-filters">
          <span className="active-label">Active Filters:</span>
          <div className="filter-chip">
            <span className="chip-text">Status: Active</span>
            <button className="chip-close">✕</button>
          </div>
          <div className="filter-chip plan-chip">
            <span className="chip-text">Plan: Enterprise</span>
            <button className="chip-close">✕</button>
          </div>
          <button className="clear-all-btn" onClick={handleClearFilters}>
            Clear All
          </button>
        </div>
      </div>

      {/* Tenants Table */}
      <div className="tenants-table-container">
        <table className="tenants-table">
          <thead>
            <tr>
              <th className="th-checkbox">
                <input type="checkbox" />
              </th>
              <th>Tenant</th>
              <th>Plan</th>
              <th>Users</th>
              <th>Revenue</th>
              <th>Status</th>
              <th>Created</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {paginatedTenants.map((tenant) => {
              const subBadge = getSubscriptionBadgeStyle(tenant.subscription)
              const statusBadge = getStatusBadgeStyle(tenant.status)

              return (
                <tr 
                  key={tenant.id}
                  onClick={() => navigate(`/tenants/${tenant.id}`)}
                  style={{ cursor: 'pointer' }}
                  className="tenant-row-clickable"
                >
                  <td className="td-checkbox">
                    <input type="checkbox" />
                  </td>
                  <td className="td-tenant">
                    <div className="tenant-cell">
                      <div
                        className="tenant-avatar"
                        style={{ background: tenant.avatarGradient }}
                      >
                        {tenant.initials}
                      </div>
                      <div className="tenant-info">
                        <div className="tenant-name">{tenant.name}</div>
                        <div className="tenant-id">{tenant.domain}</div>
                      </div>
                    </div>
                  </td>
                  <td className="td-plan">
                    <div
                      className="subscription-badge"
                      style={{ backgroundColor: subBadge.bg }}
                    >
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                        <path d="M6 1L2 4V11H10V4L6 1Z" stroke={subBadge.icon} strokeWidth="1" />
                      </svg>
                      <span style={{ color: subBadge.text }}>
                        {tenant.subscription}
                      </span>
                    </div>
                  </td>
                  <td className="td-value">{tenant.users}</td>
                  <td className="td-revenue">{tenant.revenue}</td>
                  <td className="td-status">
                    <div
                      className="status-badge"
                      style={{ backgroundColor: statusBadge.bg }}
                    >
                      <span
                        className="status-dot"
                        style={{ backgroundColor: statusBadge.dotColor }}
                      />
                      <span style={{ color: statusBadge.text }}>
                        {tenant.status}
                      </span>
                    </div>
                  </td>
                  <td className="td-created">{tenant.created}</td>
                  <td className="td-actions">
                    <button className="action-menu" title="More options" onClick={(e) => e.stopPropagation()}>
                      <span className="dots">···</span>
                    </button>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="tenants-pagination">
        <span className="pagination-info">
          Showing <strong>{(currentPage - 1) * itemsPerPage + 1}-{Math.min(currentPage * itemsPerPage, filteredTenants.length)}</strong> of <strong>{filteredTenants.length}</strong> tenants
        </span>
        <div className="pagination-controls">
          <button
            className="pagination-btn prev"
            onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
            disabled={currentPage === 1}
          >
            <FiChevronLeft size={16} />
          </button>
          {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
            <button
              key={page}
              className={`pagination-btn ${currentPage === page ? 'active' : ''}`}
              onClick={() => setCurrentPage(page)}
            >
              {page}
            </button>
          ))}
          <button
            className="pagination-btn next"
            onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
            disabled={currentPage === totalPages}
          >
            <FiChevronRight size={16} />
          </button>
        </div>
      </div>
      </section>
    </main>
  )
}

export default TenantsPage
