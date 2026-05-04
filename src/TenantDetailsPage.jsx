import React, { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { FiDownload, FiPlus, FiSettings, FiTrendingUp, FiDownloadCloud, FiAlertTriangle } from 'react-icons/fi'
import { BiCheckCircle } from 'react-icons/bi'
import Sidebar from './Sidebar'
import './tenant-details.css'

const TenantDetailsPage = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [showSuspendConfirmation, setShowSuspendConfirmation] = useState(false)
  const [suspensionSuccess, setSuspensionSuccess] = useState(false)

  // Mock tenant data
  const tenantData = {
    id: 'TNT-001',
    name: 'Acme Corporation',
    initials: 'AC',
    domain: 'acme.example.com',
    subscription: 'Enterprise',
    status: 'Active',
    email: 'admin@acme.example.com',
    phone: '+1 (555) 123-4567',
    avatarGradient: 'linear-gradient(135deg, #3B82F6 0%, #9333EA 100%)',
    users: 47,
    activeUsers: 42,
    activeRate: '89%',
    roles: 8,
    created: 'Jan 15, 2024',
    daysAgo: '41 days ago',
    monthlyCost: '$299.00',
    nextBilling: 'Mar 15, 2024',
    billingStatus: 'Paid',
    monthlyUsers: 3
  }

  const recentActivities = [
    { id: 1, title: 'New user added', details: 'john.doe@acme.com', time: '2 hours ago', icon: 'success' },
    { id: 2, title: 'Role updated', details: 'Manager role permissions', time: '1 day ago', icon: 'info' },
    { id: 3, title: 'Settings changed', details: 'MFA requirements updated', time: '3 days ago', icon: 'warning' }
  ]

  const getActivityIcon = (type) => {
    switch (type) {
      case 'success':
        return <div className="activity-icon success-icon">✓</div>
      case 'info':
        return <div className="activity-icon info-icon">ⓘ</div>
      case 'warning':
        return <div className="activity-icon warning-icon">!</div>
      default:
        return null
    }
  }

  return (
    <div className="tenant-details-page">
      <Sidebar isOpen={sidebarOpen} setIsOpen={setSidebarOpen} />
      
      <div className="tenant-details-main">
        {/* Header */}
        <div className="tenant-details-header">
          <div className="header-left">
            <h1 className="page-title">Tenant Details</h1>
            <div className="breadcrumb">
              <span className="breadcrumb-item">Home</span>
              <span className="breadcrumb-divider">/</span>
              <span className="breadcrumb-item">IAM</span>
              <span className="breadcrumb-divider">/</span>
              <span className="breadcrumb-item">Tenants</span>
              <span className="breadcrumb-divider">/</span>
              <span className="breadcrumb-item current">{tenantData.name}</span>
            </div>
          </div>
          <div className="header-actions">
            <button className="icon-btn">
              <FiDownload size={20} />
            </button>
            <button className="icon-btn notifications-btn">
              <FiAlertTriangle size={20} />
              <span className="notification-badge">3</span>
            </button>
            <button className="edit-tenant-btn">
              ✎ Edit Tenant
            </button>
          </div>
        </div>

        <div className="tenant-details-content">
          {/* Tenant Card */}
          <div className="tenant-card">
            <div className="tenant-avatar" style={{ background: tenantData.avatarGradient }}>
              {tenantData.initials}
            </div>
            <div className="tenant-info">
              <h2 className="tenant-name">{tenantData.name}</h2>
              <p className="tenant-id">ID: {tenantData.id}</p>
              <div className="tenant-meta">
                <span className="status-indicator active"></span>
                <span className="status-text">{tenantData.status}</span>
                <span className="plan-badge">{tenantData.subscription}</span>
              </div>
            </div>
            <div className="tenant-actions">
              <button className="action-btn export-btn">
                📥 Export
              </button>
              <button className="action-btn suspend-btn" onClick={() => setShowSuspendConfirmation(true)}>
                ⏸ Suspend
              </button>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-icon users-icon">👥</div>
              <p className="stat-label">Total Users</p>
              <p className="stat-value">{tenantData.users}</p>
              <p className="stat-change positive">+{tenantData.monthlyUsers} this month</p>
            </div>
            <div className="stat-card">
              <div className="stat-icon active-users-icon">✓</div>
              <p className="stat-label">Active Users</p>
              <p className="stat-value">{tenantData.activeUsers}</p>
              <p className="stat-change">{tenantData.activeRate} active rate</p>
            </div>
            <div className="stat-card">
              <div className="stat-icon roles-icon">⚙</div>
              <p className="stat-label">Roles</p>
              <p className="stat-value">{tenantData.roles}</p>
              <p className="stat-change">Custom roles</p>
            </div>
            <div className="stat-card">
              <div className="stat-icon created-icon">📅</div>
              <p className="stat-label">Created</p>
              <p className="stat-value created-date">{tenantData.created}</p>
              <p className="stat-change">{tenantData.daysAgo}</p>
            </div>
          </div>

          {/* Two Column Layout */}
          <div className="details-container">
            <div className="details-left">
              {/* Basic Information */}
              <div className="details-section">
                <h3 className="section-title">Basic Information</h3>
                <div className="form-row">
                  <div className="form-group">
                    <label className="form-label">Tenant Name</label>
                    <div className="form-input-static">{tenantData.name}</div>
                  </div>
                  <div className="form-group">
                    <label className="form-label">Domain</label>
                    <div className="form-input-static">{tenantData.domain}</div>
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label className="form-label">Subscription Plan</label>
                    <div className="form-input-static">{tenantData.subscription}</div>
                  </div>
                  <div className="form-group">
                    <label className="form-label">Status</label>
                    <div className="form-input-static">{tenantData.status}</div>
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label className="form-label">Contact Email</label>
                    <div className="form-input-static">{tenantData.email}</div>
                  </div>
                  <div className="form-group">
                    <label className="form-label">Phone</label>
                    <div className="form-input-static">{tenantData.phone}</div>
                  </div>
                </div>
              </div>

              {/* Security Settings */}
              <div className="details-section">
                <h3 className="section-title">Security Settings</h3>
                <div className="security-setting">
                  <div className="setting-content">
                    <h4 className="setting-title">Multi-Factor Authentication</h4>
                    <p className="setting-description">Require MFA for all users</p>
                  </div>
                  <div className="toggle enabled"></div>
                </div>
                <div className="security-setting">
                  <div className="setting-content">
                    <h4 className="setting-title">Session Timeout</h4>
                    <p className="setting-description">Auto logout after 30 minutes</p>
                  </div>
                  <span className="setting-value">30 min</span>
                </div>
                <div className="security-setting">
                  <div className="setting-content">
                    <h4 className="setting-title">Password Policy</h4>
                    <p className="setting-description">Strong password requirements</p>
                  </div>
                  <span className="setting-status enabled">Enabled</span>
                </div>
                <div className="security-setting">
                  <div className="setting-content">
                    <h4 className="setting-title">IP Restrictions</h4>
                    <p className="setting-description">Allow specific IP ranges only</p>
                  </div>
                  <div className="toggle disabled"></div>
                </div>
              </div>
            </div>

            <div className="details-right">
              {/* Quick Actions */}
              <div className="details-section">
                <h3 className="section-title">Quick Actions</h3>
                <button className="action-primary">
                  <FiPlus size={18} /> Add User
                </button>
                <button className="action-secondary">
                  <FiSettings size={18} /> Manage Roles
                </button>
                <button className="action-secondary">
                  <FiTrendingUp size={18} /> View Analytics
                </button>
                <button className="action-secondary">
                  <FiDownloadCloud size={18} /> Export Data
                </button>
              </div>

              {/* Recent Activity */}
              <div className="details-section">
                <h3 className="section-title">Recent Activity</h3>
                <div className="activity-list">
                  {recentActivities.map(activity => (
                    <div key={activity.id} className="activity-item">
                      {getActivityIcon(activity.icon)}
                      <div className="activity-content">
                        <p className="activity-title">{activity.title}</p>
                        <div className="activity-details">
                          <span className="activity-detail">{activity.details}</span>
                          <span className="activity-time">{activity.time}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <a href="#" className="view-all-activity">View All Activity</a>
              </div>

              {/* Billing */}
              <div className="details-section">
                <h3 className="section-title">Billing</h3>
                <div className="billing-row">
                  <span className="billing-label">Plan</span>
                  <span className="billing-value">{tenantData.subscription}</span>
                </div>
                <div className="billing-row">
                  <span className="billing-label">Monthly Cost</span>
                  <span className="billing-value">{tenantData.monthlyCost}</span>
                </div>
                <div className="billing-row">
                  <span className="billing-label">Next Billing</span>
                  <span className="billing-value">{tenantData.nextBilling}</span>
                </div>
                <div className="billing-row">
                  <span className="billing-label">Status</span>
                  <span className="billing-value paid">{tenantData.billingStatus}</span>
                </div>
                <button className="billing-details-btn">Billing Details</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Suspend Confirmation Modal */}
      {showSuspendConfirmation && (
        <div className="suspend-modal-overlay">
          <div className="suspend-modal-content">
            {/* Header */}
            <div className="suspend-header">
              <h2 className="suspend-page-title">Tenant Management</h2>
              <div className="suspend-header-actions">
                <button 
                  className="suspend-header-btn suspend-main-btn"
                  onClick={() => setShowSuspendConfirmation(false)}
                >
                  Suspend Tenant
                </button>
                <button className="suspend-header-btn suspend-bell">
                  <FiAlertTriangle size={16} />
                  <span className="suspend-notification-badge">3</span>
                </button>
              </div>
              <div className="suspend-breadcrumb">
                <span className="suspend-breadcrumb-item">Home</span>
                <span className="suspend-breadcrumb-divider">/</span>
                <span className="suspend-breadcrumb-item">IAM</span>
                <span className="suspend-breadcrumb-divider">/</span>
                <span className="suspend-breadcrumb-item">Tenants</span>
                <span className="suspend-breadcrumb-divider">/</span>
                <span className="suspend-breadcrumb-item current">{tenantData.name}</span>
              </div>
            </div>

            {/* Main Content */}
            <div className="suspend-main-content">
              {/* Warning Box */}
              <div className="suspend-warning-box">
                <div className="suspend-warning-icon">
                  <FiAlertTriangle size={20} />
                </div>
                <h3 className="suspend-warning-title">Suspend Tenant Access</h3>
                <p className="suspend-warning-description">
                  This action will immediately suspend all access for {tenantData.name} and its {tenantData.users} users. Suspended tenants cannot log in or access any services until reactivated.
                </p>
              </div>

              {/* Impact Box */}
              <div className="suspend-impact-box">
                <h4 className="suspend-impact-title">Impact of Suspension:</h4>
                <ul className="suspend-impact-list">
                  <li>All {tenantData.users} users will be immediately logged out</li>
                  <li>Active sessions will be terminated</li>
                  <li>API access will be revoked</li>
                  <li>Data remains intact but inaccessible</li>
                  <li>Billing continues during suspension</li>
                </ul>
              </div>

              {/* Action Buttons */}
              <div className="suspend-actions">
                <button 
                  className="suspend-confirm-btn"
                  onClick={() => {
                    setSuspensionSuccess(true)
                  }}
                >
                  Confirm Suspension
                </button>
                <button 
                  className="suspend-cancel-btn"
                  onClick={() => setShowSuspendConfirmation(false)}
                >
                  Cancel
                </button>
              </div>

              {/* Stats Cards */}
              <div className="suspend-stats-grid">
                <div className="suspend-stat-card">
                  <div className="suspend-stat-icon active-users">👥</div>
                  <p className="suspend-stat-value">47</p>

                  <p className="suspend-stat-label">Active Users</p>
                  <p className="suspend-stat-detail">Last login: 5 minutes ago</p>
                </div>
                <div className="suspend-stat-card">
                  <div className="suspend-stat-icon active-sessions">✓</div>
                  <p className="suspend-stat-value">23</p>
                  <p className="suspend-stat-label">Active Sessions</p>
                  <p className="suspend-stat-detail">Across all platforms</p>
                </div>
                <div className="suspend-stat-card">
                  <div className="suspend-stat-icon api-calls">⚙</div>
                  <p className="suspend-stat-value">156</p>
                  <p className="suspend-stat-label">API Calls Today</p>
                  <p className="suspend-stat-detail">Within rate limits</p>
                </div>
              </div>

              {/* Recent Activity */}
              <div className="suspend-activity-section">
                <h3 className="suspend-activity-title">Recent Activity</h3>
                <div className="suspend-activity-item">
                  <div className="suspend-activity-icon success-icon">✓</div>
                  <div className="suspend-activity-content">
                    <p className="suspend-activity-text"><span className="suspend-activity-bold">New user registration:</span> sarah.wilson@acme.com</p>
                    <p className="suspend-activity-time">2 minutes ago</p>
                  </div>
                </div>
                <div className="suspend-activity-item">
                  <div className="suspend-activity-icon info-icon">ⓘ</div>
                  <div className="suspend-activity-content">
                    <p className="suspend-activity-text"><span className="suspend-activity-bold">Bulk user login from</span> 192.168.1.0/24</p>
                    <p className="suspend-activity-time">15 minutes ago</p>
                  </div>
                </div>
                <div className="suspend-activity-item">
                  <div className="suspend-activity-icon warning-icon">!</div>
                  <div className="suspend-activity-content">
                    <p className="suspend-activity-text"><span className="suspend-activity-bold">Settings updated:</span> MFA enforcement enabled</p>
                    <p className="suspend-activity-time">1 hour ago</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Suspension Success Screen */}
      {suspensionSuccess && (
        <div className="suspend-modal-overlay">
          <div className="suspend-modal-content">
            {/* Header */}
            <div className="suspend-header">
              <h2 className="suspend-page-title">Tenant Management</h2>
              <div className="suspend-header-actions">
                <button 
                  className="suspend-header-btn suspend-main-btn reactivate-btn"
                  onClick={() => {
                    setSuspensionSuccess(false)
                    setShowSuspendConfirmation(false)
                  }}
                >
                  Reactivate Tenant
                </button>
                <button 
                  className="suspend-header-btn suspend-bell"
                  onClick={() => {
                    setSuspensionSuccess(false)
                    setShowSuspendConfirmation(false)
                  }}
                >
                  <FiAlertTriangle size={16} />
                  <span className="suspend-notification-badge">3</span>
                </button>
              </div>
              <div className="suspend-breadcrumb">
                <span className="suspend-breadcrumb-item">Home</span>
                <span className="suspend-breadcrumb-divider">/</span>
                <span className="suspend-breadcrumb-item">IAM</span>
                <span className="suspend-breadcrumb-divider">/</span>
                <span className="suspend-breadcrumb-item">Tenants</span>
                <span className="suspend-breadcrumb-divider">/</span>
                <span className="suspend-breadcrumb-item current">{tenantData.name}</span>
              </div>
            </div>

            {/* Main Content */}
            <div className="suspend-main-content">
              {/* Success Alert */}
              <div className="success-alert-box">
                <div className="success-alert-icon">✓</div>
                <h3 className="success-alert-title">Tenant Successfully Suspended</h3>
                <p className="success-alert-description">
                  {tenantData.name} has been suspended at <strong>2:47 PM</strong> on <strong>December 15, 2024</strong>. All user access has been revoked.
                </p>
              </div>

              {/* Actions Completed */}
              <div className="actions-completed-box">
                <h4 className="actions-completed-title">Actions Completed:</h4>
                <ul className="actions-completed-list">
                  <li>47 users logged out successfully</li>
                  <li>23 active sessions terminated</li>
                  <li>API access tokens revoked</li>
                  <li>Audit log entry created</li>
                </ul>
              </div>

              {/* Tenant Card */}
              <div className="tenant-card suspended-state">
                <div className="tenant-avatar suspended-avatar" style={{ background: 'linear-gradient(135deg, #9CA3AF 0%, #6B7280 100%)' }}>
                  {tenantData.initials}
                </div>
                <div className="tenant-info">
                  <h2 className="tenant-name">{tenantData.name}</h2>
                  <p className="tenant-id">Tenant ID: {tenantData.id} • Domain: {tenantData.domain}</p>
                  <div className="tenant-meta">
                    <span className="plan-badge">{tenantData.subscription}</span>
                    <span className="status-badge suspended-badge">Suspended</span>
                  </div>
                </div>
                <div className="tenant-users-info">
                  {tenantData.users} Users (Inactive)
                </div>
              </div>

              {/* Current Status Alert */}
              <div className="current-status-alert">
                <div className="current-status-icon">!</div>
                <h3 className="current-status-title">Tenant Currently Suspended</h3>
                <p className="current-status-description">
                  This tenant is currently suspended and all users are unable to access the system. Data remains intact and secure
                </p>
                <div className="current-status-details">
                  <h4 className="current-status-details-title">Current Status:</h4>
                  <ul className="current-status-list">
                    <li>All user access blocked</li>
                    <li>API endpoints disabled</li>
                    <li>Active sessions terminated</li>
                    <li>Data preserved and encrypted</li>
                    <li>Billing continues as normal</li>
                  </ul>
                </div>
                <div className="status-action-buttons">
                  <button className="reactivate-btn-large">Reactivate Tenant</button>
                  <button className="audit-log-btn" onClick={() => navigate(`/tenants/${id}/audit-log`)}>View Audit Log</button>
                </div>
              </div>

              {/* Stats Cards */}
              <div className="suspended-stats-grid">
                <div className="suspend-stat-card suspended-stat">
                  <div className="suspend-stat-icon suspended-users-icon">👥</div>
                  <p className="suspend-stat-value suspended-value">47</p>
                  <p className="suspend-stat-label">Suspended Users</p>
                  <p className="suspend-stat-detail">Access blocked since suspension</p>
                </div>
                <div className="suspend-stat-card suspended-stat">
                  <div className="suspend-stat-icon suspended-sessions-icon">✓</div>
                  <p className="suspend-stat-value suspended-value">0</p>
                  <p className="suspend-stat-label">Active Sessions</p>
                  <p className="suspend-stat-detail">All sessions terminated</p>
                </div>
                <div className="suspend-stat-card suspended-stat">
                  <div className="suspend-stat-icon suspended-api-icon">⚙</div>
                  <p className="suspend-stat-value suspended-value">0</p>
                  <p className="suspend-stat-label">API Calls Today</p>
                  <p className="suspend-stat-detail">Access revoked</p>
                </div>
              </div>

              {/* Recent Activity */}
              <div className="suspend-activity-section">
                <h3 className="suspend-activity-title">Recent Activity</h3>
                <div className="suspend-activity-item">
                  <div className="suspend-activity-icon error-icon">×</div>
                  <div className="suspend-activity-content">
                    <p className="suspend-activity-text"><span className="suspend-activity-bold">Tenant suspended by</span> Michael Chen</p>
                    <p className="suspend-activity-time">2 minutes ago</p>
                  </div>
                </div>
                <div className="suspend-activity-item">
                  <div className="suspend-activity-icon warning-icon">!</div>
                  <div className="suspend-activity-content">
                    <p className="suspend-activity-text"><span className="suspend-activity-bold">All active sessions terminated</span> (23 sessions)</p>
                    <p className="suspend-activity-time">2 minutes ago</p>
                  </div>
                </div>
                <div className="suspend-activity-item">
                  <div className="suspend-activity-icon info-icon-dark">⚙</div>
                  <div className="suspend-activity-content">
                    <p className="suspend-activity-text">API tokens revoked for security</p>
                    <p className="suspend-activity-time">2 minutes ago</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  )
}

export default TenantDetailsPage
