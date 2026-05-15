import { FiBell, FiPlus } from 'react-icons/fi'
import { useNavigate } from 'react-router-dom'

function TicketHeader() {
  const navigate = useNavigate()

  return (
    <header className="support-ticket-header">
      <div>
        <h1>All Tickets</h1>
        <nav className="support-breadcrumb" aria-label="Breadcrumb">
          <span>Home</span>
          <span>&gt;</span>
          <span>Helpdesk</span>
          <span>&gt;</span>
          <span>Tickets</span>
        </nav>
      </div>

      <div className="support-header-actions">
        <button type="button" className="support-bell-button" aria-label="Notifications">
          <FiBell size={14} />
          <span>5</span>
        </button>

        <button
          type="button"
          className="support-new-ticket-button"
          onClick={() => navigate('/support-desk/tickets/create')}
        >
          <FiPlus size={12} />
          New Ticket
        </button>
      </div>
    </header>
  )
}

export default TicketHeader
