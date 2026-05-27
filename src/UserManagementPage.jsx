import { useMemo, useState } from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import { FiBell, FiCheck, FiEdit2, FiLock, FiPlus, FiPower, FiRotateCcw, FiSlash } from 'react-icons/fi'
import Sidebar from './Sidebar'
import './user-management.css'

function UserManagementPage() {
  const navigate = useNavigate()
  const location = useLocation()
  const { id } = useParams()
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [activeTab, setActiveTab] = useState('account-details')
  const [isDeactivated, setIsDeactivated] = useState(location.state?.isDeactivated ?? location.state?.showDeactivationSuccess ?? true)
  const [showSuccessModal, setShowSuccessModal] = useState(location.state?.showDeactivationSuccess ?? true)

  const userData = {
    id: id || '1',
    fullName: 'Sarah Johnson',
    email: 'sarah.johnson@company.com',
    employeeIdMain: 'EMP-2024-',
    employeeIdSuffix: '0156',
    department: 'Marketing',
    tenant: 'Acme Corp',
    userId: 'usr_2024_0156',
    accountCreated: 'January 15, 2024',
    lastLogin: 'March 14, 2024 at 4:45 PM',
    phone: '+1 (555) 123-4567',
    jobTitle: 'Marketing Manager',
    avatar: 'https://placehold.co/77x77',
    deactivatedOn: 'February 21, 2026 at 07:25 PM',
    deactivationReason: 'Employee departure',
    sessionsTerminated: '3 active sessions',
  }

  const terminatedSessions = [
    { label: 'Web Browser (Chrome, Windows)', status: 'Terminated' },
    { label: 'Mobile App (iOS 17.2)', status: 'Terminated' },
    { label: 'Web Browser (Safari, MacOS)', status: 'Terminated' },
  ]

  const roles = useMemo(
    () => [
      {
        id: 1,
        name: 'Marketing Manager',
        description: 'Standard access level',
        icon: <FiLock size={14} />,
      },
      {
        id: 2,
        name: 'Campaign Editor',
        description: 'Marketing tools access',
        icon: <FiEdit2 size={14} />,
      },
    ],
    []
  )

  const closeSuccessModal = () => {
    setIsDeactivated(true)
    setShowSuccessModal(false)
    navigate(`/users/${id}`, {
      state: {
        deactivationSuccess: true,
      },
    })
  }

  return (
    <main className="dashboard-layout umg-page">
      <Sidebar sidebarOpen={sidebarOpen} />
      <div className={`sidebar-overlay ${sidebarOpen ? 'active' : ''}`} onClick={() => setSidebarOpen(false)} />

      <section className="dashboard-main umg-main">
        <header className="umg-header">
          <div className="umg-header-copy">
            <h1 className="umg-title">User Management</h1>
            <div className="umg-trail" aria-label="User management path">
              <span className="umg-trail-link">Home</span>
              <span className="umg-trail-sep">/</span>
              <span className="umg-trail-link">Users</span>
              <span className="umg-trail-sep">/</span>
              <span className="umg-trail-current">Sarah Johnson</span>
            </div>
          </div>

          <div className="umg-header-actions">
            <button type="button" className="umg-icon-btn" aria-label="Notifications">
              <FiBell size={15} />
              <span className="notification-badge">3</span>
            </button>
            <button type="button" className="umg-new-btn" onClick={() => navigate('/users/create')}>
              <FiPlus size={14} />
              New User
            </button>
          </div>
        </header>

        <div className="umg-content">
          <section className="umg-summary-card">
            <div className="umg-summary-left">
              <div className="umg-avatar-wrap">
                <img src={userData.avatar} alt={userData.fullName} className="umg-avatar" />
                <span className="umg-avatar-badge">
                  <FiSlash size={12} />
                </span>
              </div>

              <div className="umg-summary-copy">
                <div className="umg-name-row">
                  <h2 className="umg-name">{userData.fullName}</h2>
                  <span className="umg-status-pill">
                    <FiSlash size={10} />
                    Deactivated
                  </span>
                </div>
                <p className="umg-email">{userData.email}</p>

                <div className="umg-meta-row umg-meta-row-first">
                  <span className="umg-meta-label">Employee ID:</span>
                  <span className="umg-meta-value">{userData.employeeIdMain}</span>
                  <span className="umg-meta-label">Department:</span>
                  <span className="umg-meta-value">{userData.department}</span>
                  <span className="umg-meta-label">Tenant:</span>
                  <span className="umg-meta-value">{userData.tenant}</span>
                </div>
                <div className="umg-meta-row umg-meta-row-second">
                  <span className="umg-meta-value">{userData.employeeIdSuffix}</span>
                </div>
              </div>
            </div>

            <div className="umg-summary-actions">
              <button type="button" className="umg-reactivate-btn" onClick={() => setIsDeactivated(false)}>
                <FiRotateCcw size={14} />
                Reactivate User
              </button>
              <button type="button" className="umg-edit-btn" onClick={() => navigate(`/users/${id}/edit`)}>
                <FiEdit2 size={14} />
                Edit Profile
              </button>
            </div>
          </section>

          <section className="umg-card">
            <div className="umg-tabs">
              <button
                type="button"
                className={`umg-tab ${activeTab === 'account-details' ? 'active' : ''}`}
                onClick={() => setActiveTab('account-details')}
              >
                Account Details
              </button>
              <button
                type="button"
                className={`umg-tab ${activeTab === 'roles-permissions' ? 'active' : ''}`}
                onClick={() => setActiveTab('roles-permissions')}
              >
                Roles &amp; Permissions
              </button>
              <button
                type="button"
                className={`umg-tab ${activeTab === 'activity-history' ? 'active' : ''}`}
                onClick={() => setActiveTab('activity-history')}
              >
                Activity History
              </button>
              <button
                type="button"
                className={`umg-tab ${activeTab === 'security-settings' ? 'active' : ''}`}
                onClick={() => setActiveTab('security-settings')}
              >
                Security Settings
              </button>
            </div>

            {activeTab === 'account-details' ? (
              <div className="umg-card-body">
                <div className="umg-grid">
                  <section>
                    <h3 className="umg-section-title">Personal Information</h3>
                    <div className="umg-fields">
                      <div className="umg-field">
                        <span className="umg-label">Full Name</span>
                        <div className="umg-readonly-field">{userData.fullName}</div>
                      </div>
                      <div className="umg-field">
                        <span className="umg-label">Email Address</span>
                        <div className="umg-readonly-field">{userData.email}</div>
                      </div>
                      <div className="umg-field">
                        <span className="umg-label">Phone Number</span>
                        <div className="umg-readonly-field">{userData.phone}</div>
                      </div>
                      <div className="umg-field">
                        <span className="umg-label">Job Title</span>
                        <div className="umg-readonly-field">{userData.jobTitle}</div>
                      </div>
                    </div>
                  </section>

                  <section>
                    <h3 className="umg-section-title">Account Information</h3>
                    <div className="umg-fields">
                      <div className="umg-field">
                        <span className="umg-label">User ID</span>
                        <div className="umg-readonly-field">{userData.userId}</div>
                      </div>
                      <div className="umg-field">
                        <span className="umg-label">Account Created</span>
                        <div className="umg-readonly-field">{userData.accountCreated}</div>
                      </div>
                      <div className="umg-field">
                        <span className="umg-label">Last Login</span>
                        <div className="umg-readonly-field">{userData.lastLogin}</div>
                      </div>
                      <div className="umg-field">
                        <span className="umg-label">Account Status</span>
                        <div className="umg-status-box">
                          <FiSlash size={10} />
                          Deactivated
                        </div>
                      </div>
                    </div>
                  </section>
                </div>

                <section className="umg-roles-section">
                  <h3 className="umg-section-title">Assigned Roles (Suspended)</h3>
                  <div className="umg-roles-grid">
                    {roles.map((role) => (
                      <div key={role.id} className="umg-role-card">
                        <div className="umg-role-icon">{role.icon}</div>
                        <div className="umg-role-copy">
                          <strong>{role.name}</strong>
                          <span>{role.description}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>
              </div>
            ) : (
              <div className="umg-placeholder">This section is not part of the provided screen.</div>
            )}
          </section>
        </div>

        {showSuccessModal ? (
          <div className="umg-modal-overlay">
            <div className="umg-success-modal" role="dialog" aria-modal="true" aria-label="User deactivated successfully">
              <div className="umg-success-icon">
                <FiCheck size={22} />
              </div>

              <h2 className="umg-success-title">User Deactivated Successfully</h2>
              <p className="umg-success-copy">
                Sarah Johnson&apos;s account has been deactivated. All active
                <br />
                sessions have been terminated and access permissions have
                <br />
                been revoked.
              </p>

              <div className="umg-success-details">
                <div className="umg-success-row">
                  <span className="umg-success-label">Deactivated on:</span>
                  <span className="umg-success-value">{userData.deactivatedOn}</span>
                </div>
                <div className="umg-success-row">
                  <span className="umg-success-label">Reason:</span>
                  <span className="umg-success-value">{userData.deactivationReason}</span>
                </div>
                <div className="umg-success-row">
                  <span className="umg-success-label">Sessions terminated:</span>
                  <span className="umg-success-value red">{userData.sessionsTerminated}</span>
                </div>
              </div>

              <div className="umg-terminated-box">
                <div className="umg-terminated-icon-wrap">
                  <FiPower size={14} />
                </div>
                <div className="umg-terminated-copy">
                  <strong>Active Sessions Terminated</strong>
                  {terminatedSessions.map((session) => (
                    <div key={session.label} className="umg-terminated-row">
                      <span>{session.label}</span>
                      <span className="status">{session.status}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="umg-audit-box">
                <FiCheck size={13} />
                <span>An audit log entry has been created for this action.</span>
              </div>

              <button type="button" className="umg-continue-btn" onClick={closeSuccessModal}>
                Continue
              </button>
            </div>
          </div>
        ) : null}
      </section>
    </main>
  )
}

export default UserManagementPage