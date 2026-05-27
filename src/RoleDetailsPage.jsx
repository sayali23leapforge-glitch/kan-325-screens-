import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import {
  FiActivity,
  FiBarChart2,
  FiBell,
  FiCopy,
  FiDownload,
  FiEdit2,
  FiLock,
  FiPlus,
  FiShield,
  FiTrash2,
  FiUserPlus,
} from 'react-icons/fi'
import Sidebar from './Sidebar'
import './role-details.css'

function RoleDetailsPage() {
  const navigate = useNavigate()
  const { role = 'super-admin' } = useParams()
  const [sidebarOpen, setSidebarOpen] = useState(false)

  const roleMap = {
    'super-admin': {
      name: 'Super Admin',
      subtitle: 'Full system access with all permissions',
      usersAssigned: 12,
      permissions: 156,
      created: 'Jan 15, 2024',
      modified: 'Mar 20, 2024',
    },
    'tenant-admin': {
      name: 'Tenant Admin',
      subtitle: 'Administrative role for tenant resources',
      usersAssigned: 24,
      permissions: 128,
      created: 'Feb 10, 2024',
      modified: 'Mar 22, 2024',
    },
    manager: {
      name: 'Manager',
      subtitle: 'Team management access',
      usersAssigned: 12,
      permissions: 67,
      created: 'Apr 03, 2024',
      modified: 'May 02, 2024',
    },
    developer: {
      name: 'Developer',
      subtitle: 'API and integration access',
      usersAssigned: 45,
      permissions: 89,
      created: 'Mar 06, 2024',
      modified: 'Apr 12, 2024',
    },
  }

  const currentRole = roleMap[role] || roleMap['super-admin']

  const permissions = [
    {
      group: 'User Management',
      count: '8 permissions',
      colorClass: 'rdv-group-blue',
      items: ['Create Users', 'Edit Users', 'Delete Users', 'View Users'],
    },
    {
      group: 'Role Management',
      count: '6 permissions',
      colorClass: 'rdv-group-purple',
      items: ['Create Roles', 'Edit Roles', 'Delete Roles', 'Assign Roles'],
    },
    {
      group: 'Tenant Management',
      count: '5 permissions',
      colorClass: 'rdv-group-green',
      items: ['Create Tenants', 'Edit Tenants', 'Delete Tenants', 'View Tenants'],
    },
    {
      group: 'Security & Audit',
      count: '4 permissions',
      colorClass: 'rdv-group-red',
      items: ['View Audit Logs', 'Manage Policies', 'Security Settings', 'System Config'],
    },
  ]

  const users = [
    { name: 'Michael Chen', email: 'michael.chen@company.com', tenant: 'Global Admin', status: 'Active', initials: 'MC' },
    { name: 'Sarah Johnson', email: 'sarah.j@company.com', tenant: 'Acme Corp', status: 'Active', initials: 'SJ' },
    { name: 'David Martinez', email: 'd.martinez@company.com', tenant: 'TechStart Inc', status: 'Active', initials: 'DM' },
  ]

  return (
    <main className="dashboard-layout">
      <Sidebar sidebarOpen={sidebarOpen} />
      <div className={`sidebar-overlay ${sidebarOpen ? 'active' : ''}`} onClick={() => setSidebarOpen(false)} />

      <section className="dashboard-main rdv-main">
        <header className="rdv-header">
          <div>
            <h1>Role Details</h1>
            <div className="rdv-breadcrumb">
              <span>Home</span>
              <span>&gt;</span>
              <span>Roles</span>
              <span>&gt;</span>
              <span>{currentRole.name}</span>
            </div>
          </div>

          <div className="rdv-header-actions">
            <button type="button" className="rdv-notify-btn">
              <FiBell size={14} />
              <span>3</span>
            </button>
            <button type="button" className="rdv-edit-btn" onClick={() => navigate(`/roles-permissions/role-management/${role}/edit`)}>
              <FiEdit2 size={14} />
              Edit Role
            </button>
          </div>
        </header>

        <div className="rdv-content-grid">
          <div className="rdv-left">
            <section className="rdv-card rdv-role-card">
              <div className="rdv-role-head">
                <div className="rdv-role-icon">
                  <FiShield size={22} />
                </div>
                <div>
                  <h2>{currentRole.name}</h2>
                  <p>{currentRole.subtitle}</p>
                  <div className="rdv-role-tags">
                    <span className="rdv-tag-active">Active</span>
                    <span className="rdv-tag-system">System Role</span>
                  </div>
                </div>
              </div>

              <div className="rdv-summary-row">
                <div>
                  <label>Users Assigned</label>
                  <strong>{currentRole.usersAssigned}</strong>
                </div>
                <div>
                  <label>Permissions</label>
                  <strong>{currentRole.permissions}</strong>
                </div>
                <div>
                  <label>Created</label>
                  <strong>{currentRole.created}</strong>
                </div>
                <div>
                  <label>Last Modified</label>
                  <strong>{currentRole.modified}</strong>
                </div>
              </div>
            </section>

            <section className="rdv-card">
              <div className="rdv-section-head">
                <h3>Permissions</h3>
                <button type="button" className="rdv-add-btn"><FiPlus size={12} /> Add Permission</button>
              </div>

              <div className="rdv-groups">
                {permissions.map((group) => (
                  <article className="rdv-group" key={group.group}>
                    <div className="rdv-group-head">
                      <div className="rdv-group-title-wrap">
                        <span className={`rdv-group-icon ${group.colorClass}`}>
                          <FiLock size={12} />
                        </span>
                        <h4>{group.group}</h4>
                      </div>
                      <span>{group.count}</span>
                    </div>

                    <div className="rdv-perm-grid">
                      {group.items.map((item) => (
                        <label key={item}>
                          <input type="checkbox" checked readOnly />
                          <span>{item}</span>
                        </label>
                      ))}
                    </div>
                  </article>
                ))}
              </div>
            </section>

            <section className="rdv-card">
              <h3 className="rdv-users-title">Assigned Users ({users.length})</h3>
              <table className="rdv-users-table">
                <thead>
                  <tr>
                    <th>User</th>
                    <th>Email</th>
                    <th>Tenant</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {users.map((u) => (
                    <tr key={u.email}>
                      <td>
                        <div className="rdv-user-cell">
                          <span>{u.initials}</span>
                          <strong>{u.name}</strong>
                        </div>
                      </td>
                      <td>{u.email}</td>
                      <td>{u.tenant}</td>
                      <td><span className="rdv-status">{u.status}</span></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </section>
          </div>

          <aside className="rdv-right">
            <section className="rdv-card">
              <h3>Quick Actions</h3>
              <button type="button" className="rdv-action"><FiUserPlus size={13} /> Assign Users</button>
              <button type="button" className="rdv-action"><FiCopy size={13} /> Duplicate Role</button>
              <button type="button" className="rdv-action"><FiDownload size={13} /> Export Details</button>
              <button type="button" className="rdv-action rdv-danger"><FiTrash2 size={13} /> Delete Role</button>
            </section>

            <section className="rdv-card">
              <h3>Recent Activity</h3>
              <div className="rdv-activity-item"><span className="rdv-activity-dot blue"></span><div><strong>User assigned</strong><p>Sarah Johnson added</p><em>2 hours ago</em></div></div>
              <div className="rdv-activity-item"><span className="rdv-activity-dot green"></span><div><strong>Permission updated</strong><p>Security settings modified</p><em>5 hours ago</em></div></div>
              <div className="rdv-activity-item"><span className="rdv-activity-dot purple"></span><div><strong>Role modified</strong><p>Description updated</p><em>1 day ago</em></div></div>
              <div className="rdv-activity-item"><span className="rdv-activity-dot orange"></span><div><strong>Security audit</strong><p>Permissions reviewed</p><em>3 days ago</em></div></div>
            </section>

            <section className="rdv-card">
              <h3>Usage Statistics</h3>
              <div className="rdv-progress"><div><span>Permission Coverage</span><strong>100%</strong></div><i><b className="green" style={{ width: '100%' }}></b></i></div>
              <div className="rdv-progress"><div><span>User Capacity</span><strong>48%</strong></div><i><b className="blue" style={{ width: '48%' }}></b></i></div>
              <div className="rdv-progress"><div><span>Active Sessions</span><strong>75%</strong></div><i><b className="purple" style={{ width: '75%' }}></b></i></div>
            </section>
          </aside>
        </div>
      </section>
    </main>
  )
}

export default RoleDetailsPage
