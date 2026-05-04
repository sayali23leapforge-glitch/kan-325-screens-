import { useEffect } from 'react'
import { FiLogOut, FiShield } from 'react-icons/fi'
import './logout-launcher.css'

function LogoutLauncherScreen({ onOpenModal, onClose }) {
  // Add escape listener when component mounts
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose()
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [onClose])

  return (
    <div className="logout-launcher-screen">
      {/* Brand Section */}
      <div className="launcher-brand-section">
        <div className="launcher-brand-row">
          <div className="launcher-logo">
            <FiShield />
          </div>
          <div className="launcher-brand-text">Karnovate</div>
        </div>
        <p className="launcher-subtitle">Enterprise Logout Confirmation Modal</p>
      </div>

      {/* CTA Button */}
      <button
        type="button"
        className="launcher-cta-button"
        onClick={onOpenModal}
      >
        <FiLogOut className="launcher-button-icon" />
        <span>Open Logout Modal</span>
      </button>

      {/* Helper Text */}
      <div className="launcher-helper-text">
        <span>Press</span>
        <kbd className="launcher-key">Esc</kbd>
        <span>to close •</span>
        <kbd className="launcher-key">Tab</kbd>
        <span>to navigate</span>
      </div>
    </div>
  )
}

export default LogoutLauncherScreen
