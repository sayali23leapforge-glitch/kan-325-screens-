import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { FiBell, FiBriefcase, FiChevronDown, FiCode, FiEdit2, FiLock, FiMoreVertical, FiPlus, FiSearch, FiShield, FiUserCheck, FiUserPlus, FiUsers } from 'react-icons/fi'
import Sidebar from './Sidebar'
import './roles-permissions.css'

function RolesPermissionsPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const navigate = useNavigate()

  const roleRows = [
    {
      id: 1,
      slug: 'super-admin',
      name: 'Super Admin',
      type: 'System',
      description: 'Full system access',
      permissions: 'All (892)',
      users: ['MC', 'SJ', 'JW'],
      usersCount: '+2',
      tenant: 'Global',
      status: 'Active'
    },
    {
      id: 2,
      slug: 'tenant-admin',
      name: 'Tenant Admin',
      type: 'Tenant',
      description: 'Manage tenant resources',
      permissions: '156 permissions',
      users: ['ER', 'AD'],
      usersCount: '+18',
      tenant: 'Acme Corp',
      status: 'Active'
    },
    {
      id: 3,
      slug: 'manager',
      name: 'Manager',
      type: 'Custom',
      description: 'Team management access',
      permissions: '67 permissions',
      users: ['SL'],
      usersCount: '+12',
      tenant: 'Global Systems',
      status: 'Pending'
    },
    {
      id: 4,
      slug: 'developer',
      name: 'Developer',
      type: 'Custom',
      description: 'API and integration access',
      permissions: '89 permissions',
      users: ['RK', 'TP'],
      usersCount: '+45',
      tenant: 'Tech Solutions',
      status: 'Active'
    }
  ]

  const handleCreateRole = () => {
    navigate('/roles-permissions/role-management/create')
  }

  const handleNotifications = () => {
    console.log('View notifications')
  }

  const typeClass = (type) => (type === 'System' ? 'rpv-chip-system' : type === 'Tenant' ? 'rpv-chip-tenant' : 'rpv-chip-custom')
  const statusClass = (status) => (status === 'Active' ? 'rpv-status-active' : 'rpv-status-pending')

  return (
    <main className="dashboard-layout">
      <Sidebar sidebarOpen={sidebarOpen} />
      <div className={`sidebar-overlay ${sidebarOpen ? 'active' : ''}`} onClick={() => setSidebarOpen(false)} />
      <section className="dashboard-main rpv-main">
        <header className="rpv-header">
          <div>
            <h1>Roles & Permissions</h1>
          </div>
          <div className="rpv-actions">
            <button type="button" className="rpv-notify-btn" onClick={handleNotifications}>
              <FiBell size={15} />
              <span>3</span>
            </button>
            <button type="button" className="rpv-new-role-btn" onClick={handleCreateRole}>
              <FiPlus size={14} />
              New Role
            </button>
          </div>
        </header>

        <section className="rpv-stats-grid">
          <article className="rpv-stat-card">
            <div className="rpv-stat-icon rpv-blue"><FiShield size={14} /></div>
            <div className="rpv-stat-pill rpv-pill-green">Active</div>
            <h3>156</h3>
            <p>Total Roles</p>
          </article>
          <article className="rpv-stat-card">
            <div className="rpv-stat-icon rpv-purple"><FiEdit2 size={14} /></div>
            <div className="rpv-stat-pill rpv-pill-blue">+24</div>
            <h3>892</h3>
            <p>Permissions</p>
          </article>
          <article className="rpv-stat-card">
            <div className="rpv-stat-icon rpv-green"><FiUsers size={14} /></div>
            <div className="rpv-stat-pill rpv-pill-green">+12%</div>
            <h3>1,247</h3>
            <p>Assigned Users</p>
          </article>
          <article className="rpv-stat-card">
            <div className="rpv-stat-icon rpv-orange"><FiUserPlus size={14} /></div>
            <div className="rpv-stat-pill rpv-pill-blue">8</div>
            <h3>24</h3>
            <p>Active Tenants</p>
          </article>
        </section>

        <section className="rpv-filters-bar">
          <div className="rpv-search-wrap">
            <FiSearch size={14} />
            <input type="text" placeholder="Search roles by name, description..." />
          </div>
          <button type="button" className="rpv-filter-select">All Tenants <FiChevronDown size={13} /></button>
          <button type="button" className="rpv-filter-select">All Status <FiChevronDown size={13} /></button>
          <button type="button" className="rpv-more-filter-btn"><FiPlus size={13} /> More Filters</button>
        </section>

        <section className="rpv-table-card">
          <table className="rpv-table">
            <thead>
              <tr>
                <th><input type="checkbox" /></th>
                <th>Role Name</th>
                <th>Type</th>
                <th>Permissions</th>
                <th>Users</th>
                <th>Tenant</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {roleRows.map((row) => (
                <tr key={row.id} className="rpv-clickable-row" onClick={() => navigate(`/roles-permissions/role-management/${row.slug}`)}>
                  <td><input type="checkbox" /></td>
                  <td>
                    <div className="rpv-role-cell">
                      <span className={`rpv-role-icon ${row.id === 1 ? 'rpv-red' : row.id === 2 ? 'rpv-blue' : row.id === 3 ? 'rpv-purple' : 'rpv-green'}`}>
                        {row.id === 1 ? <FiShield size={14} /> : null}
                        {row.id === 2 ? <FiUserCheck size={14} /> : null}
                        {row.id === 3 ? <FiBriefcase size={14} /> : null}
                        {row.id === 4 ? <FiCode size={14} /> : null}
                      </span>
                      <div>
                        <strong>{row.name}</strong>
                        <p>{row.description}</p>
                      </div>
                    </div>
                  </td>
                  <td><span className={`rpv-type-chip ${typeClass(row.type)}`}>{row.type}</span></td>
                  <td>
                    <span className="rpv-permissions-cell">
                      <FiLock size={12} />
                      {row.permissions}
                    </span>
                  </td>
                  <td>
                    <div className="rpv-users-stack">
                      {row.users.map((u, idx) => (
                        <span key={`${row.id}-${u}`} style={{ left: `${idx * 15}px` }}>{u}</span>
                      ))}
                      <em style={{ marginLeft: `${row.users.length * 15 + 2}px` }}>{row.usersCount}</em>
                    </div>
                  </td>
                  <td>{row.tenant}</td>
                  <td><span className={`rpv-status-chip ${statusClass(row.status)}`}>{row.status}</span></td>
                  <td>
                    <div className="rpv-row-actions">
                      <FiEdit2 size={13} />
                      <FiShield size={13} />
                      <FiMoreVertical size={13} />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="rpv-pagination">
            <p>Showing 1-4 of 156 roles</p>
            <div className="rpv-pages">
              <button type="button">&lt;</button>
              <button type="button" className="active">1</button>
              <button type="button">2</button>
              <button type="button">3</button>
              <span>...</span>
              <button type="button">39</button>
              <button type="button">&gt;</button>
            </div>
          </div>
        </section>
      </section>
    </main>
  )
}

export default RolesPermissionsPage
