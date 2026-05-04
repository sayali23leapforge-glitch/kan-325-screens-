import { useState } from 'react'
import './application-details.css'

function CredentialField({ label, value, isMasked = false, onCopy, onToggleVisibility, showToggle = false }) {
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    if (onCopy) {
      onCopy()
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  }

  return (
    <div className="credential-field">
      <label className="credential-label">{label}</label>
      <div className="credential-input-wrapper">
        <input
          type="text"
          value={isMasked ? '•'.repeat(value.length) : value}
          readOnly
          className="credential-input"
        />
        {showToggle && (
          <button className="credential-toggle-btn" onClick={onToggleVisibility} title="Toggle visibility">
            {isMasked ? '👁' : '👁‍🗨'}
          </button>
        )}
        <button className="credential-copy-btn" onClick={handleCopy} title="Copy to clipboard">
          {copied ? '✓' : '📋'}
        </button>
      </div>
    </div>
  )
}

export default CredentialField
