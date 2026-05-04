import { FiAlertTriangle } from 'react-icons/fi'
import CopyButton from './CopyButton'
import VisibilityToggle from './VisibilityToggle'
import { useState } from 'react'

function ClientCredentialsCard() {
  const [secretVisible, setSecretVisible] = useState(false)

  const clientId = 'ecom_dashboard_prod_8f7d2a4b9c1e'
  const clientSecret = 'sk_prod_9a8b7c6d5e4f3g2h1i0j9k8l7m6n5o4p'

  return (
    <div className="credentials-card">
      <div className="credentials-card-header">
        <h3 className="credentials-card-title">Client Credentials</h3>
        <span className="status-badge status-active">Active</span>
      </div>

      <div className="credentials-card-content">
        {/* Client ID */}
        <div className="credential-item">
          <label className="credential-label">Client ID</label>
          <div className="credential-input-group">
            <input
              type="text"
              className="credential-input"
              value={clientId}
              readOnly
            />
            <CopyButton value={clientId} label="Copy" />
          </div>
          <p className="credential-hint">Public identifier for your application</p>
        </div>

        {/* Client Secret */}
        <div className="credential-item">
          <label className="credential-label">Client Secret</label>
          <div className="credential-input-group">
            <input
              type={secretVisible ? 'text' : 'password'}
              className="credential-input"
              value={clientSecret}
              readOnly
            />
            <VisibilityToggle
              isVisible={secretVisible}
              onToggle={() => setSecretVisible(!secretVisible)}
            />
            <CopyButton value={clientSecret} label="Copy" />
          </div>
          <p className="credential-hint">Keep this secret secure and never expose it in client-side code</p>
        </div>

        {/* Security Notice */}
        <div className="security-notice">
          <div className="security-notice-header">
            <FiAlertTriangle size={18} />
            <p className="security-notice-title">Security Notice</p>
          </div>
          <p className="security-notice-text">
            Your client secret was last rotated on March 5, 2024. For security purposes, consider rotating it regularly.
          </p>
          <button className="btn-rotate-secret">Rotate Secret</button>
        </div>
      </div>
    </div>
  )
}

export default ClientCredentialsCard
