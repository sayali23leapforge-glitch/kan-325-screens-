import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Sidebar from './Sidebar';
import './role-management.css';
import { FiSearch, FiChevronDown, FiFilter, FiEye, FiEdit, FiMoreVertical, FiChevronLeft, FiChevronRight } from 'react-icons/fi';

const RoleManagementPage = () => {
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);

  const roles = [
    {
      id: 1,
      name: 'Super Admin',
      description: 'Full system access',
      type: 'System',
      typeColor: '#FEE2E2',
      typeTextColor: '#991B1B',
      permissions: 'All',
      permissionsCount: '(892)',
      users: [1, 2, 3],
      usersExtra: '+2',
      tenant: 'Global',
      status: 'Active',
      statusColor: '#DCFCE7',
      statusTextColor: '#166534',
      roleIconBg: '#FEE2E2',
      roleIcon: '🔴'
    },
    {
      id: 2,
      name: 'Admin',
      description: 'Administrative access role',
      type: 'System',
      typeColor: '#DBEAFE',
      typeTextColor: '#1E40AF',
      permissions: '87',
      permissionsCount: 'permissions',
      users: [1, 2, 3],
      usersExtra: '+140',
      tenant: 'Global',
      status: 'Active',
      statusColor: '#DCFCE7',
      statusTextColor: '#166534',
      roleIconBg: '#DBEAFE',
      roleIcon: '👤'
    },
    {
      id: 3,
      name: 'Tenant Admin',
      description: 'Manage tenant resources',
      type: 'Tenant',
      typeColor: '#DBEAFE',
      typeTextColor: '#1E40AF',
      permissions: '156',
      permissionsCount: 'permissions',
      users: [1, 2],
      usersExtra: '+18',
      tenant: 'Acme Corp',
      status: 'Active',
      statusColor: '#DCFCE7',
      statusTextColor: '#166534',
      roleIconBg: '#DBEAFE',
      roleIcon: '👤'
    },
    {
      id: 4,
      name: 'Developer',
      description: 'API and integration access',
      type: 'Custom',
      typeColor: '#DCFCE7',
      typeTextColor: '#166534',
      permissions: '89',
      permissionsCount: 'permissions',
      users: [1, 2],
      usersExtra: '+45',
      tenant: 'Tech Solutions',
      status: 'Active',
      statusColor: '#DCFCE7',
      statusTextColor: '#166534',
      roleIconBg: '#DCFCE7',
      roleIcon: '👨‍💻'
    },
    {
      id: 5,
      name: 'Manager',
      description: 'Team management access',
      type: 'Custom',
      typeColor: '#F3E8FF',
      typeTextColor: '#6B21A8',
      permissions: '67',
      permissionsCount: 'permissions',
      users: [1],
      usersExtra: '+12',
      tenant: 'Global Systems',
      status: 'Pending',
      statusColor: '#FEF9C3',
      statusTextColor: '#854D0E',
      roleIconBg: '#F3E8FF',
      roleIcon: '👨‍💼'
    }
  ];

  return (
    <main className="dashboard-layout">
      <Sidebar isOpen={sidebarOpen} setIsOpen={setSidebarOpen} activeMenu="role-management" />
      
      <section className="dashboard-main">
        {/* Fixed Header */}
        <div className="role-mgmt-page-header">
          <div className="header-content">
            <h1 className="page-title">Roles & Permissions</h1>
            <div className="breadcrumbs">
              <span className="breadcrumb-link">Home</span>
              <span className="breadcrumb-divider">›</span>
              <span className="breadcrumb-link">IAM</span>
              <span className="breadcrumb-divider">›</span>
              <span className="breadcrumb-current">Roles</span>
            </div>
          </div>
          
          <div className="header-actions">
            <button className="notification-button">
              <FiFilter size={20} />
              <div className="notification-badge">3</div>
            </button>
            <button className="btn-new-role" onClick={() => navigate('/roles-permissions/role-management/create')}>
              <span>+ New Role</span>
            </button>
          </div>
        </div>

        {/* Page Content */}
        <div className="role-mgmt-page-content">
          
          {/* Stats Cards */}
          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-icon-box" style={{ backgroundColor: '#DBEAFE' }}>
                <div className="stat-icon">👥</div>
              </div>
              <div className="stat-badge active">Active</div>
              <div className="stat-number">156</div>
              <div className="stat-label">Total Roles</div>
            </div>

            <div className="stat-card">
              <div className="stat-icon-box" style={{ backgroundColor: '#F3E8FF' }}>
                <div className="stat-icon">🔑</div>
              </div>
              <div className="stat-badge">+24</div>
              <div className="stat-number">892</div>
              <div className="stat-label">Permissions</div>
            </div>

            <div className="stat-card">
              <div className="stat-icon-box" style={{ backgroundColor: '#DCFCE7' }}>
                <div className="stat-icon">👫</div>
              </div>
              <div className="stat-badge">+12%</div>
              <div className="stat-number">1,247</div>
              <div className="stat-label">Assigned Users</div>
            </div>

            <div className="stat-card">
              <div className="stat-icon-box" style={{ backgroundColor: '#FFEDD5' }}>
                <div className="stat-icon">🏢</div>
              </div>
              <div className="stat-badge">8</div>
              <div className="stat-number">24</div>
              <div className="stat-label">Active Tenants</div>
            </div>
          </div>

          {/* Search and Filters */}
          <div className="search-filter-section">
            <div className="search-box">
              <FiSearch className="search-icon" />
              <input
                type="text"
                placeholder="Search roles by name, description..."
                className="search-input"
              />
            </div>

            <select className="filter-select">
              <option>All Tenants</option>
            </select>

            <select className="filter-select">
              <option>All Status</option>
            </select>

            <button className="btn-more-filters">
              <FiFilter size={16} />
              More Filters
            </button>
          </div>

          {/* Roles Table */}
          <div className="roles-table-container">
            <table className="roles-table">
              <thead>
                <tr>
                  <th className="checkbox-col">
                    <input type="checkbox" />
                  </th>
                  <th>Role Name</th>
                  <th>Type</th>
                  <th>Permissions</th>
                  <th>Users</th>
                  <th>Tenant</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {roles.map((role) => (
                  <tr key={role.id} className="role-row" onClick={() => navigate(`/roles-permissions/role-management/${role.name.toLowerCase().replace(/ /g, '-')}`)}>
                    <td className="checkbox-col">
                      <input type="checkbox" />
                    </td>
                    <td>
                      <div className="role-name-cell">
                        <div className="role-icon-box" style={{ backgroundColor: role.roleIconBg }}>
                          {role.roleIcon}
                        </div>
                        <div className="role-text">
                          <div className="role-name-text">{role.name}</div>
                          <div className="role-description">{role.description}</div>
                        </div>
                      </div>
                    </td>
                    <td>
                      <span className="type-badge" style={{ backgroundColor: role.typeColor, color: role.typeTextColor }}>
                        {role.type}
                      </span>
                    </td>
                    <td>
                      <div className="permissions-cell">
                        <div>{role.permissions}</div>
                        <div className="permissions-count">{role.permissionsCount}</div>
                      </div>
                    </td>
                    <td>
                      <div className="users-avatars">
                        {role.users.map((user, idx) => (
                          <div key={idx} className="avatar-placeholder" />
                        ))}
                        <div className="users-extra">{role.usersExtra}</div>
                      </div>
                    </td>
                    <td>{role.tenant}</td>
                    <td>
                      <span className="status-badge" style={{ backgroundColor: role.statusColor, color: role.statusTextColor }}>
                        ● {role.status}
                      </span>
                    </td>
                    <td>
                      <div className="actions-cell">
                        <button className="action-icon-btn" title="View">
                          <FiEye size={18} />
                        </button>
                        <button className="action-icon-btn" title="Edit">
                          <FiEdit size={18} />
                        </button>
                        <button className="action-icon-btn" title="More">
                          <FiMoreVertical size={18} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            {/* Pagination */}
            <div className="pagination-section">
              <span className="pagination-info">
                Showing <strong>1-4</strong> of <strong>156</strong> roles
              </span>
              
              <div className="pagination-controls">
                <button className="pagination-btn">
                  <FiChevronLeft size={18} />
                </button>
                <button className="pagination-btn active">1</button>
                <button className="pagination-btn">2</button>
                <button className="pagination-btn">3</button>
                <span className="pagination-dots">...</span>
                <button className="pagination-btn">39</button>
                <button className="pagination-btn">
                  <FiChevronRight size={18} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default RoleManagementPage;
