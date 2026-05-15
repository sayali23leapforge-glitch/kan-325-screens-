import { useState } from 'react'
import { FiArrowLeft, FiCheck, FiAlertTriangle } from 'react-icons/fi'
import './edit-mfa-policy.css'

function EditMFAPolicyPage({ onBack }) {
  const [formData, setFormData] = useState({
    enforcementLevel: 'mandatory',
    allowAuthenticatorApps: true,
    allowSMS: true,
    allowEmail: false,
    allowHardwareTokens: true,
    setupGracePeriod: '7 days',
    backupCodes: 'Generate automatically',
    allowDeviceTrust: true,
    trustDuration: '30 days',
    mfaEnabled: true
  })

  const handleRadioChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }))
  }

  const handleCheckboxChange = (field) => {
    setFormData(prev => ({
      ...prev,
      [field]: !prev[field]
    }))
  }

  const handleSelectChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }))
  }

  return (
    <div className="mfa-policy-config-page">
      {/* Header */}
      <div className="mfa-policy-header">
        <div className="mfa-header-content">
          <h1 className="mfa-header-title">Multi-Factor Authentication Policy</h1>
          <div className="mfa-breadcrumb">
            <span className="mfa-breadcrumb-link">Security Policies</span>
            <span className="mfa-breadcrumb-separator">›</span>
            <span className="mfa-breadcrumb-link">MFA Policy</span>
          </div>
        </div>
        <div className="mfa-header-buttons">
          <button className="mfa-btn-back" onClick={onBack}>
            <FiArrowLeft size={16} />
            <span>Back to Policies</span>
          </button>
          <button className="mfa-btn-save">
            <FiCheck size={16} />
            <span>Save Changes</span>
          </button>
        </div>
      </div>

      {/* Warning Banner */}
      <div className="mfa-warning-banner">
        <FiAlertTriangle size={16} />
        <div className="mfa-banner-content">
          <div className="mfa-banner-title">MFA Policy Configuration</div>
          <div className="mfa-banner-text">Enabling MFA enforcement will require all users to configure multi-factor authentication on their next login.</div>
        </div>
      </div>

      {/* Main Content Card */}
      <div className="mfa-main-card">
        {/* Section Header */}
        <div className="mfa-section-header">
          <h2 className="mfa-section-title">MFA Enforcement Settings</h2>
          <p className="mfa-section-description">Configure multi-factor authentication requirements for your organization</p>
          <div className="mfa-toggle-wrapper">
            <div className="mfa-toggle-label">Enabled</div>
            <div className="mfa-toggle-switch">
              <input
                type="checkbox"
                checked={formData.mfaEnabled}
                onChange={() => handleCheckboxChange('mfaEnabled')}
                className="mfa-toggle-input"
              />
              <div className="mfa-toggle-thumb" />
            </div>
          </div>
        </div>

        {/* Enforcement Level Section */}
        <div className="mfa-enforcement-section">
          <div className="mfa-section-box">
            <div className="mfa-box-header">
              <div className="mfa-box-icon mfa-icon-blue">
                <FiCheck size={16} />
              </div>
              <h3 className="mfa-box-title">Enforcement Level</h3>
            </div>
            
            <div className="mfa-option">
              <input
                type="radio"
                id="mandatory"
                name="enforcement"
                checked={formData.enforcementLevel === 'mandatory'}
                onChange={() => handleRadioChange('enforcementLevel', 'mandatory')}
                className="mfa-radio"
              />
              <label htmlFor="mandatory" className="mfa-option-label">
                <span className="mfa-option-title">Mandatory for All Users</span>
                <span className="mfa-option-description">All users must enable MFA</span>
              </label>
            </div>

            <div className="mfa-option">
              <input
                type="radio"
                id="roleBased"
                name="enforcement"
                checked={formData.enforcementLevel === 'roleBased'}
                onChange={() => handleRadioChange('enforcementLevel', 'roleBased')}
                className="mfa-radio"
              />
              <label htmlFor="roleBased" className="mfa-option-label">
                <span className="mfa-option-title">Role-Based Enforcement</span>
                <span className="mfa-option-description">MFA required for specific roles only</span>
              </label>
            </div>

            <div className="mfa-option">
              <input
                type="radio"
                id="optional"
                name="enforcement"
                checked={formData.enforcementLevel === 'optional'}
                onChange={() => handleRadioChange('enforcementLevel', 'optional')}
                className="mfa-radio"
              />
              <label htmlFor="optional" className="mfa-option-label">
                <span className="mfa-option-title">Optional</span>
                <span className="mfa-option-description">Users can enable MFA voluntarily</span>
              </label>
            </div>
          </div>

          {/* Grace Period Settings */}
          <div className="mfa-section-box">
            <div className="mfa-box-header">
              <div className="mfa-box-icon mfa-icon-orange">
                <FiAlertTriangle size={16} />
              </div>
              <h3 className="mfa-box-title">Grace Period Settings</h3>
            </div>

            <div className="mfa-setting-group">
              <label className="mfa-setting-label">Setup Grace Period</label>
              <select
                value={formData.setupGracePeriod}
                onChange={(e) => handleSelectChange('setupGracePeriod', e.target.value)}
                className="mfa-select"
              >
                <option>3 days</option>
                <option>7 days</option>
                <option>14 days</option>
              </select>
            </div>

            <div className="mfa-setting-group">
              <label className="mfa-setting-label">Backup Codes</label>
              <select
                value={formData.backupCodes}
                onChange={(e) => handleSelectChange('backupCodes', e.target.value)}
                className="mfa-select"
              >
                <option>Generate automatically</option>
                <option>Manual generation</option>
                <option>Disabled</option>
              </select>
            </div>
          </div>
        </div>

        {/* Allowed MFA Methods Section */}
        <div className="mfa-methods-section">
          <div className="mfa-section-box">
            <div className="mfa-box-header">
              <div className="mfa-box-icon mfa-icon-purple">
                <FiCheck size={16} />
              </div>
              <h3 className="mfa-box-title">Allowed MFA Methods</h3>
            </div>

            <div className="mfa-checkbox-group">
              <input
                type="checkbox"
                id="authenticator"
                checked={formData.allowAuthenticatorApps}
                onChange={() => handleCheckboxChange('allowAuthenticatorApps')}
                className="mfa-checkbox"
              />
              <label htmlFor="authenticator" className="mfa-checkbox-label">
                <span className="mfa-method-title">Authenticator Apps</span>
                <span className="mfa-method-description">Google Auth, Authy, Microsoft Auth</span>
              </label>
            </div>

            <div className="mfa-checkbox-group">
              <input
                type="checkbox"
                id="sms"
                checked={formData.allowSMS}
                onChange={() => handleCheckboxChange('allowSMS')}
                className="mfa-checkbox"
              />
              <label htmlFor="sms" className="mfa-checkbox-label">
                <span className="mfa-method-title">SMS Verification</span>
                <span className="mfa-method-description">Text message codes</span>
              </label>
            </div>

            <div className="mfa-checkbox-group">
              <input
                type="checkbox"
                id="email"
                checked={formData.allowEmail}
                onChange={() => handleCheckboxChange('allowEmail')}
                className="mfa-checkbox"
              />
              <label htmlFor="email" className="mfa-checkbox-label">
                <span className="mfa-method-title">Email Verification</span>
                <span className="mfa-method-description">Email-based codes</span>
              </label>
            </div>

            <div className="mfa-checkbox-group">
              <input
                type="checkbox"
                id="hardware"
                checked={formData.allowHardwareTokens}
                onChange={() => handleCheckboxChange('allowHardwareTokens')}
                className="mfa-checkbox"
              />
              <label htmlFor="hardware" className="mfa-checkbox-label">
                <span className="mfa-method-title">Hardware Tokens</span>
                <span className="mfa-method-description">FIDO2, YubiKey</span>
              </label>
            </div>
          </div>

          {/* Trusted Devices Section */}
          <div className="mfa-section-box">
            <div className="mfa-box-header">
              <div className="mfa-box-icon mfa-icon-green">
                <FiCheck size={16} />
              </div>
              <h3 className="mfa-box-title">Trusted Devices</h3>
            </div>

            <div className="mfa-checkbox-group">
              <input
                type="checkbox"
                id="deviceTrust"
                checked={formData.allowDeviceTrust}
                onChange={() => handleCheckboxChange('allowDeviceTrust')}
                className="mfa-checkbox"
              />
              <label htmlFor="deviceTrust" className="mfa-checkbox-label">
                <span className="mfa-method-title">Allow Device Trust</span>
                <span className="mfa-method-description">Users can mark devices as trusted</span>
              </label>
            </div>

            <div className="mfa-setting-group">
              <label className="mfa-setting-label">Trust Duration</label>
              <select
                value={formData.trustDuration}
                onChange={(e) => handleSelectChange('trustDuration', e.target.value)}
                className="mfa-select"
              >
                <option>7 days</option>
                <option>14 days</option>
                <option>30 days</option>
                <option>60 days</option>
              </select>
            </div>
          </div>
        </div>

        {/* Impact Preview Section */}
        <div className="mfa-impact-preview">
          <div className="mfa-impact-header">
            <FiCheck size={16} />
            <h3>Impact Preview</h3>
          </div>
          
          <div className="mfa-impact-grid">
            <div className="mfa-impact-card">
              <div className="mfa-impact-icon mfa-icon-blue">
                <FiCheck size={20} />
              </div>
              <div className="mfa-impact-label">Total Users</div>
              <div className="mfa-impact-value">247</div>
              <div className="mfa-impact-description">Will be affected by this policy</div>
            </div>

            <div className="mfa-impact-card">
              <div className="mfa-impact-icon mfa-icon-green">
                <FiCheck size={20} />
              </div>
              <div className="mfa-impact-label">Already Enabled</div>
              <div className="mfa-impact-value">89</div>
              <div className="mfa-impact-description">Users with MFA already configured</div>
            </div>

            <div className="mfa-impact-card">
              <div className="mfa-impact-icon mfa-icon-orange">
                <FiAlertTriangle size={20} />
              </div>
              <div className="mfa-impact-label">Need Setup</div>
              <div className="mfa-impact-value">158</div>
              <div className="mfa-impact-description">Users requiring MFA setup</div>
            </div>
          </div>
        </div>

        {/* Footer Buttons */}
        <div className="mfa-footer">
          <button className="mfa-btn-preview">
            <FiCheck size={16} />
            Preview Impact
          </button>
          <button className="mfa-btn-enable">
            <FiCheck size={16} />
            Enable Enforcement
          </button>
          <button className="mfa-btn-save-policy">
            <FiCheck size={16} />
            Save Policy
          </button>
        </div>
      </div>
    </div>
  )
}

export default EditMFAPolicyPage
