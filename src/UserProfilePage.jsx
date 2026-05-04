import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { FiBell, FiArrowLeft } from 'react-icons/fi'
import Sidebar from './Sidebar'
import './user-profile.css'

function UserProfilePage() {
  const navigate = useNavigate()
  const { id } = useParams()
  const [sidebarOpen, setSidebarOpen] = useState(false)

  const userData = {
    id: id || 'user-1',
    firstName: 'Sarah',
    lastName: 'Johnson',
    email: 'sarah.johnson@company.com',
    phone: '+1 (555) 123-4567',
    department: 'Marketing',
    employeeId: 'EMP-2024-1247',
    joinDate: 'January 15, 2023',
    lastLogin: 'February 21, 2024 14:32',
    avatar: 'https://placehold.co/80x80',
    status: 'Active',
    role: 'Marketing Manager'
  }

  return (
    <main className="dashboard-layout">
      <Sidebar sidebarOpen={sidebarOpen} />
      <div className={`sidebar-overlay ${sidebarOpen ? 'active' : ''}`} onClick={() => setSidebarOpen(false)} />
      
      <section className="dashboard-main user-profile-main">
        <div className="profile-page-header">
          <div className="header-top">
            <h1 className="page-title">User Profile</h1>
            <div className="header-actions">
              <button className="btn-notifications">
                <FiBell size={20} />
                <span className="notification-badge">3</span>
              </button>
              <button onClick={() => navigate(`/users/${id}/manage`)} className="btn-back-primary">
                <FiArrowLeft size={16} />
                Deactivate User
              </button>
            </div>
          </div>
        </div>

        <div className="profile-content">
          <div className="user-stats-card">
            <img src={userData.avatar} alt={userData.firstName} className="user-avatar" />
            <div className="user-header-info">
              <h2 className="user-name">{userData.firstName} {userData.lastName}</h2>
              <p className="user-email">{userData.email}</p>
              <div className="user-badges">
                <span className="badge active">Active</span>
                <span className="badge role">{userData.role}</span>
              </div>
            </div>
            <div className="user-stats">
              <div className="stat-item">
                <span className="stat-number">156</span>
                <span className="stat-label">Login Sessions</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">24</span>
                <span className="stat-label">Active Devices</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">12</span>
                <span className="stat-label">Permissions</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">98.5%</span>
                <span className="stat-label">Uptime</span>
              </div>
            </div>
          </div>

          <div className="profile-grid">
            <div className="profile-left">
              <div className="card-section">
                <h3 className="section-heading">User Details</h3>
                <div className="details-grid">
                  <div className="detail-field">
                    <label className="detail-label">First Name</label>
                    <div className="detail-value-box">{userData.firstName}</div>
                  </div>
                  <div className="detail-field">
                    <label className="detail-label">Last Name</label>
                    <div className="detail-value-box">{userData.lastName}</div>
                  </div>
                  <div className="detail-field">
                    <label className="detail-label">Email</label>
                    <div className="detail-value-box">{userData.email}</div>
                  </div>
                  <div className="detail-field">
                    <label className="detail-label">Phone</label>
                    <div className="detail-value-box">{userData.phone}</div>
                  </div>
                  <div className="detail-field">
                    <label className="detail-label">Department</label>
                    <div className="detail-value-box">{userData.department}</div>
                  </div>
                  <div className="detail-field">
                    <label className="detail-label">Employee ID</label>
                    <div className="detail-value-box">{userData.employeeId}</div>
                  </div>
                  <div className="detail-field">
                    <label className="detail-label">Join Date</label>
                    <div className="detail-value-box">{userData.joinDate}</div>
                  </div>
                  <div className="detail-field">
                    <label className="detail-label">Last Login</label>
                    <div className="detail-value-box">{userData.lastLogin}</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="profile-right">
              <div className="card-section">
                <h3 className="section-heading">Quick Actions</h3>
                <div className="actions-list">
                  <button className="action-button action-edit">
                    <span className="action-icon"></span>
                    Edit Profile
                  </button>
                  <button className="action-button action-reset">
                    <span className="action-icon"></span>
                    Reset Password
                  </button>
                  <button className="action-button action-permissions">
                    <span className="action-icon"></span>
                    Manage Permissions
                  </button>
                  <button className="action-button action-suspend">
                    <span className="action-icon"></span>
                    Suspend Account
                  </button>
                  <button className="action-button action-deactivate">
                    <span className="action-icon"></span>
                    Deactivate User
                  </button>
                </div>
              </div>

              <div className="card-section">
                <h3 className="section-heading">Security Status</h3>
                <div className="security-items">
                  <div className="security-item">
                    <span className="security-label">Two-Factor Auth</span>
                    <span className="badge-status enabled">Enabled</span>
                  </div>
                  <div className="security-item">
                    <span className="security-label">Password Strength</span>
                    <span className="badge-status strong">Strong</span>
                  </div>
                  <div className="security-item">
                    <span className="security-label">Risk Score</span>
                    <span className="badge-status low">Low</span>
                  </div>
                  <div className="security-item">
                    <span className="security-label">Compliance</span>
                    <span className="badge-status compliant">Compliant</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="activity-grid">
            <div className="card-section">
              <h3 className="section-heading">Recent Activity</h3>
              <div className="activity-items">
                <div className="activity-item">
                  <div className="activity-icon success"></div>
                  <div className="activity-content">
                    <h4 className="activity-title">Successful Login</h4>
                    <p className="activity-time">February 21, 2024 at 2:32 PM</p>
                  </div>
                </div>
                <div className="activity-item">
                  <div className="activity-icon info"></div>
                  <div className="activity-content">
                    <h4 className="activity-title">Profile Updated</h4>
                    <p className="activity-time">February 20, 2024 at 11:15 AM</p>
                  </div>
                </div>
                <div className="activity-item">
                  <div className="activity-icon warning"></div>
                  <div className="activity-content">
                    <h4 className="activity-title">Permission Changed</h4>
                    <p className="activity-time">February 19, 2024 at 3:45 PM</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="card-section">
              <h3 className="section-heading">Active Sessions</h3>
              <div className="sessions-list">
                <div className="session-item">
                  <div className="session-icon desktop"></div>
                  <div className="session-content">
                    <h4 className="session-title">Windows Desktop</h4>
                    <p className="session-details">Chrome  10.0.0.45</p>
                  </div>
                  <span className="session-action revoke">Revoke</span>
                </div>
                <div className="session-item">
                  <div className="session-icon mobile"></div>
                  <div className="session-content">
                    <h4 className="session-title">iPhone 13 Pro</h4>
                    <p className="session-details">Safari  192.168.1.105</p>
                  </div>
                  <span className="session-action revoke">Revoke</span>
                </div>
                <div className="session-item">
                  <div className="session-icon laptop"></div>
                  <div className="session-content">
                    <h4 className="session-title">MacBook Pro</h4>
                    <p className="session-details">Firefox  10.0.0.78</p>
                  </div>
                  <span className="session-action revoke">Revoke</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default UserProfilePage
