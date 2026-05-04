import './create-application-configuration.css'

function TokenSettingsSection({ settings = {}, onSettingsChange }) {
  const defaultSettings = {
    accessTokenExpiry: 3600,
    refreshTokenExpiry: 2592000,
    idTokenExpiry: 3600,
    authCodeExpiry: 60,
  }

  const currentSettings = { ...defaultSettings, ...settings }

  const handleSettingChange = (key, value) => {
    const numValue = value === '' ? '' : parseInt(value) || 0
    if (numValue === '' || numValue > 0) {
      onSettingsChange({
        ...currentSettings,
        [key]: numValue === '' ? '' : numValue
      })
    }
  }

  return (
    <div className="token-settings-section">
      <div className="section-header">
        <label className="section-label">Token Expiration Settings</label>
        <p className="section-helper-text">Configure how long tokens remain valid after issuance</p>
      </div>

      <div className="token-settings-grid">
        <div className="token-setting-field">
          <div className="token-setting-header">
            <label htmlFor="accessTokenExpiry" className="token-label">
              Access Token Expiration
              <span className="required"> *</span>
            </label>
            <span className="token-unit">seconds</span>
          </div>
          <input
            id="accessTokenExpiry"
            type="number"
            value={currentSettings.accessTokenExpiry}
            onChange={(e) => handleSettingChange('accessTokenExpiry', e.target.value)}
            className="token-input"
            min="1"
            placeholder="3600"
          />
          <p className="token-helper">How long the access token is valid</p>
        </div>

        <div className="token-setting-field">
          <div className="token-setting-header">
            <label htmlFor="refreshTokenExpiry" className="token-label">
              Refresh Token Expiration
              <span className="required"> *</span>
            </label>
            <span className="token-unit">seconds</span>
          </div>
          <input
            id="refreshTokenExpiry"
            type="number"
            value={currentSettings.refreshTokenExpiry}
            onChange={(e) => handleSettingChange('refreshTokenExpiry', e.target.value)}
            className="token-input"
            min="1"
            placeholder="2592000"
          />
          <p className="token-helper">How long the refresh token is valid (30 days = 2,592,000 seconds)</p>
        </div>

        <div className="token-setting-field">
          <div className="token-setting-header">
            <label htmlFor="idTokenExpiry" className="token-label">
              ID Token Expiration
            </label>
            <span className="token-unit">seconds</span>
          </div>
          <input
            id="idTokenExpiry"
            type="number"
            value={currentSettings.idTokenExpiry}
            onChange={(e) => handleSettingChange('idTokenExpiry', e.target.value)}
            className="token-input"
            min="1"
            placeholder="3600"
          />
          <p className="token-helper">How long the ID token is valid</p>
        </div>

        <div className="token-setting-field">
          <div className="token-setting-header">
            <label htmlFor="authCodeExpiry" className="token-label">
              Authorization Code Expiration
            </label>
            <span className="token-unit">seconds</span>
          </div>
          <input
            id="authCodeExpiry"
            type="number"
            value={currentSettings.authCodeExpiry}
            onChange={(e) => handleSettingChange('authCodeExpiry', e.target.value)}
            className="token-input"
            min="1"
            placeholder="60"
          />
          <p className="token-helper">How long the authorization code is valid</p>
        </div>
      </div>
    </div>
  )
}

export default TokenSettingsSection
