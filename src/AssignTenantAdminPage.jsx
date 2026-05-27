import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FiArrowRight, FiMenu, FiX, FiAlertTriangle, FiBell, FiEye } from 'react-icons/fi';
import Sidebar from './Sidebar';
import './assign-tenant-admin.css';

const AssignTenantAdminPage = () => {
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [selectedUserId, setSelectedUserId] = useState('sarah');
  const [searchQuery, setSearchQuery] = useState('');
  const [permissions, setPermissions] = useState([
    {
      id: 'user-mgmt',
      title: 'User Management',
      description: 'Create, edit, and delete users',
      enabled: true
    },
    {
      id: 'role-mgmt',
      title: 'Role Management',
      description: 'Assign and modify user roles',
      enabled: true
    },
    {
      id: 'security',
      title: 'Security Settings',
      description: 'Configure security policies',
      enabled: true
    },
    {
      id: 'billing',
      title: 'Billing Access',
      description: 'View and manage billing information',
      enabled: false
    },
    {
      id: 'audit',
      title: 'Audit Logs',
      description: 'Access to audit logs and reports',
      enabled: true
    },
    {
      id: 'system',
      title: 'System Configuration',
      description: 'Modify system-wide settings',
      enabled: false
    }
  ]);

  const users = [
    {
      id: 'sarah',
      name: 'Sarah Johnson',
      email: 'sarah.johnson@acme.com',
      status: 'Active',
      role: 'Manager',
      joinedDate: 'Jan 20, 2024',
      lastLogin: '2 hours ago',
      department: 'Operations',
      avatar: 'https://placehold.co/46x46'
    },
    {
      id: 'david',
      name: 'David Wilson',
      email: 'david.wilson@acme.com',
      status: 'Active',
      role: 'Employee',
      joinedDate: 'Feb 15, 2024',
      lastLogin: '1 day ago',
      department: 'Sales',
      avatar: 'https://placehold.co/46x46'
    },
    {
      id: 'emily',
      name: 'Emily Chen',
      email: 'emily.chen@acme.com',
      status: 'Active',
      role: 'Lead',
      joinedDate: 'Mar 10, 2024',
      lastLogin: '3 hours ago',
      department: 'Engineering',
      avatar: 'https://placehold.co/46x46'
    },
    {
      id: 'robert',
      name: 'Robert Brown',
      email: 'robert.brown@acme.com',
      status: 'Active',
      role: 'Analyst',
      joinedDate: 'Jan 05, 2024',
      lastLogin: '5 hours ago',
      department: 'Finance',
      avatar: 'https://placehold.co/46x46'
    }
  ];

  const selectedUser = users.find(u => u.id === selectedUserId);
  const grantedPermissions = permissions.filter(p => p.enabled);

  const handleTogglePermission = (permissionId) => {
    setPermissions(prevPermissions =>
      prevPermissions.map(perm =>
        perm.id === permissionId ? { ...perm, enabled: !perm.enabled } : perm
      )
    );
  };

  const handleAssignAdmin = () => {
    console.log('Assigning admin to:', selectedUserId, 'with permissions:', permissions);
    navigate('/tenants/create/activate');
  };

  const handleBack = () => {
    navigate('/tenants/create/subscription');
  };

  const handleSendNotification = () => {
    console.log('Sending notification to:', selectedUserId);
  };

  const handlePreviewChanges = () => {
    console.log('Previewing changes for:', selectedUserId);
  };

  return (
    <div className="assign-admin-container">
      <Sidebar isOpen={sidebarOpen} onToggle={() => setSidebarOpen(!sidebarOpen)} />
      
      <div className="assign-admin-content">
        {/* Header */}
        <div className="assign-admin-header">
          <div className="header-left">
            <button className="back-button" onClick={handleBack} title="Back">←</button>
            <h1>Assign Tenant Admin</h1>
          </div>

          <div className="header-right">
            <button className="notification-button">
              <FiBell size={14} />
              <span className="notification-badge">3</span>
            </button>
            <button className="cancel-button" onClick={() => navigate('/tenants')}>Cancel</button>
          </div>
        </div>

        {/* Main Content */}
        <div className="assign-admin-main">
          {/* Tenant Card */}
          <div className="tenant-card">
            <div className="tenant-icon">AC</div>
            <div className="tenant-info">
              <h2>Acme Corporation</h2>
              <p>Assigning administrator privileges</p>
            </div>
          </div>

          {/* Content Grid */}
          <div className="assign-admin-grid">
            {/* Left Column */}
            <div className="left-column">
              {/* Select User Section */}
              <div className="card select-user-card">
                <h3>Select User</h3>
                <div className="search-input-wrapper">
                  <FiMenu size={15} className="search-icon" />
                  <input
                    type="text"
                    placeholder="Search users by name or email..."
                    className="search-input"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>

                <div className="users-list">
                  {users.map(user => (
                    <label
                      key={user.id}
                      className={`user-item ${selectedUserId === user.id ? 'selected' : ''}`}
                    >
                      <input
                        type="checkbox"
                        checked={selectedUserId === user.id}
                        onChange={() => setSelectedUserId(user.id)}
                        className="user-checkbox"
                      />
                      <img src={user.avatar} alt={user.name} className="user-avatar" />
                      <div className="user-details">
                        <div className="user-name">{user.name}</div>
                        <div className="user-email">{user.email}</div>
                        <div className="user-badges">
                          <span className="badge badge-active">{user.status}</span>
                          <span className={`badge badge-role ${user.role === 'Manager' ? 'manager' : 'default'}`}>
                            {user.role}
                          </span>
                        </div>
                      </div>
                    </label>
                  ))}
                </div>
              </div>

              {/* Admin Permissions Section */}
              <div className="card admin-permissions-card">
                <h3>Admin Permissions</h3>
                <div className="permissions-list">
                  {permissions.map(permission => (
                    <div key={permission.id} className="permission-item">
                      <div className="permission-info">
                        <div className="permission-title">{permission.title}</div>
                        <div className="permission-description">{permission.description}</div>
                      </div>
                      <button
                        className={`toggle-switch ${permission.enabled ? 'enabled' : ''}`}
                        onClick={() => handleTogglePermission(permission.id)}
                        title={permission.enabled ? 'Disable' : 'Enable'}
                      >
                        <div className="toggle-track">
                          <div className="toggle-thumb" />
                        </div>
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="right-column">
              {/* Selected User Card */}
              {selectedUser && (
                <div className="card selected-user-card">
                  <h3>Selected User</h3>
                  <img src={selectedUser.avatar} alt={selectedUser.name} className="selected-user-avatar" />
                  <div className="selected-user-name">{selectedUser.name}</div>
                  <div className="selected-user-email">{selectedUser.email}</div>
                  
                  <div className="selected-user-badges">
                    <span className="badge badge-active">{selectedUser.status}</span>
                    <span className="badge badge-role manager">{selectedUser.role}</span>
                  </div>

                  <div className="selected-user-meta">
                    <div className="meta-row">
                      <span className="meta-label">Joined</span>
                      <span className="meta-value">{selectedUser.joinedDate}</span>
                    </div>
                    <div className="meta-row">
                      <span className="meta-label">Last Login</span>
                      <span className="meta-value">{selectedUser.lastLogin}</span>
                    </div>
                    <div className="meta-row">
                      <span className="meta-label">Department</span>
                      <span className="meta-value">{selectedUser.department}</span>
                    </div>
                  </div>
                </div>
              )}

              {/* Permission Summary */}
              <div className="card permission-summary-card">
                <h3>Permission Summary</h3>
                <div className="permissions-summary-list">
                  {permissions.map(permission => (
                    <div key={permission.id} className="summary-permission-item">
                      <div className={`permission-check ${permission.enabled ? 'granted' : 'denied'}`}>
                        {permission.enabled ? '✓' : '○'}
                      </div>
                      <span className={permission.enabled ? 'granted' : 'denied'}>
                        {permission.title}
                      </span>
                    </div>
                  ))}
                </div>
                <div className="permission-summary-footer">
                  <span className="granted-count">{grantedPermissions.length} permissions</span>
                  <span className="granted-text"> will be granted</span>
                </div>
              </div>

              {/* Actions */}
              <div className="card actions-card">
                <h3>Actions</h3>
                
                <button className="btn btn-primary btn-assign" onClick={handleAssignAdmin}>
                  <FiArrowRight size={16} />
                  Assign Admin Role
                </button>

                <button className="btn btn-secondary" onClick={handleSendNotification}>
                  <FiBell size={15} />
                  Send Notification
                </button>

                <button className="btn btn-secondary" onClick={handlePreviewChanges}>
                  <FiEye size={15} />
                  Preview Changes
                </button>

                <div className="warning-box">
                  <div className="warning-icon">
                    <FiAlertTriangle size={14} />
                  </div>
                  <div className="warning-content">
                    <div className="warning-title">Important</div>
                    <div className="warning-message">
                      Admin privileges will be effective<br/>
                      immediately. The user will receive an email<br/>
                      notification.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AssignTenantAdminPage;
