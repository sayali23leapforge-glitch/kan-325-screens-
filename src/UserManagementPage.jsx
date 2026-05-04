import React, { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { FiBell, FiArrowLeft } from 'react-icons/fi'
import Sidebar from './Sidebar'
import './user-management.css'

function UserManagementPage() {
  const navigate = useNavigate()
  const { id } = useParams()
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [activeTab, setActiveTab] = useState('account-details')
  const [isDeactivated, setIsDeactivated] = useState(false)
  const [showDeactivationModal, setShowDeactivationModal] = useState(false)

  const userData = {
    id: id || 'user-1',
    firstName: 'Sarah',
    lastName: 'Johnson',
    email: 'sarah.johnson@company.com',
    phone: '+1 (555) 123-4567',
    jobTitle: 'Marketing Manager',
    userId: 'usr_2024_0156',
    accountCreated: 'January 15, 2024',
    lastLogin: 'March 14, 2024 at 4:45 PM',
    accountStatus: 'Active',
    department: 'Marketing',
    employeeId: 'EMP-2024-',
    tenant: 'Acme Corp',
    avatar: 'https://placehold.co/77x77'
  }

  const roles = [
    {
      id: 1,
      name: 'Marketing Manager',
      description: 'Standard access level',
      icon: 'M',
      color: 'blue'
    },
    {
      id: 2,
      name: 'Campaign Editor',
      description: 'Marketing tools access',
      icon: 'C',
      color: 'purple'
    }
  ]

  return (
    <main className="dashboard-layout">
      <Sidebar sidebarOpen={sidebarOpen} />
      <div className={`sidebar-overlay ${sidebarOpen ? 'active' : ''}`} onClick={() => setSidebarOpen(false)} />

      <section className="dashboard-main user-management-main">
        {/* Header */}
        <div className="management-page-header">
          <div className="header-top">
            <h1 className="page-title">User Management</h1>
            <div className="breadcrumb">
              <span className="breadcrumb-item">Home</span>
              <span className="breadcrumb-icon">/</span>
              <span className="breadcrumb-item">Users</span>
              <span className="breadcrumb-icon">/</span>
              <span className="breadcrumb-item active">Sarah Johnson</span>
            </div>
            <div className="header-actions">
              <button className="btn-notifications">
                <FiBell size={20} />
                <span className="notification-badge">3</span>
              </button>
              <button onClick={() => navigate('/users')} className="btn-back-secondary">
                <FiArrowLeft size={16} />
                Back to Users
              </button>
            </div>
          </div>
        </div>

        {/* User Summary Card */}
        <div className="user-summary-card">
          <img src={userData.avatar} alt={userData.firstName} className="summary-avatar" />
          <div className="summary-info">
            <h2 className="summary-name">{userData.firstName} {userData.lastName}</h2>
            <p className="summary-email">{userData.email}</p>
            <div className="summary-badges">
              <span className={`badge ${isDeactivated ? 'deactivated' : 'active'}`}>
                ● {isDeactivated ? 'Deactivated' : 'Active'}
              </span>
            </div>
            <div className="summary-details">
              <span>Employee ID: <strong>EMP-2024-0156</strong></span>
              <span>Department: <strong>Marketing</strong></span>
              <span>Tenant: <strong>Acme Corp</strong></span>
            </div>
          </div>
          <div className="summary-actions">
            <button 
              className={isDeactivated ? 'btn-reactivate' : 'btn-deactivate'}
              onClick={() => !isDeactivated && setShowDeactivationModal(true)}
            >
              {isDeactivated ? '✓ Reactivate User' : '🚫 Deactivate User'}
            </button>
            <button className="btn-edit-secondary">
              ✎ Edit Profile
            </button>
          </div>
        </div>

        {/* Deactivation Alert Box - Only show when deactivated */}
        {isDeactivated && (
          <div className="deactivation-alert-box">
            <div className="alert-header">
              <div className="alert-icon-red">✕</div>
              <div className="alert-content">
                <h3 className="alert-title">User Account Deactivated</h3>
                <p className="alert-message">This user account was deactivated on March 15, 2024 at 2:30 PM by Michael Chen (Super Admin).</p>
              </div>
            </div>
            
            <div className="deactivation-details-box">
              <h4 className="details-title">Deactivation Details:</h4>
              <div className="details-item">
                <span className="details-bullet">●</span>
                <div className="details-content">
                  <span className="details-label">Date:</span>
                  <span className="details-text"> March 15, 2024 at 2:30 PM</span>
                </div>
              </div>
              <div className="details-item">
                <span className="details-bullet">●</span>
                <div className="details-content">
                  <span className="details-label">Deactivated by:</span>
                  <span className="details-text"> Michael Chen (Super Admin)</span>
                </div>
              </div>
              <div className="details-item">
                <span className="details-bullet">●</span>
                <div className="details-content">
                  <span className="details-label">Reason:</span>
                  <span className="details-text"> Employee termination - End of contract</span>
                </div>
              </div>
            </div>

            <div className="impact-box">
              <div className="impact-header">
                <span className="impact-icon">⚠</span>
                <span className="impact-title">Impact of Deactivation:</span>
              </div>
              <ul className="impact-list">
                <li>• User cannot log in to any Karnovate services</li>
                <li>• All active sessions have been terminated</li>
                <li>• Access to all applications and resources revoked</li>
                <li>• User data is retained for audit purposes</li>
              </ul>
            </div>
          </div>
        )}

        {/* Tab Navigation */}
        <div className="management-tabs">
          <div className="tabs-container">
            <button
              className={`tab-button ${activeTab === 'account-details' ? 'active' : ''}`}
              onClick={() => setActiveTab('account-details')}
            >
              Account Details
            </button>
            <button
              className={`tab-button ${activeTab === 'roles-permissions' ? 'active' : ''}`}
              onClick={() => setActiveTab('roles-permissions')}
            >
              Roles & Permissions
            </button>
            <button
              className={`tab-button ${activeTab === 'activity-history' ? 'active' : ''}`}
              onClick={() => setActiveTab('activity-history')}
            >
              Activity History
            </button>
            <button
              className={`tab-button ${activeTab === 'security-settings' ? 'active' : ''}`}
              onClick={() => setActiveTab('security-settings')}
            >
              Security Settings
            </button>
          </div>
        </div>

        {/* Content Area */}
        <div className="management-content">
          {/* Account Details Tab */}
          {activeTab === 'account-details' && (
            <div className="tab-content">
              <div className="content-grid">
                <div className="content-section">
                  <h3 className="section-title">Personal Information</h3>
                  <div className="form-fields">
                    <div className="form-field">
                      <label className="field-label">Full Name</label>
                      <input type="text" className="field-input" value={`${userData.firstName} ${userData.lastName}`} readOnly />
                    </div>
                    <div className="form-field">
                      <label className="field-label">Email Address</label>
                      <input type="email" className="field-input" value={userData.email} readOnly />
                    </div>
                    <div className="form-field">
                      <label className="field-label">Phone Number</label>
                      <input type="tel" className="field-input" value={userData.phone} readOnly />
                    </div>
                    <div className="form-field">
                      <label className="field-label">Job Title</label>
                      <input type="text" className="field-input" value={userData.jobTitle} readOnly />
                    </div>
                  </div>
                </div>

                <div className="content-section">
                  <h3 className="section-title">Account Information</h3>
                  <div className="form-fields">
                    <div className="form-field">
                      <label className="field-label">User ID</label>
                      <input type="text" className="field-input" value={userData.userId} readOnly />
                    </div>
                    <div className="form-field">
                      <label className="field-label">Account Created</label>
                      <input type="text" className="field-input" value={userData.accountCreated} readOnly />
                    </div>
                    <div className="form-field">
                      <label className="field-label">Last Login</label>
                      <input type="text" className="field-input" value={userData.lastLogin} readOnly />
                    </div>
                    <div className="form-field">
                      <label className="field-label">Account Status</label>
                      <div className={`field-status ${isDeactivated ? 'deactivated' : 'active'}`}>
                        ● {isDeactivated ? 'Deactivated' : 'Active'}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="assigned-roles-section">
                <h3 className="section-title">Assigned Roles {isDeactivated && '(Suspended)'}</h3>
                <div className={`roles-grid ${isDeactivated ? 'suspended' : ''}`}>
                  {roles.map(role => (
                    <div key={role.id} className={`role-card ${role.color} ${isDeactivated ? 'disabled' : ''}`}>
                      <div className={`role-icon-box ${role.color} ${isDeactivated ? 'disabled' : ''}`}>
                        {role.color === 'blue' ? '🔐' : '✏️'}
                      </div>
                      <div className="role-content">
                        <h4 className="role-name">{role.name}</h4>
                        <p className="role-description">{role.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Roles & Permissions Tab */}
          {activeTab === 'roles-permissions' && (
            <div className="tab-content">
              <div className="placeholder-content">
                <h3>Roles & Permissions</h3>
                <p>Manage user roles and permissions here</p>
              </div>
            </div>
          )}

          {/* Activity History Tab */}
          {activeTab === 'activity-history' && (
            <div className="tab-content">
              <div className="placeholder-content">
                <h3>Activity History</h3>
                <p>User activity logs will appear here</p>
              </div>
            </div>
          )}

          {/* Security Settings Tab */}
          {activeTab === 'security-settings' && (
            <div className="tab-content">
              <div className="placeholder-content">
                <h3>Security Settings</h3>
                <p>Security configuration options will appear here</p>
              </div>
            </div>
          )}
        </div>

        {/* Deactivation Success Modal */}
        {showDeactivationModal && (
          <div className="modal-overlay">
            <div className="deactivation-modal">
              <div className="modal-checkmark">✓</div>
              <h2 className="modal-title">User Deactivated Successfully</h2>
              <p className="modal-message">
                {userData.firstName} {userData.lastName}'s account has been deactivated. All active<br/>
                sessions have been terminated and access permissions have<br/>
                been revoked.
              </p>
              
              <div className="deactivation-details">
                <div className="detail-row">
                  <span className="detail-label">Deactivated on:</span>
                  <span className="detail-value">February 21, 2026 at 07:25 PM</span>
                </div>
                <div className="detail-row">
                  <span className="detail-label">Reason:</span>
                  <span className="detail-value">Employee departure</span>
                </div>
              </div>

              <div className="modal-success-notice">
                <span className="notice-icon">✓</span>
                <span className="notice-text">An audit log entry has been created for this action.</span>
              </div>

              <button 
                className="modal-continue-btn"
                onClick={() => {
                  setIsDeactivated(true)
                  setShowDeactivationModal(false)
                }}
              >
                Continue
              </button>
            </div>
          </div>
        )}
      </section>
    </main>
  )
}

export default UserManagementPage
