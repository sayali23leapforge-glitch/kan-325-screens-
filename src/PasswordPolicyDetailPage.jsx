import { useState } from 'react'
import {
  FiLock,
  FiCheckCircle,
  FiArrowLeft,
  FiEye,
  FiCheck,
  FiX,
  FiInfo
} from 'react-icons/fi'
import './password-policy-detail.css'

function PasswordPolicyDetailPage({ onBack }) {
  const [formData, setFormData] = useState({
    minLength: '8',
    maxLength: '128',
    uppercaseLetters: true,
    lowercaseLetters: true,
    numbers: true,
    specialCharacters: true,
    passwordExpiration: '90 days',
    passwordHistory: 'Last 5 passwords',
    accountLockout: 'After 5 failed attempts',
    lockoutDuration: '30 minutes',
    commonPasswordDetection: true,
    personalInfoCheck: true,
    breachDatabaseCheck: false
  })

  const handleToggle = (field) => {
    setFormData(prev => ({
      ...prev,
      [field]: !prev[field]
    }))
  }

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }))
  }

  return (
    <div className="password-policy-detail-page">
      {/* Header */}
      <div className="policy-detail-header">
        <div className="policy-detail-header-left">
          <h1 className="policy-detail-title">Password Policy Configuration</h1>
          <div className="policy-detail-breadcrumb">
            <span className="breadcrumb-link">Security Policies</span>
            <span className="breadcrumb-separator">&gt;</span>
            <span className="breadcrumb-current">Password Policy</span>
          </div>
        </div>
        <div className="policy-detail-header-right">
          <button className="btn-back" onClick={onBack}>
            <FiArrowLeft size={16} />
            Back
          </button>
          <button className="btn-save-changes-header">
            <FiCheck size={16} />
            Save Changes
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="policy-detail-content">
        {/* Policy Overview Card */}
        <div className="policy-overview-card">
          <div className="policy-overview-header">
            <div className="policy-overview-icon" style={{ backgroundColor: '#DBEAFE' }}>
              <FiLock size={24} color="#2563EB" />
            </div>
            <div className="policy-overview-info">
              <h2 className="policy-overview-title">Password Policy</h2>
              <p className="policy-overview-desc">Configure password complexity and security requirements</p>
            </div>
            <div className="policy-overview-status">
              <span className="status-dot"></span>
              <span className="status-text">Active</span>
              <span className="status-separator">•</span>
              <span className="status-meta">Affects 247 users</span>
              <span className="status-separator">•</span>
              <span className="status-meta">Last updated 2 days ago</span>
            </div>
          </div>
          <div className="policy-overview-actions">
            <button className="btn-preview-impact">
              <FiEye size={16} />
              Preview Impact
            </button>
            <button className="btn-apply-policy">
              <FiCheck size={16} />
              Apply Policy
            </button>
          </div>
        </div>

        {/* Configuration Form */}
        <div className="policy-config-form">
          {/* Password Requirements Section */}
          <div className="config-section">
            <div className="config-section-header">
              <div className="section-icon" style={{ backgroundColor: '#2563EB' }}>
                <FiCheckCircle size={16} color="white" />
              </div>
              <h3 className="section-title">Password Requirements</h3>
            </div>
            <p className="section-subtitle">Define the complexity and security rules for user passwords</p>

            {/* Basic Requirements */}
            <div className="requirement-subsection">
              <div className="subsection-title">
                <FiCheck size={16} color="#2563EB" />
                <span>Basic Requirements</span>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label className="form-label">Minimum Length</label>
                  <div className="form-hint">Minimum 6, Maximum 32 characters</div>
                  <input
                    type="text"
                    className="form-input"
                    value={formData.minLength}
                    onChange={(e) => handleInputChange('minLength', e.target.value)}
                  />
                  <div className="input-unit">characters</div>
                </div>

                <div className="form-group">
                  <label className="form-label">Maximum Length</label>
                  <div className="form-hint">Maximum allowed password length</div>
                  <input
                    type="text"
                    className="form-input"
                    value={formData.maxLength}
                    onChange={(e) => handleInputChange('maxLength', e.target.value)}
                  />
                  <div className="input-unit">characters</div>
                </div>
              </div>
            </div>

            {/* Complexity Rules */}
            <div className="requirement-subsection">
              <div className="subsection-title">
                <FiCheckCircle size={16} color="#16A34A" />
                <span>Complexity Rules</span>
              </div>

              <div className="complexity-items">
                {[
                  { key: 'uppercaseLetters', label: 'Uppercase Letters', desc: 'Require at least one uppercase letter (A-Z)', bg: '#DBEAFE', color: '#2563EB' },
                  { key: 'lowercaseLetters', label: 'Lowercase Letters', desc: 'Require at least one lowercase letter (a-z)', bg: '#F3E8FF', color: '#9333EA' },
                  { key: 'numbers', label: 'Numbers', desc: 'Require at least one numeric digit (0-9)', bg: '#DCFCE7', color: '#16A34A' },
                  { key: 'specialCharacters', label: 'Special Characters', desc: 'Require at least one special character (!@#$%^&*)', bg: '#FEE2E2', color: '#DC2626' }
                ].map((item) => (
                  <div key={item.key} className="complexity-item">
                    <div className="complexity-icon" style={{ backgroundColor: item.bg }}>
                      <FiCheck size={16} color={item.color} />
                    </div>
                    <div className="complexity-text">
                      <div className="complexity-label">{item.label}</div>
                      <div className="complexity-desc">{item.desc}</div>
                    </div>
                    <button
                      className={`toggle-switch ${formData[item.key] ? 'active' : ''}`}
                      onClick={() => handleToggle(item.key)}
                    >
                      <span className="toggle-thumb"></span>
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Security Settings */}
            <div className="requirement-subsection">
              <div className="subsection-title">
                <FiLock size={16} color="#EA580C" />
                <span>Security Settings</span>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label className="form-label">Password Expiration</label>
                  <select
                    className="form-select"
                    value={formData.passwordExpiration}
                    onChange={(e) => handleInputChange('passwordExpiration', e.target.value)}
                  >
                    <option>30 days</option>
                    <option>60 days</option>
                    <option>90 days</option>
                    <option>180 days</option>
                  </select>
                  <div className="form-hint">How often users must change passwords</div>
                </div>

                <div className="form-group">
                  <label className="form-label">Password History</label>
                  <select
                    className="form-select"
                    value={formData.passwordHistory}
                    onChange={(e) => handleInputChange('passwordHistory', e.target.value)}
                  >
                    <option>Last 3 passwords</option>
                    <option>Last 5 passwords</option>
                    <option>Last 10 passwords</option>
                  </select>
                  <div className="form-hint">Prevent reusing recent passwords</div>
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label className="form-label">Account Lockout</label>
                  <select
                    className="form-select"
                    value={formData.accountLockout}
                    onChange={(e) => handleInputChange('accountLockout', e.target.value)}
                  >
                    <option>After 3 failed attempts</option>
                    <option>After 5 failed attempts</option>
                    <option>After 10 failed attempts</option>
                  </select>
                  <div className="form-hint">Lock account after failed login attempts</div>
                </div>

                <div className="form-group">
                  <label className="form-label">Lockout Duration</label>
                  <select
                    className="form-select"
                    value={formData.lockoutDuration}
                    onChange={(e) => handleInputChange('lockoutDuration', e.target.value)}
                  >
                    <option>15 minutes</option>
                    <option>30 minutes</option>
                    <option>1 hour</option>
                  </select>
                  <div className="form-hint">How long accounts remain locked</div>
                </div>
              </div>
            </div>

            {/* Advanced Options */}
            <div className="requirement-subsection">
              <div className="subsection-title">
                <span style={{ color: '#9333EA' }}>⚙️</span>
                <span>Advanced Options</span>
              </div>

              <div className="advanced-items">
                {[
                  { key: 'commonPasswordDetection', label: 'Common Password Detection', desc: 'Block commonly used passwords and dictionary words' },
                  { key: 'personalInfoCheck', label: 'Personal Information Check', desc: "Prevent passwords containing user's personal information" },
                  { key: 'breachDatabaseCheck', label: 'Breach Database Check', desc: 'Check passwords against known breach databases' }
                ].map((item) => (
                  <div key={item.key} className="advanced-item">
                    <div className="advanced-text">
                      <div className="advanced-label">{item.label}</div>
                      <div className="advanced-desc">{item.desc}</div>
                    </div>
                    <button
                      className={`toggle-switch ${formData[item.key] ? 'active' : ''}`}
                      onClick={() => handleToggle(item.key)}
                    >
                      <span className="toggle-thumb"></span>
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Impact Preview Box */}
          <div className="impact-preview-box">
            <div className="impact-header">
              <FiInfo size={16} color="#2563EB" />
              <h3>Policy Impact Preview</h3>
            </div>

            <div className="impact-stats">
              <div className="impact-stat">
                <div className="stat-label">Affected Users</div>
                <div className="stat-value">247</div>
                <div className="stat-desc">All active users</div>
              </div>
              <div className="impact-stat">
                <div className="stat-label">Password Resets Required</div>
                <div className="stat-value" style={{ color: '#EA580C' }}>89</div>
                <div className="stat-desc">Non-compliant passwords</div>
              </div>
              <div className="impact-stat">
                <div className="stat-label">Estimated Compliance</div>
                <div className="stat-value" style={{ color: '#16A34A' }}>64%</div>
                <div className="stat-desc">Current password strength</div>
              </div>
            </div>
          </div>

          {/* Footer Actions */}
          <div className="policy-config-footer">
            <button className="btn-save-policy">
              <FiCheck size={16} />
              Save Policy
            </button>
            <button className="btn-save-apply">
              <FiCheck size={16} />
              Save & Apply Now
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PasswordPolicyDetailPage
