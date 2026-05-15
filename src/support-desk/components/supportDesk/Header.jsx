import { FiBell, FiPlus } from 'react-icons/fi'

function Header() {
  return (
    <header className="sd-header">
      <div>
        <h1>Helpdesk Dashboard</h1>
        <div className="sd-breadcrumb">
          <span>Home</span>
          <span>&gt;</span>
          <span>Helpdesk</span>
          <span>&gt;</span>
          <span>Dashboard</span>
        </div>
      </div>

      <div className="sd-header-actions">
        <button type="button" className="sd-notification-button" aria-label="Notifications">
          <FiBell size={14} />
          <span>5</span>
        </button>

        <button type="button" className="sd-ticket-button">
          <FiPlus size={12} />
          New Ticket
        </button>
      </div>
    </header>
  )
}

export default Header
