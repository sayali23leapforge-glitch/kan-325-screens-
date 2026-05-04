import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Sidebar from './Sidebar';
import './permission-matrix.css';
import { FiDownload, FiCheck } from 'react-icons/fi';

const PermissionMatrixPage = () => {
  const navigate = useNavigate();

  const [permissions, setPermissions] = useState([
    // User Management
    { category: 'User Management', name: 'View Users', description: 'Can view user list and details', roles: { superAdmin: true, admin: true, editor: true, viewer: true, analyst: false, support: true } },
    { category: 'User Management', name: 'Create Users', description: 'Can create new user accounts', roles: { superAdmin: true, admin: true, editor: false, viewer: false, analyst: false, support: false } },
    { category: 'User Management', name: 'Edit Users', description: 'Can modify user information', roles: { superAdmin: true, admin: true, editor: true, viewer: false, analyst: false, support: false } },
    { category: 'User Management', name: 'Delete Users', description: 'Can remove user accounts', roles: { superAdmin: true, admin: true, editor: false, viewer: false, analyst: false, support: false } },
    // Content Management
    { category: 'Content Management', name: 'View Content', description: 'Can view all content', roles: { superAdmin: true, admin: true, editor: true, viewer: true, analyst: true, support: false } },
    { category: 'Content Management', name: 'Create Content', description: 'Can create new content', roles: { superAdmin: true, admin: true, editor: true, viewer: false, analyst: false, support: false } },
    { category: 'Content Management', name: 'Publish Content', description: 'Can publish to live', roles: { superAdmin: true, admin: true, editor: false, viewer: false, analyst: false, support: false } },
    // Analytics & Reports
    { category: 'Analytics & Reports', name: 'View Analytics', description: 'Can view dashboards', roles: { superAdmin: true, admin: true, editor: false, viewer: false, analyst: true, support: false } },
    { category: 'Analytics & Reports', name: 'Export Reports', description: 'Can download reports', roles: { superAdmin: true, admin: true, editor: false, viewer: false, analyst: true, support: false } },
  ]);

  const roles = ['Super Admin', 'Admin', 'Editor', 'Viewer', 'Analyst', 'Support'];
  const roleKeys = ['superAdmin', 'admin', 'editor', 'viewer', 'analyst', 'support'];

  const togglePermission = (index, roleKey) => {
    const newPermissions = [...permissions];
    newPermissions[index].roles[roleKey] = !newPermissions[index].roles[roleKey];
    setPermissions(newPermissions);
  };

  const stats = [
    { label: 'Total Roles', value: '12', icon: 'blue' },
    { label: 'Permissions', value: '87', icon: 'purple' },
    { label: 'Categories', value: '18', icon: 'orange' },
    { label: 'Assignments', value: '1,044', icon: 'green' },
  ];

  const categories = [...new Set(permissions.map(p => p.category))];

  return (
    <div className="permission-matrix-wrapper">
      <Sidebar />

      {/* Fixed Header */}
      <div className="pm-header-fixed">
        <div className="pm-header-left">
          <h1 className="pm-page-title">Permission Matrix</h1>
        </div>

        <div className="pm-breadcrumb">
          <a href="#" className="pm-breadcrumb-item">Home</a>
          <span className="pm-breadcrumb-sep">/</span>
          <a href="#" className="pm-breadcrumb-item">Roles &amp; Permissions</a>
          <span className="pm-breadcrumb-sep">/</span>
          <span className="pm-breadcrumb-current">Matrix</span>
        </div>

        <div className="pm-header-right">
          <button className="pm-btn-export">
            <FiDownload size={14} />
            Export
          </button>
          <button className="pm-btn-save">
            <FiCheck size={14} />
            Save Changes
          </button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="pm-stats-container">
        {stats.map((stat, idx) => (
          <div key={idx} className="pm-stat-card">
            <div className={`pm-stat-icon ${stat.icon}`}>
              {stat.icon === 'blue' && (
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <circle cx="10" cy="8" r="4" fill="#2563EB" />
                  <path d="M2 20C2 14.477 6.373 10 10.5 10C14.627 10 19 14.477 19 20" fill="#2563EB" />
                </svg>
              )}
              {stat.icon === 'purple' && (
                <svg width="20" height="20" viewBox="0 0 20 20" fill="#9333EA">
                  <path d="M10 1L2 4V9C2 14 10 18 10 18C10 18 18 14 18 9V4L10 1Z" />
                </svg>
              )}
              {stat.icon === 'orange' && (
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <circle cx="10" cy="10" r="8" fill="#EA580C" opacity="0.2" />
                  <circle cx="10" cy="10" r="6" fill="none" stroke="#EA580C" strokeWidth="2" />
                  <circle cx="10" cy="10" r="2" fill="#EA580C" />
                </svg>
              )}
              {stat.icon === 'green' && (
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <circle cx="10" cy="10" r="8" fill="#16A34A" opacity="0.2" />
                  <circle cx="10" cy="10" r="6" fill="#16A34A" />
                </svg>
              )}
            </div>
            <div className="pm-stat-num">{stat.value}</div>
            <div className="pm-stat-label">{stat.label}</div>
          </div>
        ))}
      </div>

      {/* Controls */}
      <div className="pm-controls">
        <div className="pm-search-box">
          <input type="text" placeholder="Search roles or permissions..." className="pm-search-input" />
          <svg width="15" height="15" viewBox="0 0 20 20" fill="#9CA3AF">
            <path d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" />
          </svg>
        </div>
        <button className="pm-filter-btn">
          <svg width="15" height="15" viewBox="0 0 20 20" fill="#374151">
            <path d="M3 3a1 1 0 000 2h11a1 1 0 100-2H3zM3 7a1 1 0 000 2h5a1 1 0 000-2H3zM3 11a1 1 0 100 2h4a1 1 0 100-2H3z" />
          </svg>
          Filters
        </button>
        <button className="pm-reset-btn">
          <svg width="15" height="15" viewBox="0 0 20 20" fill="#374151">
            <path d="M4 10a6 6 0 016-6v3m0-3a6 6 0 100 12v-3m0 3a6 6 0 01-6-6" />
          </svg>
          Reset
        </button>
      </div>

      {/* Matrix Table */}
      <div className="pm-table-container">
        <table className="pm-matrix-table">
          <thead>
            <tr className="pm-table-header">
              <th className="pm-perm-col">
                <div style={{display: 'flex', alignItems: 'center', gap: '8px'}}>
                  <input type="checkbox" style={{width: '16px', height: '16px'}} />
                  <span>Permission</span>
                </div>
              </th>
              {roles.map((role, idx) => {
                const colors = [
                  { bg: '#FEE2E2', icon: '#DC2626' },
                  { bg: '#DBEAFE', icon: '#2563EB' },
                  { bg: '#F3E8FF', icon: '#9333EA' },
                  { bg: '#DCFCE7', icon: '#16A34A' },
                  { bg: '#FFEDD5', icon: '#EA580C' },
                  { bg: '#CCFBF1', icon: '#0D9488' },
                ];
                const color = colors[idx];
                // Add click handler to role header
                const roleParam = role.toLowerCase().replace(/ /g, '-');
                return (
                  <th key={role} className="pm-role-col">
                    <div className="pm-role-header" style={{cursor:'pointer'}} onClick={() => navigate(`/roles-permissions/permission-matrix/${roleParam}`)}>
                      <div className="pm-role-icon" style={{background: color.bg, display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                        <svg width="16" height="16" viewBox="0 0 20 20" fill="none">
                          <circle cx="10" cy="8" r="4" fill={color.icon} />
                          <path d="M2 20C2 14.477 6.373 10 10.5 10C14.627 10 19 14.477 19 20" fill={color.icon} />
                        </svg>
                      </div>
                      <div className="pm-role-name">{role}</div>
                      <div className="pm-role-type">{role === 'Super Admin' ? 'System' : role === 'Admin' ? 'System' : 'Custom'}</div>
                    </div>
                  </th>
                );
              })}
            </tr>
          </thead>
          <tbody>
            {categories.map((category, catIdx) => (
              <React.Fragment key={category}>
                <tr className="pm-category-row">
                  <td colSpan={7} className="pm-category-cell">
                    <svg width="15" height="15" viewBox="0 0 20 20" fill="#DC2626">
                      <path d="M10 3a7 7 0 100 14 7 7 0 000-14z" />
                    </svg>
                    <strong>{category}</strong>
                    <span className="pm-perm-count">({permissions.filter(p => p.category === category).length} permissions)</span>
                  </td>
                </tr>
                {permissions.filter(p => p.category === category).map((perm, idx) => {
                  const fullIdx = permissions.indexOf(perm);
                  return (
                    <tr key={fullIdx} className="pm-perm-row">
                      <td className="pm-perm-cell">
                        <input type="checkbox" className="pm-perm-check" />
                        <div className="pm-perm-info">
                          <div className="pm-perm-name">{perm.name}</div>
                          <div className="pm-perm-desc">{perm.description}</div>
                        </div>
                      </td>
                      {roleKeys.map((roleKey) => (
                        <td key={roleKey} className="pm-role-cell">
                          <div
                            className={`pm-checkbox ${perm.roles[roleKey] ? 'checked' : ''}`}
                            onClick={() => togglePermission(fullIdx, roleKey)}
                          >
                            {perm.roles[roleKey] && (
                              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                                <path d="M1 6L4 9L11 2" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                              </svg>
                            )}
                          </div>
                        </td>
                      ))}
                    </tr>
                  );
                })}
              </React.Fragment>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PermissionMatrixPage;
