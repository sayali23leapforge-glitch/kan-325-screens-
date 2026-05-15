const ticketRows = [
  {
    name: 'Emma Thompson',
    title: 'Payment issue',
    id: '#2847',
    priority: 'High',
    status: 'Open',
    time: '5 min ago',
  },
  {
    name: 'Alex Williams',
    title: 'Login failed',
    id: '#2848',
    priority: 'Medium',
    status: 'Pending',
    time: '15 min ago',
  },
  {
    name: 'Michael Scott',
    title: 'Refund request',
    id: '#2849',
    priority: 'Low',
    status: 'Resolved',
    time: '1 hour ago',
  },
]

function RecentTickets() {
  return (
    <article className="sd-card sd-recent-tickets">
      <div className="sd-card-head with-action">
        <h2>Recent Tickets</h2>
        <button type="button">View All</button>
      </div>

      <div className="sd-list-wrap">
        {ticketRows.map((ticket) => (
          <div key={ticket.id} className="sd-ticket-row">
            <img src={`https://i.pravatar.cc/32?u=${ticket.name}`} alt={ticket.name} />
            <div className="sd-ticket-copy">
              <p>{ticket.title}</p>
              <span>{ticket.name} {ticket.id}</span>
            </div>
            <div className="sd-ticket-meta">
              <em className={`sd-priority-badge ${ticket.priority.toLowerCase()}`}>{ticket.priority}</em>
              <i>{ticket.status}</i>
              <strong>{ticket.time}</strong>
            </div>
          </div>
        ))}
      </div>
    </article>
  )
}

export default RecentTickets
