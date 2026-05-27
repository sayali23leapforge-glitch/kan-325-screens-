import React, { useMemo, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { FiBell, FiCheck, FiSearch, FiShield, FiUser, FiUsers } from 'react-icons/fi'
import { MdSecurity } from 'react-icons/md'
import Sidebar from './Sidebar'
import './tenant-admin-assignment.css'

const USERS = [
  {
    id: 'sarah',
    name: 'Sarah Johnson',
    email: 'sarah.johnson@acme.com',
    meta: 'Engineering • Senior Developer',
    status: 'Active',
    avatar: 'SJ',
    selected: false,
  },
  {
    id: 'david',
    name: 'David Wilson',
    email: 'david.wilson@acme.com',
    meta: 'Marketing • Team Lead',
    status: 'Active',
    avatar: 'DW',
    selected: true,
  },
  {
    id: 'emma',
    name: 'Emma Davis',
    email: 'emma.davis@acme.com',
    meta: 'Sales • Account Manager',
    status: 'Active',
    avatar: 'ED',
    selected: true,
  },
  {
    id: 'james',
    name: 'James Miller',
    email: 'james.miller@acme.com',
    meta: 'Engineering • Backend Developer',
    status: 'Pending',
    avatar: 'JM',
    selected: false,
  },
]

const ROLE_OPTIONS = [
  {
    id: 'tenant-admin',
    title: 'Tenant Admin',
    icon: <FiShield size={15} />,
    desc: 'Full access to tenant settings and user management',
  },
  {
    id: 'department-admin',
    title: 'Department Admin',
    icon: <FiUsers size={15} />,
    desc: 'Manage users within specific departments',
  },
  {
    id: 'security-admin',
    title: 'Security Admin',
    icon: <MdSecurity size={15} />,
    desc: 'Security policies and compliance management',
  },
  {
    id: 'support-admin',
    title: 'Support Admin',
    icon: <FiUser size={15} />,
    desc: 'User support and issue resolution access',
  },
]

export default function TenantAdminAssignmentPage() {
  const { id } = useParams()
  const navigate = useNavigate()
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [search, setSearch] = useState('')
  const [selectedUsers, setSelectedUsers] = useState(() =>
    USERS.filter(u => u.selected).map(u => u.id)
  )
  const [roleId, setRoleId] = useState('department-admin')

  const visibleUsers = useMemo(() => {
    const q = search.trim().toLowerCase()
    if (!q) return USERS
    return USERS.filter(
      u =>
        u.name.toLowerCase().includes(q) ||
        u.email.toLowerCase().includes(q) ||
        u.meta.toLowerCase().includes(q)
    )
  }, [search])

  const selectedList = USERS.filter(u => selectedUsers.includes(u.id))

  const toggleUser = (userId) => {
    setSelectedUsers(prev =>
      prev.includes(userId) ? prev.filter(idv => idv !== userId) : [...prev, userId]
    )
  }

  const selectAll = () => setSelectedUsers(USERS.map(u => u.id))
  const clearSelection = () => setSelectedUsers([])

  return (
    <div className="taa-page">
      <Sidebar isOpen={sidebarOpen} setIsOpen={setSidebarOpen} />

      <main className="taa-main">
        <header className="taa-header">
          <div className="taa-header-left">
            <h1 className="taa-title">Admin Assignment</h1>
          </div>

          <div className="taa-header-actions">
            <button className="taa-bell-btn" type="button" aria-label="Notifications">
              <FiBell size={14} />
              <span className="taa-badge">3</span>
            </button>
            <button className="taa-assign-btn" type="button">Assign Roles</button>
          </div>
        </header>

        <section className="taa-content">
          <div className="taa-tenant-card">
            <div className="taa-tenant-logo">AC</div>
            <div className="taa-tenant-info">
              <h2>Acme Corporation</h2>
              <p>Tenant ID: {id || 'TNT-001'} • Domain: acme.example.com</p>
              <div className="taa-tenant-badges">
                <span className="plan">Enterprise Plan</span>
                <span className="active">Active</span>
                <span className="count">47 Users • 8 Admins</span>
              </div>
            </div>
          </div>

          <div className="taa-grid">
            <section className="taa-users-card">
              <div className="taa-users-header">
                <h3>Select Users</h3>
                <div className="taa-search-wrap">
                  <FiSearch size={14} />
                  <input
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="Search users by name, email, or department..."
                  />
                </div>
                <div className="taa-filter-row">
                  <button type="button" className="filter-btn">All Departments</button>
                  <button type="button" className="filter-btn">All Status</button>
                  <button type="button" className="clear-filter">Clear Filters</button>
                </div>
              </div>

              <div className="taa-user-list">
                {visibleUsers.map((u) => {
                  const selected = selectedUsers.includes(u.id)
                  return (
                    <label
                      key={u.id}
                      className={`taa-user-row${selected ? ' selected' : ''}`}
                    >
                      <input
                        type="checkbox"
                        checked={selected}
                        onChange={() => toggleUser(u.id)}
                      />
                      <div className="avatar">{u.avatar}</div>
                      <div className="info">
                        <div className="name">{u.name}</div>
                        <div className="email">{u.email}</div>
                        <div className="meta">{u.meta}</div>
                      </div>
                      <span className={`status ${u.status.toLowerCase()}`}>{u.status}</span>
                    </label>
                  )
                })}
              </div>

              <div className="taa-users-footer">
                <span>{selectedUsers.length} of 47 users selected</span>
                <div className="actions">
                  <button type="button" onClick={selectAll}>Select All</button>
                  <button type="button" onClick={clearSelection}>Clear Selection</button>
                </div>
              </div>
            </section>

            <aside className="taa-roles-card">
              <div className="taa-roles-top">
                <h3>Assign Roles</h3>
                <div className="role-options">
                  {ROLE_OPTIONS.map((role) => {
                    const active = roleId === role.id
                    return (
                      <label
                        key={role.id}
                        className={`role-option${active ? ' active' : ''}`}
                      >
                        <input
                          type="radio"
                          name="role"
                          checked={active}
                          onChange={() => setRoleId(role.id)}
                        />
                        <span className="icon">{role.icon}</span>
                        <span className="text">
                          <strong>{role.title}</strong>
                          <small>{role.desc}</small>
                        </span>
                      </label>
                    )
                  })}
                </div>
              </div>

              <div className="taa-summary-block">
                <h4>Assignment Summary</h4>
                <div className="summary-role">
                  <FiUsers size={15} />
                  <div>
                    <strong>Department Admin Role</strong>
                    <div className="summary-users">
                      {selectedList.map((u) => (
                        <span key={u.id}>{u.name}</span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="important-box">
                  <strong>Important</strong>
                  <p>
                    Users will receive email notifications about their new admin privileges
                    and will need to acknowledge the terms.
                  </p>
                </div>

                <div className="summary-meta">
                  <div><span>Users to assign:</span><b>{selectedUsers.length}</b></div>
                  <div><span>Role level:</span><b>Department Admin</b></div>
                  <div><span>Effective date:</span><b>Immediately</b></div>
                </div>

                <button className="confirm-btn" type="button">
                  <FiCheck size={14} />
                  Confirm Assignment
                </button>
              </div>
            </aside>
          </div>
        </section>
      </main>
    </div>
  )
}
