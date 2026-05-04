import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { FiArrowLeft, FiMail, FiUpload, FiX } from 'react-icons/fi'
import Sidebar from './Sidebar'
import './edit-profile.css'

function EditProfilePage() {
  const navigate = useNavigate()
  const { id } = useParams()
  const [sidebarOpen, setSidebarOpen] = useState(false)

  const [formData, setFormData] = useState({
    firstName: 'Sarah',
    lastName: 'Johnson',
    email: 'sarah.johnson@company.com',
    phone: '+1 (555) 123-4567',
    employeeId: 'EMP-2023-0156',
    department: 'Product Development',
    officeLocation: 'San Francisco, CA',
    reportsTo: 'John Doe - VP Product',
    startDate: '15-01-2023',
    primaryRole: 'Manager',
    accountStatus: 'Active',
    permissions: {
      userManagement: true,
      productAccess: true,
      reportsAnalytics: true,
      systemAdmin: false
    },
    mfa: true,
    sessionTimeout: '8 hours',
    forcePasswordReset: false
  })

  const [avatar, setAvatar] = useState('https://placehold.co/123x123')

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handlePermissionChange = (permission) => {
    setFormData(prev => ({
      ...prev,
      permissions: {
        ...prev.permissions,
        [permission]: !prev.permissions[permission]
      }
    }))
  }

  const handleCheckboxChange = (field) => {
    setFormData(prev => ({
      ...prev,
      [field]: !prev[field]
    }))
  }

  const handleAvatarUpload = (e) => {
    const file = e.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = (event) => {
        setAvatar(event.target?.result)
      }
      reader.readAsDataURL(file)
    }
  }

  const handleRemovePhoto = () => {
    setAvatar('https://placehold.co/123x123')
  }

  const handleSaveChanges = () => {
    console.log('Saving changes:', formData)
    navigate(`/users/${id}`)
  }

  const handleCancel = () => {
    navigate(`/users/${id}`)
  }

  return (
    <main className="edit-profile-layout">
      <Sidebar sidebarOpen={sidebarOpen} />
      <div className={`sidebar-overlay ${sidebarOpen ? 'active' : ''}`} onClick={() => setSidebarOpen(false)} />

      {/* Header */}
      <div className="edit-profile-header">
        <div className="header-left">
          <h1 className="header-title">Edit Profile</h1>
          <div className="breadcrumb-navigation">
            <span className="breadcrumb-link">Home</span>
            <span className="breadcrumb-arrow">›</span>
            <span className="breadcrumb-link">IAM</span>
            <span className="breadcrumb-arrow">›</span>
            <span className="breadcrumb-link">Users</span>
            <span className="breadcrumb-arrow">›</span>
            <span className="breadcrumb-link">{formData.firstName} {formData.lastName}</span>
            <span className="breadcrumb-arrow">›</span>
            <span className="breadcrumb-current">Edit</span>
          </div>
        </div>
        <div className="header-right">
          <button className="notification-button">
            <FiMail size={18} />
            <span className="notification-badge">3</span>
          </button>
          <button className="back-button" onClick={() => navigate(`/users/${id}`)}>
            <FiArrowLeft size={16} />
            <span>Back to Profile</span>
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="edit-profile-container">
        {/* Profile Photo Section */}
        <div className="profile-section photo-section">
          <h3 className="section-title">Profile Photo</h3>
          
          <div className="photo-container">
            <img src={avatar} alt="Profile" className="profile-photo" />
            
            <div className="photo-actions">
              <p className="photo-label">Update Photo</p>
              <label className="btn-choose-file">
                <FiUpload size={16} />
                <span>Choose File</span>
                <input type="file" accept="image/*" onChange={handleAvatarUpload} style={{ display: 'none' }} />
              </label>
              <button className="btn-remove" onClick={handleRemovePhoto}>Remove</button>
              <p className="file-info">JPG, GIF or PNG. Max size of 5MB</p>
            </div>
          </div>
        </div>

        {/* Personal Information Section */}
        <div className="profile-section">
          <h3 className="section-title">Personal Information</h3>
          
          <div className="form-grid two-columns">
            <div className="form-group">
              <label className="form-label">First Name *</label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
                className="form-input"
              />
            </div>
            <div className="form-group">
              <label className="form-label">Last Name *</label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
                className="form-input"
              />
            </div>
          </div>

          <div className="form-group">
            <label className="form-label">Email Address *</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="form-input"
            />
          </div>

          <div className="form-grid two-columns">
            <div className="form-group">
              <label className="form-label">Phone Number</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                className="form-input"
              />
            </div>
            <div className="form-group">
              <label className="form-label">Employee ID</label>
              <input
                type="text"
                name="employeeId"
                value={formData.employeeId}
                disabled
                className="form-input disabled"
              />
            </div>
          </div>

          <div className="form-grid two-columns">
            <div className="form-group">
              <label className="form-label">Department</label>
              <select name="department" value={formData.department} onChange={handleInputChange} className="form-select">
                <option>Product Development</option>
                <option>Sales</option>
                <option>Marketing</option>
                <option>Engineering</option>
              </select>
            </div>
            <div className="form-group">
              <label className="form-label">Office Location</label>
              <select name="officeLocation" value={formData.officeLocation} onChange={handleInputChange} className="form-select">
                <option>San Francisco, CA</option>
                <option>New York, NY</option>
                <option>London, UK</option>
                <option>Tokyo, Japan</option>
              </select>
            </div>
          </div>

          <div className="form-grid two-columns">
            <div className="form-group">
              <label className="form-label">Reports To</label>
              <select name="reportsTo" value={formData.reportsTo} onChange={handleInputChange} className="form-select">
                <option>John Doe - VP Product</option>
                <option>Jane Smith - Director</option>
                <option>Bob Johnson - Manager</option>
              </select>
            </div>
            <div className="form-group">
              <label className="form-label">Start Date</label>
              <input
                type="text"
                name="startDate"
                value={formData.startDate}
                onChange={handleInputChange}
                className="form-input date-input"
              />
            </div>
          </div>
        </div>

        {/* Role & Access Settings */}
        <div className="profile-section">
          <h3 className="section-title">Role & Access Settings</h3>
          
          <div className="form-group">
            <label className="form-label">Primary Role</label>
            <select name="primaryRole" value={formData.primaryRole} onChange={handleInputChange} className="form-select">
              <option>Manager</option>
              <option>Admin</option>
              <option>User</option>
              <option>Developer</option>
            </select>
          </div>

          <div className="form-group">
            <label className="form-label">Account Status</label>
            <div className="radio-group">
              <label className="radio-label">
                <input
                  type="radio"
                  name="accountStatus"
                  value="Active"
                  checked={formData.accountStatus === 'Active'}
                  onChange={handleInputChange}
                />
                <span>Active</span>
              </label>
              <label className="radio-label">
                <input
                  type="radio"
                  name="accountStatus"
                  value="Suspended"
                  checked={formData.accountStatus === 'Suspended'}
                  onChange={handleInputChange}
                />
                <span>Suspended</span>
              </label>
              <label className="radio-label">
                <input
                  type="radio"
                  name="accountStatus"
                  value="Inactive"
                  checked={formData.accountStatus === 'Inactive'}
                  onChange={handleInputChange}
                />
                <span>Inactive</span>
              </label>
            </div>
          </div>

          <div className="form-group">
            <label className="form-label">Permissions</label>
            <div className="checkbox-group">
              <label className="checkbox-label">
                <input
                  type="checkbox"
                  checked={formData.permissions.userManagement}
                  onChange={() => handlePermissionChange('userManagement')}
                />
                <span>User Management</span>
              </label>
              <label className="checkbox-label">
                <input
                  type="checkbox"
                  checked={formData.permissions.productAccess}
                  onChange={() => handlePermissionChange('productAccess')}
                />
                <span>Product Access</span>
              </label>
              <label className="checkbox-label">
                <input
                  type="checkbox"
                  checked={formData.permissions.reportsAnalytics}
                  onChange={() => handlePermissionChange('reportsAnalytics')}
                />
                <span>Reports & Analytics</span>
              </label>
              <label className="checkbox-label">
                <input
                  type="checkbox"
                  checked={formData.permissions.systemAdmin}
                  onChange={() => handlePermissionChange('systemAdmin')}
                />
                <span>System Administration</span>
              </label>
            </div>
          </div>
        </div>

        {/* Security Preferences */}
        <div className="profile-section">
          <h3 className="section-title">Security Preferences</h3>
          
          <div className="security-option">
            <div className="security-content">
              <p className="security-title">Require Multi-Factor Authentication</p>
              <p className="security-desc">User must use MFA to access the system</p>
            </div>
            <label className="checkbox-label checkbox-toggle">
              <input
                type="checkbox"
                checked={formData.mfa}
                onChange={() => handleCheckboxChange('mfa')}
              />
              <span></span>
            </label>
          </div>

          <div className="form-group">
            <label className="form-label">Session Timeout (hours)</label>
            <select name="sessionTimeout" value={formData.sessionTimeout} onChange={handleInputChange} className="form-select">
              <option>2 hours</option>
              <option>4 hours</option>
              <option>8 hours</option>
              <option>12 hours</option>
              <option>24 hours</option>
            </select>
          </div>

          <div className="security-option">
            <div className="security-content">
              <p className="security-title">Force Password Reset</p>
              <p className="security-desc">User will be required to change password on next login</p>
            </div>
            <label className="checkbox-label checkbox-toggle">
              <input
                type="checkbox"
                checked={formData.forcePasswordReset}
                onChange={() => handleCheckboxChange('forcePasswordReset')}
              />
              <span></span>
            </label>
          </div>
        </div>

        {/* Form Footer */}
        <div className="form-footer">
          <div className="footer-message">
            <FiUpload size={16} style={{ color: '#6B7280' }} />
            <span>Changes will be applied immediately</span>
          </div>
          <div className="footer-buttons">
            <button className="btn-cancel" onClick={handleCancel}>Cancel</button>
            <button className="btn-save" onClick={handleSaveChanges}>
              <FiX size={16} style={{ transform: 'rotate(45deg)' }} />
              <span>Save Changes</span>
            </button>
          </div>
        </div>
      </div>
    </main>
  )
}

export default EditProfilePage
