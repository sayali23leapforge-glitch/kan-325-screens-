import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { FiBell, FiPlus, FiSearch, FiMoreVertical, FiDownload, FiList, FiGrid, FiEye, FiEdit2, FiUsers, FiUser, FiUserX, FiUserPlus, FiMail, FiPhone, FiMapPin, FiX } from 'react-icons/fi'
import ActivateEmployeePanel from './ActivateEmployeePanel'
import HRMSidebar from './HRMSidebar'
import './employee-directory.css'

const employees = [
  { id: 1, name: 'Sarah Johnson', avatar: 'SJ', department: 'Engineering', position: 'Senior Developer', location: 'New York', email: 'sarah.johnson@company.com', status: 'Active' },
  { id: 2, name: 'Mark Wilson', avatar: 'MW', department: 'Product', position: 'Product Manager', location: 'San Francisco', email: 'mark.wilson@company.com', status: 'Onboarding' },
  { id: 3, name: 'Emily Davis', avatar: 'ED', department: 'Design', position: 'UX Designer', location: 'Remote', email: 'emily.davis@company.com', status: 'Active' },
  { id: 4, name: 'David Chen', avatar: 'DC', department: 'Sales', position: 'Sales Manager', location: 'London', email: 'david.chen@company.com', status: 'On Leave' },
  { id: 5, name: 'Lisa Thompson', avatar: 'LT', department: 'Marketing', position: 'Marketing Director', location: 'New York', email: 'lisa.thompson@company.com', status: 'Active' },
]

const statsCards = [
  { id: 1, label: 'Total Employees', value: '247', badge: '+12%', iconBg: '#DBEAFE', iconColor: '#2563EB', Icon: FiUsers, active: true },
  { id: 2, label: 'Active', value: '235', badge: '+8%', iconBg: '#DCFCE7', iconColor: '#16A34A', Icon: FiUser },
  { id: 3, label: 'On Leave', value: '5', badge: '5', iconBg: '#FEF9C3', iconColor: '#CA8A04', Icon: FiUserX },
  { id: 4, label: 'This Month', value: '7', badge: 'New', iconBg: '#F3E8FF', iconColor: '#A855F7', Icon: FiUserPlus },
]

const gridStatsCards = [
  { id: 1, label: 'Total Employees', value: '247', color: '#2563EB' },
  { id: 2, label: 'New Hires', value: '42', color: '#16A34A' },
  { id: 3, label: 'Managers', value: '15', color: '#A855F7' },
  { id: 4, label: 'Departments', value: '8', color: '#EA580C' },
  { id: 5, label: 'On Leave', value: '12', color: '#CA8A04' },
  { id: 6, label: 'Remote', value: '3', color: '#DC2626' },
]

const gridEmployees = [
  { id: 1, name: 'John Smith', initials: 'JS', role: 'Senior Software Engineer', department: 'Engineering', location: 'San Francisco, CA', email: 'john.smith@karnovate.com', phone: '+1 (555) 123-4567', avatarColor: '#3B82F6' },
  { id: 2, name: 'Lisa Chen', initials: 'LC', role: 'Marketing Manager', department: 'Marketing', location: 'New York, NY', email: 'lisa.chen@karnovate.com', phone: '+1 (555) 234-5678', avatarColor: '#10B981' },
  { id: 3, name: 'David Park', initials: 'DP', role: 'Sales Director', department: 'Sales', location: 'Chicago, IL', email: 'david.park@karnovate.com', phone: '+1 (555) 345-6789', avatarColor: '#F97316' },
  { id: 4, name: 'Maria Garcia', initials: 'MG', role: 'Product Designer', department: 'Design', location: 'Austin, TX', email: 'maria.garcia@karnovate.com', phone: '+1 (555) 456-7890', avatarColor: '#A855F7' },
  { id: 5, name: 'Tom Anderson', initials: 'TA', role: 'Finance Manager', department: 'Finance', location: 'Boston, MA', email: 'tom.anderson@karnovate.com', phone: '+1 (555) 567-8901', avatarColor: '#14B8A6' },
  { id: 6, name: 'Sarah Williams', initials: 'SW', role: 'HR Specialist', department: 'Human Resources', location: 'Seattle, WA', email: 'sarah.williams@karnovate.com', phone: '+1 (555) 678-9012', avatarColor: '#EF4444' },
  { id: 7, name: 'James Wilson', initials: 'JW', role: 'DevOps Engineer', department: 'Engineering', location: 'Denver, CO', email: 'james.wilson@karnovate.com', phone: '+1 (555) 789-0123', avatarColor: '#6366F1' },
  { id: 8, name: 'Emma Davis', initials: 'ED', role: 'Content Strategist', department: 'Marketing', location: 'Portland, OR', email: 'emma.davis@karnovate.com', phone: '+1 (555) 890-1234', avatarColor: '#EC4899' },
]

const gridRoleOptions = [
  'All Roles',
  'Activate Employees',
  'Senior Software Engineer',
  'Marketing Manager',
  'Sales Director',
  'Product Designer',
  'Finance Manager',
  'HR Specialist',
  'DevOps Engineer',
  'Content Strategist',
]

function EmployeeDirectory({ onSwitchModule }) {
  const navigate = useNavigate()
  const [searchTerm, setSearchTerm] = useState('')
  const [isGridView, setIsGridView] = useState(false)
  const [isActivateFilter, setIsActivateFilter] = useState(false)
  const [showAddEmployeeForm, setShowAddEmployeeForm] = useState(false)
  const [filters, setFilters] = useState({
    department: 'All Departments',
    status: 'All Status',
    location: 'All Locations',
    role: 'All Roles',
  })

  useEffect(() => {
    setIsActivateFilter(isGridView && filters.role === 'Activate Employees')
  }, [isGridView, filters.role])

  const handleEmployeeClick = (id) => {
    navigate(`/hrm/employee-profile/${id}`)
  }

  const addEmployeeForm = showAddEmployeeForm ? (
    <section className="employee-directory-add-form-card">
      <div className="employee-directory-add-form-header">
        <h2>Add New Employee</h2>
        <button className="employee-directory-add-form-close" onClick={() => setShowAddEmployeeForm(false)} aria-label="Close form">
          <FiX size={16} />
        </button>
      </div>

      <div className="employee-directory-add-form-section">
        <h3>Personal Information</h3>
        <div className="employee-directory-add-form-grid three-col">
          <label className="employee-directory-add-form-field">
            <span>First Name *</span>
            <input type="text" placeholder="First Name" />
          </label>
          <label className="employee-directory-add-form-field">
            <span>Last Name *</span>
            <input type="text" placeholder="Last Name" />
          </label>
          <label className="employee-directory-add-form-field">
            <span>Email *</span>
            <input type="email" placeholder="Email" />
          </label>
          <label className="employee-directory-add-form-field">
            <span>Phone Number</span>
            <input type="text" placeholder="Phone Number" />
          </label>
          <label className="employee-directory-add-form-field">
            <span>Date of Birth</span>
            <input type="text" placeholder="dd-mm-yyyy" />
          </label>
          <label className="employee-directory-add-form-field">
            <span>Gender</span>
            <select>
              <option>Select Gender</option>
              <option>Male</option>
              <option>Female</option>
              <option>Other</option>
            </select>
          </label>
        </div>
      </div>

      <div className="employee-directory-add-form-section">
        <h3>Work Information</h3>
        <div className="employee-directory-add-form-grid three-col">
          <label className="employee-directory-add-form-field">
            <span>Employee ID</span>
            <input type="text" placeholder="Auto-generated" disabled />
          </label>
          <label className="employee-directory-add-form-field">
            <span>Job Title *</span>
            <input type="text" placeholder="Job Title" />
          </label>
          <label className="employee-directory-add-form-field">
            <span>Department *</span>
            <select>
              <option>Select Department</option>
              <option>Engineering</option>
              <option>Product</option>
              <option>Design</option>
              <option>Sales</option>
              <option>Marketing</option>
              <option>HR</option>
            </select>
          </label>
          <label className="employee-directory-add-form-field">
            <span>Manager</span>
            <select>
              <option>Select Manager</option>
            </select>
          </label>
          <label className="employee-directory-add-form-field">
            <span>Start Date *</span>
            <input type="text" placeholder="dd-mm-yyyy" />
          </label>
          <label className="employee-directory-add-form-field">
            <span>Employment Type *</span>
            <select>
              <option>Select Type</option>
              <option>Full Time</option>
              <option>Part Time</option>
              <option>Contract</option>
            </select>
          </label>
          <label className="employee-directory-add-form-field">
            <span>Salary</span>
            <input type="text" placeholder="Annual salary" />
          </label>
          <label className="employee-directory-add-form-field">
            <span>Work Location</span>
            <select>
              <option>Select Location</option>
              <option>New York</option>
              <option>San Francisco</option>
              <option>Remote</option>
            </select>
          </label>
          <label className="employee-directory-add-form-field">
            <span>Office</span>
            <input type="text" placeholder="Office number or floor" />
          </label>
        </div>
      </div>

      <div className="employee-directory-add-form-section">
        <h3>Address Information</h3>
        <div className="employee-directory-add-form-grid three-col">
          <label className="employee-directory-add-form-field full-width">
            <span>Street Address</span>
            <input type="text" placeholder="Street Address" />
          </label>
          <label className="employee-directory-add-form-field">
            <span>City</span>
            <input type="text" placeholder="City" />
          </label>
          <label className="employee-directory-add-form-field">
            <span>State/Province</span>
            <input type="text" placeholder="State/Province" />
          </label>
          <label className="employee-directory-add-form-field">
            <span>ZIP/Postal Code</span>
            <input type="text" placeholder="ZIP/Postal Code" />
          </label>
          <label className="employee-directory-add-form-field">
            <span>Country</span>
            <select>
              <option>Select Country</option>
              <option>United States</option>
              <option>Canada</option>
              <option>United Kingdom</option>
            </select>
          </label>
        </div>
      </div>

      <div className="employee-directory-add-form-footer">
        <button className="employee-directory-add-form-btn neutral" onClick={() => setShowAddEmployeeForm(false)}>Cancel</button>
        <button className="employee-directory-add-form-btn neutral">Save as Draft</button>
        <button className="employee-directory-add-form-btn primary">Add Employee</button>
      </div>
    </section>
  ) : null

  return (
    <div className="employee-directory-layout">
      <HRMSidebar onSwitchModule={onSwitchModule} sidebarWidth={288} />

      <main className="employee-directory-main" style={{ marginLeft: '288px', width: 'calc(100% - 288px)' }}>
        {/* Header */}
        <header className="employee-directory-header">
          <div className="employee-directory-header-content">
            <h1 className="employee-directory-title">Employee Directory</h1>
            <nav className="employee-directory-breadcrumb">
              <a href="/">Home</a>
              <span>/</span>
              <a href="/hrm">HRM</a>
              <span>/</span>
              <span>Employee Directory</span>
            </nav>
          </div>
          <div className="employee-directory-header-actions">
            <button className="employee-directory-notification-btn" title="Notifications">
              <FiBell size={20} />
              <span className="employee-directory-notification-badge">3</span>
            </button>
            <button className="employee-directory-add-btn" onClick={() => setShowAddEmployeeForm(true)}>
              <FiPlus size={16} />
              <span>New Employee</span>
            </button>
          </div>
        </header>

        {/* Filter Bar */}
        <div className="employee-directory-filter-card">
          <div className="employee-directory-search-container">
            <FiSearch size={18} className="employee-directory-search-icon" />
            <input
              type="text"
              placeholder="Search employees..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="employee-directory-search-input"
            />
          </div>

          <div className="employee-directory-filters">
            <select
              className="employee-directory-filter-select"
              value={filters.department}
              onChange={(e) => setFilters({ ...filters, department: e.target.value })}
            >
              <option>All Departments</option>
              <option>Engineering</option>
              <option>Product</option>
              <option>Design</option>
              <option>Sales</option>
              <option>Marketing</option>
              <option>HR</option>
            </select>

            {isGridView ? (
              <select
                className="employee-directory-filter-select"
                value={filters.role}
                onChange={(e) => setFilters({ ...filters, role: e.target.value })}
              >
                {gridRoleOptions.map((role) => (
                  <option key={role}>{role}</option>
                ))}
              </select>
            ) : (
              <>
                <select
                  className="employee-directory-filter-select"
                  value={filters.status}
                  onChange={(e) => setFilters({ ...filters, status: e.target.value })}
                >
                  <option>All Status</option>
                  <option>Active</option>
                  <option>Onboarding</option>
                  <option>On Leave</option>
                </select>
                <select
                  className="employee-directory-filter-select"
                  value={filters.location}
                  onChange={(e) => setFilters({ ...filters, location: e.target.value })}
                >
                  <option>All Locations</option>
                  <option>New York</option>
                  <option>San Francisco</option>
                  <option>Remote</option>
                  <option>London</option>
                </select>
              </>
            )}
          </div>

          <div className="employee-directory-view-actions">
            <button className="employee-directory-export-btn">
              <FiDownload size={14} />
              Export
            </button>
            <button
              className={`employee-directory-view-toggle-btn ${isGridView ? 'view-toggle-active' : ''}`}
              onClick={() => setIsGridView(true)}
            >
              <FiGrid size={14} />
              Grid View
            </button>
            <button
              className={`employee-directory-view-toggle-btn ${!isGridView ? 'view-toggle-active' : ''}`}
              onClick={() => {
                setIsGridView(false)
                setIsActivateFilter(false)
                setFilters((prev) => ({ ...prev, role: 'All Roles' }))
              }}
            >
              <FiList size={14} />
              List View
            </button>
          </div>
        </div>

        {isGridView ? (
          /* ── GRID VIEW ── */
          <>
            {/* 6 Stats Cards */}
            <section className="emp-grid-stats-section">
              {gridStatsCards.map((card) => (
                <div key={card.id} className="emp-grid-stat-card">
                  <div className="emp-grid-stat-value" style={{ color: card.color }}>{card.value}</div>
                  <div className="emp-grid-stat-label">{card.label}</div>
                </div>
              ))}
            </section>

            {addEmployeeForm}

            {isActivateFilter && <ActivateEmployeePanel onEmployeeClick={handleEmployeeClick} />}

            {/* Employee Cards Grid */}
            <section className="emp-grid-section">
              <div className="emp-grid-container">
                {gridEmployees.map((emp) => (
                  <div key={emp.id} className="emp-grid-card" onClick={() => handleEmployeeClick(emp.id)}>
                    <div className="emp-grid-avatar" style={{ backgroundColor: emp.avatarColor }}>
                      {emp.initials}
                    </div>
                    <div className="emp-grid-name">{emp.name}</div>
                    <div className="emp-grid-role">{emp.role}</div>
                    <div className="emp-grid-dept">{emp.department}</div>
                    <div className="emp-grid-divider" />
                    <div className="emp-grid-contact">
                      <div className="emp-grid-contact-row">
                        <FiMail size={13} className="emp-grid-contact-icon" />
                        <span>{emp.email}</span>
                      </div>
                      <div className="emp-grid-contact-row">
                        <FiPhone size={13} className="emp-grid-contact-icon" />
                        <span>{emp.phone}</span>
                      </div>
                      <div className="emp-grid-contact-row">
                        <FiMapPin size={13} className="emp-grid-contact-icon" />
                        <span>{emp.location}</span>
                      </div>
                    </div>
                    <div className="emp-grid-card-actions">
                      <button
                        className="emp-grid-view-profile-btn"
                        onClick={(e) => {
                          e.stopPropagation()
                          handleEmployeeClick(emp.id)
                        }}
                      >
                        View Profile
                      </button>
                      <button
                        className="emp-grid-more-btn"
                        aria-label="More"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <FiMail size={14} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {/* Pagination */}
              <div className="emp-grid-pagination">
                <button className="emp-grid-pg-btn emp-grid-pg-arrow">&#8249;</button>
                <button className="emp-grid-pg-btn emp-grid-pg-active">1</button>
                <button className="emp-grid-pg-btn">2</button>
                <button className="emp-grid-pg-btn">3</button>
                <button className="emp-grid-pg-btn emp-grid-pg-arrow">&#8250;</button>
              </div>
            </section>
          </>
        ) : (
          /* ── LIST VIEW ── */
          <>
            {/* Stats Cards */}
            <section className="employee-directory-stats-section">
              {statsCards.map((card) => {
                const Icon = card.Icon
                return (
                  <div key={card.id} className={`employee-directory-stat-card ${card.active ? 'active' : ''}`}>
                    <div className="employee-directory-stat-icon-box" style={{ backgroundColor: card.iconBg }}>
                      <Icon size={18} color={card.iconColor} />
                    </div>
                    <div className="employee-directory-stat-content">
                      <div className="employee-directory-stat-label">{card.label}</div>
                      <div className="employee-directory-stat-value">{card.value}</div>
                      <div className="employee-directory-stat-badge">{card.badge}</div>
                    </div>
                  </div>
                )
              })}
            </section>

            {addEmployeeForm}

            {/* Employee Table */}
            <section className="employee-directory-table-section">
              <div className="employee-directory-table-header">
                <div className="employee-directory-table-title">All Employees (247)</div>
              </div>

              <div className="employee-directory-table-wrapper">
                <table className="employee-directory-table">
                  <thead>
                    <tr>
                      <th>Employee</th>
                      <th>Department</th>
                      <th>Position</th>
                      <th>Location</th>
                      <th>Status</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {employees.map((employee) => (
                      <tr
                        key={employee.id}
                        className="employee-directory-table-row"
                        onClick={() => handleEmployeeClick(employee.id)}
                      >
                        <td className="employee-directory-employee-cell">
                          <div className="employee-directory-avatar">{employee.avatar}</div>
                          <div className="employee-directory-employee-cell-text">
                            <span className="employee-directory-name">{employee.name}</span>
                            <span className="employee-directory-employee-email">{employee.email}</span>
                          </div>
                        </td>
                        <td>{employee.department}</td>
                        <td>{employee.position}</td>
                        <td>{employee.location}</td>
                        <td>
                          <span className={`employee-directory-status-badge status-${employee.status.toLowerCase().replace(/\s+/g, '-')}`}>
                            {employee.status}
                          </span>
                        </td>
                        <td>
                          <div className="employee-directory-actions-group">
                            <button
                              className="employee-directory-row-action-btn"
                              aria-label="View employee"
                              onClick={(e) => {
                                e.stopPropagation()
                                handleEmployeeClick(employee.id)
                              }}
                            >
                              <FiEye size={16} />
                            </button>
                            <button className="employee-directory-row-action-btn" aria-label="Edit employee" onClick={(e) => e.stopPropagation()}>
                              <FiEdit2 size={16} />
                            </button>
                            <button className="employee-directory-row-action-btn" aria-label="More actions" onClick={(e) => e.stopPropagation()}>
                              <FiMoreVertical size={16} />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>
          </>
        )}
      </main>
    </div>
  )
}

export default EmployeeDirectory
