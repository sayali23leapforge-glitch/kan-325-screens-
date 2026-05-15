import { FiArrowLeft, FiCheckCircle, FiEye } from 'react-icons/fi'
import './password-policy-rules-saved.css'

function PasswordPolicyRulesSavedPage({ onBackToPolicies, onViewPolicy }) {
  return (
    <div className="pprs-page">
      {/* Header */}
      <header className="pprs-header">
        <div className="pprs-header-left">
          <h1 className="pprs-title">Password Policy Rules Saved</h1>
          <div className="pprs-breadcrumb">
            <span>Security Policies</span>
            <span className="pprs-crumb-sep">&gt;</span>
            <span>Password Policy</span>
            <span className="pprs-crumb-sep">&gt;</span>
            <span className="pprs-crumb-active">Rules Saved</span>
          </div>
        </div>
        <div className="pprs-header-actions">
          <button className="pprs-btn-outline" onClick={onBackToPolicies}>
            <FiArrowLeft size={14} />
            Back to Policies
          </button>
          <button className="pprs-btn-primary" onClick={onViewPolicy}>
            <FiEye size={14} />
            View Policy
          </button>
        </div>
      </header>

      {/* Success Alert */}
      <div className="pprs-alert-success">
        <FiCheckCircle size={16} className="pprs-alert-icon" />
        <div>
          <p className="pprs-alert-title">Password Policy Rules Successfully Saved</p>
          <p className="pprs-alert-subtitle">Changes have been applied and will take effect immediately for new passwords.</p>
        </div>
      </div>

      {/* Main Card */}
      <div className="pprs-card">

        {/* Policy Changes Applied */}
        <div className="pprs-section-header">
          <div>
            <h2 className="pprs-section-title">Policy Changes Applied</h2>
            <p className="pprs-section-sub">Summary of changes and impact on user accounts</p>
          </div>
          <span className="pprs-status-active">
            <span className="pprs-status-dot" />
            Active
          </span>
        </div>

        {/* 3 Impact Cards */}
        <div className="pprs-impact-grid">
          <div className="pprs-impact-card red">
            <p className="pprs-impact-label">Immediate Reset Required</p>
            <p className="pprs-impact-value">156 users</p>
            <p className="pprs-impact-desc">Non-compliant passwords must be reset at next login</p>
          </div>
          <div className="pprs-impact-card yellow">
            <p className="pprs-impact-label">Grace Period</p>
            <p className="pprs-impact-value">67 users</p>
            <p className="pprs-impact-desc">30 days to update passwords voluntarily</p>
          </div>
          <div className="pprs-impact-card green">
            <p className="pprs-impact-label">
              <FiCheckCircle size={13} style={{ marginRight: 4, verticalAlign: 'middle' }} />
              Compliant
            </p>
            <p className="pprs-impact-value">24 users</p>
            <p className="pprs-impact-desc">Already meet new requirements</p>
          </div>
        </div>

        {/* New Policy Requirements */}
        <h3 className="pprs-req-heading">
          <span className="pprs-req-icon">&#9776;</span>
          New Policy Requirements
        </h3>

        <div className="pprs-req-grid">
          {/* Length Requirements */}
          <div className="pprs-req-card blue-border">
            <p className="pprs-req-card-title blue-text">Length Requirements</p>
            <div className="pprs-req-row">
              <span>Minimum Length:</span>
              <span>12 characters</span>
            </div>
            <div className="pprs-req-row">
              <span>Maximum Length:</span>
              <span>64 characters</span>
            </div>
          </div>

          {/* Expiration & Security */}
          <div className="pprs-req-card orange-border">
            <p className="pprs-req-card-title orange-text">Expiration &amp; Security</p>
            <div className="pprs-req-row">
              <span>Password Expiration:</span>
              <span>60 days</span>
            </div>
            <div className="pprs-req-row">
              <span>Failed Attempts:</span>
              <span>3 attempts</span>
            </div>
            <div className="pprs-req-row">
              <span>Lockout Duration:</span>
              <span>1 hour</span>
            </div>
          </div>

          {/* Character Requirements */}
          <div className="pprs-req-card purple-border">
            <p className="pprs-req-card-title purple-text">Character Requirements</p>
            <div className="pprs-req-row">
              <span>Uppercase Letters:</span>
              <span>2 minimum</span>
            </div>
            <div className="pprs-req-row">
              <span>Lowercase Letters:</span>
              <span>1 minimum</span>
            </div>
            <div className="pprs-req-row">
              <span>Numbers:</span>
              <span>2 minimum</span>
            </div>
            <div className="pprs-req-row">
              <span>Special Characters:</span>
              <span>1 minimum</span>
            </div>
          </div>

          {/* Enforcement */}
          <div className="pprs-req-card gray-border">
            <p className="pprs-req-card-title gray-text">Enforcement</p>
            <div className="pprs-req-row">
              <span>Effective Date:</span>
              <span>Immediate</span>
            </div>
            <div className="pprs-req-row">
              <span>Apply to New Passwords:</span>
              <span className="pprs-check">✓</span>
            </div>
            <div className="pprs-req-row">
              <span>Force Reset Non-Compliant:</span>
              <span className="pprs-check">✓</span>
            </div>
          </div>
        </div>

        {/* Next Steps */}
        <div className="pprs-nextsteps">
          <p className="pprs-nextsteps-title">
            <span className="pprs-nextsteps-icon">&#9679;</span>
            Next Steps &amp; Recommendations
          </p>
          <div className="pprs-nextsteps-grid">
            <div className="pprs-nextstep-item">
              <span className="pprs-nextstep-num">1</span>
              <div>
                <p className="pprs-nextstep-label">User Notifications</p>
                <p className="pprs-nextstep-desc">Send email notifications to affected users about password requirements</p>
              </div>
            </div>
            <div className="pprs-nextstep-item">
              <span className="pprs-nextstep-num">3</span>
              <div>
                <p className="pprs-nextstep-label">Support Documentation</p>
                <p className="pprs-nextstep-desc">Update help documentation with new password guidelines</p>
              </div>
            </div>
            <div className="pprs-nextstep-item">
              <span className="pprs-nextstep-num">2</span>
              <div>
                <p className="pprs-nextstep-label">Monitor Compliance</p>
                <p className="pprs-nextstep-desc">Track password reset completion over the next 30 days</p>
              </div>
            </div>
            <div className="pprs-nextstep-item">
              <span className="pprs-nextstep-num">4</span>
              <div>
                <p className="pprs-nextstep-label">Review Impact</p>
                <p className="pprs-nextstep-desc">Schedule review in 7 days to assess adoption rates</p>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* Footer Buttons */}
      <div className="pprs-footer">
        <button className="pprs-footer-btn dark" onClick={onBackToPolicies}>
          &#9993; Send User Notifications
        </button>
        <button className="pprs-footer-btn orange">
          &#9656; View Compliance Report
        </button>
        <button className="pprs-footer-btn blue" onClick={onBackToPolicies}>
          &larr; Back to Policies
        </button>
      </div>
    </div>
  )
}

export default PasswordPolicyRulesSavedPage
