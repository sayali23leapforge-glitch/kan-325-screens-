import { useState, useEffect, useRef } from 'react'
import { FiLogOut, FiInfo } from 'react-icons/fi'
import './session-timeout-modal.css'

function SessionTimeoutModal({ isOpen, onClose, onLogout, onExtendSession }) {
  const [secondsRemaining, setSecondsRemaining] = useState(59)
  const modalRef = useRef(null)
  const progressPercentage = (secondsRemaining / 59) * 100

  // Countdown timer effect
  useEffect(() => {
    if (!isOpen) {
      setSecondsRemaining(59)
      return
    }

    const timer = setInterval(() => {
      setSecondsRemaining(prev => {
        if (prev <= 1) {
          // Auto logout when timer reaches 0
          handleLogout()
          return 0
        }
        return prev - 1
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [isOpen])

  // Escape key handler
  useEffect(() => {
    if (!isOpen) return

    const handleEscapeKey = (event) => {
      if (event.key === 'Escape') {
        onClose()
      }
    }

    document.addEventListener('keydown', handleEscapeKey)
    return () => document.removeEventListener('keydown', handleEscapeKey)
  }, [isOpen, onClose])

  // Click outside handler
  useEffect(() => {
    if (!isOpen) return

    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose()
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [isOpen, onClose])

  const handleLogout = () => {
    onClose()
    onLogout()
  }

  const handleExtendClick = () => {
    setSecondsRemaining(59)
    onExtendSession()
    onClose()
  }

  if (!isOpen) return null

  return (
    <div className="session-timeout-overlay">
      <div className="session-timeout-modal" ref={modalRef} role="dialog" aria-modal="true">
        {/* Top Countdown Header Section */}
        <div className="session-timeout-header">
          <div className="countdown-container">
            {/* Circular timer icon with layered rings */}
            <div className="timer-ring-container">
              <div className="timer-ring-outer"></div>
              <div className="timer-ring-inner"></div>
              <div className="timer-icon-bg">
                <svg
                  className="timer-icon"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
              </div>
            </div>

            {/* Countdown number and text */}
            <div className="countdown-content">
              <div className="countdown-number">{secondsRemaining}</div>
              <div className="countdown-label">SECONDS REMAINING</div>
            </div>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="progress-bar-container">
          <div className="progress-bar-track">
            <div
              className="progress-bar-fill"
              style={{ width: `${progressPercentage}%` }}
            ></div>
          </div>
        </div>

        {/* Content Section */}
        <div className="session-timeout-content">
          <h2 className="session-timeout-title">Session Timeout Warning</h2>
          <p className="session-timeout-subtitle">
            Your session is about to expire due to inactivity
          </p>

          {/* Info Box */}
          <div className="session-timeout-info-box">
            <FiInfo className="info-icon" />
            <p className="info-text">
              For security, you will be automatically logged out when the timer reaches zero.
            </p>
          </div>
        </div>

        {/* Footer Buttons */}
        <div className="session-timeout-footer">
          <button
            className="session-timeout-btn logout-btn"
            onClick={handleLogout}
            aria-label="Logout"
          >
            <FiLogOut className="btn-icon" />
            <span>Logout</span>
          </button>
          <button
            className="session-timeout-btn extend-btn"
            onClick={handleExtendClick}
            aria-label="Extend Session"
          >
            <svg
              className="btn-icon"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <polyline points="23 4 23 10 17 10" />
              <path d="M20.49 15a9 9 0 1 1 .64-8.49" />
            </svg>
            <span>Extend Session</span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default SessionTimeoutModal
