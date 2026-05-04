import { FiCopy, FiEye, FiEyeOff } from 'react-icons/fi'
import { useState } from 'react'

function CopyButton({ value, label = 'Copy' }) {
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText(value)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <button
      className="copy-button"
      onClick={handleCopy}
      title={copied ? 'Copied!' : 'Copy to clipboard'}
    >
      <FiCopy size={14} />
      <span>{copied ? '✓' : label}</span>
    </button>
  )
}

export default CopyButton
