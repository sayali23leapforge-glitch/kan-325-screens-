import { FiShield, FiCheckCircle, FiLoader, FiClock, FiInfo } from 'react-icons/fi'
import { useNavigate } from 'react-router-dom'
import './hr-access-revoke-modal.css'

function HRAccessRevokeModal({ isOpen, onClose, employee }) {
  const navigate = useNavigate()

  if (!isOpen) return null

  const handleViewAuditLog = () => {
    onClose()
    navigate('/audit')
  }

  const handleBackToDirectory = () => {
    onClose()
    navigate('/hrm/employees')
  }

  return (
    <div className="revoke-modal-overlay" role="presentation">
      <div className="revoke-modal-container" role="dialog" aria-modal="true" aria-label="HR Access Revoke Triggered">
        <div className="revoke-modal-icon-wrap">
          <span className="revoke-modal-icon">
            <FiShield size={14} />
          </span>
        </div>

        <h3 className="revoke-modal-title">HR Access Revoke Triggered</h3>
        <p className="revoke-modal-subtitle">
          Employee access revocation is now in progress. All systems are being notified.
        </p>

        <div className="revoke-modal-employee-card">
          <img src={employee?.avatar || 'https://placehold.co/40x40'} alt={employee?.name || 'John Smith'} />
          <div>
            <div className="revoke-modal-employee-name">{employee?.name || 'John Smith'}</div>
            <div className="revoke-modal-employee-role">{employee?.title || 'Senior Software Engineer'}</div>
            <div className="revoke-modal-employee-status">ACCESS REVOKED</div>
          </div>
        </div>

        <div className="revoke-status-list">
          <div className="revoke-status-item green">
            <div className="revoke-status-text-wrap">
              <div className="revoke-status-title">Active Directory Access</div>
              <div className="revoke-status-subtitle">Revoked successfully</div>
            </div>
            <FiCheckCircle size={14} className="revoke-status-icon green" />
          </div>

          <div className="revoke-status-item green">
            <div className="revoke-status-text-wrap">
              <div className="revoke-status-title">Email & Communication Tools</div>
              <div className="revoke-status-subtitle">Access disabled</div>
            </div>
            <FiCheckCircle size={14} className="revoke-status-icon green" />
          </div>

          <div className="revoke-status-item yellow">
            <div className="revoke-status-text-wrap">
              <div className="revoke-status-title">VPN & Remote Access</div>
              <div className="revoke-status-subtitle">Processing...</div>
            </div>
            <FiLoader size={14} className="revoke-status-icon yellow spinning" />
          </div>

          <div className="revoke-status-item yellow">
            <div className="revoke-status-text-wrap">
              <div className="revoke-status-title">Application Permissions</div>
              <div className="revoke-status-subtitle">Revoking access...</div>
            </div>
            <FiLoader size={14} className="revoke-status-icon yellow spinning" />
          </div>

          <div className="revoke-status-item gray">
            <div className="revoke-status-text-wrap">
              <div className="revoke-status-title">Physical Access Cards</div>
              <div className="revoke-status-subtitle">Pending security team action</div>
            </div>
            <FiClock size={14} className="revoke-status-icon gray" />
          </div>
        </div>

        <div className="revoke-next-steps-box">
          <div className="revoke-next-steps-title">
            <FiInfo size={12} />
            <span>Next Steps:</span>
          </div>
          <p>
            Security team and IT department have been automatically notified. Manager notification
            will be sent within 5 minutes.
          </p>
        </div>

        <div className="revoke-modal-actions">
          <button type="button" className="revoke-audit-btn" onClick={handleViewAuditLog}>
            View Audit Log
          </button>
          <button type="button" className="revoke-back-btn" onClick={handleBackToDirectory}>
            Back to Directory
          </button>
        </div>
      </div>
    </div>
  )
}

export default HRAccessRevokeModal
