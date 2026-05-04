import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Sidebar from './Sidebar';
import './role-details.css';
import { FiArrowLeft, FiShare2, FiMoreVertical } from 'react-icons/fi';

const RoleDetailsPage = () => {
  const navigate = useNavigate();
  const { role } = useParams();
  const [sidebarOpen, setSidebarOpen] = useState(true);

  // Role metadata mapping
  const roleMetadata = {
    'super-admin': {
      name: 'Super Admin',
      description: 'Full system access with all permissions',
      icon: '🔴',
      iconBg: '#FEE2E2',
      type: 'System',
      status: 'Active',
      usersCount: 12,
      permissionsCount: 156,
      created: 'Jan 15, 2024',
      modified: 'Mar 20, 2025',
    },
    'tenant-admin': {
      name: 'Tenant Admin',
      description: 'Administrative access permissions',
      icon: '👤',
      iconBg: '#DBEAFE',
      type: 'System',
      status: 'Active',
      usersCount: 24,
      permissionsCount: 128,
      created: 'Feb 01, 2024',
      modified: 'Mar 15, 2025',
    },
    'developer': {
      name: 'Developer',
      description: 'API and integration access',
      icon: '👨‍💻',
      iconBg: '#DCFCE7',
      type: 'Custom',
      status: 'Active',
      usersCount: 45,
      permissionsCount: 89,
      created: 'Mar 10, 2024',
      modified: 'Mar 18, 2025',
    },
    'manager': {
      name: 'Manager',
      description: 'Team management access',
      icon: '👨‍💼',
      iconBg: '#F3E8FF',
      type: 'Custom',
      status: 'Pending',
      usersCount: 12,
      permissionsCount: 67,
      created: 'Apr 05, 2024',
      modified: 'Mar 19, 2025',
    },
  };

  const meta = roleMetadata[role] || roleMetadata['super-admin'];

  const quickActions = [
    { icon: '👥', label: 'Assign Users' },
    { icon: '📋', label: 'Duplicate Role' },
    { icon: '📤', label: 'Export Details' },
    { icon: '🗑️', label: 'Delete Role' },
  ];

  const recentActivity = [
    { color: '#3B82F6', title: 'Admin role updated', time: '2 hours ago by Michael Chen' },
    { color: '#22C55E', title: 'Permission added: Create Reports', time: '5 hours ago by Sarah Johnson' },
    { color: '#F97316', title: 'User assigned to role', time: 'Yesterday by System' },
  ];

  const usageStats = [
    { label: 'Permission Coverage', percentage: 85, color: '#22C55E' },
    { label: 'User Capacity', percentage: 72, color: '#3B82F6' },
    { label: 'Active Sessions', percentage: 56, color: '#9333EA' },
  ];

  const permissionGroups = [
    {
      name: 'User Management',
      items: ['Create Users', 'Edit Users', 'Delete Users', 'View Users'],
    },
    {
      name: 'Role Management',
      items: ['Create Roles', 'Edit Roles', 'Delete Roles', 'Assign Roles'],
    },
    {
      name: 'Tenant Management',
      items: ['Create Tenants', 'Edit Tenants', 'Delete Tenants', 'View Tenants'],
    },
    {
      name: 'Security & Audit',
      items: ['View Audit Logs', 'Manage Security Policies', 'Configure MFA', 'Manage Tokens'],
    },
  ];

  const assignedUsers = [
    { id: 1, name: 'Michael Chen', email: 'michael@company.com', tenant: 'Acme Corp', status: 'Active', avatar: '👨' },
    { id: 2, name: 'Sarah Johnson', email: 'sarah@company.com', tenant: 'Tech Solutions', status: 'Active', avatar: '👩' },
    { id: 3, name: 'David Martinez', email: 'david@company.com', tenant: 'Global Systems', status: 'Active', avatar: '👨' },
  ];

  return (
    <main className="dashboard-layout">
      <Sidebar isOpen={sidebarOpen} setIsOpen={setSidebarOpen} activeMenu="role-management" />
      
      <section className="dashboard-main">
        {/* Header */}
        <div className="rd-header-fixed">
          <div className="rd-header-left">
            <button className="rd-back-btn" onClick={() => navigate('/roles-permissions/role-management')}>
              <FiArrowLeft size={20} />
            </button>
            <div className="rd-header-title">
              <h1>{meta.name}</h1>
              <p>{meta.description}</p>
            </div>
          </div>
          <div className="rd-breadcrumb">
            <a href="#" className="rd-breadcrumb-item">Home</a>
            <span className="rd-breadcrumb-sep">/</span>
            <a href="#" className="rd-breadcrumb-item">IAM</a>
            <span className="rd-breadcrumb-sep">/</span>
            <a href="#" className="rd-breadcrumb-item">Roles & Permissions</a>
            <span className="rd-breadcrumb-sep">/</span>
            <span className="rd-breadcrumb-current">{meta.name}</span>
          </div>
          <div className="rd-header-actions">
            <button className="rd-icon-btn" title="Share">
              <FiShare2 size={18} />
            </button>
            <button className="rd-icon-btn" title="More">
              <FiMoreVertical size={18} />
            </button>
            <button className="rd-btn-save" onClick={() => navigate(`/roles-permissions/role-management/${role}/edit`)}>Edit Role</button>
          </div>
        </div>

        {/* Content */}
        <div className="rd-page-content">
          <div className="rd-main-column">
            {/* Role Details Card */}
            <div className="rd-card rd-role-details-card">
              <div className="rd-role-header">
                <div className="rd-role-icon" style={{ backgroundColor: meta.iconBg }}>
                  {meta.icon}
                </div>
                <div className="rd-role-info">
                  <h2>{meta.name}</h2>
                  <p>{meta.description}</p>
                  <div className="rd-role-badges">
                    <span className="rd-badge rd-badge-active">Active</span>
                    <span className="rd-badge rd-badge-system">{meta.type} Role</span>
                  </div>
                </div>
              </div>
              <div className="rd-role-stats-summary">
                <div className="rd-stat-item">
                  <div className="rd-stat-label">Users Assigned</div>
                  <div className="rd-stat-value">{meta.usersCount}</div>
                </div>
                <div className="rd-stat-item">
                  <div className="rd-stat-label">Permissions</div>
                  <div className="rd-stat-value">{meta.permissionsCount}</div>
                </div>
                <div className="rd-stat-item">
                  <div className="rd-stat-label">Created</div>
                  <div className="rd-stat-value">{meta.created}</div>
                </div>
                <div className="rd-stat-item">
                  <div className="rd-stat-label">Last Modified</div>
                  <div className="rd-stat-value">{meta.modified}</div>
                </div>
              </div>
            </div>

            {/* Permissions Section */}
            <div className="rd-permissions-section">
              <div className="rd-section-header">
                <h3>Permissions</h3>
                <button className="rd-add-permission-btn">+ Add Permission</button>
              </div>
              <div className="rd-permission-groups">
                {permissionGroups.map((group, idx) => (
                  <div key={idx} className="rd-permission-group">
                    <h4>{group.name}</h4>
                    <div className="rd-permission-items">
                      {group.items.map((item, itemIdx) => (
                        <div key={itemIdx} className="rd-permission-item">
                          <input type="checkbox" checked readOnly />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Assigned Users Section */}
            <div className="rd-assigned-users-section">
              <h3>Assigned Users ({assignedUsers.length})</h3>
              <table className="rd-users-table">
                <thead>
                  <tr>
                    <th>User</th>
                    <th>Email</th>
                    <th>Tenant</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {assignedUsers.map((user) => (
                    <tr key={user.id}>
                      <td>
                        <div className="rd-user-cell">
                          <div className="rd-user-avatar">{user.avatar}</div>
                          <span>{user.name}</span>
                        </div>
                      </td>
                      <td>{user.email}</td>
                      <td>{user.tenant}</td>
                      <td>
                        <span className="rd-status-badge rd-status-active">{user.status}</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="rd-sidebar-column">
            {/* Quick Actions */}
            <div className="rd-card rd-quick-actions-card">
              <h3>Quick Actions</h3>
              <div className="rd-actions-list">
                {quickActions.map((action, idx) => (
                  <button key={idx} className="rd-action-item">
                    <span className="rd-action-icon">{action.icon}</span>
                    <span className="rd-action-label">{action.label}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Recent Activity */}
            <div className="rd-card rd-recent-activity-card">
              <h3>Recent Activity</h3>
              <div className="rd-activity-list">
                {recentActivity.map((activity, idx) => (
                  <div key={idx} className="rd-activity-item">
                    <div className="rd-activity-dot" style={{ backgroundColor: activity.color }}></div>
                    <div className="rd-activity-content">
                      <div className="rd-activity-title">{activity.title}</div>
                      <div className="rd-activity-time">{activity.time}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Usage Statistics */}
            <div className="rd-card rd-usage-stats-card">
              <h3>Usage Statistics</h3>
              <div className="rd-stats-list">
                {usageStats.map((stat, idx) => (
                  <div key={idx} className="rd-stat-progress">
                    <div className="rd-stat-header">
                      <span>{stat.label}</span>
                      <span className="rd-stat-percent">{stat.percentage}%</span>
                    </div>
                    <div className="rd-progress-bar">
                      <div
                        className="rd-progress-fill"
                        style={{
                          width: `${stat.percentage}%`,
                          backgroundColor: stat.color,
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default RoleDetailsPage;
