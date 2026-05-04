import { useState, useRef, useEffect } from 'react'
import { FiChevronDown } from 'react-icons/fi'
import ProfileMenuDropdown from './ProfileMenuDropdown'
import LogoutLauncherScreen from './LogoutLauncherScreen'
import SessionTimeoutModal from './SessionTimeoutModal'
import LogoutConfirmationModal from './LogoutConfirmationModal'
import './profile-menu.css'

function ProfileMenu() {
  const [isOpen, setIsOpen] = useState(false)
  const [isLauncherOpen, setIsLauncherOpen] = useState(false)
  const [isSessionTimeoutOpen, setIsSessionTimeoutOpen] = useState(false)
  const [isLogoutModalOpen, setIsLogoutModalOpen] = useState(false)
  const triggerRef = useRef(null)
  const dropdownRef = useRef(null)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const handleSignOutClick = () => {
    setIsOpen(false)
    setIsLogoutModalOpen(true)
  }

  const handleCloseLogoutModal = () => {
    setIsLogoutModalOpen(false)
  }

  const handleConfirmLogout = () => {
    setIsLogoutModalOpen(false)
    setIsLauncherOpen(true)
  }

  const handleCloseLauncher = () => {
    setIsLauncherOpen(false)
  }

  const handleOpenLogoutModal = () => {
    setIsLauncherOpen(false)
    setIsSessionTimeoutOpen(true)
  }

  const handleCloseSessionTimeout = () => {
    setIsSessionTimeoutOpen(false)
  }

  const handleSessionLogout = () => {
    setIsSessionTimeoutOpen(false)
    setIsOpen(false)
    // TODO: Implement actual logout logic
    console.log('User logging out...')
    // window.location.href = '/login'
  }

  const handleExtendSession = () => {
    console.log('Session extended for 1 hour')
    // TODO: Implement actual session extension logic
  }

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        triggerRef.current &&
        !dropdownRef.current.contains(event.target) &&
        !triggerRef.current.contains(event.target)
      ) {
        setIsOpen(false)
      }
    }

    const handleEscapeKey = (event) => {
      if (event.key === 'Escape') {
        setIsOpen(false)
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside)
      document.addEventListener('keydown', handleEscapeKey)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
      document.removeEventListener('keydown', handleEscapeKey)
    }
  }, [isOpen])

  return (
    <>
      <div className="profile-menu-container">
        <button
          ref={triggerRef}
          type="button"
          className="profile-menu-trigger"
          aria-expanded={isOpen}
          aria-haspopup="menu"
          onClick={toggleMenu}
        >
          <div className="user-avatar">MC</div>
          <div className="user-info">
            <span className="user-name">Michael Chen</span>
            <span className="user-role">Super Admin</span>
          </div>
          <FiChevronDown className={`chevron-icon ${isOpen ? 'open' : ''}`} />
        </button>

        {isOpen && (
          <div ref={dropdownRef} className="profile-menu-dropdown-wrapper">
            <ProfileMenuDropdown 
              onClose={() => setIsOpen(false)}
              onSignOut={handleSignOutClick}
            />
          </div>
        )}
      </div>

      {isLauncherOpen && (
        <LogoutLauncherScreen
          onOpenModal={handleOpenLogoutModal}
          onClose={handleCloseLauncher}
        />
      )}

      <SessionTimeoutModal
        isOpen={isSessionTimeoutOpen}
        onClose={handleCloseSessionTimeout}
        onLogout={handleSessionLogout}
        onExtendSession={handleExtendSession}
      />

      <LogoutConfirmationModal
        isOpen={isLogoutModalOpen}
        onClose={handleCloseLogoutModal}
        onConfirm={handleConfirmLogout}
      />
    </>
  )
}

export default ProfileMenu
