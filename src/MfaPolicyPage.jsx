import { useState } from 'react'
import {
  FiAlertTriangle,
  FiArrowLeft,
  FiCheck,
  FiKey,
  FiLock,
  FiShield,
  FiSmartphone
} from 'react-icons/fi'
import './mfa-policy-page.css'

function MfaPolicyPage({ onBack }) {
  const [mfaEnabled, setMfaEnabled] = useState(true)
  const [enforcementLevel, setEnforcementLevel] = useState('mandatory')
  const [allowAuthenticatorApps, setAllowAuthenticatorApps] = useState(true)
  const [allowSMS, setAllowSMS] = useState(true)
  const [allowEmail, setAllowEmail] = useState(false)
  const [allowHardwareTokens, setAllowHardwareTokens] = useState(true)
  const [allowDeviceTrust, setAllowDeviceTrust] = useState(true)

  return (
    <div className="mfa-page">
      <header className="mfa-header">
        <div>
          <h1 className="mfa-title">Multi-Factor Authentication Policy</h1>
          <div className="mfa-breadcrumbs">
            <span>Security Policies</span>
            <span className="mfa-crumb-sep">&gt;</span>
            <span className="mfa-crumb-active">MFA Policy</span>
          </div>
        </div>
        <div className="mfa-header-actions">
          <button className="mfa-btn-back" onClick={onBack}>
            <FiArrowLeft size={13} />
            Back to Policies
          </button>
          <button className="mfa-btn-save">Save Changes</button>
        </div>
      </header>

      <div className="mfa-alert">
        <FiAlertTriangle size={14} color="#CA8A04" />
        <div>
          <p className="mfa-alert-title">MFA Policy Configuration</p>
          <p className="mfa-alert-desc">
            Enabling MFA enforcement will require all users to configure multi-factor authentication on their next login.
          </p>
        </div>
      </div>

      <section className="mfa-card">
        <div className="mfa-card-head">
          <div>
            <h2>MFA Enforcement Settings</h2>
            <p>Configure multi-factor authentication requirements for your organization</p>
          </div>
          <div className="mfa-master-toggle">
            <label className="mfa-switch" aria-label="Enable MFA enforcement">
              <input
                type="checkbox"
                checked={mfaEnabled}
                onChange={() => setMfaEnabled((v) => !v)}
              />
              <span className="mfa-slider" />
            </label>
            <span>Enabled</span>
          </div>
        </div>

        <div className="mfa-grid">
          <div className="mfa-col">
            <div className="mfa-panel blue">
              <h3>
                <FiShield size={12} />
                Enforcement Level
              </h3>
              <label className="mfa-radio-row">
                <input
                  type="radio"
                  name="enforcement"
                  checked={enforcementLevel === 'mandatory'}
                  onChange={() => setEnforcementLevel('mandatory')}
                />
                <span>Mandatory for All Users</span>
              </label>
              <p>All users must enable MFA</p>

              <label className="mfa-radio-row">
                <input
                  type="radio"
                  name="enforcement"
                  checked={enforcementLevel === 'role-based'}
                  onChange={() => setEnforcementLevel('role-based')}
                />
                <span>Role-Based Enforcement</span>
              </label>
              <p>MFA required for specific roles only</p>

              <label className="mfa-radio-row">
                <input
                  type="radio"
                  name="enforcement"
                  checked={enforcementLevel === 'optional'}
                  onChange={() => setEnforcementLevel('optional')}
                />
                <span>Optional</span>
              </label>
              <p>Users can enable MFA voluntarily</p>
            </div>

            <div className="mfa-panel purple">
              <h3>
                <FiSmartphone size={12} />
                Allowed MFA Methods
              </h3>

              <label className="mfa-check-row">
                <input
                  type="checkbox"
                  checked={allowAuthenticatorApps}
                  onChange={() => setAllowAuthenticatorApps((v) => !v)}
                />
                <span>Authenticator Apps</span>
              </label>
              <p>Google Authenticator, Microsoft Auth</p>

              <label className="mfa-check-row">
                <input
                  type="checkbox"
                  checked={allowSMS}
                  onChange={() => setAllowSMS((v) => !v)}
                />
                <span>SMS Verification</span>
              </label>
              <p>Text message codes</p>

              <label className="mfa-check-row">
                <input
                  type="checkbox"
                  checked={allowEmail}
                  onChange={() => setAllowEmail((v) => !v)}
                />
                <span>Email Verification</span>
              </label>
              <p>Email-based codes</p>

              <label className="mfa-check-row">
                <input
                  type="checkbox"
                  checked={allowHardwareTokens}
                  onChange={() => setAllowHardwareTokens((v) => !v)}
                />
                <span>Hardware Tokens</span>
              </label>
              <p>FIDO2, U2F keys</p>
            </div>
          </div>

          <div className="mfa-col">
            <div className="mfa-panel orange">
              <h3>
                <FiAlertTriangle size={12} />
                Grace Period Settings
              </h3>
              <label>Setup Grace Period</label>
              <input type="text" value="7 days" readOnly />
              <label>Backup Codes</label>
              <input type="text" value="Generate automatically" readOnly />
            </div>

            <div className="mfa-panel green">
              <h3>
                <FiCheck size={12} />
                Trusted Devices
              </h3>

              <label className="mfa-check-row">
                <input
                  type="checkbox"
                  checked={allowDeviceTrust}
                  onChange={() => setAllowDeviceTrust((v) => !v)}
                />
                <span>Allow Device Trust</span>
              </label>
              <p>Users can mark devices as trusted</p>

              <label>Trust Duration</label>
              <input type="text" value="30 days" readOnly />
            </div>
          </div>
        </div>

        <div className="mfa-impact-wrap">
          <h4>
            <FiKey size={11} />
            Impact Preview
          </h4>
          <div className="mfa-impact-grid">
            <div className="mfa-impact-card">
              <p className="mfa-impact-label">Total Users</p>
              <p className="mfa-impact-value blue">247</p>
              <p className="mfa-impact-sub">Will be affected by this policy</p>
            </div>
            <div className="mfa-impact-card">
              <p className="mfa-impact-label">Already Enabled</p>
              <p className="mfa-impact-value green">89</p>
              <p className="mfa-impact-sub">Users with MFA already configured</p>
            </div>
            <div className="mfa-impact-card">
              <p className="mfa-impact-label">Need Setup</p>
              <p className="mfa-impact-value orange">158</p>
              <p className="mfa-impact-sub">Users requiring MFA setup</p>
            </div>
          </div>
        </div>

        <div className="mfa-footer-actions">
          <button className="mfa-footer-btn gray">Preview Impact</button>
          <button className="mfa-footer-btn orange">Enable Enforcement</button>
          <button className="mfa-footer-btn blue">Save Policy</button>
        </div>
      </section>
    </div>
  )
}

export default MfaPolicyPage
