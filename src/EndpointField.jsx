import { useState } from 'react'
import './application-details.css'

function EndpointField({ label, value, onCopy }) {
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    if (onCopy) {
      onCopy()
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  }

  return (
    <div className="endpoint-field">
      <label className="endpoint-label">{label}</label>
      <div className="endpoint-input-wrapper">
        <input
          type="text"
          value={value}
          readOnly
          className="endpoint-input"
        />
        <button className="endpoint-copy-btn" onClick={handleCopy} title="Copy to clipboard">
          {copied ? '✓' : '📋'}
        </button>
      </div>
    </div>
  )
}

export default EndpointField
