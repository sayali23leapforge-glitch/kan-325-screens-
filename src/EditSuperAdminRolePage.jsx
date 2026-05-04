import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Sidebar from './Sidebar';
import './edit-role.css';
import { FiChevronDown, FiSearch, FiChevronLeft } from 'react-icons/fi';

const EditSuperAdminRolePage = () => {
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [selectedPermissions, setSelectedPermissions] = useState(42);
  const [expandedCategories, setExpandedCategories] = useState({
    userManagement: true,
    roleManagement: true,
    tenantManagement: true,
    securityAudit: true,
    systemAdmin: true,
  });

  const toggleCategory = (key) => {
    setExpandedCategories(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const handleSaveChanges = () => {
    // TODO: Implement API call to save role
    const roleData = {
      name: 'Super Admin',
      department: 'Administration',
      permissionsAssigned: 42,
      status: 'Active',
      createdBy: 'System',
      createdAt: 'Dec 22, 2024 at 3:45 PM',
      auditId: 'AUD-2024-12-' + Math.random().toString().substr(2, 6),
      permissions: [
        { category: 'User Management', count: 9 },
        { category: 'Role Management', count: 8 },
        { category: 'Tenant Management', count: 7 },
        { category: 'Security & Audit', count: 10 },
        { category: 'System Administration', count: 8 }
      ],
      auditLog: {
        timestamp: new Date().toISOString(),
        action: 'ROLE_UPDATED',
        user: 'admin@karnovate.com',
        ipAddress: '192.168.1.45',
        resource: 'roles/super-admin',
        changes: 'Updated Super Admin role with 42 permissions'
      }
    };
    
    navigate('/roles-permissions/role-management/save-confirmation', { state: { roleData } });
  };

  const permissionCategories = [
    {
      id: 'userManagement',
      title: 'User Management',
      subtitle: 'Control user lifecycle and access',
      color: '#2563EB',
      count: 9,
      permissions: [
        'Create Users',
        'Edit Users',
        'Delete Users',
        'View Users',
        'Manage User Status',
        'Reset Passwords',
        'Export User Data',
        'Bulk Import Users',
        'Impersonate Users'
      ],
      checked: [true, true, true, true, true, true, true, true, true]
    },
    {
      id: 'roleManagement',
      title: 'Role Management',
      subtitle: 'Define roles and assign permissions',
      color: '#9333EA',
      count: 8,
      permissions: [
        'Create Roles',
        'Edit Roles',
        'Delete Roles',
        'Assign Roles',
        'View Roles',
        'Manage Permissions',
        'Clone Roles',
        'Role Hierarchy'
      ],
      checked: [true, true, true, true, true, true, true, true]
    },
    {
      id: 'tenantManagement',
      title: 'Tenant Management',
      subtitle: 'Manage organizations and workspaces',
      color: '#16A34A',
      count: 7,
      permissions: [
        'Create Tenants',
        'Edit Tenants',
        'Delete Tenants',
        'View Tenants',
        'Manage Tenant Settings',
        'Tenant Billing',
        'Cross-Tenant Access'
      ],
      checked: [true, true, true, true, true, true, true]
    },
    {
      id: 'securityAudit',
      title: 'Security & Audit',
      subtitle: 'Manage security policies and audit logs',
      color: '#DC2626',
      count: 6,
      permissions: [
        'View Audit Logs',
        'Manage Security Policies',
        'Configure MFA',
        'Manage IP Whitelist',
        'View Security Events',
        'Manage API Keys'
      ],
      checked: [true, true, true, true, true, true]
    },
    {
      id: 'systemAdmin',
      title: 'System Administration',
      subtitle: 'System-level configurations and settings',
      color: '#EA580C',
      count: 12,
      permissions: [
        'Manage System Settings',
        'Configure Notifications',
        'Manage Email Templates',
        'View System Logs',
        'Database Management',
        'Backup Management',
        'License Management',
        'Integration Management',
        'API Configuration',
        'Webhook Management',
        'Cache Management',
        'Maintenance Mode'
      ],
      checked: [true, true, true, true, true, true, true, true, true, true, true, true]
    }
  ];

  const advancedSettings = [
    { label: 'Allow role inheritance', checked: true },
    { label: 'Enable delegation', checked: false },
    { label: 'Restrict to IP whitelist', checked: true },
    { label: 'Require MFA for this role', checked: false },
  ];

  return (
    <main className="dashboard-layout">
      <Sidebar isOpen={sidebarOpen} setIsOpen={setSidebarOpen} activeMenu="role-management" />
      
      <section className="dashboard-main">
        {/* Header */}
        <div className="er-header">
          <div className="er-header-content">
            <button className="er-back-btn" onClick={() => navigate('/roles-permissions/role-management/super-admin')}>
              <FiChevronLeft size={20} />
            </button>
            <div className="er-header-title">
              <h1>Edit Role</h1>
            </div>
          </div>
          
          <div className="er-breadcrumb">
            <a href="#" className="er-breadcrumb-link">Home</a>
            <span className="er-breadcrumb-sep">/</span>
            <a href="#" className="er-breadcrumb-link">Roles</a>
            <span className="er-breadcrumb-sep">/</span>
            <a href="#" className="er-breadcrumb-link">Super Admin</a>
            <span className="er-breadcrumb-sep">/</span>
            <span className="er-breadcrumb-current">Edit</span>
          </div>

          <div className="er-header-actions">
            <button className="er-btn-cancel" onClick={() => navigate('/roles-permissions/role-management/super-admin')}>
              Cancel
            </button>
            <button className="er-btn-save" onClick={handleSaveChanges}>Save Changes</button>
          </div>
        </div>

        {/* Content */}
        <div className="er-page-content">
          {/* Basic Information Card */}
          <div className="er-card">
            <h2 className="er-card-title">Basic Information</h2>
            
            <div className="er-form-row">
              <div className="er-form-group">
                <label>Role Name *</label>
                <input type="text" defaultValue="Super Admin" className="er-input" />
              </div>
              <div className="er-form-group">
                <label>Role Type</label>
                <input type="text" defaultValue="System Role" className="er-input" disabled />
              </div>
            </div>

            <div className="er-form-group er-full">
              <label>Description</label>
              <textarea 
                className="er-textarea"
                defaultValue="Full system access with all permissions for administrative tasks and user management across all tenants."
              />
            </div>
          </div>

          {/* Permissions Management Card */}
          <div className="er-card">
            <div className="er-permissions-header">
              <div className="er-permissions-title-block">
                <h2 className="er-card-title">Permissions Management</h2>
                <p className="er-permissions-subtitle">Configure granular access controls for this role</p>
              </div>
              <div className="er-permissions-controls">
                <span className="er-selected-pill">{selectedPermissions} Selected</span>
                <button className="er-btn-secondary">Select All</button>
                <button className="er-btn-secondary">Clear All</button>
              </div>
            </div>

            <div className="er-permissions-filters">
              <div className="er-search-box">
                <FiSearch size={16} />
                <input type="text" placeholder="Search permissions..." />
              </div>
              <div className="er-filter-select">
                <select>
                  <option>All Categories</option>
                  <option>User Management</option>
                  <option>Role Management</option>
                  <option>Tenant Management</option>
                  <option>Security & Audit</option>
                  <option>System Administration</option>
                </select>
                <FiChevronDown size={16} />
              </div>
            </div>

            <div className="er-permission-categories">
              {permissionCategories.map((category) => (
                <div key={category.id} className="er-permission-category">
                  <button 
                    className="er-category-header"
                    onClick={() => toggleCategory(category.id)}
                    style={{ borderLeftColor: category.color }}
                  >
                    <div className="er-category-info">
                      <h3 style={{ color: category.color }}>{category.title}</h3>
                      <p>{category.subtitle}</p>
                    </div>
                    <div className="er-category-actions">
                      <button className="er-select-all-btn">Select All ({category.count})</button>
                      <span className={`er-chevron ${expandedCategories[category.id] ? 'expanded' : ''}`}>
                        <FiChevronDown size={18} />
                      </span>
                    </div>
                  </button>

                  {expandedCategories[category.id] && (
                    <div className="er-permissions-grid">
                      {category.permissions.map((perm, idx) => (
                        <label key={idx} className="er-permission-checkbox">
                          <input type="checkbox" defaultChecked={category.checked[idx]} />
                          <span>{perm}</span>
                        </label>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Advanced Settings Card */}
          <div className="er-card">
            <h2 className="er-card-title">Advanced Settings</h2>
            
            <div className="er-advanced-settings">
              {advancedSettings.map((setting, idx) => (
                <label key={idx} className="er-setting-checkbox">
                  <input type="checkbox" defaultChecked={setting.checked} />
                  <span>{setting.label}</span>
                </label>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default EditSuperAdminRolePage;
