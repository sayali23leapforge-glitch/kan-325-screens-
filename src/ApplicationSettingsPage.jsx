import { useState } from 'react'
import SettingsCard from './SettingsCard'
import UriListField from './UriListField'
import GrantTypeOption from './GrantTypeOption'
import StatusCard from './StatusCard'
import AdvancedOptionsCard from './AdvancedOptionsCard'
import DangerZoneCard from './DangerZoneCard'
import './application-settings.css'

function ApplicationSettingsPage() {
  // Mock application data
  const applicationData = {
    id: '1',
    name: 'E-Commerce Dashboard',
    environment: 'Production Application',
    description: 'Main e-commerce platform for customer-facing transactions and product management.',
    type: 'Single Page Application',
    environment_type: 'Production'
  }

  // State management
  const [formData, setFormData] = useState({
    name: applicationData.name,
    description: applicationData.description,
    type: applicationData.type,
    environment: applicationData.environment_type
  })

  const [redirectUris, setRedirectUris] = useState([
    'https://app.ecommerce.com/callback',
    'https://app.ecommerce.com/auth/callback'
  ])

  const [logoutUris, setLogoutUris] = useState([
    'https://app.ecommerce.com/logout'
  ])

  const [grantTypes, setGrantTypes] = useState({
    authCode: true,
    refreshToken: true,
    clientCredentials: false
  })

  const [tokenSettings, setTokenSettings] = useState({
    accessTokenLifetime: 3600,
    refreshTokenLifetime: 2592000,
    tokenEndpointAuthMethod: 'Client Secret Post',
    rotateRefreshTokens: true
  })

  const [isActive, setIsActive] = useState(true)

  const [advancedOptions, setAdvancedOptions] = useState({
    enablePKCE: { title: 'Enable PKCE', subtitle: 'Proof Key for Code Exchange', checked: false },
    requireConsent: { title: 'Require Consent', subtitle: 'Ask user permission', checked: true },
    allowOfflineAccess: { title: 'Allow Offline Access', subtitle: 'Issue refresh tokens', checked: true }
  })

  // Handlers
  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const handleAddRedirectUri = () => {
    setRedirectUris([...redirectUris, 'https://'])
  }

  const handleRemoveRedirectUri = (index) => {
    setRedirectUris(redirectUris.filter((_, i) => i !== index))
  }

  const handleAddLogoutUri = () => {
    setLogoutUris([...logoutUris, 'https://'])
  }

  const handleRemoveLogoutUri = (index) => {
    setLogoutUris(logoutUris.filter((_, i) => i !== index))
  }

  const handleGrantTypeChange = (type) => {
    setGrantTypes(prev => ({ ...prev, [type]: !prev[type] }))
  }

  const handleTokenSettingChange = (field, value) => {
    setTokenSettings(prev => ({ ...prev, [field]: value }))
  }

  const handleAdvancedOptionChange = (key, value) => {
    setAdvancedOptions(prev => ({
      ...prev,
      [key]: { ...prev[key], checked: value }
    }))
  }

  const handleSaveChanges = () => {
    console.log('Saving changes...', {
      formData,
      redirectUris,
      logoutUris,
      grantTypes,
      tokenSettings,
      isActive,
      advancedOptions
    })
  }

  const handleCancel = () => {
    console.log('Cancelled')
  }

  const handleResetConfiguration = () => {
    console.log('Reset configuration')
  }

  const handleDeleteApplication = () => {
    console.log('Delete application')
  }

  return (
    <div className="settings-content">
      {/* Main Grid */}
      <div className="settings-grid">
        {/* Left Column */}
        <div className="settings-left-column">
          {/* Basic Information */}
          <SettingsCard title="Basic Information">
            <div className="form-group">
              <label className="settings-label">Application Name</label>
              <input
                type="text"
                className="settings-input"
                value={formData.name}
                onChange={(e) => handleInputChange('name', e.target.value)}
              />
            </div>
            <div className="form-group">
              <label className="settings-label">Description</label>
              <textarea
                className="settings-textarea"
                rows="3"
                value={formData.description}
                onChange={(e) => handleInputChange('description', e.target.value)}
              />
            </div>
            <div className="form-row">
              <div className="form-group">
                <label className="settings-label">Application Type</label>
                <input
                  type="text"
                  className="settings-input"
                  value={formData.type}
                  readOnly
                />
              </div>
              <div className="form-group">
                <label className="settings-label">Environment</label>
                <input
                  type="text"
                  className="settings-input"
                  value={formData.environment}
                  readOnly
                />
              </div>
            </div>
          </SettingsCard>

          {/* OAuth 2.0 Settings */}
          <SettingsCard title="OAuth 2.0 Settings">
            <UriListField
              label="Redirect URIs"
              uris={redirectUris}
              onAdd={handleAddRedirectUri}
              onRemove={handleRemoveRedirectUri}
            />
            <div className="settings-spacing"></div>
            <UriListField
              label="Logout URIs"
              uris={logoutUris}
              onAdd={handleAddLogoutUri}
              onRemove={handleRemoveLogoutUri}
            />
            <div className="grant-types-section">
              <label className="settings-label">Allowed Grant Types</label>
              <GrantTypeOption
                title="Authorization Code"
                subtitle="Most secure flow for web applications"
                checked={grantTypes.authCode}
                onChange={() => handleGrantTypeChange('authCode')}
              />
              <GrantTypeOption
                title="Refresh Token"
                subtitle="Allow token refresh without re-authentication"
                checked={grantTypes.refreshToken}
                onChange={() => handleGrantTypeChange('refreshToken')}
              />
              <GrantTypeOption
                title="Client Credentials"
                subtitle="For machine-to-machine authentication"
                checked={grantTypes.clientCredentials}
                onChange={() => handleGrantTypeChange('clientCredentials')}
              />
            </div>
          </SettingsCard>

          {/* Token Settings */}
          <SettingsCard title="Token Settings">
            <div className="form-row">
              <div className="form-group">
                <label className="settings-label">Access Token Lifetime</label>
                <div className="input-with-unit">
                  <input
                    type="number"
                    className="settings-input"
                    value={tokenSettings.accessTokenLifetime}
                    onChange={(e) => handleTokenSettingChange('accessTokenLifetime', e.target.value)}
                  />
                  <span className="unit-label">seconds</span>
                </div>
              </div>
              <div className="form-group">
                <label className="settings-label">Refresh Token Lifetime</label>
                <div className="input-with-unit">
                  <input
                    type="number"
                    className="settings-input"
                    value={tokenSettings.refreshTokenLifetime}
                    onChange={(e) => handleTokenSettingChange('refreshTokenLifetime', e.target.value)}
                  />
                  <span className="unit-label">seconds</span>
                </div>
              </div>
            </div>
            <div className="form-group">
              <label className="settings-label">Token Endpoint Auth Method</label>
              <input
                type="text"
                className="settings-input"
                value={tokenSettings.tokenEndpointAuthMethod}
                readOnly
              />
            </div>
            <div className="token-checkbox-row">
              <input
                type="checkbox"
                className="token-checkbox"
                checked={tokenSettings.rotateRefreshTokens}
                onChange={(e) => handleTokenSettingChange('rotateRefreshTokens', e.target.checked)}
                id="rotate-tokens"
              />
              <label htmlFor="rotate-tokens" className="token-checkbox-label">
                <p className="token-checkbox-title">Rotate Refresh Tokens</p>
                <p className="token-checkbox-subtitle">Issue new refresh token on each use</p>
              </label>
            </div>
          </SettingsCard>
        </div>

        {/* Right Column */}
        <div className="settings-right-column">
          {/* Status Card */}
          <StatusCard
            isActive={isActive}
            onToggle={() => setIsActive(!isActive)}
            created="Jan 15, 2024"
            lastModified="Mar 11, 2024"
            modifiedBy="John Doe"
          />

          {/* Advanced Options */}
          <AdvancedOptionsCard
            options={advancedOptions}
            onChange={handleAdvancedOptionChange}
          />

          {/* Danger Zone */}
          <DangerZoneCard
            onResetConfiguration={handleResetConfiguration}
            onDeleteApplication={handleDeleteApplication}
          />
        </div>
      </div>

      {/* Footer Actions */}
      <div className="settings-footer">
        <button className="btn-primary-orange" onClick={handleSaveChanges}>
          Save Changes
        </button>
        <button className="btn-secondary" onClick={handleCancel}>
          Cancel
        </button>
      </div>
    </div>
  )
}

export default ApplicationSettingsPage
