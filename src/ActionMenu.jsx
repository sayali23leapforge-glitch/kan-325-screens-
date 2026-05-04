import { useState, useRef, useEffect } from 'react'

function ActionMenu({ userId, onClose }) {
  const [isOpen, setIsOpen] = useState(true)
  const menuRef = useRef(null)

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        onClose()
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [onClose])

  const handleAction = (action) => {
    console.log(`${action} for user ${userId}`)
    onClose()
  }

  if (!isOpen) return null

  return (
    <div className="action-menu" ref={menuRef}>
      <button className="action-menu-item" onClick={() => handleAction('View Profile')}>
        View Profile
      </button>
      <button className="action-menu-item" onClick={() => handleAction('Edit User')}>
        Edit User
      </button>
      <button className="action-menu-item" onClick={() => handleAction('Reset Password')}>
        Reset Password
      </button>
      <button className="action-menu-item danger" onClick={() => handleAction('Suspend User')}>
        Suspend User
      </button>
    </div>
  )
}

export default ActionMenu
