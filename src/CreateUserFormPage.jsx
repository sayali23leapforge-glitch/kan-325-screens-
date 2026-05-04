import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { FiArrowLeft, FiUpload, FiX, FiMail, FiPhone } from 'react-icons/fi'
import Sidebar from './Sidebar'
import './create-user-form.css'
import './role-assignment-styles.css'

function CreateUserFormPage() {
  const navigate = useNavigate()
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [currentStep, setCurrentStep] = useState(1)
  const [profileVisibility, setProfileVisibility] = useState('public')
  const [avatarPreview, setAvatarPreview] = useState(null)
  const [selectedRole, setSelectedRole] = useState('Admin')
  const [selectedPermissions, setSelectedPermissions] = useState(['Content Manager'])
  const [selectedProducts, setSelectedProducts] = useState({
    analyticsPro: true,
    crmSuite: false,
    eCommerce: false,
    projectHub: false,
    financePro: false,
    learningHub: false
  })
  const [selectedAccessLevel, setSelectedAccessLevel] = useState('full')
  const [activationMethod, setActivationMethod] = useState('email')
  const [emailConfig, setEmailConfig] = useState({
    includeWelcome: true,
    includeQuickStart: false,
    ccManager: false
  })
  const [activationLinkExpiry, setActivationLinkExpiry] = useState('48 hours')
  const [securityRequirements, setSecurityRequirements] = useState({
    passwordChange: true,
    mfa: true,
    securityAlerts: false,
    termsAcceptance: true
  })
  const [notifications, setNotifications] = useState({
    notifyAdmins: true,
    sendConfirmation: true,
    remindIncomplete: false
  })

  const [formData, setFormData] = useState({
    displayName: '',
    bioDescription: '',
    timeZone: 'UTC (GMT+0:00)',
    language: 'English (US)',
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    department: 'Select department',
    jobTitle: '',
    employeeId: ''
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleAvatarUpload = (e) => {
    const file = e.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = (event) => {
        setAvatarPreview(event.target?.result)
      }
      reader.readAsDataURL(file)
    }
  }

  const handleRemovePhoto = () => {
    setAvatarPreview(null)
  }

  const handleContinue = () => {
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1)
    }
  }

  const handleSaveDraft = () => {
    console.log('Saving draft:', formData)
  }

  const handleBackToUsers = () => {
    navigate('/users')
  }

  return (
    <main className="create-user-form-layout">
      <Sidebar sidebarOpen={sidebarOpen} />
      <div className={`sidebar-overlay ${sidebarOpen ? 'active' : ''}`} onClick={() => setSidebarOpen(false)} />
      
      {/* Header */}
      <div className="create-user-form-header">
        <div className="header-left">
          <h1 className="header-title">Create New User</h1>
          <div className="breadcrumb-navigation">
            <span className="breadcrumb-link">Home</span>
            <span className="breadcrumb-arrow">›</span>
            <span className="breadcrumb-link">IAM</span>
            <span className="breadcrumb-arrow">›</span>
            <span className="breadcrumb-link">Users</span>
            <span className="breadcrumb-arrow">›</span>
            <span className="breadcrumb-current">Create</span>
          </div>
        </div>
        <div className="header-right">
          <button className="notification-button">
            <FiMail size={18} />
            <span className="notification-badge">3</span>
          </button>
          <button className="back-to-users-button" onClick={handleBackToUsers}>
            <FiArrowLeft size={16} />
            <span>Back to Users</span>
          </button>
        </div>
      </div>

      {/* Step Indicator */}
      <div className="step-indicator">
        <div className={`step ${currentStep >= 1 ? 'active' : ''} ${currentStep > 1 ? 'completed' : ''}`}>
          <div className="step-icon">{currentStep > 1 ? '✓' : '1'}</div>
          <div className="step-label">Basic Info</div>
          <div className="step-line"></div>
        </div>
        <div className={`step ${currentStep >= 2 ? 'active' : ''} ${currentStep > 2 ? 'completed' : ''}`}>
          <div className="step-icon">{currentStep > 2 ? '✓' : '2'}</div>
          <div className="step-label">Assign Role</div>
          <div className="step-line"></div>
        </div>
        <div className={`step ${currentStep >= 3 ? 'active' : ''} ${currentStep > 3 ? 'completed' : ''}`}>
          <div className="step-icon">{currentStep > 3 ? '✓' : '3'}</div>
          <div className="step-label">Product Access</div>
          <div className="step-line"></div>
        </div>
        <div className={`step ${currentStep >= 4 ? 'active' : ''}`}>
          <div className="step-icon">{currentStep > 4 ? '✓' : '4'}</div>
          <div className="step-label">Activate</div>
        </div>
      </div>

      {/* Form Container */}
      <div className="form-container">
        {/* STEP 1 */}
        {currentStep === 1 && (
          <>
            {/* Profile Section */}
            <div className="form-section">
              <div className="section-header">
                <div className="section-icon-wrapper" style={{ background: '#E0E7FF' }}>
                  <span style={{ fontSize: '32px' }}>👤</span>
                </div>
                <div className="section-title-group">
                  <h2 className="section-title">Profile Picture & Display</h2>
                  <p className="section-description">Upload profile photo and set display name</p>
                </div>
              </div>

              <div className="profile-upload-area">
                <div className="avatar-preview">
                  <div className="avatar-placeholder">
                    {avatarPreview ? (
                      <img src={avatarPreview} alt="Avatar" className="avatar-image" />
                    ) : (
                      <svg width="56" height="56" viewBox="0 0 56 56" fill="none" className="placeholder-icon-svg">
                        <circle cx="28" cy="18" r="10" fill="#9CA3AF"/>
                        <path d="M14 42C14 35.3726 20.3726 30 28 30C35.6274 30 42 35.3726 42 42" stroke="#9CA3AF" strokeWidth="3" strokeLinecap="round"/>
                      </svg>
                    )}
                  </div>
                  <div className="upload-buttons">
                    <label className="btn-upload">
                      <FiUpload size={16} />
                      <span>Upload Photo</span>
                      <input type="file" accept="image/*" onChange={handleAvatarUpload} style={{ display: 'none' }} />
                    </label>
                    {avatarPreview && (
                      <button className="btn-remove" onClick={handleRemovePhoto}>
                        <FiX size={16} />
                        Remove Photo
                      </button>
                    )}
                  </div>
                  <p className="upload-hint">JPG, PNG, GIF up to 5MB</p>
                </div>

                <div className="form-fields-right">
                  <div className="form-group">
                    <label className="form-label">Display Name</label>
                    <input type="text" name="displayName" value={formData.displayName} onChange={handleInputChange} className="form-input" placeholder="Full name as shown in the system" />
                    <p className="form-hint">This will be shown in the organization directory</p>
                  </div>

                  <div className="form-group">
                    <label className="form-label">Bio/Description</label>
                    <textarea name="bioDescription" value={formData.bioDescription} onChange={handleInputChange} className="form-textarea" placeholder="Short bio or description (optional)" />
                  </div>

                  <div className="form-row form-row-two-cols">
                    <div className="form-group">
                      <label className="form-label">Time Zone</label>
                      <select name="timeZone" value={formData.timeZone} onChange={handleInputChange} className="form-select">
                        <option>UTC (GMT+0:00)</option>
                        <option>EST (GMT-5:00)</option>
                        <option>PST (GMT-8:00)</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <label className="form-label">Language</label>
                      <select name="language" value={formData.language} onChange={handleInputChange} className="form-select">
                        <option>English (US)</option>
                        <option>Spanish (ES)</option>
                        <option>French (FR)</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label className="form-label">Profile Visibility</label>
                  <div className="radio-group">
                    <label className="radio-option">
                      <input type="radio" name="profileVisibility" value="public" checked={profileVisibility === 'public'} onChange={(e) => setProfileVisibility(e.target.value)} />
                      <span className="radio-label">Public</span>
                      <span className="radio-description">Profile visible to all users</span>
                    </label>
                    <label className="radio-option">
                      <input type="radio" name="profileVisibility" value="team" checked={profileVisibility === 'team'} onChange={(e) => setProfileVisibility(e.target.value)} />
                      <span className="radio-label">Team Only</span>
                      <span className="radio-description">Profile visible only to team members</span>
                    </label>
                    <label className="radio-option">
                      <input type="radio" name="profileVisibility" value="private" checked={profileVisibility === 'private'} onChange={(e) => setProfileVisibility(e.target.value)} />
                      <span className="radio-label">Private</span>
                      <span className="radio-description">Profile visible only to administrators</span>
                    </label>
                  </div>
                </div>
              </div>
            </div>

            {/* Basic Information Section */}
            <div className="form-section">
              <div className="section-header">
                <div className="section-icon-wrapper" style={{ background: '#DBEAFE' }}>
                  <span style={{ fontSize: '32px' }}>ℹ️</span>
                </div>
                <div className="section-title-group">
                  <h2 className="section-title">Basic Information</h2>
                  <p className="section-description">Enter the user's personal and contact details</p>
                </div>
              </div>

              <div className="form-row form-row-two-cols">
                <div className="form-group">
                  <label className="form-label">First Name <span className="required-star">*</span></label>
                  <input type="text" name="firstName" value={formData.firstName} onChange={handleInputChange} className="form-input" placeholder="Enter first name" />
                </div>
                <div className="form-group">
                  <label className="form-label">Last Name <span className="required-star">*</span></label>
                  <input type="text" name="lastName" value={formData.lastName} onChange={handleInputChange} className="form-input" placeholder="Enter last name" />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label className="form-label">Email Address <span className="required-star">*</span></label>
                  <div className="input-with-icon">
                    <span className="input-icon">✉️</span>
                    <input type="email" name="email" value={formData.email} onChange={handleInputChange} className="form-input" placeholder="user@company.com" />
                  </div>
                </div>
              </div>

              <div className="form-row form-row-two-cols">
                <div className="form-group">
                  <label className="form-label">Phone Number</label>
                  <input type="tel" name="phoneNumber" value={formData.phoneNumber} onChange={handleInputChange} className="form-input" placeholder="+1 (555) 000-0000" />
                </div>
                <div className="form-group">
                  <label className="form-label">Department</label>
                  <select name="department" value={formData.department} onChange={handleInputChange} className="form-select">
                    <option>Select department</option>
                    <option>Engineering</option>
                    <option>Design</option>
                    <option>Product</option>
                  </select>
                </div>
              </div>

              <div className="form-row form-row-two-cols">
                <div className="form-group">
                  <label className="form-label">Job Title</label>
                  <input type="text" name="jobTitle" value={formData.jobTitle} onChange={handleInputChange} className="form-input" placeholder="e.g. Software Engineer" />
                </div>
                <div className="form-group">
                  <label className="form-label">Employee ID</label>
                  <input type="text" name="employeeId" value={formData.employeeId} onChange={handleInputChange} className="form-input" placeholder="e.g. EMP-12345" />
                </div>
              </div>
            </div>

            {/* Tenant & Role Section */}
            <div className="form-section">
              <div className="section-header">
                <div className="section-icon-wrapper" style={{ background: '#F3E8FF' }}>
                  <span style={{ fontSize: '32px' }}>👥</span>
                </div>
                <div className="section-title-group">
                  <h2 className="section-title">Tenant & Role Assignment</h2>
                  <p className="section-description">Assign tenant and define user role</p>
                </div>
              </div>

              <div className="form-row form-row-two-cols">
                <div className="form-group">
                  <label className="form-label">Tenant <span className="required-star">*</span></label>
                  <select className="form-select">
                    <option>Select tenant</option>
                    <option>Acme Corp</option>
                    <option>Tech Inc</option>
                  </select>
                </div>
                <div className="form-group">
                  <label className="form-label">Primary Role <span className="required-star">*</span></label>
                  <select className="form-select">
                    <option>Select role</option>
                    <option>Admin</option>
                    <option>Manager</option>
                    <option>User</option>
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">Additional Roles</label>
                <div className="checkbox-group">
                  <label className="checkbox-option">
                    <input type="checkbox" />
                    <span className="checkbox-text">Content Manager</span>
                  </label>
                  <label className="checkbox-option">
                    <input type="checkbox" />
                    <span className="checkbox-text">Report Viewer</span>
                  </label>
                  <label className="checkbox-option">
                    <input type="checkbox" />
                    <span className="checkbox-text">Data Analyst</span>
                  </label>
                  <label className="checkbox-option">
                    <input type="checkbox" />
                    <span className="checkbox-text">API Access</span>
                  </label>
                </div>
              </div>
            </div>

            {/* Access & Security Section */}
            <div className="form-section">
              <div className="section-header">
                <div className="section-icon-wrapper" style={{ background: '#DCFCE7' }}>
                  <span style={{ fontSize: '32px' }}>🔒</span>
                </div>
                <div className="section-title-group">
                  <h2 className="section-title">Access & Security</h2>
                  <p className="section-description">Configure account settings and security options</p>
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">Account Status <span className="required-star">*</span></label>
                <div className="account-status-group">
                  <label className="status-option active">
                    <input type="radio" name="accountStatus" value="active" defaultChecked />
                    <span className="status-label">Active</span>
                    <span className="status-description">User can login immediately</span>
                  </label>
                  <label className="status-option">
                    <input type="radio" name="accountStatus" value="pending" />
                    <span className="status-label">Pending</span>
                    <span className="status-description">Awaiting verification</span>
                  </label>
                  <label className="status-option">
                    <input type="radio" name="accountStatus" value="inactive" />
                    <span className="status-label">Inactive</span>
                    <span className="status-description">Account disabled</span>
                  </label>
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">Temporary Password</label>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: '12px', alignItems: 'end' }}>
                  <input type="text" className="form-input" value="Auto-generated" disabled style={{ background: '#F9FAFB' }} />
                  <button className="btn-generate">Generate</button>
                </div>
                <p className="form-hint">User will be prompted to change on first login</p>
              </div>

              <div className="form-group">
                <label className="form-label">Session Timeout (minutes)</label>
                <select className="form-select">
                  <option>15 minutes</option>
                  <option>30 minutes</option>
                  <option>60 minutes</option>
                  <option>120 minutes</option>
                </select>
              </div>

              <div className="form-group">
                <label className="checkbox-option-large">
                  <input type="checkbox" defaultChecked />
                  <div style={{ flex: 1 }}>
                    <span className="checkbox-label-large">Send Welcome Email</span>
                    <span className="checkbox-description">User will receive login credentials</span>
                  </div>
                </label>
              </div>

              <div className="form-group">
                <label className="checkbox-option-large">
                  <input type="checkbox" />
                  <div style={{ flex: 1 }}>
                    <span className="checkbox-label-large">Require Two-Factor Authentication</span>
                    <span className="checkbox-description">Enhanced security with 2FA verification</span>
                  </div>
                </label>
              </div>
            </div>

            {/* Additional Notes Section */}
            <div className="form-section">
              <div className="section-header">
                <div className="section-icon-wrapper" style={{ background: '#F3F4F6' }}>
                  <span style={{ fontSize: '32px' }}>📝</span>
                </div>
                <div className="section-title-group">
                  <h2 className="section-title">Additional Notes</h2>
                </div>
              </div>
            </div>
          </>
        )}

        {/* STEP 2 */}
        {currentStep === 2 && (
          <>
            <div className="form-section">
              <div className="section-header">
                <div className="section-icon-wrapper" style={{ background: '#F3E8FF' }}>
                  <span style={{ fontSize: '24px' }}>👥</span>
                </div>
                <div className="section-title-group">
                  <h2 className="section-title">Role Assignment</h2>
                  <p className="section-description">Define user roles and permissions for tenant access</p>
                </div>
              </div>

              <div className="form-row form-row-two-cols">
                <div className="form-group">
                  <label className="form-label">Primary Tenant <span className="required-star">*</span></label>
                  <div className="form-input-field">
                    <div className="input-value">Acme Corp</div>
                  </div>
                </div>
                <div className="form-group">
                  <label className="form-label">Primary Role <span className="required-star">*</span></label>
                  <div className="form-input-field">
                    <div className="input-value">{selectedRole}</div>
                  </div>
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">Available Roles</label>
                <div className="roles-container">
                  <div className={`role-card ${selectedRole === 'Admin' ? 'selected' : ''}`} onClick={() => setSelectedRole('Admin')}>
                    <div className="role-card-header">
                      <div className="role-icon admin-icon">✓</div>
                      <h3 className="role-name">Admin</h3>
                      <input type="checkbox" className="role-checkbox" checked={selectedRole === 'Admin'} onChange={() => setSelectedRole('Admin')} />
                    </div>
                    <p className="role-description">Full system access with management capabilities</p>
                    <div className="role-permissions">
                      <div className="permission-item checked"><span className="permission-check">✓</span><span>User Management</span></div>
                      <div className="permission-item checked"><span className="permission-check">✓</span><span>Role Assignment</span></div>
                      <div className="permission-item checked"><span className="permission-check">✓</span><span>System Configuration</span></div>
                    </div>
                  </div>

                  <div className={`role-card ${selectedRole === 'Manager' ? 'selected' : ''}`} onClick={() => setSelectedRole('Manager')}>
                    <div className="role-card-header">
                      <div className="role-icon manager-icon">👔</div>
                      <h3 className="role-name">Manager</h3>
                      <input type="checkbox" className="role-checkbox" checked={selectedRole === 'Manager'} onChange={() => setSelectedRole('Manager')} />
                    </div>
                    <p className="role-description">Team management with limited admin rights</p>
                    <div className="role-permissions">
                      <div className="permission-item checked"><span className="permission-check">✓</span><span>Team Management</span></div>
                      <div className="permission-item checked"><span className="permission-check">✓</span><span>Report Access</span></div>
                      <div className="permission-item disabled"><span className="permission-check disabled">✕</span><span>System Settings</span></div>
                    </div>
                  </div>

                  <div className={`role-card ${selectedRole === 'User' ? 'selected' : ''}`} onClick={() => setSelectedRole('User')}>
                    <div className="role-card-header">
                      <div className="role-icon user-icon">👤</div>
                      <h3 className="role-name">User</h3>
                      <input type="checkbox" className="role-checkbox" checked={selectedRole === 'User'} onChange={() => setSelectedRole('User')} />
                    </div>
                    <p className="role-description">Standard access with basic permissions</p>
                    <div className="role-permissions">
                      <div className="permission-item checked"><span className="permission-check">✓</span><span>Profile Management</span></div>
                      <div className="permission-item checked"><span className="permission-check">✓</span><span>Basic Features</span></div>
                      <div className="permission-item disabled"><span className="permission-check disabled">✕</span><span>Admin Functions</span></div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">Additional Permissions</label>
                <div className="permissions-grid">
                  <label className={`permission-box ${selectedPermissions.includes('Content Manager') ? 'selected' : ''}`}>
                    <input type="checkbox" checked={selectedPermissions.includes('Content Manager')} onChange={(e) => e.target.checked ? setSelectedPermissions([...selectedPermissions, 'Content Manager']) : setSelectedPermissions(selectedPermissions.filter(p => p !== 'Content Manager'))} />
                    <h4 className="permission-box-title">Content Manager</h4>
                    <p className="permission-box-description">Create and edit content</p>
                  </label>
                  <label className="permission-box">
                    <input type="checkbox" />
                    <h4 className="permission-box-title">Report Viewer</h4>
                    <p className="permission-box-description">Access analytics and reports</p>
                  </label>
                  <label className="permission-box">
                    <input type="checkbox" />
                    <h4 className="permission-box-title">Data Analyst</h4>
                    <p className="permission-box-description">Advanced data analysis tools</p>
                  </label>
                  <label className="permission-box">
                    <input type="checkbox" />
                    <h4 className="permission-box-title">API Access</h4>
                    <p className="permission-box-description">Programmatic system access</p>
                  </label>
                  <label className="permission-box">
                    <input type="checkbox" />
                    <h4 className="permission-box-title">Audit Viewer</h4>
                    <p className="permission-box-description">View system audit logs</p>
                  </label>
                  <label className="permission-box">
                    <input type="checkbox" />
                    <h4 className="permission-box-title">Billing Access</h4>
                    <p className="permission-box-description">View billing information</p>
                  </label>
                </div>
              </div>

              <div className="role-notice">
                <div className="notice-icon">⚠️</div>
                <div className="notice-content">
                  <h4 className="notice-title">Role Assignment Notice</h4>
                  <p className="notice-text">The selected role will determine the user's access level. Additional permissions can be granted individually.</p>
                </div>
              </div>
            </div>

            <div className="form-section">
              <div className="section-header">
                <div className="section-icon-wrapper" style={{ background: '#E0E7FF' }}>
                  <span style={{ fontSize: '24px' }}>🏢</span>
                </div>
                <div className="section-title-group">
                  <h2 className="section-title">Multi-Tenant Access</h2>
                  <p className="section-description">Grant access to additional tenants with specific roles</p>
                </div>
              </div>

              <div className="add-tenant-box">
                <div className="add-tenant-icon">+</div>
                <div className="add-tenant-text">Add additional tenant access</div>
                <button className="btn-add-tenant">+ Add Tenant</button>
              </div>
            </div>
          </>
        )}

        {/* STEP 3 - PRODUCT ACCESS */}
        {currentStep === 3 && (
          <>
            <div className="form-section">
              <div className="section-header">
                <div className="section-icon-wrapper" style={{ background: '#DBEAFE' }}>
                  <span style={{ fontSize: '32px' }}>📦</span>
                </div>
                <div className="section-title-group">
                  <h2 className="section-title">Product Access</h2>
                  <p className="section-description">Configure access to specific products and applications</p>
                </div>
              </div>

              <div className="products-grid">
                {[
                  { id: 'analyticsPro', name: 'Analytics Pro', category: 'Business Intelligence', color: '#3B82F6', darkColor: '#2563EB', features: ['Full Dashboard Access', 'Custom Reports', 'Data Export'] },
                  { id: 'crmSuite', name: 'CRM Suite', category: 'Customer Management', color: '#A855F7', darkColor: '#9333EA', features: ['Contact Management', 'Sales Pipeline', 'Email Integration'] },
                  { id: 'eCommerce', name: 'E-Commerce', category: 'Online Store', color: '#22C55E', darkColor: '#16A34A', features: ['Product Catalog', 'Order Management', 'Payment Gateway'] },
                  { id: 'projectHub', name: 'Project Hub', category: 'Task Management', color: '#F97316', darkColor: '#EA580C', features: ['Task Tracking', 'Team Collaboration', 'Time Tracking'] },
                  { id: 'financePro', name: 'Finance Pro', category: 'Accounting', color: '#EF4444', darkColor: '#DC2626', features: ['Invoicing', 'Expense Tracking', 'Financial Reports'] },
                  { id: 'learningHub', name: 'Learning Hub', category: 'Training Platform', color: '#6366F1', darkColor: '#4F46E5', features: ['Course Management', 'Progress Tracking', 'Certifications'] }
                ].map((product) => (
                  <div 
                    key={product.id}
                    className={`product-card ${selectedProducts[product.id] ? 'selected' : ''}`}
                    onClick={() => setSelectedProducts({...selectedProducts, [product.id]: !selectedProducts[product.id]})}
                  >
                    <div className="product-header">
                      <div className="product-icon" style={{ background: `linear-gradient(135deg, ${product.color} 0%, ${product.darkColor} 100%)` }}>
                        <span>✓</span>
                      </div>
                      <div className="product-info">
                        <h3 className="product-name">{product.name}</h3>
                        <p className="product-category">{product.category}</p>
                      </div>
                      <input 
                        type="checkbox" 
                        className="product-checkbox" 
                        checked={selectedProducts[product.id]}
                        onChange={() => {}}
                      />
                    </div>
                    <p className="product-description">Full-featured {product.category.toLowerCase()} solution with complete functionality</p>
                    <div className="product-features">
                      {product.features.map((feature, i) => (
                        <div key={i} className="feature-item">
                          <span className="feature-check">✓</span>
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              <div className="access-level-section">
                <h3 className="access-level-title">Access Level Configuration</h3>
                <div className="access-options">
                  <label className="access-option">
                    <input 
                      type="radio" 
                      name="accessLevel" 
                      value="full" 
                      checked={selectedAccessLevel === 'full'}
                      onChange={() => setSelectedAccessLevel('full')}
                    />
                    <div className="option-content">
                      <h4>Full Access</h4>
                      <p>Complete dashboard and reporting access</p>
                    </div>
                  </label>
                  <label className="access-option">
                    <input 
                      type="radio" 
                      name="accessLevel" 
                      value="view" 
                      checked={selectedAccessLevel === 'view'}
                      onChange={() => setSelectedAccessLevel('view')}
                    />
                    <div className="option-content">
                      <h4>View Only</h4>
                      <p>Read-only access to dashboards</p>
                    </div>
                  </label>
                </div>
              </div>
            </div>
          </>
        )}

        {/* STEP 4 - ACTIVATE USER ACCOUNT */}
        {currentStep === 4 && (
          <div className="form-section">
            <div className="section-header">
              <div className="section-icon-wrapper" style={{ background: '#DCFCE7' }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20 6L9 17L4 12" stroke="#16A34A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className="section-title-group">
                <h2 className="section-title">Activate User Account</h2>
                <p className="section-description">Configure activation settings and send welcome email</p>
              </div>
            </div>

            {/* User Summary */}
            <div className="user-summary-box">
              <h3 className="summary-title">User Summary</h3>
              <div className="summary-grid">
                <div className="summary-item">
                  <label className="summary-label">Full Name</label>
                  <div className="summary-value">{formData.firstName} {formData.lastName}</div>
                </div>
                <div className="summary-item">
                  <label className="summary-label">Email Address</label>
                  <div className="summary-value">{formData.email}</div>
                </div>
                <div className="summary-item">
                  <label className="summary-label">Role</label>
                  <div className="summary-value-with-badge">
                    <span>{selectedRole}</span>
                    <span className="role-badge" style={{ 
                      background: selectedRole === 'Admin' ? '#F3E8FF' : selectedRole === 'Manager' ? '#DBEAFE' : '#DCFCE7',
                      color: selectedRole === 'Admin' ? '#7E22CE' : selectedRole === 'Manager' ? '#1D4ED8' : '#16A34A'
                    }}>{selectedRole}</span>
                  </div>
                </div>
                <div className="summary-item">
                  <label className="summary-label">Department</label>
                  <div className="summary-value">{formData.department}</div>
                </div>
                <div className="summary-item">
                  <label className="summary-label">Product Access</label>
                  <div className="summary-badge-group">
                    {selectedProducts.analyticsPro && <span className="product-badge analytics">Analytics Pro</span>}
                    {selectedProducts.crmSuite && <span className="product-badge crm">CRM Suite</span>}
                    {selectedProducts.eCommerce && <span className="product-badge ecommerce">E-Commerce</span>}
                  </div>
                </div>
                <div className="summary-item">
                  <label className="summary-label">User ID</label>
                  <div className="summary-value">USR-2024-0847</div>
                </div>
              </div>
            </div>

            {/* Activation Method */}
            <h3 className="section-subtitle">Activation Method</h3>
            <div className="activation-methods">
              <div className="activation-option" onClick={() => setActivationMethod('email')}>
                <input 
                  type="radio" 
                  name="activation" 
                  value="email" 
                  checked={activationMethod === 'email'}
                  onChange={(e) => setActivationMethod(e.target.value)}
                />
                <div className="activation-check">
                  {activationMethod === 'email' && (
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <circle cx="8" cy="8" r="6" fill="#0075FF"/>
                      <circle cx="8" cy="8" r="3" fill="white"/>
                    </svg>
                  )}
                </div>
                <div className="activation-content">
                  <h4 className="activation-title">Send Activation Email</h4>
                  <p className="activation-desc">User will receive an email with instructions to set their password and activate their account</p>
                </div>
                {activationMethod === 'email' && <span className="recommended-badge">Recommended</span>}
              </div>

              <div className="activation-option" onClick={() => setActivationMethod('temporary')}>
                <input 
                  type="radio" 
                  name="activation" 
                  value="temporary" 
                  checked={activationMethod === 'temporary'}
                  onChange={(e) => setActivationMethod(e.target.value)}
                />
                <div className="activation-check">
                  {activationMethod === 'temporary' && null}
                </div>
                <div className="activation-content">
                  <h4 className="activation-title">Set Temporary Password</h4>
                  <p className="activation-desc">Generate a temporary password and share it with the user manually</p>
                </div>
              </div>

              <div className="activation-option" onClick={() => setActivationMethod('sso')}>
                <input 
                  type="radio" 
                  name="activation" 
                  value="sso" 
                  checked={activationMethod === 'sso'}
                  onChange={(e) => setActivationMethod(e.target.value)}
                />
                <div className="activation-check">
                  {activationMethod === 'sso' && null}
                </div>
                <div className="activation-content">
                  <h4 className="activation-title">SSO Integration</h4>
                  <p className="activation-desc">User will authenticate through company SSO provider</p>
                </div>
              </div>
            </div>

            {/* Email Configuration */}
            <div className="email-config-section">
              <h3 className="config-title">Email Configuration</h3>
              <div className="config-list">
                <label className="config-checkbox">
                  <input 
                    type="checkbox" 
                    checked={emailConfig.includeWelcome}
                    onChange={(e) => setEmailConfig({...emailConfig, includeWelcome: e.target.checked})}
                  />
                  <span className="checkbox-custom"></span>
                  <span className="checkbox-label">Include welcome message</span>
                </label>
              </div>
              {emailConfig.includeWelcome && (
                <textarea className="welcome-message-box" value="Welcome to Karnovate! We're excited to have you on the team. Your account has been created with Product Manager access." readOnly></textarea>
              )}
              <div className="config-list">
                <label className="config-checkbox">
                  <input 
                    type="checkbox" 
                    checked={emailConfig.includeQuickStart}
                    onChange={(e) => setEmailConfig({...emailConfig, includeQuickStart: e.target.checked})}
                  />
                  <span className="checkbox-custom"></span>
                  <span className="checkbox-label">Include quick start guide</span>
                </label>
                <label className="config-checkbox">
                  <input 
                    type="checkbox" 
                    checked={emailConfig.ccManager}
                    onChange={(e) => setEmailConfig({...emailConfig, ccManager: e.target.checked})}
                  />
                  <span className="checkbox-custom"></span>
                  <span className="checkbox-label">CC manager on activation email</span>
                </label>
              </div>
              <div className="expiry-group">
                <label className="expiry-label">Activation Link Expiry</label>
                <select className="expiry-select" value={activationLinkExpiry} onChange={(e) => setActivationLinkExpiry(e.target.value)}>
                  <option>24 hours</option>
                  <option>48 hours</option>
                  <option>7 days</option>
                  <option>30 days</option>
                </select>
              </div>
            </div>

            {/* Security Requirements */}
            <div className="security-section">
              <h3 className="config-title">Security Requirements</h3>
              <div className="config-list">
                <label className="config-checkbox">
                  <input 
                    type="checkbox" 
                    checked={securityRequirements.passwordChange}
                    onChange={(e) => setSecurityRequirements({...securityRequirements, passwordChange: e.target.checked})}
                  />
                  <span className="checkbox-custom"></span>
                  <span className="checkbox-label">Require password change on first login</span>
                </label>
                <label className="config-checkbox">
                  <input 
                    type="checkbox" 
                    checked={securityRequirements.mfa}
                    onChange={(e) => setSecurityRequirements({...securityRequirements, mfa: e.target.checked})}
                  />
                  <span className="checkbox-custom"></span>
                  <span className="checkbox-label">Enforce Multi-Factor Authentication (MFA)</span>
                </label>
                <label className="config-checkbox">
                  <input 
                    type="checkbox" 
                    checked={securityRequirements.securityAlerts}
                    onChange={(e) => setSecurityRequirements({...securityRequirements, securityAlerts: e.target.checked})}
                  />
                  <span className="checkbox-custom"></span>
                  <span className="checkbox-label">Send security alerts to user</span>
                </label>
                <label className="config-checkbox">
                  <input 
                    type="checkbox" 
                    checked={securityRequirements.termsAcceptance}
                    onChange={(e) => setSecurityRequirements({...securityRequirements, termsAcceptance: e.target.checked})}
                  />
                  <span className="checkbox-custom"></span>
                  <span className="checkbox-label">Require terms and conditions acceptance</span>
                </label>
              </div>
            </div>

            {/* Notifications */}
            <div className="notifications-section">
              <h3 className="config-title">Notifications</h3>
              <div className="config-list">
                <label className="config-checkbox">
                  <input 
                    type="checkbox" 
                    checked={notifications.notifyAdmins}
                    onChange={(e) => setNotifications({...notifications, notifyAdmins: e.target.checked})}
                  />
                  <span className="checkbox-custom"></span>
                  <span className="checkbox-label">Notify admins when account is activated</span>
                </label>
                <label className="config-checkbox">
                  <input 
                    type="checkbox" 
                    checked={notifications.sendConfirmation}
                    onChange={(e) => setNotifications({...notifications, sendConfirmation: e.target.checked})}
                  />
                  <span className="checkbox-custom"></span>
                  <span className="checkbox-label">Send confirmation to user after activation</span>
                </label>
                <label className="config-checkbox">
                  <input 
                    type="checkbox" 
                    checked={notifications.remindIncomplete}
                    onChange={(e) => setNotifications({...notifications, remindIncomplete: e.target.checked})}
                  />
                  <span className="checkbox-custom"></span>
                  <span className="checkbox-label">Send reminder if activation not completed in 24 hours</span>
                </label>
              </div>
            </div>
          </div>
        )}

        {/* Form Footer */}
        <div className="form-footer">
          {currentStep > 1 && (
            <button className="btn-previous" onClick={() => setCurrentStep(currentStep - 1)}>
              <FiArrowLeft size={16} />
              <span> Previous Step</span>
            </button>
          )}
          <button className="btn-draft" onClick={handleSaveDraft}>
            <FiUpload size={16} />
            <span> Save as Draft</span>
          </button>
          <button 
            className="btn-continue" 
            onClick={handleContinue}
            style={currentStep === 4 ? { backgroundColor: '#16A34A' } : {}}
          >
            {currentStep === 1 && 'Continue to Permissions'}
            {currentStep === 2 && 'Continue to Products'}
            {currentStep === 3 && 'Continue to Review'}
            {currentStep === 4 && (
              <>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ marginRight: '8px' }}>
                  <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                Activate User
              </>
            )}
          </button>
        </div>
      </div>
    </main>
  )
}

export default CreateUserFormPage
