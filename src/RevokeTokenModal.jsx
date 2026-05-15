import { FiAlertTriangle, FiX } from 'react-icons/fi'
import './revoke-token-modal.css'

function RevokeTokenModal({ isOpen, onClose, onRevoke }) {
  if (!isOpen) return null

  return (
    <div className="rtm-overlay" onClick={onClose}>
      <div className="rtm-backdrop" />
      <div className="rtm-modal" onClick={(e) => e.stopPropagation()}>
        <button className="rtm-close-btn" onClick={onClose} aria-label="Close">
          <FiX size={18} />
        </button>

        <div className="rtm-icon">
          <FiAlertTriangle size={24} />
        </div>

        <h2 className="rtm-title">Revoke Token?</h2>

        <p className="rtm-description">
          Are you sure you want to revoke this token?<br />
          This action cannot be undone and will immediately<br />
          invalidate all API requests using this token.
        </p>

        <section className="rtm-token-details">
          <div className="rtm-detail-row">
            <span className="rtm-label">Name</span>
            <span className="rtm-value">Production API Key</span>
          </div>
          <div className="rtm-detail-row">
            <span className="rtm-label">ID</span>
            <span className="rtm-value">tok_prod_a8f3j2k9m1n4p7q2</span>
          </div>
          <div className="rtm-detail-row">
            <span className="rtm-label">Created</span>
            <span className="rtm-value">Dec 15, 2024</span>
          </div>
          <div className="rtm-detail-row">
            <span className="rtm-label">Last Used</span>
            <span className="rtm-value">2 hours ago</span>
          </div>
        </section>

        <section className="rtm-warning">
          <p>
            Revoking this token will affect 142,847 API requests that use this authentication. Make sure you have updated
            your applications before proceeding.
          </p>
        </section>

        <div className="rtm-actions">
          <button className="rtm-cancel-btn" type="button" onClick={onClose}>
            Cancel
          </button>
          <button className="rtm-revoke-btn" type="button" onClick={onRevoke}>
            Revoke Token
          </button>
        </div>
      </div>
    </div>
  )
}

export default RevokeTokenModal
