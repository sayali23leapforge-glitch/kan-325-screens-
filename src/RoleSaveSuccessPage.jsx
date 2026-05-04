import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { FiArrowLeft, FiCheckCircle, FiBell, FiClipboard, FiChevronRight, FiInfo, FiCheck } from 'react-icons/fi'
import Sidebar from './Sidebar'
import './role-save-success.css'

const RoleSaveSuccessPage = () => {
  const location = useLocation()
  const navigate = useNavigate()

  const roleData = location.state?.roleData || {
    name: 'Senior Developer - Copy',
    department: 'Engineering',
    permissionsAssigned: 11,
    status: 'Active',
    createdBy: 'Michael Chen',
    createdAt: 'Dec 22, 2024 at 3:45 PM',
    auditId: 'AUD-2024-12-001847',
    permissions: [
      { category: 'User Management', count: 3 },
      { category: 'Repository Access', count: 4 },
      { category: 'Deployment', count: 2 }
    ],
    auditLog: {
      timestamp: '2024-12-22T15:45:32Z',
      action: 'ROLE_CREATED',
      user: 'michael.chen@karnovate.com',
      ipAddress: '192.168.1.45',
      resource: 'roles/senior-developer-copy',
      changes: 'Created new role with 11 permissions (cloned from Senior Developer)'
    }
  }

  return (
    <div className="rss-layout">
      <Sidebar />
      
      <div className="rss-page-container">
        {/* Fixed Header */}
        <header className="rss-header-fixed">
          <div className="rss-header-left">
            <button 
              className="rss-back-btn"
              onClick={() => navigate('/roles-permissions/role-management')}
              title="Back"
            >
              <FiArrowLeft size={18} />
            </button>
            <h1 className="rss-header-title">Role Management</h1>
          </div>

          <nav className="rss-breadcrumb">
            <a href="#" className="rss-breadcrumb-link">Home</a>
            <span className="rss-breadcrumb-sep">/</span>
            <a href="#" className="rss-breadcrumb-link">IAM</a>
            <span className="rss-breadcrumb-sep">/</span>
            <a href="#" className="rss-breadcrumb-link">Roles</a>
            <span className="rss-breadcrumb-sep">/</span>
            <span className="rss-breadcrumb-text">Save Confirmation</span>
          </nav>

          <div className="rss-header-right">
            <button className="rss-notification-btn" title="Notifications">
              <FiBell size={18} />
              <span className="rss-badge">3</span>
            </button>
            <button className="rss-btn-new-role">New Role</button>
          </div>
        </header>

        {/* Main Content Area - Centered Narrow Column */}
        <div className="rss-content-wrapper">
          
          {/* Main Success Card */}
          <div className="rss-success-card">
            
            {/* Green Success Hero - Inside Card */}
            <div className="rss-hero-section">
              <div className="rss-hero-icon">
                <FiCheckCircle size={48} />
              </div>
              <h2 className="rss-hero-title">Role Created Successfully!</h2>
              <p className="rss-hero-subtitle">{roleData.name} has been added to the system</p>
            </div>

            {/* Role Details Panel */}
            <div className="rss-details-section">
              <div className="rss-details-header">
                <div className="rss-details-icon">
                  <FiInfo size={12} />
                </div>
                <h3 className="rss-details-title">Role Details</h3>
              </div>
              
              <div className="rss-details-row">
                <span className="rss-detail-label">Role Name</span>
                <span className="rss-detail-value">{roleData.name}</span>
              </div>
              
              <div className="rss-details-row">
                <span className="rss-detail-label">Department</span>
                <span className="rss-detail-value">{roleData.department}</span>
              </div>
              
              <div className="rss-details-row">
                <span className="rss-detail-label">Permissions Assigned</span>
                <span className="rss-detail-value rss-detail-blue">{roleData.permissionsAssigned} permissions</span>
              </div>
              
              <div className="rss-details-row">
                <span className="rss-detail-label">Status</span>
                <span className="rss-detail-status-badge">{roleData.status}</span>
              </div>
              
              <div className="rss-details-row">
                <span className="rss-detail-label">Created By</span>
                <span className="rss-detail-value">{roleData.createdBy}</span>
              </div>
              
              <div className="rss-details-row">
                <span className="rss-detail-label">Created At</span>
                <span className="rss-detail-value">{roleData.createdAt}</span>
              </div>
            </div>

            {/* Audit Log Updated Section - Full Width */}
            <div className="rss-audit-log-section">
              <div className="rss-audit-log-icon">
                <FiClipboard size={14} />
              </div>
              <div className="rss-audit-log-content">
                <h4 className="rss-audit-log-title">Audit Log Updated</h4>
                <p className="rss-audit-log-text">This action has been recorded in the system audit log with ID: <strong>{roleData.auditId}</strong></p>
              </div>
            </div>

            {/* Permission Summary Section - Full Width */}
            <div className="rss-permission-section">
              <h4 className="rss-permission-title">Permission Summary</h4>
              <div className="rss-permission-rows">
                {roleData.permissions.map((p, i) => (
                  <div key={i} className="rss-permission-row">
                    <div className="rss-permission-icon">
                      <FiCheck size={11} />
                    </div>
                    <span className="rss-permission-label">{p.category}</span>
                    <span className="rss-permission-count">{p.count} permissions</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Next Steps Section - Full Width */}
            <div className="rss-next-steps-section">
              <div className="rss-next-steps-header">
                <div className="rss-next-steps-icon">
                  <FiClipboard size={14} />
                </div>
                <h4 className="rss-next-steps-title">Next Steps</h4>
              </div>
              <ul className="rss-next-steps-list">
                <li className="rss-next-step-item">
                  <div className="rss-step-bullet">
                    <FiChevronRight size={12} />
                  </div>
                  <span className="rss-step-text">Assign users to this role</span>
                </li>
                <li className="rss-next-step-item">
                  <div className="rss-step-bullet">
                    <FiChevronRight size={12} />
                  </div>
                  <span className="rss-step-text">Review permission settings</span>
                </li>
                <li className="rss-next-step-item">
                  <div className="rss-step-bullet">
                    <FiChevronRight size={12} />
                  </div>
                  <span className="rss-step-text">Set up role-based notifications</span>
                </li>
              </ul>
            </div>

            {/* Action Buttons */}
            <div className="rss-action-buttons">
              <button 
                className="rss-btn rss-btn-blue"
                onClick={() => navigate(`/roles-permissions/role-management/${roleData.name.toLowerCase().replace(/\s+/g, '-').replace(/-copy$/, '')}`)}
              >
                View Role Details
              </button>
              <button className="rss-btn rss-btn-orange">
                Assign Users
              </button>
              <button 
                className="rss-btn rss-btn-outline"
                onClick={() => navigate('/roles-permissions/role-management')}
              >
                Back to Roles
              </button>
            </div>

          </div>

          {/* Audit Log Entry Card */}
          <div className="rss-audit-card">
            <h3 className="rss-section-title">Recent Audit Log Entry</h3>
            <div className="rss-audit-content">
              <div className="rss-audit-row">
                <span className="rss-audit-label">Timestamp</span>
                <span className="rss-audit-value">{roleData.auditLog.timestamp}</span>
              </div>
              <div className="rss-audit-row">
                <span className="rss-audit-label">Action</span>
                <span className="rss-audit-value"><span className="rss-action-tag">{roleData.auditLog.action}</span></span>
              </div>
              <div className="rss-audit-row">
                <span className="rss-audit-label">User</span>
                <span className="rss-audit-value">{roleData.auditLog.user}</span>
              </div>
              <div className="rss-audit-row">
                <span className="rss-audit-label">IP Address</span>
                <span className="rss-audit-value">{roleData.auditLog.ipAddress}</span>
              </div>
              <div className="rss-audit-row">
                <span className="rss-audit-label">Resource</span>
                <span className="rss-audit-value rss-code">{roleData.auditLog.resource}</span>
              </div>
              <div className="rss-audit-row">
                <span className="rss-audit-label">Changes</span>
                <span className="rss-audit-value">{roleData.auditLog.changes}</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  )
}

export default RoleSaveSuccessPage
