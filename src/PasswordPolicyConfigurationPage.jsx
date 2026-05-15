import { useState } from 'react'
import {
  FiAlertTriangle,
  FiArrowLeft,
  FiCheck,
  FiClock,
  FiKey,
  FiLock,
  FiShield,
  FiUser,
  FiZap
} from 'react-icons/fi'
import './password-policy-configuration.css'

function ToggleRow({ icon, title, description, checked, onChange, iconClass }) {
  return (
    <div className="ppc-toggle-row">
      <div className="ppc-toggle-left">
        <span className={`ppc-toggle-icon ${iconClass}`}>{icon}</span>
        <div>
          <p className="ppc-row-title">{title}</p>
          <p className="ppc-row-desc">{description}</p>
        </div>
      </div>
      <label className="ppc-switch" aria-label={title}>
        <input type="checkbox" checked={checked} onChange={onChange} />
        <span className="ppc-slider" />
      </label>
    </div>
  )
}

function PasswordPolicyConfigurationPage({ onBack }) {
  const [uppercase, setUppercase] = useState(true)
  const [lowercase, setLowercase] = useState(true)
  const [numbers, setNumbers] = useState(true)
  const [specialChars, setSpecialChars] = useState(true)

  const [commonPasswordDetection, setCommonPasswordDetection] = useState(true)
  const [personalInfoCheck, setPersonalInfoCheck] = useState(true)
  const [breachCheck, setBreachCheck] = useState(false)

  return (
    <div className="ppc-screen">
      <header className="ppc-header">
        <div>
          <h1 className="ppc-title">Password Policy Configuration</h1>
          <div className="ppc-breadcrumbs">
            <span>Security Policies</span>
            <span className="ppc-crumb-sep">&gt;</span>
            <span className="ppc-crumb-active">Password Policy</span>
          </div>
        </div>
        <div className="ppc-header-actions">
          <button className="ppc-btn-back" onClick={onBack}>
            <FiArrowLeft size={14} />
            Back
          </button>
          <button className="ppc-btn-save">Save Changes</button>
        </div>
      </header>

      <section className="ppc-summary-card">
        <div className="ppc-summary-left">
          <div className="ppc-summary-icon">
            <FiLock size={16} />
          </div>
          <div>
            <h2>Password Policy</h2>
            <p>Configure password complexity and security requirements</p>
            <div className="ppc-summary-meta">
              <span>
                <i className="ppc-status-dot" />
                Active
              </span>
              <span>Affects 247 users</span>
              <span>Last updated 2 days ago</span>
            </div>
          </div>
        </div>
        <div className="ppc-summary-actions">
          <button className="ppc-btn-outline-blue">Preview Impact</button>
          <button className="ppc-btn-solid-blue">Apply Policy</button>
        </div>
      </section>

      <section className="ppc-form-card">
        <div className="ppc-section">
          <h3>Password Requirements</h3>

          <div className="ppc-subsection">
            <h4>Basic Requirements</h4>
            <div className="ppc-fields-grid">
              <div className="ppc-field">
                <label>Minimum Length</label>
                <input type="text" value="8" readOnly />
                <span className="ppc-help">At least 8 characters</span>
              </div>
              <div className="ppc-field">
                <label>Maximum Length</label>
                <input type="text" value="128" readOnly />
              </div>
            </div>
          </div>

          <div className="ppc-subsection">
            <h4>Complexity Rules</h4>
            <div className="ppc-toggles">
              <ToggleRow
                icon={<FiZap size={13} />}
                title="Uppercase Letters"
                description="Require at least one uppercase letter"
                checked={uppercase}
                onChange={() => setUppercase((v) => !v)}
                iconClass="blue"
              />
              <ToggleRow
                icon={<FiKey size={13} />}
                title="Lowercase Letters"
                description="Require at least one lowercase letter"
                checked={lowercase}
                onChange={() => setLowercase((v) => !v)}
                iconClass="indigo"
              />
              <ToggleRow
                icon={<FiCheck size={13} />}
                title="Numbers"
                description="Require at least one numeric value"
                checked={numbers}
                onChange={() => setNumbers((v) => !v)}
                iconClass="green"
              />
              <ToggleRow
                icon={<FiAlertTriangle size={13} />}
                title="Special Characters"
                description="Require special character (e.g. !@#$%^&*)"
                checked={specialChars}
                onChange={() => setSpecialChars((v) => !v)}
                iconClass="red"
              />
            </div>
          </div>
        </div>

        <div className="ppc-divider" />

        <div className="ppc-section">
          <h3>Security Settings</h3>
          <div className="ppc-fields-grid two-rows">
            <div className="ppc-field">
              <label>Password Expiration</label>
              <input type="text" value="90 days" readOnly />
            </div>
            <div className="ppc-field">
              <label>Password History</label>
              <input type="text" value="Last 5 passwords" readOnly />
            </div>
            <div className="ppc-field">
              <label>Account Lockout</label>
              <input type="text" value="After 5 attempts" readOnly />
            </div>
            <div className="ppc-field">
              <label>Lockout Duration</label>
              <input type="text" value="30 minutes" readOnly />
            </div>
          </div>
        </div>

        <div className="ppc-divider" />

        <div className="ppc-section">
          <h3>Advanced Options</h3>
          <div className="ppc-toggles">
            <ToggleRow
              icon={<FiShield size={13} />}
              title="Common Password Detection"
              description="Block common and weak passwords"
              checked={commonPasswordDetection}
              onChange={() => setCommonPasswordDetection((v) => !v)}
              iconClass="purple"
            />
            <ToggleRow
              icon={<FiUser size={13} />}
              title="Personal Information Check"
              description="Reject passwords containing profile details"
              checked={personalInfoCheck}
              onChange={() => setPersonalInfoCheck((v) => !v)}
              iconClass="teal"
            />
            <ToggleRow
              icon={<FiClock size={13} />}
              title="Breach Database Check"
              description="Check password against known breach lists"
              checked={breachCheck}
              onChange={() => setBreachCheck((v) => !v)}
              iconClass="gray"
            />
          </div>
        </div>

        <div className="ppc-divider" />

        <div className="ppc-section">
          <h3>Policy Impact Preview</h3>
          <div className="ppc-impact-wrap">
            <div className="ppc-impact-card">
              <p className="ppc-impact-label">Affected Users</p>
              <p className="ppc-impact-value">247</p>
            </div>
            <div className="ppc-impact-card">
              <p className="ppc-impact-label">Password Resets Required</p>
              <p className="ppc-impact-value orange">89</p>
            </div>
            <div className="ppc-impact-card">
              <p className="ppc-impact-label">Estimated Compliance</p>
              <p className="ppc-impact-value green">64%</p>
            </div>
          </div>
        </div>

        <div className="ppc-footer-actions">
          <button className="ppc-footer-btn blue">Save Policy</button>
          <button className="ppc-footer-btn green">Save &amp; Apply Now</button>
        </div>
      </section>
    </div>
  )
}

export default PasswordPolicyConfigurationPage
