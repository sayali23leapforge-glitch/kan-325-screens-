import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { FiArrowRight, FiMenu } from 'react-icons/fi'
import Sidebar from './Sidebar'
import './create-tenant.css'

const CreateTenantPage = () => {
  const navigate = useNavigate()
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [currentStep, setCurrentStep] = useState(1)
  const [formData, setFormData] = useState({
    organizationName: '',
    displayName: '',
    description: '',
    industry: '',
    organizationSize: '',
    country: '',
    fullName: '',
    email: '',
    jobTitle: '',
    phone: ''
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleContinue = () => {
    navigate('/tenants/create/form')
  }

  const handleCancel = () => {
    navigate('/tenants')
  }

  const steps = [
    { number: 1, title: 'Organization Details', active: currentStep >= 1 },
    { number: 2, title: 'Domain Setup', active: currentStep >= 2 },
    { number: 3, title: 'Subscription Plan', active: currentStep >= 3 },
    { number: 4, title: 'Review & Create', active: currentStep >= 4 }
  ]

  return (
    <main className="dashboard-layout">
      <Sidebar sidebarOpen={sidebarOpen} />
      <div className={`sidebar-overlay ${sidebarOpen ? 'active' : ''}`} onClick={() => setSidebarOpen(false)} />
      <section className="dashboard-main create-tenant-main">
        {/* Header */}
        <div className="create-header">
          <button 
            className="mobile-menu-btn"
            onClick={() => setSidebarOpen(!sidebarOpen)}
            aria-label="Toggle sidebar"
          >
            <FiMenu size={20} />
          </button>
          <div className="header-left">
            <h1 className="create-title">Create New Tenant</h1>
            <div className="create-breadcrumb">
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
            <button className="btn btn-cancel" onClick={handleCancel}>
              Cancel
            </button>
          </div>
        </div>

        {/* Main Content */}
        <div className="create-content">
          {/* Setup Progress */}
          <div className="setup-progress">
            <h2 className="progress-title">Setup Progress</h2>
            <div className="progress-step-info">Step {currentStep} of 4</div>
            
            <div className="progress-steps">
              {steps.map((step, idx) => (
                <div key={step.number} className="progress-item">
                  <div className="step-content">
                    <div className={`step-circle ${step.number === currentStep ? 'active' : step.active ? 'completed' : ''}`}>
                      {step.number}
                    </div>
                    <div className="step-label">{step.title}</div>
                  </div>
                  {idx < steps.length - 1 && <div className="step-divider" />}
                </div>
              ))}
            </div>
          </div>

          {/* Form Content */}
          {currentStep === 1 && (
            <div className="form-section">
              <h2 className="form-title">Organization Details</h2>
              <p className="form-subtitle">Provide basic information about the organization that will use this tenant.</p>

              <div className="form-content">
                {/* Organization Name */}
                <div className="form-group">
                  <label className="form-label">Organization Name *</label>
                  <input
                    type="text"
                    name="organizationName"
                    placeholder="Enter organization name"
                    value={formData.organizationName}
                    onChange={handleInputChange}
                    className="form-input"
                  />
                  <p className="form-help">This will be displayed as the tenant name</p>
                </div>

                {/* Display Name */}
                <div className="form-group">
                  <label className="form-label">Display Name</label>
                  <input
                    type="text"
                    name="displayName"
                    placeholder="Public display name (optional)"
                    value={formData.displayName}
                    onChange={handleInputChange}
                    className="form-input"
                  />
                  <p className="form-help">Shown to end users if different from org name</p>
                </div>

                {/* Description */}
                <div className="form-group full-width">
                  <label className="form-label">Description</label>
                  <textarea
                    name="description"
                    placeholder="Brief description of the organization"
                    value={formData.description}
                    onChange={handleInputChange}
                    className="form-textarea"
                    rows="5"
                  />
                </div>

                {/* Three Column Row */}
                <div className="form-row">
                  <div className="form-group">
                    <label className="form-label">Industry</label>
                    <select name="industry" value={formData.industry} onChange={handleInputChange} className="form-select">
                      <option value="">Select industry</option>
                      <option value="technology">Technology</option>
                      <option value="finance">Finance</option>
                      <option value="healthcare">Healthcare</option>
                      <option value="retail">Retail</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label className="form-label">Organization Size</label>
                    <select name="organizationSize" value={formData.organizationSize} onChange={handleInputChange} className="form-select">
                      <option value="">Select size</option>
                      <option value="1-50">1-50</option>
                      <option value="51-200">51-200</option>
                      <option value="201-1000">201-1000</option>
                      <option value="1000+">1000+</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label className="form-label">Country/Region</label>
                    <select name="country" value={formData.country} onChange={handleInputChange} className="form-select">
                      <option value="">Select country</option>
                      <option value="united-states">United States</option>
                      <option value="canada">Canada</option>
                      <option value="united-kingdom">United Kingdom</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                {/* Primary Administrator */}
                <div className="admin-section">
                  <h3 className="admin-title">Primary Administrator</h3>

                  <div className="form-row">
                    <div className="form-group">
                      <label className="form-label">Full Name *</label>
                      <input
                        type="text"
                        name="fullName"
                        placeholder="Enter administrator's full name"
                        value={formData.fullName}
                        onChange={handleInputChange}
                        className="form-input"
                      />
                    </div>

                    <div className="form-group">
                      <label className="form-label">Email Address *</label>
                      <input
                        type="email"
                        name="email"
                        placeholder="admin@organization.com"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="form-input"
                      />
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label className="form-label">Job Title</label>
                      <input
                        type="text"
                        name="jobTitle"
                        placeholder="e.g., IT Administrator, CTO"
                        value={formData.jobTitle}
                        onChange={handleInputChange}
                        className="form-input"
                      />
                    </div>

                    <div className="form-group">
                      <label className="form-label">Phone Number</label>
                      <input
                        type="tel"
                        name="phone"
                        placeholder="+1 (555) 123-4567"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="form-input"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Form Footer */}
              <div className="form-footer">
                <div className="required-notice">
                  <div className="notice-icon">✓</div>
                  <span>All fields marked with * are required</span>
                </div>

                <div className="button-group">
                  <button className="btn btn-draft">Save as Draft</button>
                  <button className="btn btn-primary" onClick={handleContinue}>
                    Continue
                    <FiArrowRight size={16} />
                  </button>
                </div>
              </div>

              {/* Setup Tips */}
              <div className="setup-tips-wrapper">
                <div className="setup-tips">
                  <div className="tips-icon">ℹ️</div>
                  <div className="tips-content">
                    <h3 className="tips-title">Setup Tips</h3>
                    <ul className="tips-list">
                      <li>• Choose a clear, recognizable organization name as it will be visible to all users</li>
                      <li>• The primary administrator will receive setup instructions and have full tenant access</li>
                      <li>• Industry and size information helps optimize default configurations</li>
                      <li>• You can modify most of these settings after tenant creation</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </main>
  )
}

export default CreateTenantPage
