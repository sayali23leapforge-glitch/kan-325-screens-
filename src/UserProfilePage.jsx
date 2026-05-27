import React, { useState } from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import {
  FiAlertTriangle,
  FiArrowLeft,
  FiBell,
  FiCheck,
  FiClock,
  FiEdit2,
  FiFileText,
  FiKey,
  FiPlus,
  FiShield,
  FiUserX,
  FiX,
} from 'react-icons/fi'
import Sidebar from './Sidebar'
import './user-profile.css'

function UserProfilePage() {
  const navigate = useNavigate()
  const { id } = useParams()
  const location = useLocation()
  const [sidebarOpen, setSidebarOpen] = useState(false)

  const deactivationSuccess = location.state?.deactivationSuccess === true

  const userData = {
    id: id || 'user-1',
    firstName: 'Sarah',
    lastName: 'Johnson',
    email: 'sarah.johnson@company.com',
    phone: '+1 (555) 123-4567',
    department: 'Product Development',
    employeeId: 'EMP-2023-0156',
    officeLocation: 'San Francisco, CA',
    joinDate: 'Jan 15, 2023',
    lastLogin: '2 hours ago',
    avatar: 'https://placehold.co/123x123',
    status: 'Active',
    role: 'Manager',
    roleContext: 'Product Development',
    mfaEnabled: true,
  }

  const permissions = [
    { label: 'User Management', allowed: true },
    { label: 'Product Access', allowed: true },
    { label: 'Reports & Analytics', allowed: true },
    { label: 'System Administration', allowed: false },
  ]

  const securityItems = [
    {
      icon: <FiShield size={14} />,
      title: 'Multi-Factor Authentication',
      subtitle: 'Enabled via Authenticator App',
      actionLabel: 'Active',
      tone: 'success',
    },
    {
      icon: <FiKey size={14} />,
      title: 'Password',
      subtitle: 'Last changed 45 days ago',
      actionLabel: 'Reset',
      tone: 'link',
    },
    {
      icon: <FiClock size={14} />,
      title: 'Session Timeout',
      subtitle: '8 hours',
      actionLabel: 'Configure',
      tone: 'link',
    },
    {
      icon: <FiUserX size={14} />,
      title: 'Account Status',
      subtitle: 'Active since Jan 2023',
      actionLabel: 'Suspend',
      tone: 'danger-link',
    },
  ]

  const products = [
    {
      name: 'Analytics Pro',
      access: 'Full Access',
      status: 'Active',
      tone: 'blue',
      badgeTone: 'success',
    },
    {
      name: 'CRM Suite',
      access: 'Manager Access',
      status: 'Active',
      tone: 'purple',
      badgeTone: 'success',
    },
    {
      name: 'Document Manager',
      access: 'Read Only',
      status: 'Limited',
      tone: 'orange',
      badgeTone: 'warning',
    },
  ]

  const activities = [
    {
      icon: <FiCheck size={13} />,
      title: 'Logged in successfully',
      subtitle: 'From 192.168.1.100 • 2 hours ago',
      tone: 'success',
    },
    {
      icon: <FiEdit2 size={13} />,
      title: 'Updated user profile in CRM Suite',
      subtitle: 'Modified contact information • 1 day ago',
      tone: 'info',
    },
    {
      icon: <FiFileText size={13} />,
      title: 'Downloaded quarterly report',
      subtitle: 'Analytics Pro • 2 days ago',
      tone: 'purple',
    },
    {
      icon: <FiShield size={13} />,
      title: 'MFA verification completed',
      subtitle: 'Security Settings • 3 days ago',
      tone: 'warning',
    },
  ]

  const infoRows = [
    [
      { label: 'First Name', value: userData.firstName },
      { label: 'Last Name', value: userData.lastName },
    ],
    [
      { label: 'Email Address', value: userData.email },
      { label: '', value: '' },
    ],
    [
      { label: 'Phone Number', value: userData.phone },
      { label: 'Employee ID', value: userData.employeeId },
    ],
    [
      { label: 'Office Location', value: userData.officeLocation },
      { label: '', value: '' },
    ],
  ]

  const deactivationDetails = {
    summary: 'This user account was deactivated on March 15, 2024 at 2:30 PM by Michael Chen (Super Admin).',
    date: 'March 15, 2024 at 2:30 PM',
    by: 'Michael Chen (Super Admin)',
    reason: 'Employee termination - End of contract',
    impact: [
      'User cannot log in to any Karnovate services',
      'All active sessions have been terminated',
      'Access to all applications and resources revoked',
      'User data is retained for audit purposes',
    ],
  }

  return (
    <main className="dashboard-layout up-page">
      <Sidebar sidebarOpen={sidebarOpen} />
      <div className={`sidebar-overlay ${sidebarOpen ? 'active' : ''}`} onClick={() => setSidebarOpen(false)} />
      
      <section className="dashboard-main up-main">
        <div className="up-header">
          <div className="up-header-copy">
            <h1 className="up-title">User Profile</h1>
            <div className="up-trail" aria-label="User path">
              <span className="up-trail-link">Home</span>
              <span className="up-trail-sep">/</span>
              <span className="up-trail-link">IAM</span>
              <span className="up-trail-sep">/</span>
              <span className="up-trail-link">Users</span>
              <span className="up-trail-sep">/</span>
              <span className="up-trail-current">Sarah Johnson</span>
            </div>
          </div>

          <div className="up-header-actions">
            <button className="up-icon-btn" type="button" aria-label="Notifications">
                <FiBell size={20} />
                <span className="notification-badge">3</span>
              </button>
            <button onClick={() => navigate('/users')} className="up-back-btn" type="button">
                <FiArrowLeft size={16} />
              Back to Users
            </button>
          </div>
        </div>

        <div className="up-content">
          <div className="up-hero-card">
            <img src={userData.avatar} alt={userData.firstName} className="up-avatar" />

            <div className="up-hero-copy">
              <h2 className="up-name">{userData.firstName} {userData.lastName}</h2>
              <p className="up-email">{userData.email}</p>
              <div className="up-badges">
                <span className={`up-badge ${deactivationSuccess ? 'danger' : 'success'}`}>
                  {deactivationSuccess ? 'Deactivated' : 'Active'}
                </span>
                <span className="up-badge purple">Manager</span>
                <span className="up-badge blue">MFA Enabled</span>
              </div>
            </div>

            <div className="up-hero-actions">
              {deactivationSuccess ? (
                <button
                  type="button"
                  className="up-success-btn"
                  onClick={() => navigate(`/users/${id}`, { replace: true })}
                >
                  <FiCheck size={14} />
                  Reactivate User
                </button>
              ) : (
                <button
                  type="button"
                  className="up-danger-btn"
                  onClick={() =>
                    navigate(`/users/${id}/manage`, {
                      state: {
                        showDeactivationSuccess: true,
                        isDeactivated: false,
                      },
                    })
                  }
                >
                  <FiUserX size={14} />
                  Deactivate User
                </button>
              )}
              <button type="button" className="up-primary-btn" onClick={() => navigate(`/users/${id}/edit`)}>
                <FiEdit2 size={14} />
                Edit Profile
              </button>
            </div>

            <div className="up-meta-grid">
              <div className="up-meta-item">
                <span>Department</span>
                <strong>{userData.department}</strong>
              </div>
              <div className="up-meta-item">
                <span>Last Login</span>
                <strong>{userData.lastLogin}</strong>
              </div>
              <div className="up-meta-item">
                <span>Member Since</span>
                <strong>{userData.joinDate}</strong>
              </div>
            </div>

          </div>

          <div className="up-two-col">
            <section className="up-card up-personal-card">
              <div className="up-card-head">
                <h3>Personal Information</h3>
                <button type="button" className="up-inline-link">
                  <FiEdit2 size={12} />
                  Edit
                </button>
              </div>

              <div className="up-info-grid">
                {infoRows.map((row, rowIndex) => (
                  <React.Fragment key={rowIndex}>
                    {row.map((item, itemIndex) => (
                      <div key={`${rowIndex}-${itemIndex}`} className={`up-info-item ${!item.label ? 'is-empty' : ''}`}>
                        {item.label ? (
                          <>
                            <span>{item.label}</span>
                            <strong>{item.value}</strong>
                          </>
                        ) : null}
                      </div>
                    ))}
                  </React.Fragment>
                ))}
              </div>
            </section>

            <section className="up-card up-role-card">
              <div className="up-card-head">
                <h3>Role &amp; Permissions</h3>
                <button type="button" className="up-inline-link">
                  <FiEdit2 size={12} />
                  Modify
                </button>
              </div>

              <div className="up-role-block">
                <span className="up-label">Current Role</span>
                <div className="up-role-row">
                  <span className="up-role-pill">Manager</span>
                  <span className="up-role-context">{userData.roleContext}</span>
                </div>
              </div>

              <div className="up-permissions-block">
                <span className="up-label">Permissions</span>
                <div className="up-permissions-list">
                  {permissions.map((permission) => (
                    <div
                      key={permission.label}
                      className={`up-permission-row ${permission.allowed ? 'allowed' : 'blocked'}`}
                    >
                      <span>{permission.label}</span>
                      {permission.allowed ? <FiCheck size={13} /> : <FiX size={13} />}
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </div>

          <div className="up-two-col">
            <section className="up-card up-security-card">
              <div className="up-card-head">
                <h3>Security Settings</h3>
              </div>

              <div className="up-security-list">
                {securityItems.map((item) => (
                  <div key={item.title} className="up-security-row">
                    <div className={`up-security-icon ${item.tone}`}>
                      {item.icon}
                    </div>
                    <div className="up-security-copy">
                      <strong>{item.title}</strong>
                      <span>{item.subtitle}</span>
                    </div>
                    <button type="button" className={`up-security-action ${item.tone}`}>
                      {item.actionLabel}
                    </button>
                  </div>
                ))}
              </div>
            </section>

            <section className="up-card up-products-card">
              <div className="up-card-head">
                <h3>Product Access</h3>
                <button type="button" className="up-inline-link">
                  <FiPlus size={12} />
                  Add Product
                </button>
              </div>

              <div className="up-product-list">
                {products.map((product) => (
                  <div key={product.name} className="up-product-row">
                    <div className={`up-product-icon ${product.tone}`}>
                      {product.tone === 'blue' ? <FiFileText size={14} /> : product.tone === 'purple' ? <FiShield size={14} /> : <FiFileText size={14} />}
                    </div>
                    <div className="up-product-copy">
                      <strong>{product.name}</strong>
                      <span>{product.access}</span>
                    </div>
                    <span className={`up-small-badge ${product.badgeTone}`}>{product.status}</span>
                  </div>
                ))}
              </div>
            </section>
          </div>

          <section className="up-card up-activity-card">
            <div className="up-card-head up-activity-head">
              <h3>Recent Activity</h3>
              <button type="button" className="up-inline-link plain">View All</button>
            </div>

            <div className="up-activity-list">
              {activities.map((activity) => (
                <div key={activity.title} className="up-activity-row">
                  <div className={`up-activity-icon ${activity.tone}`}>{activity.icon}</div>
                  <div className="up-activity-copy">
                    <strong>{activity.title}</strong>
                    <span>{activity.subtitle}</span>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {deactivationSuccess ? (
            <section className="up-card up-deactivated-alert-card">
              <div className="up-deactivated-head">
                <span className="up-deactivated-icon-wrap">
                  <FiAlertTriangle size={15} />
                </span>
                <div className="up-deactivated-head-copy">
                  <h3>User Account Deactivated</h3>
                  <p>{deactivationDetails.summary}</p>
                </div>
              </div>

              <div className="up-deactivated-details-box">
                <h4>Deactivation Details:</h4>
                <div className="up-deactivated-detail-row">
                  <span className="up-deactivated-bullet" />
                  <p><strong>Date:</strong> {deactivationDetails.date}</p>
                </div>
                <div className="up-deactivated-detail-row">
                  <span className="up-deactivated-bullet" />
                  <p><strong>Deactivated by:</strong> {deactivationDetails.by}</p>
                </div>
                <div className="up-deactivated-detail-row">
                  <span className="up-deactivated-bullet" />
                  <p><strong>Reason:</strong> {deactivationDetails.reason}</p>
                </div>
              </div>

              <div className="up-deactivated-impact-box">
                <div className="up-deactivated-impact-title">
                  <span className="up-impact-icon">!</span>
                  Impact of Deactivation:
                </div>
                <ul>
                  {deactivationDetails.impact.map((item) => (
                    <li key={item}>• {item}</li>
                  ))}
                </ul>
              </div>
            </section>
          ) : null}
        </div>
      </section>
    </main>
  )
}

export default UserProfilePage
