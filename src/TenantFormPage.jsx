import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { FiArrowRight, FiMenu } from 'react-icons/fi'
import Sidebar from './Sidebar'
import './tenant-form.css'

const TenantFormPage = () => {
  const navigate = useNavigate()
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [formData, setFormData] = useState({
    tenantName: '',
    subdomain: '',
    contactEmail: '',
    description: '',
    subscriptionPlan: '',
    userLimit: '100',
    timeZone: 'UTC (Coordinated Universal Time)',
    mfaEnabled: true,
    ssoEnabled: true,
    analyticsEnabled: false,
    brandingEnabled: false,
    adminFirstName: '',
    adminLastName: '',
    adminEmail: '',
    adminPhone: ''
  })

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }))
  }

  const handleCreateTenant = () => {
    console.log('Creating tenant:', formData)
    // Navigate to subscription assignment page
    navigate('/tenants/create/subscription')
  }

  const handleBackClick = () => {
    navigate('/tenants')
  }

  return (
    <main className="dashboard-layout">
      <Sidebar sidebarOpen={sidebarOpen} />
      <div className={`sidebar-overlay ${sidebarOpen ? 'active' : ''}`} onClick={() => setSidebarOpen(false)} />
      <section className="dashboard-main tenant-form-main">
        {/* Header */}
        <div className="tenant-form-header">
          <button
            className="mobile-menu-btn"
            onClick={() => setSidebarOpen(!sidebarOpen)}
            aria-label="Toggle sidebar"
          >
            <FiMenu size={20} />
          </button>
          <div className="header-left">
            <h1 className="form-page-title">Create Tenant</h1>
            <div className="form-breadcrumb">
              <span className="breadcrumb-item">Home</span>
              <span className="breadcrumb-divider">/</span>
              <span className="breadcrumb-item">IAM</span>
              <span className="breadcrumb-divider">/</span>
              <span className="breadcrumb-item">Tenants</span>
              <span className="breadcrumb-divider">/</span>
              <span className="breadcrumb-item current">Create</span>
            </div>
          </div>
          <div className="header-actions">
            <button className="icon-btn notifications">
              <span style={{ fontSize: '18px' }}>...</span>
              <span className="notification-badge">3</span>
            </button>
            <button className="btn btn-back" onClick={handleBackClick}>
              <span style={{ fontSize: '14px', marginRight: '8px' }}>←</span>
              Back
            </button>
          </div>
        </div>

        {/* Main Content */}
        <div className="tenant-form-content">
          <div className="form-card">
            <div className="form-card-header">
              <h2 className="form-card-title">Create New Tenant</h2>
              <p className="form-card-subtitle">Set up a new tenant with basic information and configuration settings.</p>
            </div>

            <div className="form-card-body">
              {/* Two Column Layout */}
              <div className="form-columns-wrapper">
                {/* Left Column - Basic Information */}
                <div className="form-column left-column">
                  <div className="form-section-header">
                    <h3 className="form-section-title">Basic Information</h3>
                  </div>

                  <div className="form-group">
                    <label className="form-label">Tenant Name *</label>
                    <input
                      type="text"
                      name="tenantName"
                      placeholder="Enter tenant name"
                      value={formData.tenantName}
                      onChange={handleInputChange}
                      className="form-input"
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">Subdomain *</label>
                    <div className="subdomain-wrapper">
                      <input
                        type="text"
                        name="subdomain"
                        placeholder="subdomain"
                        value={formData.subdomain}
                        onChange={handleInputChange}
                        className="form-input subdomain-input"
                      />
                      <div className="subdomain-suffix">.karnovate.com</div>
                    </div>
                  </div>

                  <div className="form-group">
                    <label className="form-label">Contact Email *</label>
                    <input
                      type="email"
                      name="contactEmail"
                      placeholder="admin@company.com"
                      value={formData.contactEmail}
                      onChange={handleInputChange}
                      className="form-input"
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">Description</label>
                    <textarea
                      name="description"
                      placeholder="Brief description of the tenant"
                      value={formData.description}
                      onChange={handleInputChange}
                      className="form-textarea"
                      rows="5"
                    />
                  </div>
                </div>

                {/* Right Column - Configuration */}
                <div className="form-column right-column">
                  <div className="form-section-header">
                    <h3 className="form-section-title">Configuration</h3>
                  </div>

                  <div className="form-group">
                    <label className="form-label">Subscription Plan *</label>
                    <select
                      name="subscriptionPlan"
                      value={formData.subscriptionPlan}
                      onChange={handleInputChange}
                      className="form-select"
                    >
                      <option value="">Select a plan</option>
                      <option value="starter">Starter</option>
                      <option value="professional">Professional</option>
                      <option value="enterprise">Enterprise</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label className="form-label">User Limit</label>
                    <input
                      type="number"
                      name="userLimit"
                      placeholder="100"
                      value={formData.userLimit}
                      onChange={handleInputChange}
                      className="form-input"
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">Time Zone</label>
                    <select
                      name="timeZone"
                      value={formData.timeZone}
                      onChange={handleInputChange}
                      className="form-select"
                    >
                      <option value="UTC (Coordinated Universal Time)">UTC (Coordinated Universal Time)</option>
                      <option value="EST">EST - Eastern Standard Time</option>
                      <option value="CST">CST - Central Standard Time</option>
                      <option value="PST">PST - Pacific Standard Time</option>
                    </select>
                  </div>

                  <div className="form-group features-group">
                    <label className="form-label">Features</label>
                    <div className="checkbox-group">
                      <label className="checkbox-label">
                        <input
                          type="checkbox"
                          name="mfaEnabled"
                          checked={formData.mfaEnabled}
                          onChange={handleInputChange}
                          className="checkbox-input"
                        />
                        <span className="checkbox-custom"></span>
                        <span className="checkbox-text">Multi-factor Authentication</span>
                      </label>
                    </div>
                    <div className="checkbox-group">
                      <label className="checkbox-label">
                        <input
                          type="checkbox"
                          name="ssoEnabled"
                          checked={formData.ssoEnabled}
                          onChange={handleInputChange}
                          className="checkbox-input"
                        />
                        <span className="checkbox-custom"></span>
                        <span className="checkbox-text">Single Sign-On (SSO)</span>
                      </label>
                    </div>
                    <div className="checkbox-group">
                      <label className="checkbox-label">
                        <input
                          type="checkbox"
                          name="analyticsEnabled"
                          checked={formData.analyticsEnabled}
                          onChange={handleInputChange}
                          className="checkbox-input"
                        />
                        <span className="checkbox-custom"></span>
                        <span className="checkbox-text">Advanced Analytics</span>
                      </label>
                    </div>
                    <div className="checkbox-group">
                      <label className="checkbox-label">
                        <input
                          type="checkbox"
                          name="brandingEnabled"
                          checked={formData.brandingEnabled}
                          onChange={handleInputChange}
                          className="checkbox-input"
                        />
                        <span className="checkbox-custom"></span>
                        <span className="checkbox-text">Custom Branding</span>
                      </label>
                    </div>
                  </div>
                </div>
              </div>

              {/* Admin User Setup Section */}
              <div className="form-section-divider">
                <h3 className="form-section-title">Admin User Setup</h3>
              </div>

              <div className="form-admin-wrapper">
                <div className="form-row">
                  <div className="form-group">
                    <label className="form-label">Admin First Name *</label>
                    <input
                      type="text"
                      name="adminFirstName"
                      placeholder="John"
                      value={formData.adminFirstName}
                      onChange={handleInputChange}
                      className="form-input"
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Admin Last Name *</label>
                    <input
                      type="text"
                      name="adminLastName"
                      placeholder="Doe"
                      value={formData.adminLastName}
                      onChange={handleInputChange}
                      className="form-input"
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label className="form-label">Admin Email *</label>
                    <input
                      type="email"
                      name="adminEmail"
                      placeholder="john.doe@company.com"
                      value={formData.adminEmail}
                      onChange={handleInputChange}
                      className="form-input"
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Admin Phone</label>
                    <input
                      type="tel"
                      name="adminPhone"
                      placeholder="+1 (555) 123-4567"
                      value={formData.adminPhone}
                      onChange={handleInputChange}
                      className="form-input"
                    />
                  </div>
                </div>
              </div>

              {/* Summary Section */}
              <div className="summary-section">
                <h3 className="summary-title">Summary</h3>
                <div className="summary-grid">
                  <div className="summary-item">
                    <span className="summary-label">Setup Fee:</span>
                    <span className="summary-value">$0</span>
                  </div>
                  <div className="summary-item">
                    <span className="summary-label">User Limit:</span>
                    <span className="summary-value">100 users</span>
                  </div>
                  <div className="summary-item">
                    <span className="summary-label">Monthly Cost:</span>
                    <span className="summary-value">$190</span>
                  </div>
                  <div className="summary-item">
                    <span className="summary-label">Billing Cycle:</span>
                    <span className="summary-value">Monthly</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Footer with Buttons */}
            <div className="form-card-footer">
              <button className="btn btn-draft">Save as Draft</button>
              <button className="btn btn-primary" onClick={handleCreateTenant}>
                <span>Create Tenant</span>
                <FiArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default TenantFormPage
