import { useState } from 'react'
import { FiAlertCircle } from 'react-icons/fi'
import './edit-password-policy-rules.css'

function EditPasswordPolicyRulesPage({ onBack, onSave }) {
  const [minLength, setMinLength] = useState(12)
  const [maxLength, setMaxLength] = useState(64)
  const [uppercaseRequired, setUppercaseRequired] = useState(true)
  const [lowercaseRequired, setLowercaseRequired] = useState(true)
  const [numbersRequired, setNumbersRequired] = useState(true)
  const [specialCharsRequired, setSpecialCharsRequired] = useState(true)
  const [passwordExpiration, setPasswordExpiration] = useState('60 days')
  const [failedAttempts, setFailedAttempts] = useState('3 attempts')
  const [lockoutDuration, setLockoutDuration] = useState('1 hour')

  return (
    <div className="edit-ppr-page">
      <div className="edit-ppr-header">
        <div className="edit-ppr-header-left">
          <div>
            <h1 className="edit-ppr-title">Edit Password Policy Rules</h1>
            <div className="edit-ppr-breadcrumb">
              <span>Security Policies</span><span className="edit-ppr-sep">›</span>
              <span>Password Policy</span><span className="edit-ppr-sep">›</span>
              <span className="edit-ppr-current">Edit Rules</span>
            </div>
          </div>
        </div>
        <div className="edit-ppr-header-actions">
          <button className="edit-ppr-btn-cancel" onClick={onBack}>Cancel</button>
          <button className="edit-ppr-btn-preview">Preview Changes</button>
          <button className="edit-ppr-btn-save" onClick={onSave}>Save Rules</button>
        </div>
      </div>

      <div className="edit-ppr-alert">
        <FiAlertCircle size={20} color="#EA580C" style={{ flexShrink: 0, marginTop: 2 }} />
        <div>
          <p className="edit-ppr-alert-title">Editing Password Policy Rules</p>
          <p className="edit-ppr-alert-desc">Changes will affect <strong>247 users</strong>. Preview impact before applying.</p>
        </div>
      </div>

      <div className="edit-ppr-card">
        <div className="edit-ppr-card-header">
          <h2 className="edit-ppr-card-title">Password Rule Configuration</h2>
          <p className="edit-ppr-card-subtitle">Define the password requirements for all users in your organization</p>
        </div>

        <div className="edit-ppr-section">
          <h3 className="edit-ppr-section-title">Length Requirements <span className="edit-ppr-badge">Modified</span></h3>
          <div className="edit-ppr-length-grid">
            <div className="edit-ppr-length-field">
              <label className="edit-ppr-label">Minimum Length</label>
              <p className="edit-ppr-desc">Minimum number of characters required</p>
              <div className="edit-ppr-slider-row">
                <input type="range" min={6} max={32} value={minLength} onChange={e => setMinLength(Number(e.target.value))} className="edit-ppr-slider" />
                <span className="edit-ppr-slider-val">{minLength}</span>
              </div>
              <div className="edit-ppr-slider-bounds"><span>6</span><span>32</span></div>
              <div className="edit-ppr-value-card blue">
                <strong>{minLength} characters</strong>
                <span>Current: 8 characters</span>
              </div>
            </div>
            <div className="edit-ppr-length-field">
              <label className="edit-ppr-label">Maximum Length</label>
              <p className="edit-ppr-desc">Maximum number of characters allowed</p>
              <div className="edit-ppr-slider-row">
                <input type="range" min={32} max={256} value={maxLength} onChange={e => setMaxLength(Number(e.target.value))} className="edit-ppr-slider" />
                <span className="edit-ppr-slider-val">{maxLength}</span>
              </div>
              <div className="edit-ppr-slider-bounds"><span>32</span><span>256</span></div>
              <div className="edit-ppr-value-card purple">
                <strong>{maxLength} characters</strong>
                <span>Current: 128 characters</span>
              </div>
            </div>
          </div>
        </div>

        <div className="edit-ppr-divider" />

        <div className="edit-ppr-section">
          <h3 className="edit-ppr-section-title">Character Type Requirements <span className="edit-ppr-badge">Modified</span></h3>
          <div className="edit-ppr-char-grid">
            {[
              { key: 'upper', char: 'A', label: 'Uppercase Letters', desc: 'A-Z characters', color: '#2563EB', bg: '#EFF6FF', border: '#BFDBFE', checked: uppercaseRequired, toggle: () => setUppercaseRequired(v => !v) },
              { key: 'lower', char: 'a', label: 'Lowercase Letters', desc: 'a-z characters', color: '#A855F7', bg: '#F3E8FF', border: '#E9D5FF', checked: lowercaseRequired, toggle: () => setLowercaseRequired(v => !v) },
              { key: 'num',   char: '1', label: 'Numbers',           desc: '0-9 characters', color: '#16A34A', bg: '#DCFCE7', border: '#BBF7D0', checked: numbersRequired,  toggle: () => setNumbersRequired(v => !v) },
              { key: 'spec',  char: '@', label: 'Special Characters', desc: '!@#$%^&* etc.',  color: '#EF4444', bg: '#FEE2E2', border: '#FECACA', checked: specialCharsRequired, toggle: () => setSpecialCharsRequired(v => !v) }
            ].map(item => (
              <div key={item.key} className="edit-ppr-char-item" style={{ borderColor: item.border }}>
                <div className="edit-ppr-char-left">
                  <div className="edit-ppr-char-box" style={{ background: item.bg, color: item.color }}>{item.char}</div>
                  <div>
                    <p className="edit-ppr-char-label">{item.label}</p>
                    <p className="edit-ppr-char-desc">{item.desc}</p>
                  </div>
                </div>
                <div className="edit-ppr-char-right">
                  <label className="edit-ppr-toggle">
                    <input type="checkbox" checked={item.checked} onChange={item.toggle} className="edit-ppr-toggle-input" />
                    <span className="edit-ppr-toggle-track" />
                  </label>
                  <div className="edit-ppr-min-wrap">
                    <span className="edit-ppr-min-label">Minimum</span>
                    <input type="number" min={1} max={10} defaultValue={1} className="edit-ppr-min-input" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="edit-ppr-divider" />

        <div className="edit-ppr-section">
          <h3 className="edit-ppr-section-title">Security &amp; Expiration Rules</h3>
          <div className="edit-ppr-security-grid">
            <div>
              <label className="edit-ppr-label">Password Expiration</label>
              <p className="edit-ppr-desc">How often users must change their password</p>
              <div className="edit-ppr-radio-group">
                {['30 days', '60 days', '90 days', 'Never expires'].map(opt => (
                  <label key={opt} className="edit-ppr-radio-item">
                    <input type="radio" name="expiration" value={opt} checked={passwordExpiration === opt} onChange={() => setPasswordExpiration(opt)} className="edit-ppr-radio-input" />
                    <span className="edit-ppr-radio-dot" />
                    <span className="edit-ppr-radio-label">{opt}</span>
                    {opt === '60 days' ? <span className="edit-ppr-radio-tag">Changed</span> : null}
                    {opt === '90 days' ? <span className="edit-ppr-radio-current">(current)</span> : null}
                  </label>
                ))}
              </div>
            </div>
            <div>
              <label className="edit-ppr-label">Account Lockout Policy</label>
              <p className="edit-ppr-desc">Lock account after failed login attempts</p>
              <div className="edit-ppr-lockout-fields">
                <div>
                  <span className="edit-ppr-min-label">Failed Attempts Before Lockout</span>
                  <input type="text" value={failedAttempts} onChange={e => setFailedAttempts(e.target.value)} className="edit-ppr-lockout-input" />
                </div>
                <div>
                  <span className="edit-ppr-min-label">Lockout Duration</span>
                  <input type="text" value={lockoutDuration} onChange={e => setLockoutDuration(e.target.value)} className="edit-ppr-lockout-input" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="edit-ppr-divider" />

        <div className="edit-ppr-section edit-ppr-impact-section">
          <h3 className="edit-ppr-section-title">Rule Validation &amp; Impact</h3>
          <p className="edit-ppr-desc" style={{ marginBottom: 16 }}>Current password compliance status based on proposed rules</p>
          <div className="edit-ppr-impact-grid">
            <div className="edit-ppr-impact-card" style={{ borderLeftColor: '#F87171' }}>
              <p className="edit-ppr-impact-num">156</p>
              <p className="edit-ppr-impact-label">Non-Compliant Users</p>
              <p className="edit-ppr-impact-desc">Will be required to reset password</p>
            </div>
            <div className="edit-ppr-impact-card" style={{ borderLeftColor: '#FACC15' }}>
              <p className="edit-ppr-impact-num">67</p>
              <p className="edit-ppr-impact-label">Partially Compliant</p>
              <p className="edit-ppr-impact-desc">Meet most but not all requirements</p>
            </div>
            <div className="edit-ppr-impact-card" style={{ borderLeftColor: '#4ADE80' }}>
              <p className="edit-ppr-impact-num">24</p>
              <p className="edit-ppr-impact-label">Fully Compliant</p>
              <p className="edit-ppr-impact-desc">Already meet all new requirements</p>
            </div>
          </div>
        </div>
      </div>

      <div className="edit-ppr-footer">
        <button className="edit-ppr-footer-btn edit-ppr-footer-reset">Reset to Defaults</button>
        <button className="edit-ppr-footer-btn edit-ppr-footer-preview">Preview Impact</button>
        <button className="edit-ppr-footer-btn edit-ppr-footer-save" onClick={onSave}>Save Rules</button>
      </div>
    </div>
  )
}

export default EditPasswordPolicyRulesPage
