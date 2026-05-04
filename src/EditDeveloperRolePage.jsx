import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Sidebar from './Sidebar';
import './edit-developer-role.css';
import { FiBell, FiChevronLeft } from 'react-icons/fi';

const EditDeveloperRolePage = () => {
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const permissions = [
    {
      id: 'userMgmt',
      title: 'User Management',
      count: '3 of 4 permissions',
      items: [
        { name: 'View Users', checked: true },
        { name: 'Create Users', checked: true },
        { name: 'Edit Users', checked: true },
        { name: 'Delete Users', checked: false }
      ]
    },
    {
      id: 'repoAccess',
      title: 'Repository Access',
      count: '4 of 4 permissions',
      items: [
        { name: 'Read Repository', checked: true },
        { name: 'Write Repository', checked: true },
        { name: 'Code Review', checked: true },
        { name: 'Merge to Main', checked: true, badge: 'Elevated' }
      ]
    },
    {
      id: 'deployment',
      title: 'Deployment',
      count: '2 of 4 permissions',
      items: [
        { name: 'View Deployments', checked: true },
        { name: 'Rollback', checked: true },
        { name: 'Deploy to Staging', checked: false },
        { name: 'Deploy to Production', checked: false }
      ]
    }
  ];

  const assignedUsers = [
    { name: 'John Smith', email: 'john.smith@company.com' },
    { name: 'Sarah Johnson', email: 'sarah.j@company.com' },
    { name: 'Mike Chen', email: 'mike.chen@company.com' }
  ];

  const handleSaveChanges = () => {
    // TODO: Implement API call to save role
    const roleData = {
      name: 'Senior Developer - Copy',
      department: 'Engineering',
      permissionsAssigned: 11,
      status: 'Active',
      createdBy: 'Michael Chen',
      createdAt: 'Dec 22, 2024 at 3:45 PM',
      auditId: 'AUD-2024-12-' + Math.random().toString().substr(2, 6),
      permissions: [
        { category: 'User Management', count: 3 },
        { category: 'Repository Access', count: 4 },
        { category: 'Deployment', count: 2 }
      ],
      auditLog: {
        timestamp: new Date().toISOString(),
        action: 'ROLE_UPDATED',
        user: 'michael.chen@karnovate.com',
        ipAddress: '192.168.1.45',
        resource: 'roles/senior-developer-copy',
        changes: 'Updated Senior Developer role with 11 permissions'
      }
    };
    
    navigate('/roles-permissions/role-management/save-confirmation', { state: { roleData } });
  };

  return (
    <main className="dashboard-layout">
      <Sidebar isOpen={sidebarOpen} setIsOpen={setSidebarOpen} activeMenu="role-management" />
      
      <section className="dashboard-main">
        {/* Header */}
        <div className="edr-header">
          <div className="edr-header-left">
            <button className="edr-back-btn" onClick={() => navigate('/roles-permissions/role-management')}>
              <FiChevronLeft size={20} />
            </button>
            <div className="edr-header-title">
              <h1>Edit Role</h1>
            </div>
          </div>
          
          <div className="edr-breadcrumb">
            <a href="#" className="edr-breadcrumb-link">Home</a>
            <span className="edr-breadcrumb-sep">/</span>
            <a href="#" className="edr-breadcrumb-link">IAM</a>
            <span className="edr-breadcrumb-sep">/</span>
            <a href="#" className="edr-breadcrumb-link">Roles</a>
            <span className="edr-breadcrumb-sep">/</span>
            <span className="edr-breadcrumb-current">Edit Role</span>
          </div>

          <div className="edr-header-actions">
            <button className="edr-notification-btn">
              <FiBell size={18} />
              <span className="edr-notification-badge">3</span>
            </button>
            <button className="edr-btn-save" onClick={handleSaveChanges}>Save Changes</button>
          </div>
        </div>

        {/* Content */}
        <div className="edr-page-content">
          <div className="edr-main-card">
            {/* Card Header */}
            <div className="edr-card-header">
              <div className="edr-card-title-block">
                <h2>Role Details</h2>
                <p>Editing: Senior Developer</p>
              </div>
              <div className="edr-card-actions">
                <a href="#" className="edr-link">View History</a>
                <a href="#" className="edr-link">Back to Roles</a>
              </div>
            </div>

            <div className="edr-card-body">
              {/* Left Main Section */}
              <div className="edr-left-section">
                {/* Form Fields */}
                <div className="edr-form-section">
                  <div className="edr-form-group">
                    <label>Role Name *</label>
                    <input type="text" defaultValue="Senior Developer" className="edr-input" />
                  </div>

                  <div className="edr-form-group">
                    <label>Description</label>
                    <textarea 
                      className="edr-textarea"
                      defaultValue="Elevated permissions for code review, deployment, and team leadership responsibilities. Manages development workflows and code quality standards."
                    />
                  </div>

                  <div className="edr-form-row">
                    <div className="edr-form-group">
                      <label>Department</label>
                      <input type="text" defaultValue="Engineering" className="edr-input" />
                    </div>
                    <div className="edr-form-group">
                      <label>Status</label>
                      <input type="text" defaultValue="Active" className="edr-input" />
                    </div>
                  </div>
                </div>

                {/* Permissions Section */}
                <div className="edr-permissions-section">
                  <div className="edr-permissions-header">
                    <h3>Permissions</h3>
                    <button className="edr-modify-permissions-btn">Modify Permissions</button>
                  </div>

                  <div className="edr-permission-cards">
                    {permissions.map((perm) => (
                      <div key={perm.id} className="edr-permission-card">
                        <div className="edr-permission-card-header">
                          <h4>{perm.title}</h4>
                          <span className="edr-permission-count">{perm.count}</span>
                        </div>

                        <div className="edr-permission-items">
                          {perm.items.map((item, idx) => (
                            <div key={idx} className={`edr-permission-item ${item.checked ? 'checked' : 'unchecked'}`}>
                              <input 
                                type="checkbox" 
                                checked={item.checked}
                                readOnly
                              />
                              <span className="edr-item-name">{item.name}</span>
                              {item.badge && <span className="edr-badge">{item.badge}</span>}
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Sidebar */}
              <div className="edr-right-section">
                {/* Current Status Card */}
                <div className="edr-info-card edr-status-card">
                  <h4>Current Status</h4>
                  <div className="edr-status-item">
                    <span className="edr-status-label">Assigned Users</span>
                    <span className="edr-status-value">24</span>
                  </div>
                  <div className="edr-status-item">
                    <span className="edr-status-label">Total Permissions</span>
                    <span className="edr-status-value">18</span>
                  </div>
                  <div className="edr-status-item">
                    <span className="edr-status-label">Created</span>
                    <span className="edr-status-value">Jan 15, 2024</span>
                  </div>
                  <div className="edr-status-item">
                    <span className="edr-status-label">Last Modified</span>
                    <span className="edr-status-value">Mar 8, 2024</span>
                  </div>
                </div>

                {/* Assigned Users Card */}
                <div className="edr-info-card edr-users-card">
                  <h4>Assigned Users</h4>
                  <div className="edr-users-list">
                    {assignedUsers.map((user, idx) => (
                      <div key={idx} className="edr-user-item">
                        <div>
                          <div className="edr-user-name">{user.name}</div>
                          <div className="edr-user-email">{user.email}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <a href="#" className="edr-view-all">View All 24 Users</a>
                </div>

                {/* Warning Card */}
                <div className="edr-info-card edr-warning-card">
                  <div className="edr-warning-header">
                    <span className="edr-warning-icon">⚠</span>
                    <h4>Warning</h4>
                  </div>
                  <p>Modifying this role will affect 24 users. Changes will be logged in the audit trail.</p>
                </div>
              </div>
            </div>

            {/* Card Footer - Actions */}
            <div className="edr-card-footer">
              <button className="edr-btn-delete">Delete Role</button>
              <div className="edr-footer-actions">
                <button className="edr-btn-cancel" onClick={() => navigate('/roles-permissions/role-management')}>
                  Cancel
                </button>
                <button className="edr-btn-save-footer" onClick={handleSaveChanges}>Save Changes</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default EditDeveloperRolePage;
