import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Sidebar from './Sidebar';
import './create-role.css';
import { FiArrowLeft, FiCheck } from 'react-icons/fi';

const CreateRolePage = () => {
  const navigate = useNavigate();

  // Form state
  const [formData, setFormData] = useState({
    roleName: '',
    description: '',
    roleType: '',
    icon: 'fa-user-shield',
    tenantAssignment: 'Global (All Tenants)',
  });

  // Permissions state
  const [selectedPermissions, setSelectedPermissions] = useState([
    'Create Users',
    'Edit Users',
    'View Analytics',
    'Export Reports',
    'Manage Content',
  ]);

  const [expandedCategory, setExpandedCategory] = useState('User Management');

  // Advanced settings state
  const [advancedSettings, setAdvancedSettings] = useState({
    activeRole: true,
    assignable: true,
    protected: false,
  });

  const permissionCategories = [
    {
      name: 'User Management',
      permissions: [
        { name: 'View Users', description: 'Can view user list and details' },
        { name: 'Create Users', description: 'Can create new user accounts' },
        { name: 'Edit Users', description: 'Can modify user information' },
        { name: 'Delete Users', description: 'Can remove user accounts' },
      ],
    },
    {
      name: 'Content Management',
      permissions: [
        { name: 'Create Content', description: 'Can create new content' },
        { name: 'Edit Content', description: 'Can modify existing content' },
        { name: 'Publish Content', description: 'Can publish content' },
        { name: 'Delete Content', description: 'Can remove content' },
      ],
    },
    {
      name: 'Analytics & Reports',
      permissions: [
        { name: 'View Analytics', description: 'Can view analytics dashboard' },
        { name: 'Export Reports', description: 'Can export report data' },
        { name: 'Schedule Reports', description: 'Can schedule automated reports' },
      ],
    },
    {
      name: 'System Settings',
      permissions: [
        { name: 'Manage Settings', description: 'Can modify system settings' },
        { name: 'Manage Users', description: 'Can manage user accounts' },
      ],
    },
    {
      name: 'Security & Access',
      permissions: [
        { name: 'Manage Roles', description: 'Can create and modify roles' },
        { name: 'Manage Permissions', description: 'Can manage permissions' },
      ],
    },
  ];

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const togglePermission = (permissionName) => {
    setSelectedPermissions((prev) =>
      prev.includes(permissionName)
        ? prev.filter((p) => p !== permissionName)
        : [...prev, permissionName]
    );
  };

  const clearAllPermissions = () => {
    setSelectedPermissions([]);
  };

  const toggleAdvancedSetting = (setting) => {
    setAdvancedSettings((prev) => ({
      ...prev,
      [setting]: !prev[setting],
    }));
  };

  const handleCancel = () => {
    navigate('/roles-permissions/role-management');
  };

  const handleCreateRole = () => {
    // TODO: Implement API call to create role
    console.log('Creating role:', { formData, selectedPermissions, advancedSettings });
    
    // Navigate to success page with role data
    const roleData = {
      name: formData.roleName || 'New Role',
      department: formData.department || 'Engineering',
      permissionsAssigned: Object.values(selectedPermissions).flat().length,
      status: formData.status || 'Active',
      createdBy: 'Current User',
      createdAt: new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' }),
      auditId: 'AUD-' + new Date().getFullYear() + '-' + Math.random().toString().substr(2, 8),
      permissions: Object.entries(selectedPermissions).map(([category, perms]) => ({
        category: category.charAt(0).toUpperCase() + category.slice(1).replace(/([A-Z])/g, ' $1'),
        count: perms.length
      })),
      auditLog: {
        timestamp: new Date().toISOString(),
        action: 'ROLE_CREATED',
        user: 'current.user@company.com',
        ipAddress: '192.168.1.45',
        resource: 'roles/' + (formData.roleName || 'new-role').toLowerCase().replace(/\s+/g, '-'),
        changes: `Created new role with ${Object.values(selectedPermissions).flat().length} permissions`
      }
    };
    
    navigate('/roles-permissions/role-management/save-confirmation', { state: { roleData } });
  };

  return (
    <div className="create-role-wrapper">
      <Sidebar />
      
      {/* Fixed Header */}
      <div className="create-role-header-fixed">
        <div className="header-left">
          <button className="back-btn" onClick={handleCancel} title="Back">
            <FiArrowLeft size={18} />
          </button>
          <h1 className="page-title">Create New Role</h1>
        </div>

        <div className="breadcrumb">
          <a href="#" className="breadcrumb-item">Home</a>
          <span className="breadcrumb-sep">/</span>
          <a href="#" className="breadcrumb-item">Roles</a>
          <span className="breadcrumb-sep">/</span>
          <span className="breadcrumb-current">Create</span>
        </div>

        <div className="header-right">
          <button className="btn-cancel" onClick={handleCancel}>
            Cancel
          </button>
          <button className="btn-create" onClick={handleCreateRole}>
            <FiCheck size={14} />
            Create Role
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="create-role-content">
        <div className="content-left">
          {/* Basic Information Card */}
          <div className="card">
            <div className="card-header">
              <div className="card-icon blue">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <circle cx="10" cy="8" r="4" fill="#2563EB" />
                  <path d="M2 20C2 14.477 6.373 10 10.5 10C14.627 10 19 14.477 19 20" fill="#2563EB" />
                </svg>
              </div>
              <div className="card-title-group">
                <h2 className="card-title">Basic Information</h2>
                <p className="card-subtitle">Define the role name and description</p>
              </div>
            </div>

            <div className="form-group">
              <label className="label-required">Role Name *</label>
              <input
                type="text"
                name="roleName"
                placeholder="e.g., Content Manager"
                value={formData.roleName}
                onChange={handleFormChange}
                className="input"
              />
              <p className="input-hint">Choose a clear, descriptive name for this role</p>
            </div>

            <div className="form-group">
              <label>Description</label>
              <textarea
                name="description"
                placeholder="Describe the purpose and responsibilities of this role..."
                value={formData.description}
                onChange={handleFormChange}
                className="textarea"
                rows="4"
              />
            </div>

            <div className="form-row">
              <div className="form-group flex-1">
                <label className="label-required">Role Type *</label>
                <select
                  name="roleType"
                  value={formData.roleType}
                  onChange={handleFormChange}
                  className="select"
                >
                  <option value="">Select type</option>
                  <option value="System">System</option>
                  <option value="Tenant">Tenant</option>
                  <option value="Custom">Custom</option>
                </select>
              </div>

              <div className="form-group flex-1">
                <label>Icon</label>
                <input
                  type="text"
                  name="icon"
                  value={formData.icon}
                  onChange={handleFormChange}
                  className="input"
                />
              </div>
            </div>

            <div className="form-group">
              <label>Tenant Assignment</label>
              <select name="tenantAssignment" value={formData.tenantAssignment} className="select">
                <option>Global (All Tenants)</option>
                <option>Specific Tenant</option>
              </select>
            </div>
          </div>

          {/* Permissions Card */}
          <div className="card">
            <div className="card-header">
              <div className="card-icon purple">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path
                    d="M10 1L2 4V9C2 14 10 18 10 18C10 18 18 14 18 9V4L10 1Z"
                    fill="#9333EA"
                  />
                </svg>
              </div>
              <div className="card-title-group">
                <h2 className="card-title">Permissions</h2>
                <p className="card-subtitle">Select permissions for this role</p>
              </div>
              <div className="perm-header-right">
                <span className="perm-count">{selectedPermissions.length} selected</span>
                <button className="clear-all-btn" onClick={() => setSelectedPermissions([])}>
                  Clear All
                </button>
              </div>
            </div>

            <div className="search-box">
              <input type="text" placeholder="Search permissions..." className="search-input" />
            </div>

            <div className="permissions-list">
              {permissionCategories.map((category) => (
                <div key={category.name} className="perm-category">
                  <button
                    className="category-header"
                    onClick={() =>
                      setExpandedCategory(expandedCategory === category.name ? null : category.name)
                    }
                  >
                    <input
                      type="checkbox"
                      className="category-check"
                      checked={category.permissions.some((p) =>
                        selectedPermissions.includes(p.name)
                      )}
                      readOnly
                    />
                    <span className="category-name">{category.name}</span>
                    <span className="category-count">({category.permissions.length} permissions)</span>
                    <svg className="expand-icon" width="12" height="8" viewBox="0 0 12 8" fill="none">
                      <path
                        d="M1 1L6 7L11 1"
                        stroke="#666"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                      />
                    </svg>
                  </button>

                  {expandedCategory === category.name && (
                    <div className="category-perms">
                      {category.permissions.map((perm) => (
                        <div key={perm.name} className="perm-item">
                          <input
                            type="checkbox"
                            id={perm.name}
                            checked={selectedPermissions.includes(perm.name)}
                            onChange={() => togglePermission(perm.name)}
                            className="perm-check"
                          />
                          <label htmlFor={perm.name} className="perm-label">
                            <span className="perm-name">{perm.name}</span>
                            <span className="perm-desc">{perm.description}</span>
                          </label>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="templates-info">
              <p className="info-text">Use templates to quickly assign common permission sets</p>
              <button className="browse-templates-btn">Browse Templates</button>
            </div>
          </div>
        </div>

        <div className="content-right">
          {/* Preview Card */}
          <div className="card">
            <div className="card-header">
              <div className="card-icon green">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <circle cx="10" cy="10" r="8" fill="#16A34A" opacity="0.2" />
                  <circle cx="10" cy="10" r="6" fill="#16A34A" />
                </svg>
              </div>
              <div className="card-title-group">
                <h2 className="card-title">Preview</h2>
                <p className="card-subtitle">How the role will appear</p>
              </div>
            </div>

            <div className="preview-role-box">
              <div className="preview-icon">
                <svg width="28" height="28" viewBox="0 0 20 20" fill="#2563EB">
                  <circle cx="10" cy="8" r="4" />
                  <path d="M2 20C2 14.477 6.373 10 10.5 10C14.627 10 19 14.477 19 20" />
                </svg>
              </div>
              <h3 className="preview-name">{formData.roleName || 'Content Manager'}</h3>
              <p className="preview-type">{formData.roleType || 'Custom'} Role</p>
              <p className="preview-desc">
                {formData.description || 'Manages content creation, editing, and publishing across the platform.'}
              </p>
              <div className="preview-badges">
                <span className="badge purple">{selectedPermissions.length} Permissions</span>
                <span className="badge blue">Global</span>
              </div>
            </div>

            <div className="preview-perms">
              <h4 className="preview-section-title">Selected Permissions</h4>
              <div className="preview-perm-list">
                {selectedPermissions.slice(0, 5).map((perm) => (
                  <div key={perm} className="preview-perm">
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                      <path d="M1 5L4 8L9 1" stroke="#16A34A" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                    <span>{perm}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="preview-stats">
              <div className="stat">
                <div className="stat-num">{selectedPermissions.length}</div>
                <div className="stat-label">Permissions</div>
              </div>
              <div className="stat">
                <div className="stat-num">5</div>
                <div className="stat-label">Categories</div>
              </div>
            </div>
          </div>

          {/* Advanced Settings Card */}
          <div className="card">
            <div className="card-header">
              <div className="card-icon orange">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <circle cx="10" cy="10" r="8" fill="#EA580C" opacity="0.2" />
                  <circle cx="10" cy="10" r="6" fill="none" stroke="#EA580C" strokeWidth="2" />
                  <circle cx="10" cy="10" r="2" fill="#EA580C" />
                </svg>
              </div>
              <div className="card-title-group">
                <h2 className="card-title">Advanced Settings</h2>
                <p className="card-subtitle">Configure role behavior</p>
              </div>
            </div>

            {/* Active Role Toggle */}
            <div className="setting-row">
              <div className="setting-content">
                <div className="setting-title">Active Role</div>
                <p className="setting-desc">Enable this role immediately</p>
              </div>
              <button
                type="button"
                className={`toggle ${advancedSettings.activeRole ? 'on' : 'off'}`}
                onClick={() => toggleAdvancedSetting('activeRole')}
                aria-label="Toggle Active Role"
              >
                <span className="toggle-track" />
              </button>
            </div>

            {/* Assignable Toggle */}
            <div className="setting-row">
              <div className="setting-content">
                <div className="setting-title">Assignable</div>
                <p className="setting-desc">Allow assigning to users</p>
              </div>
              <button
                type="button"
                className={`toggle ${advancedSettings.assignable ? 'on' : 'off'}`}
                onClick={() => toggleAdvancedSetting('assignable')}
                aria-label="Toggle Assignable"
              >
                <span className="toggle-track" />
              </button>
            </div>

            {/* Protected Toggle */}
            <div className="setting-row">
              <div className="setting-content">
                <div className="setting-title">Protected</div>
                <p className="setting-desc">Prevent accidental deletion</p>
              </div>
              <button
                type="button"
                className={`toggle ${advancedSettings.protected ? 'on' : 'off'}`}
                onClick={() => toggleAdvancedSetting('protected')}
                aria-label="Toggle Protected"
              >
                <span className="toggle-track" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateRolePage;
