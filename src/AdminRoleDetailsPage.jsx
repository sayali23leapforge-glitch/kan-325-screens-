import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Sidebar from './Sidebar';
import './admin-role-details.css';
import { FiArrowLeft, FiShare2, FiMoreVertical, FiChevronDown, FiChevronRight, FiEdit2 } from 'react-icons/fi';

const AdminRoleDetailsPage = () => {
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [expandedPermissions, setExpandedPermissions] = useState({});

  const togglePermission = (key) => {
    setExpandedPermissions(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const permissionGroups = [
    {
      id: 'user-mgmt',
      name: 'User Management',
      access: 'Full Access',
      badge: 'full',
      items: ['Create Users', 'Read Users', 'Update Users', 'Delete Users']
    },
    {
      id: 'tenant-mgmt',
      name: 'Tenant Management',
      access: 'Full Access',
      badge: 'full',
      items: ['Create Tenants', 'Read Tenants', 'Update Tenants', 'Delete Tenants']
    },
    {
      id: 'role-mgmt',
      name: 'Role Management',
      access: 'Read Only',
      badge: 'readonly',
      items: ['Read Roles', 'View Role Details']
    },
    {
      id: 'security',
      name: 'Security Policies',
      access: 'No Access',
      badge: 'none',
      items: []
    }
  ];

  const assignedUsers = [
    { id: 1, name: 'Michael Chen', email: 'michael@company.com', avatar: '👨' }
  ];

  return (
    <main className="dashboard-layout">
      <Sidebar isOpen={sidebarOpen} setIsOpen={setSidebarOpen} activeMenu="role-management" />
      
      <section className="dashboard-main">
        {/* Header */}
        <div className="ard-header-fixed">
          <div className="ard-header-left">
            <button className="ard-back-btn" onClick={() => navigate('/roles-permissions/role-management')}>
              <FiArrowLeft size={18} />
            </button>
            <div className="ard-header-title">
              <h1>Admin Role</h1>
              <p>Administrative access permissions</p>
            </div>
          </div>
          <div className="ard-breadcrumb">
            <a href="#" className="ard-breadcrumb-item">Home</a>
            <span className="ard-breadcrumb-sep">/</span>
            <a href="#" className="ard-breadcrumb-item">IAM</a>
            <span className="ard-breadcrumb-sep">/</span>
            <a href="#" className="ard-breadcrumb-item">Roles & Permissions</a>
            <span className="ard-breadcrumb-sep">/</span>
            <span className="ard-breadcrumb-current">Admin Role</span>
          </div>
          <div className="ard-header-actions">
            <button className="ard-icon-btn" title="Share">
              <FiShare2 size={16} />
            </button>
            <button className="ard-icon-btn" title="More">
              <FiMoreVertical size={16} />
            </button>
            <button className="ard-btn-save" onClick={() => navigate('/roles-permissions/role-management/admin/edit')}>Edit Role</button>
          </div>
        </div>

        {/* Content */}
        <div className="ard-page-content">
          <div className="ard-main-column">
            {/* Role Summary Card */}
            <div className="ard-card ard-role-summary">
              <div className="ard-role-header-top">
                <div className="ard-role-icon-block">
                  <div className="ard-role-icon">👤</div>
                </div>
                <div className="ard-role-header-info">
                  <h2>Admin</h2>
                  <p>Administrative access role</p>
                </div>
                <div className="ard-role-status-edit">
                  <span className="ard-badge ard-badge-active">Active</span>
                  <button className="ard-edit-btn">
                    <FiEdit2 size={14} />
                  </button>
                </div>
              </div>

              <div className="ard-stats-summary">
                <div className="ard-stat-box">
                  <div className="ard-stat-value">143</div>
                  <div className="ard-stat-label">Users Assigned</div>
                  <div className="ard-stat-sub">
                    <span className="ard-stat-badge-green">●</span>
                    <span>12% this month</span>
                  </div>
                </div>
                <div className="ard-stat-box">
                  <div className="ard-stat-value">87</div>
                  <div className="ard-stat-label">Permissions</div>
                  <div className="ard-stat-sub">Out of 156 total</div>
                </div>
                <div className="ard-stat-box">
                  <div className="ard-stat-value">2 hours ago</div>
                  <div className="ard-stat-label">Last Updated</div>
                  <div className="ard-stat-sub">By Michael Chen</div>
                </div>
              </div>
            </div>

            {/* Role Description Card */}
            <div className="ard-card ard-role-description">
              <h3>Role Description</h3>
              <div className="ard-form-group">
                <label>Display Name</label>
                <div className="ard-form-value">Admin</div>
              </div>
              <div className="ard-form-group">
                <label>Role Key</label>
                <div className="ard-form-value">admin</div>
              </div>
              <div className="ard-form-group">
                <label>Description</label>
                <div className="ard-form-value ard-multiline">
                  Administrative role with access to manage users, tenants, and system configurations. Cannot modify security policies or system-level settings.
                </div>
              </div>
            </div>

            {/* Permissions Card */}
            <div className="ard-card ard-permissions-card">
              <div className="ard-permissions-header">
                <h3>Permissions</h3>
                <button className="ard-add-permission-btn">+ Add Permission</button>
              </div>

              <div className="ard-permission-groups">
                {permissionGroups.map((group) => (
                  <div key={group.id} className="ard-permission-group">
                    <button 
                      className="ard-permission-group-header"
                      onClick={() => togglePermission(group.id)}
                    >
                      <div className="ard-group-left">
                        <span className={`ard-chevron ${expandedPermissions[group.id] ? 'expanded' : ''}`}>
                          <FiChevronRight size={16} />
                        </span>
                        <span className="ard-group-name">{group.name}</span>
                      </div>
                      <div className="ard-group-right">
                        <span className={`ard-access-badge ard-access-${group.badge}`}>
                          {group.access}
                        </span>
                      </div>
                    </button>

                    {expandedPermissions[group.id] && group.items.length > 0 && (
                      <div className="ard-permission-items">
                        {group.items.map((item, idx) => (
                          <div key={idx} className="ard-permission-item">
                            <span className="ard-item-bullet">●</span>
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="ard-sidebar-column">
            {/* Role Metadata Card */}
            <div className="ard-card ard-metadata-card">
              <div className="ard-metadata-section">
                <div className="ard-metadata-label">Created</div>
                <div className="ard-metadata-value">Jan 15, 2024</div>
                <div className="ard-metadata-sublabel">Created By: Michael Chen</div>
              </div>
              <div className="ard-metadata-divider"></div>
              <div className="ard-metadata-section">
                <div className="ard-metadata-label">Last Modified</div>
                <div className="ard-metadata-value">2 hours ago</div>
                <div className="ard-metadata-sublabel">Modified By: Sarah Johnson</div>
              </div>
              <div className="ard-metadata-divider"></div>
              <div className="ard-metadata-section">
                <div className="ard-metadata-label">Role ID</div>
                <div className="ard-metadata-value ard-role-id">role_8x9k2m4n</div>
              </div>
            </div>

            {/* Assigned Users Card */}
            <div className="ard-card ard-assigned-users-card">
              <div className="ard-users-header">
                <h3>Assigned Users</h3>
                <a href="#" className="ard-view-all">View All</a>
              </div>
              <div className="ard-users-list">
                {assignedUsers.map((user) => (
                  <div key={user.id} className="ard-user-row">
                    <div className="ard-user-info">
                      <div className="ard-user-avatar">{user.avatar}</div>
                      <div className="ard-user-details">
                        <div className="ard-user-name">{user.name}</div>
                        <div className="ard-user-email">{user.email}</div>
                      </div>
                    </div>
                    <button className="ard-user-action">
                      <FiMoreVertical size={14} />
                    </button>
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

export default AdminRoleDetailsPage;
