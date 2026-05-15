import { useState } from 'react'
import Sidebar from './Sidebar'
import { FiBell, FiPlus, FiSearch, FiChevronDown, FiToggleRight, FiEdit3, FiEye, FiTrash2, FiFilter, FiX, FiCalendar } from 'react-icons/fi'
import './productAccessManagement.css'
import './productOverview.css'

const USERS_DATA = [
  {
    id: 1,
    name: 'Emily Carter',
    email: 'emily.carter@company.com',
    role: 'Admin',
    accessLevel: 'Full Access',
    status: 'Active',
    lastActivity: '2 hours ago',
  },
  {
    id: 2,
    name: 'James Rodriguez',
    email: 'james.rodriguez@company.com',
    role: 'Manager',
    accessLevel: 'Read/Write',
    status: 'Active',
    lastActivity: '1 day ago',
  },
  {
    id: 3,
    name: 'Lisa Thompson',
    email: 'lisa.thompson@company.com',
    role: 'User',
    accessLevel: 'Read Only',
    status: 'Pending',
    lastActivity: '3 days ago',
  },
  {
    id: 4,
    name: 'David Park',
    email: 'david.park@company.com',
    role: 'Viewer',
    accessLevel: 'Read Only',
    status: 'Pending',
    lastActivity: '5 days ago',
  },
]

const ROLES_DATA = [
  {
    id: 'super-admin',
    name: 'Super Admin',
    type: 'System Role',
    toggle: true,
    description: 'Complete access to all features and settings',
    users: 8,
    permissions: 'All',
  },
  {
    id: 'administrator',
    name: 'Administrator',
    type: 'System Role',
    toggle: true,
    users: 15,
    permissions: '45',
  },
  {
    id: 'manager',
    name: 'Manager',
    type: 'System Role',
    toggle: true,
    users: 42,
    permissions: '28',
  },
  {
    id: 'power-user',
    name: 'Power User',
    type: 'Custom Role',
    toggle: true,
    users: 87,
    permissions: '18',
  },
  {
    id: 'user',
    name: 'User',
    type: 'System Role',
    toggle: true,
    users: 156,
    permissions: '12',
  },
  {
    id: 'guest',
    name: 'Guest',
    type: 'System Role',
    toggle: false,
    users: 34,
    permissions: '3',
  },
  {
    id: 'analyst',
    name: 'Analyst',
    type: 'Custom Role',
    toggle: true,
    users: 28,
    permissions: '22',
  },
  {
    id: 'viewer',
    name: 'Viewer',
    type: 'System Role',
    toggle: true,
    users: 112,
    permissions: '5',
  },
  {
    id: 'operator',
    name: 'Operator',
    type: 'Custom Role',
    toggle: true,
    users: 67,
    permissions: '31',
  },
  {
    id: 'auditor',
    name: 'Auditor',
    type: 'System Role',
    toggle: true,
    users: 19,
    permissions: '8',
  },
  {
    id: 'developer',
    name: 'Developer',
    type: 'Custom Role',
    toggle: true,
    users: 145,
    permissions: '52',
  },
  {
    id: 'support',
    name: 'Support',
    type: 'System Role',
    toggle: true,
    users: 56,
    permissions: '15',
  },
]

const FEATURES_DATA = [
  {
    id: 1,
    name: 'User Management',
    status: 'Active',
    description: 'Complete user lifecycle management including creation, modification, and deletion',
    meta: '247 users affected • Last updated 2 hours ago',
    toggle: true,
  },
  {
    id: 2,
    name: 'Role Management',
    status: 'Active',
    description: 'Define and manage user roles with granular permission controls',
    meta: '15 roles configured • Last updated 1 day ago',
    toggle: true,
  },
  {
    id: 3,
    name: 'Analytics & Reports',
    status: 'Active',
    description: 'Comprehensive analytics dashboard with custom reporting capabilities',
    meta: '12 reports generated today • Last updated 30 minutes ago',
    toggle: true,
  },
  {
    id: 4,
    name: 'System Configuration',
    status: 'Beta',
    description: 'Advanced system settings and configuration management tools',
    meta: '5 configurations pending • Last updated 3 hours ago',
    toggle: true,
  },
  {
    id: 5,
    name: 'Audit Logs',
    status: 'Active',
    description: 'Comprehensive audit trail and compliance logging system',
    meta: '1,247 events logged today • Last updated 5 minutes ago',
    toggle: true,
  },
  {
    id: 6,
    name: 'Security Alerts',
    status: 'Disabled',
    description: 'Real-time security monitoring and threat detection system',
    meta: 'Feature temporarily disabled • Last updated 2 days ago',
    toggle: false,
  },
]

const ACCESS_USERS = [
  { id: 1, name: 'Sarah Johnson', email: 'sarah.johnson@company.com' },
  { id: 2, name: 'Emily Carter', email: 'emily.carter@company.com' },
  { id: 3, name: 'James Rodriguez', email: 'james.rodriguez@company.com' },
]

const ASSIGNED_ROLES = [
  { id: 1, name: 'Administrator', type: 'System', desc: 'Full system management access', permissions: 45 },
  { id: 2, name: 'Team Lead', type: 'Custom', desc: 'Project management features', permissions: 22 },
  { id: 3, name: 'Finance Viewer', type: 'Custom', desc: 'Read-only financial data', permissions: 8 },
]

const PERMISSIONS_DATA = [
  {
    id: 1,
    module: 'User Management',
    accessLevel: 'Full Access',
    permissions: ['Create Users', 'Edit Users', 'Delete Users', 'View Users'],
    source: ['Administrator', 'Team Lead'],
  },
  {
    id: 2,
    module: 'Project Management',
    accessLevel: 'Full Access',
    permissions: ['Create Projects', 'Edit Projects', 'Delete Projects', 'Assign Tasks'],
    source: ['Team Lead'],
  },
  {
    id: 3,
    module: 'Analytics & Reporting',
    accessLevel: 'Full Access',
    permissions: ['View Reports', 'Create Reports', 'Export Data', 'Schedule Reports'],
    source: ['Administrator'],
  },
  {
    id: 4,
    module: 'Financial Data',
    accessLevel: 'Read Only',
    permissions: ['View Invoices', 'View Transactions', 'View Financial Data'],
    source: ['Finance Viewer'],
  },
  {
    id: 5,
    module: 'System Settings',
    accessLevel: 'Full Access',
    permissions: ['User Settings', 'Audit Settings', 'Manage Integrations', 'Security Config'],
    source: ['Administrator'],
  },
]

const RECENT_CHANGES = [
  { id: 1, action: 'Role Added: Team Lead', time: '1 day ago' },
  { id: 2, action: 'Permission Modified', time: '3 days ago' },
  { id: 3, action: 'Security Review Completed', time: '1 week ago' },
]

const AUDIT_LOG_DATA = [
  {
    id: 1,
    timestamp: 'Dec 22, 2024',
    event: 'Token Revoked',
    eventType: 'critical',
    user: 'Michael Chen',
    resource: 'tok_prod_a8f3j2k9m1n4p7q2',
    ipAddress: '192.168.1.45',
    status: 'Critical',
  },
  {
    id: 2,
    timestamp: 'Dec 22, 2024',
    event: 'Token Revocation Initiated',
    eventType: 'warning',
    user: 'Michael Chen',
    resource: 'tok_prod_a8f3j2k9m1n4p7q2',
    ipAddress: '192.168.1.45',
    status: 'Warning',
  },
  {
    id: 3,
    timestamp: 'Dec 22, 2024',
    event: 'Token Used',
    eventType: 'success',
    user: 'Alex Thompson',
    resource: 'tok_dev_k9m1n4p7q2a8f3j2',
    ipAddress: '10.0.0.15',
    status: 'Success',
  },
  {
    id: 4,
    timestamp: 'Dec 22, 2024',
    event: 'Authentication Failed',
    eventType: 'failed',
    user: 'System Admin',
    resource: 'tok_service_n4p7q2a8f3j2k9m1',
    ipAddress: '172.16.0.30',
    status: 'Failed',
  },
]

function ProductsApplicationsPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [activeTab, setActiveTab] = useState('Product Overview')
  const [roleToggles, setRoleToggles] = useState(
    ROLES_DATA.reduce((acc, role) => ({ ...acc, [role.id]: role.toggle }), {})
  )
  const [featureToggles, setFeatureToggles] = useState(
    FEATURES_DATA.reduce((acc, feature) => ({ ...acc, [feature.id]: feature.toggle }), {})
  )
  const [showAssignModal, setShowAssignModal] = useState(false)
  const [selectedUser, setSelectedUser] = useState(null)
  const [selectedRole, setSelectedRole] = useState('Admin')
  const [accessLevel, setAccessLevel] = useState('Full Access')
  const [accessExpiration, setAccessExpiration] = useState('')
  const [notificationSettings, setNotificationSettings] = useState({
    sendWelcome: true,
    notifyExpiration: false
  })
  const [selectedAccessUser, setSelectedAccessUser] = useState('Sarah Johnson - sarah.johnson@company.com')
  const [permissionFilter, setPermissionFilter] = useState('All Permissions')

  const handleToggle = (roleId) => {
    setRoleToggles(prev => ({
      ...prev,
      [roleId]: !prev[roleId]
    }))
  }

  const handleFeatureToggle = (featureId) => {
    setFeatureToggles(prev => ({
      ...prev,
      [featureId]: !prev[featureId]
    }))
  }

  const handleOpenAssignModal = () => {
    setShowAssignModal(true)
  }

  const handleCloseAssignModal = () => {
    setShowAssignModal(false)
  }

  const handleSaveAccess = () => {
    console.log('Saving access:', {
      selectedUser,
      selectedRole,
      accessLevel,
      accessExpiration,
      notificationSettings
    })
    setShowAssignModal(false)
  }

  const totalRoles = ROLES_DATA.length
  const activeRoles = Object.values(roleToggles).filter(Boolean).length
  const systemRoles = ROLES_DATA.filter(r => r.type === 'System Role').length
  const customRoles = ROLES_DATA.filter(r => r.type === 'Custom Role').length

  const handleExportLog = () => {
    console.log('Exporting audit log...')
  }

  return (
    <main className="pam-layout">
      <Sidebar sidebarOpen={sidebarOpen} />
      <div className={`sidebar-overlay ${sidebarOpen ? 'active' : ''}`} onClick={() => setSidebarOpen(false)} />

      <section className="pam-main">
        {/* Header */}
        <header className="pam-header">
          <div className="pam-header-top">
            <h1 className="pam-title">Product Access Management</h1>
            <div className="pam-header-actions">
              <button className="pam-notification-btn" title="Notifications">
                <FiBell size={20} />
                <span className="pam-notification-badge">3</span>
              </button>
              <button className="pam-new-product-btn">
                <FiPlus size={16} />
                <span>New Product</span>
              </button>
            </div>
          </div>
          <nav className="pam-breadcrumb">
            <a href="/">Home</a>
            <span>/</span>
            <a href="/">Products</a>
            <span>/</span>
            <span>Access Management</span>
          </nav>
        </header>

        {/* Product Summary Card */}
        <div className="pam-product-summary">
          <div className="pam-summary-icon-wrapper">
            <div className="pam-summary-icon-box">◈</div>
          </div>
          <div className="pam-summary-content">
            <h2 className="pam-summary-title">IAM Security Suite</h2>
            <p className="pam-summary-subtitle">Identity and Access Management Platform</p>
            <div className="pam-summary-status-row">
              <div className="pam-status-item">
                <span className="pam-status-dot"></span>
                <span className="pam-status-text">Active</span>
              </div>
              <div className="pam-status-item">
                <span className="pam-version-label">Version 2.1.0</span>
              </div>
              <div className="pam-status-item">
                <span className="pam-users-label">247 Users</span>
              </div>
            </div>
          </div>
          <div className="pam-summary-actions">
            <button className="pam-configure-btn">Configure</button>
            <button className="pam-save-btn">Save Changes</button>
          </div>
        </div>

        {/* Tab Bar */}
        <div className="pam-tabs">
          {['Overview', 'Users', 'Roles', 'Features', 'Access', 'Tokens'].map((tab) => {
            const tabKey = tab === 'Overview' ? 'Product Overview' : tab;
            return (
              <button
                key={tabKey}
                className={`pam-tab ${tabKey === activeTab ? 'active' : ''}`}
                onClick={() => setActiveTab(tabKey)}
              >
                {tab}
              </button>
            );
          })}
        </div>

        {/* Content Area */}
        <div className="pam-content">
          {activeTab === 'Product Overview' && (
            <div className="pam-overview-container">
              {/* Two Column Layout */}
              <div className="pam-overview-grid">
                {/* Left: Product Information */}
                <div className="pam-overview-card">
                  <h3 className="pam-overview-card-title">Product Information</h3>
                  <div className="pam-overview-field-group">
                    <div className="pam-overview-field">
                      <label className="pam-overview-label">Product Name</label>
                      <div className="pam-overview-value">IAM Security Suite</div>
                    </div>
                    <div className="pam-overview-field">
                      <label className="pam-overview-label">Description</label>
                      <div className="pam-overview-value">Identity and Access Management Platform for enterprise security</div>
                    </div>
                    <div className="pam-overview-field">
                      <label className="pam-overview-label">Version</label>
                      <div className="pam-overview-value">2.1.0</div>
                    </div>
                    <div className="pam-overview-field">
                      <label className="pam-overview-label">Status</label>
                      <div className="pam-overview-value status-active">Active</div>
                    </div>
                  </div>
                </div>

                {/* Right: Usage Statistics */}
                <div className="pam-overview-card">
                  <h3 className="pam-overview-card-title">Usage Statistics</h3>
                  <div className="pam-overview-stats-list">
                    <div className="pam-overview-stat-row">
                      <span className="pam-stat-name">Total Users</span>
                      <span className="pam-stat-num">247</span>
                    </div>
                    <div className="pam-overview-stat-row">
                      <span className="pam-stat-name">Active Sessions</span>
                      <span className="pam-stat-num">89</span>
                    </div>
                    <div className="pam-overview-stat-row">
                      <span className="pam-stat-name">Roles Assigned</span>
                      <span className="pam-stat-num">156</span>
                    </div>
                    <div className="pam-overview-stat-row">
                      <span className="pam-stat-name">Features Enabled</span>
                      <span className="pam-stat-num">12/15</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'Users' && (
            <>
              {/* User Management Header */}
              <div className="pam-section-header">
                <div>
                  <h3 className="pam-section-title">User Access Management</h3>
                  <p className="pam-section-subtitle">Manage user access and permissions for IAM Security Suite</p>
                </div>
                <button className="pam-assign-user-btn" onClick={handleOpenAssignModal}>
                  <FiPlus size={16} />
                  <span>Assign User Access</span>
                </button>
              </div>

              {/* Search & Filter Row */}
              <div className="pam-search-filter-row">
                <div className="pam-search-box">
                  <FiSearch className="pam-search-icon" size={16} />
                  <input
                    type="text"
                    placeholder="Search users by name, email, or role..."
                    className="pam-search-input"
                  />
                </div>
                <div className="pam-filter-dropdowns">
                  <button className="pam-filter-dropdown">
                    <span>All Roles</span>
                    <FiChevronDown size={14} />
                  </button>
                  <button className="pam-filter-dropdown">
                    <span>All Status</span>
                    <FiChevronDown size={14} />
                  </button>
                  <button className="pam-filter-button">
                    <FiFilter size={14} />
                  </button>
                </div>
              </div>

              {/* Stats Row */}
              <div className="pam-stats-row">
                <div className="pam-stat-item">
                  <div className="pam-stat-value">247</div>
                  <div className="pam-stat-label">Total Users</div>
                </div>
                <div className="pam-stat-item">
                  <div className="pam-stat-value" style={{ color: '#10B981' }}>198</div>
                  <div className="pam-stat-label">Active</div>
                </div>
                <div className="pam-stat-item">
                  <div className="pam-stat-value" style={{ color: '#F59E0B' }}>32</div>
                  <div className="pam-stat-label">Pending</div>
                </div>
                <div className="pam-stat-item">
                  <div className="pam-stat-value" style={{ color: '#EF4444' }}>17</div>
                  <div className="pam-stat-label">Inactive</div>
                </div>
              </div>

              {/* Users Table */}
              <div className="pam-users-table-wrapper">
                <table className="pam-users-table">
                  <thead>
                    <tr>
                      <th>
                        <input type="checkbox" className="pam-table-checkbox" />
                      </th>
                      <th>User</th>
                      <th>Role</th>
                      <th>Access Level</th>
                      <th>Status</th>
                      <th>Last Activity</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {USERS_DATA.map((user) => (
                      <tr key={user.id}>
                        <td>
                          <input type="checkbox" className="pam-table-checkbox" />
                        </td>
                        <td>
                          <div className="pam-user-info">
                            <div className="pam-user-avatar">{user.name.charAt(0)}</div>
                            <div className="pam-user-details">
                              <div className="pam-user-name">{user.name}</div>
                              <div className="pam-user-email">{user.email}</div>
                            </div>
                          </div>
                        </td>
                        <td>
                          <span className="pam-role-badge">{user.role}</span>
                        </td>
                        <td>
                          <span className="pam-access-level">{user.accessLevel}</span>
                        </td>
                        <td>
                          <span className={`pam-status-badge pam-status-${user.status.toLowerCase()}`}>
                            <span className="pam-status-dot"></span>
                            {user.status}
                          </span>
                        </td>
                        <td>
                          <span className="pam-last-activity">{user.lastActivity}</span>
                        </td>
                        <td>
                          <div className="pam-table-actions">
                            <button className="pam-table-action-btn edit-btn" title="Edit">
                              <FiEdit3 size={14} />
                            </button>
                            <button className="pam-table-action-btn view-btn" title="View">
                              <FiEye size={14} />
                            </button>
                            <button className="pam-table-action-btn delete-btn" title="Delete">
                              <FiTrash2 size={14} />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </>
          )}

          {activeTab === 'Roles' && (
            <>
              {/* Role Management Header */}
              <div className="pam-section-header">
                <div>
                  <h3 className="pam-section-title">Role Management</h3>
                  <p className="pam-section-subtitle">Configure role-based access control for IAM Security Suite</p>
                </div>
                <button className="pam-create-role-btn">Create New Role</button>
              </div>

              {/* Search & Filter Row */}
              <div className="pam-search-filter-row">
                <div className="pam-search-box">
                  <FiSearch className="pam-search-icon" size={16} />
                  <input
                    type="text"
                    placeholder="Search roles by name or description..."
                    className="pam-search-input"
                  />
                </div>
                <div className="pam-filter-dropdowns">
                  <button className="pam-filter-dropdown">
                    <span>All Types</span>
                    <FiChevronDown size={14} />
                  </button>
                  <button className="pam-filter-dropdown">
                    <span>All Status</span>
                    <FiChevronDown size={14} />
                  </button>
                </div>
              </div>

              {/* Stats Row */}
              <div className="pam-stats-row">
                <div className="pam-stat-item">
                  <div className="pam-stat-value">{totalRoles}</div>
                  <div className="pam-stat-label">Total Roles</div>
                </div>
                <div className="pam-stat-item">
                  <div className="pam-stat-value">{activeRoles}</div>
                  <div className="pam-stat-label">Active</div>
                </div>
                <div className="pam-stat-item">
                  <div className="pam-stat-value">{systemRoles}</div>
                  <div className="pam-stat-label">System</div>
                </div>
                <div className="pam-stat-item">
                  <div className="pam-stat-value">{customRoles}</div>
                  <div className="pam-stat-label">Custom</div>
                </div>
              </div>

              {/* Role Cards Grid */}
              <div className="pam-role-cards-grid">
                {ROLES_DATA.map(role => (
                  <div key={role.id} className="pam-role-card">
                    <div className="pam-role-card-header">
                      <div className="pam-role-info">
                        <h4 className="pam-role-name">{role.name}</h4>
                        <span className="pam-role-type">{role.type}</span>
                      </div>
                      <button
                        className={`pam-role-toggle ${roleToggles[role.id] ? 'on' : 'off'}`}
                        onClick={() => handleToggle(role.id)}
                      >
                        <FiToggleRight size={20} />
                      </button>
                    </div>

                    {role.description && (
                      <p className="pam-role-description">{role.description}</p>
                    )}

                    <div className="pam-role-stats">
                      <div className="pam-role-stat">
                        <span className="pam-role-stat-label">Users:</span>
                        <span className="pam-role-stat-value">{role.users}</span>
                      </div>
                      <div className="pam-role-stat">
                        <span className="pam-role-stat-label">Permissions:</span>
                        <span className="pam-role-stat-value">{role.permissions}</span>
                      </div>
                    </div>

                    <div className="pam-role-actions">
                      <button className="pam-role-action-btn edit">
                        <FiEdit3 size={14} />
                        <span>Edit</span>
                      </button>
                      <button className="pam-role-action-btn view">
                        <FiEye size={14} />
                        <span>View</span>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}

          {activeTab === 'Features' && (
            <>
              {/* Feature Management Header */}
              <div className="pam-section-header">
                <div>
                  <h3 className="pam-section-title">Feature Management</h3>
                  <p className="pam-section-subtitle">Configure and manage product features and their availability</p>
                </div>
                <div className="pam-header-buttons">
                  <button className="pam-filter-btn">
                    <FiFilter size={16} />
                  </button>
                  <button className="pam-add-feature-btn">
                    <FiPlus size={16} />
                    <span>Add Feature</span>
                  </button>
                </div>
              </div>

              {/* Stats Row */}
              <div className="pam-stats-row">
                <div className="pam-stat-item">
                  <div className="pam-stat-value">24</div>
                  <div className="pam-stat-label">Total Features</div>
                </div>
                <div className="pam-stat-item">
                  <div className="pam-stat-value" style={{ color: '#10B981' }}>18</div>
                  <div className="pam-stat-label">Active</div>
                </div>
                <div className="pam-stat-item">
                  <div className="pam-stat-value" style={{ color: '#F59E0B' }}>4</div>
                  <div className="pam-stat-label">Beta</div>
                </div>
                <div className="pam-stat-item">
                  <div className="pam-stat-value" style={{ color: '#EF4444' }}>2</div>
                  <div className="pam-stat-label">Disabled</div>
                </div>
              </div>

              {/* Features List */}
              <div className="pam-features-list">
                {FEATURES_DATA.map((feature) => (
                  <div key={feature.id} className="pam-feature-card">
                    <div className="pam-feature-header">
                      <div className="pam-feature-title-section">
                        <h4 className="pam-feature-name">{feature.name}</h4>
                        <span className={`pam-feature-status-badge pam-status-${feature.status.toLowerCase()}`}>
                          {feature.status}
                        </span>
                      </div>
                      <button
                        className={`pam-feature-toggle ${featureToggles[feature.id] ? 'on' : 'off'}`}
                        onClick={() => handleFeatureToggle(feature.id)}
                      >
                        <FiToggleRight size={24} />
                      </button>
                    </div>

                    <p className="pam-feature-description">{feature.description}</p>

                    <div className="pam-feature-meta">{feature.meta}</div>
                  </div>
                ))}
              </div>
            </>
          )}

          {activeTab === 'Access' && (
            <>
              {/* Effective Access Analysis Header */}
              <div className="pam-section-header">
                <div>
                  <h3 className="pam-section-title">Effective Access Analysis</h3>
                  <p className="pam-section-subtitle">View comprehensive permissions for a specific user across all roles</p>
                </div>
                <button className="pam-export-report-btn">
                  <span>Export Report</span>
                </button>
              </div>

              {/* Filters */}
              <div className="pam-access-filters">
                <div className="pam-access-filter-group">
                  <label className="pam-access-filter-label">Select User</label>
                  <select 
                    className="pam-access-filter-select"
                    value={selectedAccessUser}
                    onChange={(e) => setSelectedAccessUser(e.target.value)}
                  >
                    {ACCESS_USERS.map((user) => (
                      <option key={user.id} value={`${user.name} - ${user.email}`}>
                        {user.name} - {user.email}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="pam-access-filter-group">
                  <label className="pam-access-filter-label">Filter by Permission Type</label>
                  <select 
                    className="pam-access-filter-select"
                    value={permissionFilter}
                    onChange={(e) => setPermissionFilter(e.target.value)}
                  >
                    <option>All Permissions</option>
                    <option>Read</option>
                    <option>Write</option>
                    <option>Admin</option>
                  </select>
                </div>
              </div>

              {/* User Summary Card */}
              <div className="pam-user-summary-card">
                <div className="pam-user-summary-avatar">S</div>
                <div className="pam-user-summary-info">
                  <div className="pam-user-summary-name">Sarah Johnson</div>
                  <div className="pam-user-summary-email">sarah.johnson@company.com</div>
                  <div className="pam-user-summary-badges">
                    <span className="pam-user-badge active">Active User</span>
                    <span className="pam-user-badge verified">Verified</span>
                  </div>
                </div>
                <div className="pam-user-summary-stats">
                  <div className="pam-user-stat">
                    <div className="pam-user-stat-value">3</div>
                    <div className="pam-user-stat-label">Assigned Roles</div>
                  </div>
                  <div className="pam-user-stat">
                    <div className="pam-user-stat-value">47</div>
                    <div className="pam-user-stat-label">Total Permissions</div>
                  </div>
                  <div className="pam-user-stat">
                    <div className="pam-user-stat-value">12</div>
                    <div className="pam-user-stat-label">Direct Access</div>
                  </div>
                  <div className="pam-user-stat">
                    <div className="pam-user-stat-value">2 hours ago</div>
                    <div className="pam-user-stat-label">Last Login</div>
                  </div>
                </div>
              </div>

              {/* Assigned Roles Summary */}
              <div className="pam-assigned-roles-section">
                <h3 className="pam-assigned-roles-title">Assigned Roles Summary</h3>
                <div className="pam-assigned-roles-grid">
                  {ASSIGNED_ROLES.map((role) => (
                    <div key={role.id} className="pam-assigned-role-card">
                      <div className="pam-assigned-role-header">
                        <h4 className="pam-assigned-role-name">{role.name}</h4>
                        <span className="pam-assigned-role-type">{role.type}</span>
                      </div>
                      <p className="pam-assigned-role-desc">{role.desc}</p>
                      <div className="pam-assigned-role-footer">
                        <span className="pam-assigned-role-perms">Permissions: {role.permissions}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Detailed Permissions Breakdown */}
              <div className="pam-detailed-permissions-section">
                <div className="pam-permissions-header">
                  <h3 className="pam-permissions-title">Detailed Permissions Breakdown</h3>
                  <div className="pam-permission-filter-chips">
                    <span className="pam-filter-chip active">All</span>
                    <span className="pam-filter-chip">Read</span>
                    <span className="pam-filter-chip">Write</span>
                    <span className="pam-filter-chip">Admin</span>
                  </div>
                </div>

                <div className="pam-permissions-list">
                  {PERMISSIONS_DATA.map((perm) => (
                    <div key={perm.id} className="pam-permission-item">
                      <div className="pam-permission-header">
                        <h4 className="pam-permission-module">{perm.module}</h4>
                        <span className={`pam-permission-level ${perm.accessLevel.toLowerCase().replace(' ', '-')}`}>
                          {perm.accessLevel}
                        </span>
                      </div>
                      <div className="pam-permission-details">
                        <div className="pam-permission-items">
                          {perm.permissions.map((p, idx) => (
                            <div key={idx} className="pam-permission-item-tag">
                              {p}
                            </div>
                          ))}
                        </div>
                        <div className="pam-permission-source">
                          <span className="pam-source-label">Source: {perm.source.join(', ')}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Recent Access Changes */}
              <div className="pam-recent-changes-section">
                <h3 className="pam-recent-changes-title">Recent Access Changes</h3>
                <div className="pam-recent-changes-list">
                  {RECENT_CHANGES.map((change) => (
                    <div key={change.id} className="pam-recent-change-item">
                      <span className="pam-recent-change-action">{change.action}</span>
                      <span className="pam-recent-change-time">{change.time}</span>
                    </div>
                  ))}
                </div>
              </div>
            </>
          )}

          {activeTab === 'Tokens' && (
            <>
              {/* Audit Log Header */}
              <div className="pam-section-header">
                <div>
                  <h3 className="pam-section-title">Audit Log</h3>
                  <p className="pam-section-subtitle">Detailed log of all token-related activities and security events</p>
                </div>
                <div className="pam-header-buttons">
                  <button className="pam-filter-btn">
                    <FiFilter size={16} />
                    <span>Filter</span>
                  </button>
                  <button className="pam-export-btn" onClick={handleExportLog}>
                    <span>Export</span>
                  </button>
                </div>
              </div>

              {/* Search & Filter Row */}
              <div className="pam-audit-search-filter-row">
                <div className="pam-search-box">
                  <FiSearch className="pam-search-icon" size={16} />
                  <input
                    type="text"
                    placeholder="Search audit logs..."
                    className="pam-search-input"
                  />
                </div>
                <div className="pam-filter-dropdowns">
                  <button className="pam-filter-dropdown">
                    <span>All Events</span>
                    <FiChevronDown size={14} />
                  </button>
                  <button className="pam-filter-dropdown">
                    <span>All Users</span>
                    <FiChevronDown size={14} />
                  </button>
                  <button className="pam-filter-dropdown">
                    <span>Last 24 hours</span>
                    <FiChevronDown size={14} />
                  </button>
                </div>
              </div>

              {/* Audit Log Table */}
              <div className="pam-audit-table-wrapper">
                <table className="pam-audit-table">
                  <thead>
                    <tr>
                      <th>Timestamp</th>
                      <th>Event</th>
                      <th>User</th>
                      <th>Resource</th>
                      <th>IP Address</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {AUDIT_LOG_DATA.map((log) => (
                      <tr key={log.id}>
                        <td>
                          <span className="pam-timestamp">{log.timestamp}</span>
                        </td>
                        <td>
                          <span className="pam-event-name">{log.event}</span>
                        </td>
                        <td>
                          <span className="pam-user-name">{log.user}</span>
                        </td>
                        <td>
                          <span className="pam-resource">{log.resource}</span>
                        </td>
                        <td>
                          <span className="pam-ip-address">{log.ipAddress}</span>
                        </td>
                        <td>
                          <span className={`pam-audit-status ${log.eventType}`}>
                            {log.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </>
          )}
        </div>
      </section>

      {/* Assign User Access Modal */}
      {showAssignModal && (
        <>
          <div className="pam-modal-overlay" onClick={handleCloseAssignModal}></div>
          <div className="pam-modal">
            <div className="pam-modal-header">
              <h2 className="pam-modal-title">Assign User Access</h2>
              <button className="pam-modal-close" onClick={handleCloseAssignModal}>
                <FiX size={20} />
              </button>
            </div>

            <div className="pam-modal-body">
              {/* Select User Section */}
              <div className="pam-modal-section">
                <h3 className="pam-modal-section-title">Select User</h3>
                <div className="pam-modal-search-box">
                  <FiSearch className="pam-modal-search-icon" size={16} />
                  <input
                    type="text"
                    placeholder="Search users by name or email..."
                    className="pam-modal-search-input"
                  />
                </div>
                <div className="pam-modal-user-list">
                  {USERS_DATA.map((user) => (
                    <div
                      key={user.id}
                      className={`pam-modal-user-item ${selectedUser === user.id ? 'selected' : ''}`}
                      onClick={() => setSelectedUser(user.id)}
                    >
                      <div className="pam-modal-user-radio">
                        <input
                          type="radio"
                          name="user"
                          value={user.id}
                          checked={selectedUser === user.id}
                          onChange={() => setSelectedUser(user.id)}
                        />
                      </div>
                      <div className="pam-modal-user-avatar">{user.name.charAt(0)}</div>
                      <div className="pam-modal-user-info">
                        <div className="pam-modal-user-name">{user.name}</div>
                        <div className="pam-modal-user-email">{user.email}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Assign Role Section */}
              <div className="pam-modal-section">
                <h3 className="pam-modal-section-title">Assign Role</h3>
                <div className="pam-modal-role-grid">
                  {[
                    { id: 'Admin', name: 'Admin', desc: 'Full access' },
                    { id: 'Manager', name: 'Manager', desc: 'Read/Write' },
                    { id: 'User', name: 'User', desc: 'Read only' },
                    { id: 'Viewer', name: 'Viewer', desc: 'Limited view' }
                  ].map((role) => (
                    <div
                      key={role.id}
                      className={`pam-modal-role-card ${selectedRole === role.id ? 'selected' : ''}`}
                      onClick={() => setSelectedRole(role.id)}
                    >
                      <div className="pam-modal-role-radio">
                        <input
                          type="radio"
                          name="role"
                          value={role.id}
                          checked={selectedRole === role.id}
                          onChange={() => setSelectedRole(role.id)}
                        />
                      </div>
                      <div className="pam-modal-role-icon-box">
                        {role.id === 'Admin' && '◈'}
                        {role.id === 'Manager' && '◉'}
                        {role.id === 'User' && '◈'}
                        {role.id === 'Viewer' && '◉'}
                      </div>
                      <div className="pam-modal-role-info">
                        <div className="pam-modal-role-name">{role.name}</div>
                        <div className="pam-modal-role-desc">{role.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Access Level Section */}
              <div className="pam-modal-section">
                <h3 className="pam-modal-section-title">Access Level</h3>
                <select className="pam-modal-select" value={accessLevel} onChange={(e) => setAccessLevel(e.target.value)}>
                  <option>Full Access</option>
                  <option>Read/Write</option>
                  <option>Read Only</option>
                  <option>Limited</option>
                </select>
              </div>

              {/* Access Expiration Section */}
              <div className="pam-modal-section">
                <h3 className="pam-modal-section-title">Access Expiration (Optional)</h3>
                <div className="pam-modal-date-input-wrapper">
                  <input
                    type="text"
                    placeholder="dd-mm-yyyy"
                    className="pam-modal-date-input"
                    value={accessExpiration}
                    onChange={(e) => setAccessExpiration(e.target.value)}
                  />
                  <FiCalendar className="pam-modal-date-icon" size={16} />
                </div>
              </div>

              {/* Notification Settings Section */}
              <div className="pam-modal-section">
                <h3 className="pam-modal-section-title">Notification Settings</h3>
                <div className="pam-modal-checkbox-group">
                  <label className="pam-modal-checkbox-label">
                    <input
                      type="checkbox"
                      checked={notificationSettings.sendWelcome}
                      onChange={(e) => setNotificationSettings({
                        ...notificationSettings,
                        sendWelcome: e.target.checked
                      })}
                    />
                    <span>Send welcome email to user</span>
                  </label>
                  <label className="pam-modal-checkbox-label">
                    <input
                      type="checkbox"
                      checked={notificationSettings.notifyExpiration}
                      onChange={(e) => setNotificationSettings({
                        ...notificationSettings,
                        notifyExpiration: e.target.checked
                      })}
                    />
                    <span>Notify user about access expiration</span>
                  </label>
                </div>
              </div>
            </div>

            <div className="pam-modal-footer">
              <button className="pam-modal-cancel-btn" onClick={handleCloseAssignModal}>
                Cancel
              </button>
              <button className="pam-modal-save-btn" onClick={handleSaveAccess}>
                Save Access
              </button>
            </div>
          </div>
        </>
      )}
    </main>
  )
}

export default ProductsApplicationsPage
