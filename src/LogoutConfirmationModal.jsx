import { useEffect, useRef } from 'react'
import { FiLogOut } from 'react-icons/fi'
import './logout-confirmation.css'

function LogoutConfirmationModal({ isOpen, onClose, onConfirm }) {
  const modalRef = useRef(null)

  useEffect(() => {
    const handleEscapeKey = (event) => {
      if (event.key === 'Escape' && isOpen) {
        onClose()
      }
    }

    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target) && isOpen) {
        onClose()
      }
    }

    if (isOpen) {
      document.addEventListener('keydown', handleEscapeKey)
      document.addEventListener('mousedown', handleClickOutside)
      document.body.style.overflow = 'hidden'
    }

    return () => {
      document.removeEventListener('keydown', handleEscapeKey)
      document.removeEventListener('mousedown', handleClickOutside)
      document.body.style.overflow = 'unset'
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  return (
    <div className="logout-modal-overlay">
      <div
        className="logout-modal-card"
        ref={modalRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="logout-modal-title"
        aria-describedby="logout-modal-description"
      >
        {/* Icon */}
        <div className="logout-modal-icon-wrapper">
          <div className="logout-modal-icon">
            <FiLogOut />
          </div>
        </div>

        {/* Content */}
        <div className="logout-modal-content">
          <h2 id="logout-modal-title" className="logout-modal-title">
            Confirm Logout
          </h2>
          <p id="logout-modal-description" className="logout-modal-subtitle">
            You will be signed out from this session
          </p>
        </div>

        {/* Buttons */}
        <div className="logout-modal-buttons">
          <button
            type="button"
            className="logout-modal-btn cancel-btn"
            onClick={onClose}
          >
            Cancel
          </button>
          <button
            type="button"
            className="logout-modal-btn logout-btn"
            onClick={onConfirm}
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  )
}

export default LogoutConfirmationModal
