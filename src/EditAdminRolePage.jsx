import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Sidebar from './Sidebar';
import './edit-admin-role.css';
import { FiBell, FiChevronLeft } from 'react-icons/fi';

const EditAdminRolePage = () => {
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const permissions = [
    {
      id: 'userMgmt',
      title: 'User Management',
      count: '4 of 4 permissions',
      items: [
        { name: 'View Users', checked: true },
        { name: 'Create Users', checked: true },
        { name: 'Edit Users', checked: true },
        { name: 'Delete Users', checked: true }
      ]
    },
    {
      id: 'roleAccess',
      title: 'Role Access',
      count: '3 of 3 permissions',
      items: [
        { name: 'View Roles', checked: true },
        { name: 'Create Roles', checked: true },
        { name: 'Edit Roles', checked: true }
      ]
    },
    {
      id: 'systemAccess',
      title: 'System Access',
      count: '5 of 5 permissions',
      items: [
        { name: 'Manage Configuration', checked: true },
        { name: 'View Logs', checked: true },
        { name: 'Manage Security', checked: true },
        { name: 'System Reports', checked: true },
        { name: 'Backup Management', checked: true }
      ]
    }
  ];

  const assignedUsers = [
    { name: 'Alice Johnson', email: 'alice.johnson@company.com' },
    { name: 'Bob Williams', email: 'bob.williams@company.com' },
    { name: 'Carol Davis', email: 'carol.davis@company.com' }
  ];

  const handleSaveChanges = () => {
    // TODO: Implement API call to save role
    const roleData = {
      name: 'Admin - Updated',
      department: 'Administration',
      permissionsAssigned: 12,
      status: 'Active',
      createdBy: 'System Admin',
      createdAt: 'Dec 22, 2024 at 4:15 PM',
      auditId: 'AUD-2024-12-' + Math.random().toString().substr(2, 6),
      permissions: [
        { category: 'User Management', count: 4 },
        { category: 'Role Access', count: 3 },
        { category: 'System Access', count: 5 }
      ],
      auditLog: {
        timestamp: new Date().toISOString(),
        action: 'ROLE_UPDATED',
        user: 'system.admin@karnovate.com',
        ipAddress: '192.168.1.45',
        resource: 'roles/admin',
        changes: 'Updated Admin role with 12 permissions'
      }
    };
    
    navigate('/roles-permissions/role-management/save-confirmation', { state: { roleData } });
  };

  return (
    <main style={{ display: 'flex' }}>
      <Sidebar />
      
      <section style={{ flex: 1 }}>
        {/* Fixed Header */}
        <div className="ear-header">
          <div className="ear-header-left">
            <button 
              className="ear-back-btn"
              onClick={() => navigate('/roles-permissions/role-management/admin')}
            >
              <FiChevronLeft size={20} />
            </button>
            <div className="ear-header-title">
              <h1>Edit Role</h1>
            </div>
          </div>

          <div className="ear-breadcrumb">
            <a href="#" className="ear-breadcrumb-item">Home</a>
            <span className="ear-breadcrumb-sep">/</span>
            <a href="#" className="ear-breadcrumb-item">IAM</a>
            <span className="ear-breadcrumb-sep">/</span>
            <a href="#" className="ear-breadcrumb-item">Roles</a>
            <span className="ear-breadcrumb-sep">/</span>
            <span className="ear-breadcrumb-current">Edit Role</span>
          </div>

          <div className="ear-header-actions">
            <button className="ear-notification-btn">
              <FiBell size={20} />
              <span className="ear-notification-badge">2</span>
            </button>
            <button className="ear-btn-save" onClick={handleSaveChanges}>Save Changes</button>
          </div>
        </div>

        {/* Page Content */}
        <div className="ear-page-content">
          
          {/* Main Card */}
          <div className="ear-main-card">

            {/* Card Header */}
            <div className="ear-card-header">
              <div className="ear-card-title-block">
                <h2>Role Details</h2>
                <p>Editing: Admin</p>
              </div>
              <div className="ear-card-actions">
                <a href="#" className="ear-link">View History</a>
              </div>
            </div>

            {/* Card Body */}
            <div className="ear-card-body">

              {/* Left Section - Form */}
              <div className="ear-left-section">

                {/* Form Section */}
                <div className="ear-form-section">
                  <div className="ear-form-group">
                    <label>Role Name</label>
                    <input 
                      type="text" 
                      className="ear-input" 
                      defaultValue="Admin"
                      placeholder="Enter role name"
                    />
                  </div>

                  <div className="ear-form-row">
                    <div className="ear-form-group">
                      <label>Department</label>
                      <input 
                        type="text" 
                        className="ear-input" 
                        defaultValue="Administration"
                        placeholder="Enter department"
                      />
                    </div>
                    <div className="ear-form-group">
                      <label>Status</label>
                      <input 
                        type="text" 
                        className="ear-input" 
                        defaultValue="Active"
                        placeholder="Enter status"
                      />
                    </div>
                  </div>

                  <div className="ear-form-group">
                    <label>Description</label>
                    <textarea 
                      className="ear-textarea" 
                      defaultValue="Administrative role with full system access and user management capabilities. Responsible for platform administration and oversight."
                      placeholder="Enter description"
                    />
                  </div>
                </div>

                {/* Permissions Section */}
                <div className="ear-permissions-section">
                  <div className="ear-permissions-header">
                    <h3>Permissions</h3>
                    <button className="ear-modify-permissions-btn">Modify Permissions</button>
                  </div>

                  <div className="ear-permission-cards">
                    {permissions.map((category) => (
                      <div key={category.id} className="ear-permission-card">
                        <div className="ear-permission-card-header">
                          <h4>{category.title}</h4>
                          <span className="ear-permission-count">{category.count}</span>
                        </div>
                        <div className="ear-permission-items">
                          {category.items.map((item, idx) => (
                            <div 
                              key={idx} 
                              className={`ear-permission-item ${!item.checked ? 'unchecked' : ''}`}
                            >
                              <input 
                                type="checkbox" 
                                checked={item.checked}
                                readOnly
                              />
                              <span className="ear-item-name">{item.name}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

              </div>

              {/* Right Section - Info Cards */}
              <div className="ear-right-section">

                {/* Status Card - Blue */}
                <div className="ear-info-card ear-status-card">
                  <h4>Current Status</h4>
                  <div className="ear-status-item">
                    <span className="ear-status-label">Assigned Users</span>
                    <span className="ear-status-value">143</span>
                  </div>
                  <div className="ear-status-item">
                    <span className="ear-status-label">Total Permissions</span>
                    <span className="ear-status-value">12</span>
                  </div>
                  <div className="ear-status-item">
                    <span className="ear-status-label">Created</span>
                    <span className="ear-status-value">Jan 10 2024</span>
                  </div>
                  <div className="ear-status-item">
                    <span className="ear-status-label">Last Modified</span>
                    <span className="ear-status-value">Mar 15 2024</span>
                  </div>
                </div>

                {/* Users Card - Purple */}
                <div className="ear-info-card ear-users-card">
                  <h4>Assigned Users</h4>
                  <div className="ear-users-list">
                    {assignedUsers.map((user, idx) => (
                      <div key={idx} className="ear-user-item">
                        <div className="ear-user-name">{user.name}</div>
                        <div className="ear-user-email">{user.email}</div>
                      </div>
                    ))}
                  </div>
                  <a href="#" className="ear-view-all">View All 143 Users</a>
                </div>

                {/* Warning Card - Yellow */}
                <div className="ear-info-card ear-warning-card">
                  <div className="ear-warning-header">
                    <span className="ear-warning-icon">⚠️</span>
                    <h4>Warning</h4>
                  </div>
                  <p>Modifying this role will affect 143 users. Changes will be logged in the audit trail.</p>
                </div>

              </div>

            </div>

            {/* Card Footer */}
            <div className="ear-card-footer">
              <button className="ear-btn-delete">Delete Role</button>
              <div className="ear-footer-actions">
                <button className="ear-btn-cancel" onClick={() => navigate('/roles-permissions/role-management')}>
                  Cancel
                </button>
                <button className="ear-btn-save-footer" onClick={handleSaveChanges}>Save Changes</button>
              </div>
            </div>

          </div>

        </div>

      </section>
    </main>
  );
};

export default EditAdminRolePage;
