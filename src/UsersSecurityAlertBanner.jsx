import { FiAlertCircle, FiCheckCircle, FiMail } from 'react-icons/fi'

function UsersSecurityAlertBanner() {
  return (
    <div className="users-security-alert-banner">
      <div className="alert-content-wrapper">
        <div className="alert-icon-section">
          <div className="alert-icon-box">
            <FiAlertCircle size={24} color="white" />
          </div>
        </div>
        
        <div className="alert-text-section">
          <h3 className="alert-title">Security Alert: MFA Disabled Users</h3>
          <span className="alert-badge">WARNING</span>
          <p className="alert-description">
            38 users have Multi-Factor Authentication disabled, making their accounts vulnerable to unauthorized access.
          </p>
          
          <div className="alert-actions">
            <button className="btn-enable-mfa">
              <FiCheckCircle size={16} />
              Enable MFA for All
            </button>
            <button className="btn-send-reminder">
              <FiMail size={16} />
              Send Reminder Email
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UsersSecurityAlertBanner
